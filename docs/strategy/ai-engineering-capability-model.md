# AI Engineering Capability Model

Date: 2026-06-16

## Purpose

The AI Engineering Capability Model defines how to assess an organization's ability to build, deploy, operate, govern, and scale AI-native software.

This model is vendor neutral.

It should not depend on any specific scanner, IDE extension, cloud provider, AI provider, or commercial product. Products can implement the model, collect evidence against it, and generate reports, but the model itself should remain independent.

Strategic structure:

```text
AI Coding Playbooks
-> AI Engineering Capability Model
-> Assessment Model
-> Product Implementations
-> Benchmark Dataset
```

The playbooks are the body of knowledge. The capability model turns that knowledge into assessable dimensions. Product implementations collect evidence and produce reports.

## Maturity Levels

Use maturity levels instead of percentages. Percentages imply false precision before the model has enough benchmark data.

```text
Level 0: Absent
Level 1: Basic
Level 2: Managed
Level 3: Governed
Level 4: Optimized
Level 5: AI-Native
```

### Level 0: Absent

No meaningful evidence exists.

### Level 1: Basic

Some ad hoc practice exists, but it is inconsistent, undocumented, manually enforced, or dependent on individual knowledge.

### Level 2: Managed

The practice is repeatable in parts of the organization or system. There are recognizable patterns, but coverage is incomplete.

### Level 3: Governed

The practice is documented, enforced, reviewed, and visible in normal engineering workflows.

### Level 4: Optimized

The practice is measured, automated where appropriate, continuously improved, and connected to operational evidence.

### Level 5: AI-Native

The practice explicitly accounts for AI-native development: non-determinism, model and provider behavior, prompt and context boundaries, AI output validation, agent authority, AI-specific cost, AI evaluation, and AI-driven workflow risk.

## Evidence Standard

The model assesses evidence, not intentions.

Evidence can include:
- source code
- tests
- CI/CD workflows
- architecture documents
- threat models
- deployment runbooks
- incident procedures
- logs and metrics configuration
- data-flow diagrams
- AI evaluation datasets
- prompt and context policies
- validation scripts
- release evidence
- security policies
- operational ownership records

Each assessment should distinguish:
- evidence found
- missing evidence
- inferred risk
- confidence level
- human-review requirement

## Capability 1: Architecture

Assesses whether the system has clear boundaries, maintainable structure, explicit dependencies, and architecture that can absorb AI-native complexity.

### Level 0: Absent

- No clear system boundaries.
- No architecture documentation or discoverable structure.
- External providers and business logic are scattered throughout the codebase.

### Level 1: Basic

- Basic project structure exists.
- Some modules or services are separated, but boundaries are informal.
- Architecture depends heavily on individual developer knowledge.

### Level 2: Managed

- Main components and responsibilities are recognizable.
- External dependencies are partially abstracted.
- Some architecture decisions are documented.

### Level 3: Governed

- Architecture boundaries are documented and enforced through code organization, interfaces, or review.
- Critical dependencies are abstracted behind local services or adapters.
- Major architecture decisions have decision records or equivalent rationale.

### Level 4: Optimized

- Architecture is reviewed regularly against production behavior, cost, scalability, and failure modes.
- Dependency maps, ownership boundaries, and integration points are maintained.
- Architecture supports controlled change without broad rewrites.

### Level 5: AI-Native

- Architecture explicitly accounts for AI workflows, model/provider abstraction, context boundaries, non-deterministic outputs, evaluation loops, agent tools, and AI failure modes.
- AI components are designed as governed system components, not isolated prompt calls.

## Capability 2: Security

Assesses whether security-critical decisions are enforced correctly, verifiably, and consistently.

### Level 0: Absent

- No visible security model.
- Secrets, authorization, validation, and sensitive workflows are handled ad hoc.
- Security relies mainly on frontend behavior or developer memory.

### Level 1: Basic

- Authentication exists.
- Some input validation and secret handling practices exist.
- Authorization is inconsistent or not centrally enforced.

### Level 2: Managed

- Protected routes and sensitive operations have recognizable authorization checks.
- Secrets are mostly kept out of source code.
- Dependency and vulnerability checks exist in some workflow.

### Level 3: Governed

- Backend authorization is enforced for protected resources and actions.
- Secrets are managed through approved stores or environment injection.
- Security review is part of normal delivery.
- Vulnerability disclosure and support-safe reporting paths exist.

### Level 4: Optimized

- Security controls are tested, monitored, and continuously improved.
- Dependency, secret, SAST, and policy checks are automated.
- Security findings are tracked through remediation and regression prevention.

### Level 5: AI-Native

- AI-specific security controls exist for prompt injection, context leakage, generated code, tool execution, model output validation, and agent authority.
- AI workflows cannot bypass authorization, tenant isolation, or data-access policy.

## Capability 3: Data Governance

Assesses whether data has ownership, lifecycle controls, tenant scope, auditability, and safe state management.

### Level 0: Absent

- Data ownership is unclear.
- Tenant or organization scope is missing where needed.
- There is no visible retention, audit, or deletion model.

