# Pattern Library Schema

Each pattern record in `patterns.yaml` must follow this schema.

## Required Fields

```yaml
pattern_id: PAT-0001
name: Backend Proxy Pattern
status: active
summary: Route privileged provider calls through a backend service so secrets and enforcement remain server-side.
problem: Frontend code cannot safely hold secrets or enforce security-critical decisions.
solution: Expose a backend endpoint that validates the user, authorizes the action, applies limits, calls the provider, and returns only safe results.
primary_capability: Security
related_capabilities:
  - Architecture
  - Cost Governance
principle_refs:
  - P-0009
control_refs:
  - CTRL-0001
evidence_classes:
  - Class A
  - Class C
source_refs:
  - SRC-0001
tags:
  - backend
  - proxy
  - secrets
```

## Field Definitions

`pattern_id`
: Permanent unique identifier. Format `PAT-0001`.

`name`
: Short pattern name.

`status`
: One of `draft`, `active`, `deprecated`, `superseded`.

`summary`
: One or two sentences explaining the pattern.

`problem`
: The recurring engineering problem.

`solution`
: The reusable implementation approach.

`primary_capability`
: One of the frozen 10 capabilities.

`related_capabilities`
: Additional capabilities affected by the pattern.

`principle_refs`
: Principle IDs supported by the pattern.

`control_refs`
: Control IDs that can prove the pattern exists. Use an empty list when controls have not been defined yet.

`evidence_classes`
: Evidence classes from the assessment framework.

`source_refs`
: Source IDs from `docs/registry/sources.yaml`.

`tags`
: Lowercase tags used for search and grouping.

## Optional Fields

`tradeoffs`
: Known costs or constraints.

`failure_modes`
: Common ways the pattern is implemented badly.

`assessment_hint`
: How to detect the pattern in code, docs, or operational evidence.

`supersedes`
: Pattern IDs this record replaces.

`superseded_by`
: Pattern ID replacing this record.
