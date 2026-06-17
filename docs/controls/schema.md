# Controls Library Schema

Each control record in `controls.yaml` must follow this schema.

## Required Fields

```yaml
control_id: CTRL-0001
name: No Secrets In Browser
status: active
summary: Client bundles must not contain server-only API keys, provider keys, tokens, or secrets.
control_type: technical
primary_capability: Security
related_capabilities:
  - Architecture
principle_refs:
  - P-0009
pattern_refs:
  - PAT-0001
evidence_class: Class A
evidence:
  - Client bundle search shows no server-only secrets.
  - Provider calls requiring secrets are routed through backend services.
assessment_method: Inspect source, built assets, environment variable usage, and provider call sites.
pass_criteria:
  - No server-only key is present in frontend source or bundle.
  - Frontend calls backend APIs rather than privileged provider APIs directly.
fail_criteria:
  - API keys, tokens, or secrets are visible in client-side code.
source_refs:
  - SRC-0001
tags:
  - secrets
  - frontend
  - security
```

## Field Definitions

`control_id`
: Permanent unique identifier. Format `CTRL-0001`.

`name`
: Short control name.

`status`
: One of `draft`, `active`, `deprecated`, `superseded`.

`summary`
: One or two sentences describing the control.

`control_type`
: One of:
- `technical`
- `operational`
- `governance`
- `evidence`
- `review`

`primary_capability`
: One of the frozen 10 capabilities.

`related_capabilities`
: Additional capabilities affected by the control.

`principle_refs`
: Principle IDs this control supports.

`pattern_refs`
: Pattern IDs this control verifies. Use an empty list if not tied to a pattern yet.

`evidence_class`
: Primary evidence class from the assessment framework.

`evidence`
: Concrete evidence that can prove or support the control.

`assessment_method`
: How to inspect or test the control.

`pass_criteria`
: Conditions required to pass.

`fail_criteria`
: Conditions that fail the control.

`source_refs`
: Source IDs from `docs/registry/sources.yaml`.

`tags`
: Lowercase tags used for search and grouping.

## Optional Fields

`automation_hint`
: How a tool could detect this control.

`manual_review_hint`
: What a human reviewer should inspect.

`maturity_impact`
: How the control can influence maturity levels.
