# Principle Registry

The principle registry is the source of truth for individual AI engineering principles.

Purpose:
- preserve principles as structured records
- trace each principle back to source material
- map principles to playbooks, capabilities, and maturity levels
- prevent duplication as the knowledge base grows
- support future assessment, tooling, and benchmark work

The playbooks remain readable guidance. The registry is the structured knowledge layer behind them.

## Files

- `principles.yaml`: canonical principle records.
- `schema.md`: field definitions and registry rules.
- `sources.yaml`: source material records used by principles.

## ID Rules

Principle IDs use:

```text
P-0001
P-0002
P-0003
```

IDs are permanent. Do not renumber principles after publication. If a principle is replaced, mark it as `superseded` and reference the replacement.

## Workflow

When adding new source material:

1. Add the source to `sources.yaml`.
2. Extract candidate principles.
3. Deduplicate against `principles.yaml`.
4. Add each accepted principle with source traceability.
5. Map each principle to one or more capabilities.
6. Map each principle to the relevant playbook.
7. Mark confidence and status.

Do not add vague slogans. A registry principle must be actionable, assessable, or foundational.
