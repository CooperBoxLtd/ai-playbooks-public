# Controls Library

Controls describe how to prove that CooperBox principles and patterns are present.

Principles tell teams what should be true. Patterns tell teams how to implement it. Controls define how to verify or assess it.

## Files

- `controls.yaml`: canonical control records.
- `schema.md`: field definitions and rules.

## ID Rules

Control IDs use:

```text
CTRL-0001
CTRL-0002
CTRL-0003
```

IDs are permanent. Do not renumber controls after publication.

## Control Types

Controls may be:
- technical
- operational
- governance
- evidence
- review

## Relationship To Other Assets

```text
Principle
-> Pattern
-> Control
-> Evidence
-> Capability
-> Assessment
```

Controls are the bridge between the framework and assessment evidence.
