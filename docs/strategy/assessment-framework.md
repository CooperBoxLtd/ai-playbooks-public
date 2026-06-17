# AI Engineering Assessment Framework

Date: 2026-06-16

## Purpose

The AI Engineering Assessment Framework defines how to assess the AI Engineering Capability Model.

It answers:

```text
Capability
-> Evidence
-> Assessment Logic
-> Maturity Level
-> Recommendations
```

This framework is vendor neutral. It can be implemented manually, by consulting teams, by internal engineering governance, or by products that collect evidence automatically.

## Relationship To Other Layers

```text
AI Coding Playbooks
-> AI Engineering Capability Model
-> AI Engineering Assessment Framework
-> Product Implementations
-> Benchmark Intelligence
```

Layer definitions:
- Playbooks: body of knowledge and principles.
- Capability Model: stable list of organizational capabilities.
- Assessment Framework: evidence and scoring method.
- Product Implementations: tools that collect evidence and produce reports.
- Benchmark Intelligence: aggregate patterns and maturity trends.

## Frozen Capability Set

The assessment framework uses these 10 capabilities:

1. Architecture
2. Security
3. Data Governance
4. Delivery And CI/CD
5. Deployment And Recovery
6. Observability
7. AI Governance
8. Cost Governance
9. Agent Readiness
10. Operational Maturity

These capabilities should remain stable. The playbooks may grow, assessment evidence may improve, and product implementations may change, but the top-level capability set should not expand casually.

## Maturity Levels

Use the capability model's six maturity levels:

```text
Level 0: Absent
Level 1: Basic
Level 2: Managed
Level 3: Governed
Level 4: Optimized
Level 5: AI-Native
```

Assessment rule:
- Level 0 means no meaningful evidence.
- Level 1 means ad hoc evidence exists.
- Level 2 means repeatable practice exists.
- Level 3 means the practice is documented, enforced, and reviewed.
- Level 4 means the practice is measured and continuously improved.
- Level 5 means the practice explicitly accounts for AI-native engineering risks.

Do not score by percentage unless a mature benchmark dataset exists.

## Evidence Classes

Evidence should be categorized by strength.

### Class A: Direct Technical Evidence

Evidence directly observable in code, configuration, tests, workflows, or runtime artifacts.

Examples:
- authorization middleware
- CI workflow files
- migration files
- automated tests
- IaC files
- logging configuration
- rate-limit middleware
- model routing code
- output validation schemas

Assessment weight: strongest.

### Class B: Operational Evidence

Evidence that the organization operates the system with repeatable controls.

Examples:
- release runbooks
- rollback procedures
- incident response records
- on-call documentation
- support severity model
- monitoring dashboards
- alert definitions
- backup verification notes

Assessment weight: strong.

### Class C: Governance Evidence

Evidence that policies, responsibilities, and decision rules exist.

Examples:
- security policy
- data retention policy
- AI provider policy
- architecture decision records
- model usage policy
- agent authority policy
- vulnerability disclosure policy

Assessment weight: medium to strong when paired with technical or operational evidence.

### Class D: Stated Intent

Claims, plans, roadmap notes, or undocumented team knowledge.

Examples:
- "we plan to add logging"
- "the team reviews prompts manually"
- "we rely on cloud provider defaults"
- "the CTO approves production changes"

Assessment weight: weak.

Stated intent can explain context, but it should not drive maturity above Level 1 without stronger evidence.

## Evidence Confidence

Each evidence item should receive a confidence level:

```text
Confirmed
Likely
Partial
Missing
Conflicting
Requires Human Review
```

Definitions:
- Confirmed: direct evidence supports the claim.
- Likely: evidence suggests the control exists, but scope is incomplete.
- Partial: evidence exists for some areas but not enough for full capability coverage.
- Missing: no evidence found.
- Conflicting: evidence points in different directions.
- Requires Human Review: automation cannot judge the evidence safely.

## Scoring Logic

