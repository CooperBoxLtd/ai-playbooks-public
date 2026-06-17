# AI Coding Agent Engineering Rules

This repository follows the AI Coding Playbooks. Coding agents must optimize for correctness, security, maintainability, observability, recovery, and cost control, not only speed of code generation.

## Operating Sequence

Before coding:
- Understand the user request and acceptance criteria.
- Inspect the relevant files before proposing or editing code.
- Identify the affected layer: frontend, backend, data, AI, infrastructure, security, deployment, or operations.
- Identify risks: security, privacy, data loss, tenant isolation, cost, reliability, deployment, and rollback.
- Prefer the smallest change that safely satisfies the request.

During coding:
- Follow existing repo patterns, naming, architecture, and tooling.
- Keep security-critical checks on the backend, not only in the UI.
- Validate external input, provider responses, and AI output before use.
- Abstract external providers behind local interfaces or service modules.
- Avoid unnecessary new dependencies, services, abstractions, and future-proofing.
- Add or update tests when behavior, security, data handling, or integration contracts change.

Before completion:
- Run the relevant validation, tests, type checks, lint checks, or build commands.
- If validation cannot be run, state exactly why.
- Report changed files and the important behavior change.
- Report residual risks, skipped checks, and assumptions.
- For production-facing changes, mention the rollback or recovery path.

## Non-Negotiable Rules

- The frontend is not a trust boundary.
- Authentication is not authorization.
- Secrets must never be committed, logged, exposed to the browser, or embedded in client bundles.
- Multi-tenant data must be scoped by tenant or organization at the data and service layer.
- Expensive operations need controls: rate limits, quotas, caching, budgets, or background jobs.
- Long-running work must not block normal request/response paths when a job queue or async workflow is appropriate.
- Production changes require validation and a recovery path.
- AI output must be treated as untrusted until validated.
- Do not bind core architecture directly to a single external provider when a small abstraction is practical.
- Do not create complexity unless the current requirement earns it.

## Task-Specific References

Use the detailed playbooks when the task touches their area:

- Core principles: `docs/playbooks/00-core-laws.md`
- Codex workflow: `docs/playbooks/01-codex-operating-model.md`
- Production layers: `docs/playbooks/02-production-stack.md`
- Security: `docs/playbooks/03-security.md`
- Data and state: `docs/playbooks/04-data-state.md`
- AI systems: `docs/playbooks/05-ai-systems.md`
- Deployment and recovery: `docs/playbooks/06-deployment-recovery.md`
- Observability: `docs/playbooks/07-observability.md`
- Cost control: `docs/playbooks/08-cost-control.md`
