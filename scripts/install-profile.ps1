param(
    [Parameter(Mandatory = $true)]
    [string]$TargetRepo,

    [string]$Profile = 'standard',

    [switch]$WhatIf
)

$ErrorActionPreference = 'Stop'

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
$targetRoot = Resolve-Path $TargetRepo
$profilePath = Join-Path $repoRoot "distributions/$Profile.txt"

if (-not (Test-Path -LiteralPath $profilePath)) {
    throw "Distribution profile not found: $profilePath"
}

$files = Get-Content -LiteralPath $profilePath |
    Where-Object { $_ -and -not $_.TrimStart().StartsWith('#') } |
    ForEach-Object { $_.Trim() }

foreach ($relativePath in $files) {
    $sourcePath = Join-Path $repoRoot $relativePath
    if (-not (Test-Path -LiteralPath $sourcePath)) {
        throw "Profile references missing source file: $relativePath"
    }

    $destinationPath = Join-Path $targetRoot $relativePath
    $destinationDir = Split-Path -Parent $destinationPath

    if ($WhatIf) {
        Write-Output "COPY $relativePath -> $destinationPath"
        continue
    }

    New-Item -ItemType Directory -Force -Path $destinationDir | Out-Null
    Copy-Item -LiteralPath $sourcePath -Destination $destinationPath -Force
    Write-Output "Copied $relativePath"
}

Write-Output "Installed '$Profile' profile into $targetRoot"
