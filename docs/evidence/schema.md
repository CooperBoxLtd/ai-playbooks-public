# Evidence Registry Schema

Each evidence record in `evidence.yaml` must follow this schema.

## Required Fields

```yaml
evidence_id: EVID-0001
name: Dependency Scan Workflow
status: active
summary: A CI or scheduled workflow runs dependency vulnerability scanning.
evidence_type: file_or_workflow
primary_capability: Security
control_refs:
  - CTRL-0009
confidence_when_found: Confirmed
detection:
  mode: automated
  examples:
    - .github/workflows/dependency-scan.yml
    - .github/dependabot.yml
    - snyk.yml
positive_signals:
  - Workflow references dependency audit or vulnerability scan.
missing_signal: No dependency scanning workflow or configuration was found.
human_review:
  required: false
```

## Field Definitions

`evidence_id`
: Permanent unique identifier. Format `EVID-0001`.

`name`
: Short evidence name.

`status`
: One of `draft`, `active`, `deprecated`, `superseded`.

`summary`
: One or two sentences describing the evidence signal.

`evidence_type`
: One of:
- `file_or_workflow`
- `code_pattern`
- `configuration`
- `test`
- `documentation`
- `runtime_artifact`
- `human_review`
- `external_system`

`primary_capability`
: One of the frozen 10 capabilities.

`control_refs`
: Control IDs this evidence supports.

`confidence_when_found`
: One of:
- `Confirmed`
- `Likely`
- `Partial`
- `Requires Human Review`

`detection`
: Detection mode and examples.

Detection modes:
- `automated`
- `semi_automated`
- `manual`

`positive_signals`
: Signals that indicate the evidence exists.

`missing_signal`
: Message to use when expected evidence is not found.

`human_review.required`
: Whether human review is required before using this evidence in scoring.

## Optional Fields

`negative_signals`
: Signals that weaken or contradict the evidence.

`file_globs`
: File path patterns to inspect.

`keywords`
: Search terms or code identifiers to inspect.

`notes`
: Internal notes for assessors or product implementations.

## Rules

- Evidence records should be concrete and inspectable.
- Evidence records should map to one or more controls.
- Evidence records should not assume the control passes merely because a file exists.
- Prefer a `human_review_required` result when automation can find a document but cannot judge whether it is sufficient.
