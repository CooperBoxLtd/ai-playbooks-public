# AI Coding Playbooks

Reusable AI engineering playbooks for coding agents and AI-assisted software teams.

Use these playbooks with coding agents that support repository instructions, including Codex-style agents and other agentic coding tools.

## What This Contains

- `AGENTS.md`: concise operating rules for coding agents.
- `docs/playbooks/`: human-readable AI engineering playbooks.
- `docs/registry/`: machine-readable principle registry.
- `docs/patterns/`: reusable implementation patterns.
- `docs/controls/`: assessable controls.
- `docs/evidence/`: concrete evidence signals.
- `docs/strategy/ai-engineering-capability-model.md`: vendor-neutral capability model.
- `docs/strategy/assessment-framework.md`: vendor-neutral assessment framework.

## How To Use This

There are two common ways to use these playbooks.

### Option 1: Minimal

Copy `AGENTS.md` into the root of your project repository.

Use this when you only want concise coding-agent rules.

### Option 2: Standard

Install `AGENTS.md` and the detailed playbooks into your project repository:

```powershell
.\scripts\install-profile.ps1 -TargetRepo D:\Dev\repos\YourProject -Profile standard
```

Use this when you want the coding agent to have both short operating rules and detailed references for security, data, AI systems, deployment, observability, and cost control.

After installation, review the diff and commit the copied files into your project repository.

When you start a coding-agent session in that project, the agent should read `AGENTS.md` and follow the rules. The playbooks provide supporting detail when the task touches a specific engineering area.

## Install Profiles

`minimal` installs:
- `AGENTS.md`

`standard` installs:
- `AGENTS.md`
- `docs/playbooks/`

Preview what will be copied:

```powershell
.\scripts\install-profile.ps1 -TargetRepo D:\Dev\repos\YourProject -Profile standard -WhatIf
```

Install the standard profile:

```powershell
.\scripts\install-profile.ps1 -TargetRepo D:\Dev\repos\YourProject -Profile standard
```

The installer copies files only. It does not delete existing files. If your project already has an `AGENTS.md`, review the diff before committing.

## Architecture

The framework follows this chain:

```text
Core Laws
-> Playbooks
-> Principle Registry
-> Pattern Library
-> Control Library
-> Evidence Registry
-> Capability Model
-> Assessment Framework
```

The architecture is frozen for version 0.1. See `ARCHITECTURE_FROZEN.md`.

## Contributing

Contributions should expand the existing ontology rather than redesign it.

Preferred contributions:
- new principles
- new patterns
- new controls
- new evidence signals
- clearer playbook prose linked to registry records

Avoid:
- new top-level capability categories
- new strategy layers
- product-specific implementation details
- certification or compliance claims

## Positioning

These playbooks are a vendor-neutral body of knowledge for AI-assisted engineering.

They are not:
- a certification
- a compliance guarantee
- a substitute for engineering, security, legal, or operational review

## License

Copyright 2026 CooperBox Ltd.

Licensed under the Apache License, Version 2.0. See `LICENSE`.

CooperBox names, logos, and trademarks are not licensed except as required to describe the origin of the work.