### Level 1: Basic

- Core data entities exist.
- Some ownership fields or timestamps are present.
- Data governance is mostly implicit.

### Level 2: Managed

- Important records have recognizable ownership and lifecycle patterns.
- Migrations exist and are applied through a repeatable process.
- Audit or event records exist for some sensitive workflows.

### Level 3: Governed

- Data ownership, tenant scope, migration discipline, retention, deletion, and audit requirements are documented and enforced.
- Sensitive data access is reviewed and tested.
- Data models reflect business and operational accountability.

### Level 4: Optimized

- Data quality, access, retention, and audit controls are monitored.
- Schema and migration changes are validated before release.
- Data recovery and repair procedures are tested.

### Level 5: AI-Native

- AI context use is governed by data classification and purpose.
- Training, retrieval, prompt, and generated-output data flows are documented.
- AI systems have explicit controls for data minimization, tenant isolation, sensitive-context exclusion, and output retention.

## Capability 4: Delivery And CI/CD

Assesses whether the organization can safely build, test, package, and release software.

### Level 0: Absent

- No repeatable build or test process.
- Releases are manual and undocumented.
- Main branches may not represent releasable state.

### Level 1: Basic

- Basic build or test commands exist.
- Some manual release steps are known.
- CI may exist but is incomplete or optional.

### Level 2: Managed

- CI runs key checks for common changes.
- Release steps are repeatable.
- Branching and review practices are defined for most work.

### Level 3: Governed

- CI/CD gates are required for important branches.
- Tests, builds, linting, type checks, and package verification are enforced where relevant.
- Release notes and versioning are maintained.

### Level 4: Optimized

- Delivery metrics, flaky tests, release failures, and cycle time are monitored.
- Release automation includes artifact integrity, provenance, and rollback support.
- Test coverage is risk-based and continuously improved.

### Level 5: AI-Native

- CI/CD includes AI-specific gates such as prompt/evaluation tests, output-schema validation, model-routing tests, safety checks, and generated-code review controls.
- AI-assisted changes are traceable through review and validation.

## Capability 5: Deployment And Recovery

Assesses whether production changes can be deployed safely and recovered when they fail.

### Level 0: Absent

- Deployment process is unclear or manual.
- No rollback or recovery process is documented.
- Backups and migrations are unmanaged.

### Level 1: Basic

- Deployment process exists but relies heavily on manual operator knowledge.
- Some backup or rollback ability exists but is not regularly tested.

### Level 2: Managed

- Deployment steps are documented.
- Rollback is possible for common failure modes.
- Database migration practices exist.

### Level 3: Governed

- Deployments follow a controlled process with validation and recovery planning.
- Rollback and migration procedures are documented.
- Production configuration is managed separately from source code.

### Level 4: Optimized

- Recovery procedures are tested.
- Deployment health is monitored.
- Rollbacks, feature flags, staged rollout, or equivalent controls reduce blast radius.

### Level 5: AI-Native

- AI provider outages, model regressions, prompt failures, evaluation failures, cost spikes, and agent misbehavior have defined degradation and recovery paths.
- AI changes can be rolled back independently where practical.

## Capability 6: Observability

Assesses whether the system can be operated, debugged, and improved using production evidence.

### Level 0: Absent

- Failures are discovered mainly through users.
- Logs, metrics, traces, and alerts are missing or not useful.

### Level 1: Basic

- Basic logs exist.
- Some errors are visible.
- Operators can manually inspect common failures.

### Level 2: Managed

- Key services have logs and basic metrics.
- Some alerts exist for major failures.
- Support workflows collect diagnostic information.

### Level 3: Governed

- Logs, metrics, traces, and alerts are designed around user-impacting workflows.
- Sensitive data is redacted from operational output.
- Incident response uses observable evidence.

### Level 4: Optimized

- Observability data supports trend analysis, capacity planning, SLOs, and continuous improvement.
- Alerts are actionable and tuned to reduce noise.

### Level 5: AI-Native

- AI workflows expose model, provider, prompt version, context source, token use, latency, validation failures, evaluation results, and fallback behavior.
- AI incidents can be investigated without leaking sensitive prompt or source data.

## Capability 7: AI Governance

Assesses whether AI usage is controlled, evaluated, validated, and auditable.

### Level 0: Absent

- AI usage is ad hoc.
- Prompts, outputs, providers, and risks are not governed.
- AI output may flow directly into user or system actions without validation.

### Level 1: Basic

- AI providers and prompts are known informally.
- Some manual review happens.
- Provider keys are configured by developers without a clear policy.

### Level 2: Managed

- AI provider configuration is repeatable.
- Outputs are validated for some structured workflows.
- Basic usage and cost data is visible.

### Level 3: Governed

- AI use cases have documented intent, context boundaries, output validation, evaluation expectations, and review rules.
- Provider selection and data-sharing rules are explicit.
- AI output is treated as untrusted until validated.

### Level 4: Optimized

- AI evaluations are automated and reviewed over time.
- Model routing, prompt versions, and validation failures are measured.
- AI risk controls are improved based on production evidence.