A capability score should be the lowest defensible maturity level supported by evidence.

Do not award a higher level because the organization appears sophisticated. Award levels only where evidence supports them.

General scoring gates:

### Level 0 Gate

Use Level 0 when:
- no meaningful evidence exists
- only vague claims exist
- the capability appears absent from code and supplied context

### Level 1 Gate

Use Level 1 when:
- ad hoc implementation exists
- controls are manually applied
- practice depends on individual knowledge
- evidence exists but is inconsistent or not documented

### Level 2 Gate

Use Level 2 when:
- the practice is repeatable in part of the system
- patterns exist in code or workflow
- coverage is incomplete but recognizable
- at least one Class A or Class B evidence item exists

### Level 3 Gate

Use Level 3 when:
- the practice is documented
- the practice is enforced in normal workflow
- review or approval is visible
- technical or operational evidence supports the policy

### Level 4 Gate

Use Level 4 when:
- the practice is measured
- improvements are driven by evidence
- automation supports consistency
- operational feedback loops exist

### Level 5 Gate

Use Level 5 when:
- Level 4 evidence exists
- AI-native risks are explicitly addressed
- the capability covers model/provider behavior, AI evaluation, output validation, context boundaries, AI cost, agent authority, or AI incident response where relevant

Level 5 should be rare until the assessment model has real benchmark evidence.

## Capability Evidence Matrix

### 1. Architecture

Evidence to inspect:
- architecture documents
- module and service boundaries
- provider abstractions
- interface layers
- dependency maps
- architecture decision records
- AI component boundaries

Level guidance:
- Level 0: no structure or architecture evidence.
- Level 1: basic folder structure but unclear boundaries.
- Level 2: recognizable components and partial dependency abstraction.
- Level 3: documented boundaries and enforced architecture patterns.
- Level 4: architecture is reviewed using production, cost, and change evidence.
- Level 5: AI workflows, model/provider abstraction, context boundaries, and agent/tool boundaries are architectural concerns.

Common gaps:
- direct provider calls scattered through code
- unclear ownership boundaries
- no decision records
- AI calls embedded inside business logic

### 2. Security

Evidence to inspect:
- authentication and authorization code
- secret management
- input validation
- tenant isolation
- dependency scanning
- SAST/secret scanning
- vulnerability disclosure process
- AI security controls

Level guidance:
- Level 0: no visible security model.
- Level 1: authentication exists but authorization and validation are inconsistent.
- Level 2: common protected paths have checks and secrets are mostly outside source.
- Level 3: security controls are documented, enforced, reviewed, and tested.
- Level 4: security controls are automated, measured, and regression-tested.
- Level 5: AI-specific security controls cover prompt injection, context leakage, tool execution, generated code, and model output validation.

Common gaps:
- frontend-only authorization
- secrets in source, logs, or reports
- missing tenant scope
- no prompt-injection controls
- no security disclosure process

### 3. Data Governance

Evidence to inspect:
- schemas and models
- ownership fields
- tenant or organization scope
- migrations
- retention and deletion policies
- audit events
- data-flow diagrams
- AI context data policies

Level guidance:
- Level 0: ownership, lifecycle, and tenant scope are absent.
- Level 1: basic data models exist but governance is implicit.
- Level 2: ownership and migration patterns exist for important records.
- Level 3: data ownership, retention, deletion, audit, and tenant scope are documented and enforced.
- Level 4: data quality, access, migration safety, and recovery are monitored and tested.
- Level 5: AI context, retrieval, prompt data, output retention, and generated artifacts are governed by data classification.

Common gaps:
- no retention policy
- no deletion path
- no tenant isolation evidence
- AI context includes excessive or sensitive data

### 4. Delivery And CI/CD

Evidence to inspect:
- CI workflows
- build scripts
- test scripts
- lint/type checks
- branch protection rules where available
- release packaging
- artifact hashes
- provenance or SBOM
- AI evaluation gates

