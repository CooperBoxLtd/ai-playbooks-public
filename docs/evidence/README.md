# Evidence Registry

The evidence registry defines concrete evidence signals that can support or disprove controls during an assessment.

Principles define what should be true. Patterns define how to implement it. Controls define what must be proven. Evidence defines what an assessor or tool can look for.

## Files

- `evidence.yaml`: canonical evidence records.
- `schema.md`: field definitions and rules.

## ID Rules

Evidence IDs use:

```text
EVID-0001
EVID-0002
EVID-0003
```

IDs are permanent. Do not renumber evidence records after publication.

## Relationship To Other Assets

```text
Principle
-> Pattern
-> Control
-> Evidence
-> Capability
-> Assessment
```

## Evidence Result States

Assessment implementations should distinguish:
- `found`: evidence was found
- `missing`: expected evidence was not found
- `partial`: incomplete evidence was found
- `conflicting`: evidence points in different directions
- `human_review_required`: evidence cannot be judged safely by automation

Missing evidence is not proof that the control does not exist. It means the assessment did not find evidence in the repository or supplied context.