### Level 5: AI-Native

- AI governance is integrated into architecture, delivery, security, data, observability, recovery, and cost controls.
- AI systems have mature evaluation pipelines, prompt-injection controls, context governance, output contracts, model fallback, and incident procedures.

## Capability 8: Cost Governance

Assesses whether cloud, provider, AI, and operational spend are visible and controlled.

### Level 0: Absent

- No clear cost ownership or usage visibility.
- Expensive operations can run without limits.

### Level 1: Basic

- Some provider costs are visible through billing portals.
- Developers are aware of obvious expensive operations.
- Controls are mostly manual.

### Level 2: Managed

- Expensive operations have some limits, quotas, caching, or review.
- Usage can be attributed to major features or systems.

### Level 3: Governed

- Cost controls are documented and enforced for expensive operations.
- AI, cloud, storage, and third-party API costs are attributed to users, tenants, jobs, or features where practical.
- Budget thresholds and abuse controls exist.

### Level 4: Optimized

- Cost efficiency is measured and improved continuously.
- Caching, batching, throttling, provider choice, and architecture are tuned using real usage data.

### Level 5: AI-Native

- AI cost governance includes token budgets, model routing, semantic caching, prompt-size control, provider fallback, per-tenant attribution, and cost anomaly detection.
- Agentic workflows cannot create uncontrolled spend.

## Capability 9: Agent Readiness

Assesses whether agentic automation has appropriate authority boundaries, human approvals, audit trails, and recovery controls.

### Level 0: Absent

- No agentic automation exists, or agents/tools run without defined authority boundaries.

### Level 1: Basic

- Agents or automation exist for limited tasks.
- Human review is informal.
- Tool access is manually controlled.

### Level 2: Managed

- Agent roles and tool access are defined for some workflows.
- Approval is required for sensitive actions.
- Basic logs exist.

### Level 3: Governed

- Agent authority levels, tool permissions, approval gates, audit logs, and rollback paths are documented and enforced.
- Agents cannot bypass security, data, deployment, or cost controls.

### Level 4: Optimized

- Agent performance, errors, approvals, escalations, and outcomes are measured.
- Agent workflows are continuously improved based on evidence.

### Level 5: AI-Native

- Agents are treated as governed operational actors with explicit identity, authority, memory boundaries, tool policies, cost limits, evaluation, incident handling, and recovery controls.

## Capability 10: Operational Maturity

Assesses whether the organization has ownership, support, governance, trust, and operating discipline around software delivery.

### Level 0: Absent

- Ownership is unclear.
- Support, incident response, trust documentation, and operating policies are missing.

### Level 1: Basic

- Some support and ownership paths exist.
- Operational responsibilities are handled informally.

### Level 2: Managed

- Support, ownership, and incident processes are repeatable for common cases.
- Key policies exist but may be incomplete.

### Level 3: Governed

- Ownership, support severity, incident response, trust documentation, privacy/security policy, and customer communication paths are documented and reviewed.
- Operational risk is considered before release.

### Level 4: Optimized

- Operational metrics, incident learnings, customer feedback, and risk reviews improve the system over time.
- Trust and support processes are tested and maintained.

### Level 5: AI-Native

- Operational maturity explicitly includes AI-specific incidents, model/provider changes, AI-generated output disputes, prompt/context data issues, agent actions, AI cost events, and AI governance communication.

## Assessment Output

An assessment should produce:
- overall maturity level
- capability maturity profile
- evidence summary
- missing evidence summary
- critical risks
- recommended next actions
- 30/60/90-day improvement roadmap
- scope and limitations

Example:

```text
Overall AI Engineering Readiness: Level 2 - Managed

Architecture: Level 3 - Governed
Security: Level 3 - Governed
Data Governance: Level 2 - Managed
Delivery And CI/CD: Level 3 - Governed
Deployment And Recovery: Level 1 - Basic
Observability: Level 1 - Basic
AI Governance: Level 0 - Absent
Cost Governance: Level 0 - Absent
Agent Readiness: Level 0 - Absent
Operational Maturity: Level 2 - Managed
```

## Relationship To Products

This model is independent from any implementation.

A product may:
- collect evidence
- map evidence to capabilities
- generate reports
- track trends
- compare benchmark data

But the model should remain usable without any specific product.

Correct framing:

```text
Product X assesses repository evidence against the AI Engineering Capability Model.
```

Incorrect framing:

```text
The AI Engineering Capability Model exists to market Product X.
```

## Relationship To Certification

Certification is not part of the initial model.

Initial language:
- assessed against
- evaluated against
- maturity level
- readiness assessment

Avoid:
- certified
- compliant
- audit passed
- guaranteed secure

Certification may become possible later only after the model has:
- enough assessment history
- benchmark data
- repeatable evidence criteria
- external trust
- documented assessment governance

## Strategic Conclusion

The AI Engineering Capability Model is the bridge between the playbooks and any product implementation.

The playbooks define the body of knowledge. The capability model defines what mature AI engineering looks like. Assessment products collect evidence against the model. Benchmark data can eventually turn the model into industry intelligence.
