# Principle Registry Schema

Each principle record in `principles.yaml` must follow this schema.

## Required Fields

```yaml
principle_id: P-0001
name: Verification Creates Trust
summary: Important outputs must be verified through deterministic evidence, review, tests, monitoring, or operational validation.
type: law
status: active
primary_capability: Delivery And CI/CD
related_capabilities:
  - Security
  - Operational Maturity
playbooks:
  - 00-core-laws
maturity_levels:
  - all
evidence_classes:
  - Class A
  - Class B
  - Class C
confidence: high
source_refs:
  - SRC-0001
tags:
  - verification
  - trust
  - evidence
```

## Field Definitions

`principle_id`
: Permanent unique identifier. Format `P-0001`.

`name`
: Short human-readable principle name.

`summary`
: One or two sentences explaining the principle in actionable language.

`type`
: One of:
- `law`: high-level governing law
- `principle`: general engineering principle
- `rule`: enforceable operational rule
- `pattern`: reusable implementation pattern
- `anti_pattern`: behavior to avoid
- `control`: assessable governance/security/operational control

`status`
: One of:
- `draft`
- `active`
- `deprecated`
- `superseded`

`primary_capability`
: One of the frozen 10 capabilities:
- Architecture
- Security
- Data Governance
- Delivery And CI/CD
- Deployment And Recovery
- Observability
- AI Governance
- Cost Governance
- Agent Readiness
- Operational Maturity

`related_capabilities`
: Additional capabilities affected by the principle.

`playbooks`
: Playbook IDs where the principle appears or should be expanded.

`maturity_levels`
: Maturity levels where the principle applies. Use `all` when universal.

`evidence_classes`
: Evidence classes from the assessment framework:
- Class A
- Class B
- Class C
- Class D

`confidence`
: One of:
- `low`
- `medium`
- `high`

`source_refs`
: Source IDs from `sources.yaml`.

`tags`
: Lowercase tags used for search and grouping.

## Optional Fields

`rationale`
: Why the principle matters.

`assessment_hint`
: How an assessor or product implementation could detect evidence for the principle.

`supersedes`
: Principle IDs this record replaces.

`superseded_by`
: Principle ID replacing this record.

`notes`
: Internal editorial notes.

## Registry Rules

- Prefer one clear principle per record.
- Do not encode long prose in the registry.
- Do not duplicate principles with slightly different wording.
- Prefer stable capability mapping over narrow product-specific categories.
- Keep vendor and product references out of principle records unless the principle is explicitly about product implementation.
- Preserve source traceability.