Level guidance:
- Level 0: no repeatable build/test process.
- Level 1: local build or test commands exist.
- Level 2: CI runs key checks for common changes.
- Level 3: CI/CD gates are required and release process is documented.
- Level 4: delivery metrics, artifact integrity, and release quality are measured.
- Level 5: CI/CD includes AI-specific evaluation, prompt/version checks, output validation, and generated-code review controls.

Common gaps:
- no release gate
- no package verification
- no AI evaluation in CI
- tests exist but are not required

### 5. Deployment And Recovery

Evidence to inspect:
- deployment workflows
- environment configuration
- rollback runbooks
- backup process
- migration safety
- feature flags or staged rollout
- outage behavior matrix
- AI provider fallback and rollback controls

Level guidance:
- Level 0: deployment and recovery are undocumented.
- Level 1: deployment exists but relies on manual knowledge.
- Level 2: deployment steps and basic rollback exist.
- Level 3: deployment, validation, rollback, and migration procedures are governed.
- Level 4: recovery is tested and blast radius is controlled.
- Level 5: AI provider outages, model regressions, prompt failures, and agent misbehavior have recovery paths.

Common gaps:
- no rollback plan
- migrations cannot be safely reversed
- no provider outage behavior
- no production readiness checklist

### 6. Observability

Evidence to inspect:
- application logs
- structured logging
- metrics
- tracing
- alerts
- dashboards
- diagnostics
- incident records
- AI usage and validation telemetry

Level guidance:
- Level 0: failures are discovered mainly through users.
- Level 1: basic logs exist.
- Level 2: key services have logs, basic metrics, and some alerts.
- Level 3: observability is designed around user-impacting workflows and incident response.
- Level 4: observability supports SLOs, capacity planning, and continuous improvement.
- Level 5: AI workflows expose provider, model, prompt version, context source, token use, validation failures, fallback behavior, and evaluation results.

Common gaps:
- logs without correlation IDs
- alerts that are not actionable
- no AI usage telemetry
- sensitive data appears in logs or reports

### 7. AI Governance

Evidence to inspect:
- AI use-case inventory
- prompt templates and versions
- context-boundary policy
- provider policy
- output validation schemas
- model routing rules
- evaluation datasets
- prompt-injection tests
- AI incident procedure

Level guidance:
- Level 0: AI use is ad hoc or invisible.
- Level 1: providers and prompts are informally known.
- Level 2: configuration is repeatable and some outputs are validated.
- Level 3: AI intent, context, validation, evaluation, and review rules are documented and enforced.
- Level 4: evaluations, model routing, prompt versions, and validation failures are measured over time.
- Level 5: AI governance is integrated across architecture, security, data, delivery, recovery, observability, and cost.

Common gaps:
- raw AI output used directly
- no evaluation set
- no prompt/version tracking
- provider choice is unmanaged
- context boundaries are unclear

### 8. Cost Governance

Evidence to inspect:
- budgets
- quotas
- rate limits
- token tracking
- model routing
- caching
- batching
- spend alerts
- per-user or per-tenant attribution
- provider fallback policy

Level guidance:
- Level 0: no cost ownership or controls.
- Level 1: billing is visible manually.
- Level 2: expensive operations have some limits or review.
- Level 3: cost controls are documented and enforced.
- Level 4: cost efficiency is measured and optimized using real usage data.
- Level 5: AI cost governance includes token budgets, model routing, semantic caching, prompt-size control, attribution, and anomaly detection.

Common gaps:
- public or weakly protected paid endpoints
- no token tracking
- no tenant/user attribution
- no spend anomaly detection

### 9. Agent Readiness

Evidence to inspect:
- agent role definitions
- tool permissions
- authority levels
- human approval gates
- audit logs
- sandboxing
- rollback controls
- agent cost limits
- memory/context boundaries

