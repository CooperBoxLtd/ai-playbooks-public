# Pattern Library

Patterns describe reusable ways to implement CooperBox principles.

Principles tell teams what should be true. Patterns describe how to make it true.

## Files

- `patterns.yaml`: canonical pattern records.
- `schema.md`: field definitions and rules.

## ID Rules

Pattern IDs use:

```text
PAT-0001
PAT-0002
PAT-0003
```

IDs are permanent. Do not renumber patterns after publication.

## Relationship To Other Assets

```text
Principle
-> Pattern
-> Control
-> Evidence
-> Capability
-> Assessment
```

Example:

```text
Principle: The Frontend Is Not Trusted
Pattern: Backend Proxy Pattern
Control: No Secrets In Browser
Evidence: No exposed API keys found in client bundle
Capability: Security
Assessment: Level 3 Governed
```

## Pattern Rules

- A pattern must be reusable across more than one project.
- A pattern must map to one or more principles.
- A pattern should describe tradeoffs and failure modes.
- A pattern should not be tied to one vendor unless the vendor is incidental.
- A pattern should include evidence hints so it can later support assessment.
