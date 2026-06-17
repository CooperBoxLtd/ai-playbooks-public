# Distribution Profiles

Distribution profiles define which files from this repository should be copied into a project repository.

Project repositories should receive only the files they need.

## Profiles

- `minimal.txt`: only `AGENTS.md`; use for lightweight Codex operating rules.
- `standard.txt`: `AGENTS.md` plus playbooks; use for normal application repositories.

## Install

From this repository:

```powershell
.\scripts\install-profile.ps1 -TargetRepo D:\Dev\repos\JML360 -Profile standard
```

Dry run:

```powershell
.\scripts\install-profile.ps1 -TargetRepo D:\Dev\repos\JML360 -Profile standard -WhatIf
```

The script copies listed files and creates needed directories. It does not delete extra files from the target repo.