Level guidance:
- Level 0: agent authority is absent or uncontrolled.
- Level 1: limited automation exists with informal review.
- Level 2: agent roles and tool access are defined for some workflows.
- Level 3: authority levels, permissions, approvals, audit logs, and rollback paths are enforced.
- Level 4: agent outcomes, errors, approvals, and escalations are measured.
- Level 5: agents are governed operational actors with identity, authority, memory boundaries, tool policy, cost limits, evaluation, and incident handling.

Common gaps:
- agents can execute broad actions
- no approval for sensitive tool use
- no audit trail
- memory/context boundaries are undefined

### 10. Operational Maturity

Evidence to inspect:
- ownership matrix
- support process
- severity model
- incident response process
- trust center
- legal/privacy docs
- customer communication templates
- release governance
- customer data handling process
- AI-specific operational policies

Level guidance:
- Level 0: ownership and operations are unclear.
- Level 1: informal support and ownership paths exist.
- Level 2: support, ownership, and incident processes are repeatable for common cases.
- Level 3: ownership, support, incident response, trust, privacy, security, and customer communication are documented and reviewed.
- Level 4: operational metrics, incident learnings, and customer feedback drive improvement.
- Level 5: operational maturity includes AI-specific incidents, provider/model changes, output disputes, prompt/context data issues, agent actions, and AI cost events.

Common gaps:
- no security policy
- no incident process
- inconsistent support contacts
- no data retention/deletion policy
- no customer communication path for AI-related incidents

## Assessment Process

### Step 1: Define Scope

Record:
- repositories assessed
- documents supplied
- environments in scope
- product areas excluded
- assessment date
- assessor/tool version where relevant

### Step 2: Collect Evidence

Collect evidence from code, configuration, docs, workflows, tests, runbooks, reports, and supplied context.

Do not assume controls exist because the organization is mature or because a cloud provider offers them.

### Step 3: Map Evidence To Capabilities

Each evidence item can support one or more capabilities.

Example:
- CI workflow with tests supports Delivery And CI/CD.
- CI workflow with AI evaluation tests supports AI Governance and Delivery And CI/CD.
- Structured logs with provider/model/token metadata support Observability and Cost Governance.

### Step 4: Assign Evidence Confidence

Classify each evidence item as Confirmed, Likely, Partial, Missing, Conflicting, or Requires Human Review.

### Step 5: Apply Level Gates

Assign the lowest defensible maturity level for each capability.

Do not average strong and weak evidence into a misleading score. A serious missing control can cap the maturity level.

### Step 6: Identify Critical Gaps

Critical gaps are missing controls that materially affect security, privacy, data integrity, production reliability, cost exposure, or AI governance.

### Step 7: Generate Recommendations

Recommendations should be:
- specific
- prioritized
- evidence-linked
- achievable
- mapped to capabilities

Avoid vague recommendations such as "improve security" or "add observability."

### Step 8: Produce Roadmap

Use a 30/60/90-day roadmap:
- 30 days: fix critical gaps and obvious missing evidence
- 60 days: implement repeatable controls
- 90 days: govern, measure, and improve the controls

## Output Format

Recommended report sections:

1. Executive summary
2. Scope and limitations
3. Overall maturity level
4. Capability maturity profile
5. Strengths
6. Critical gaps
7. Evidence summary
8. Missing evidence
9. Capability-by-capability findings
10. 30/60/90-day roadmap
11. Human-review notes
12. Appendix: evidence inventory

## Assessment Boundaries

The assessment does not prove:
- the organization is secure
- the organization is compliant
- production is safe
- all controls are operating effectively
- undocumented controls do not exist

The assessment does show:
- what evidence was found
- what evidence was missing
- what maturity level is defensible from the evidence
- what gaps should be addressed next

## Strategic Conclusion

The assessment framework makes the capability model executable.

It turns:

```text
What capabilities should organizations have?
```

into:

```text
What evidence shows those capabilities exist, and how mature are they?
```

This is the bridge between the body of knowledge and any implementation that collects evidence automatically.
