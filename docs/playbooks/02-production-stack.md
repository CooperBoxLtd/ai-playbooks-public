# Production Stack

A production system is more than a frontend and database. Codex must consider the affected production layer when changing code.

## Layers

Frontend:
- Use the frontend for presentation, interaction, and non-security-critical validation.
- Do not store secrets or enforce final authorization decisions in browser code.

Backend and APIs:
- Enforce authorization, validation, rate limits, and business rules.
- Keep provider calls and privileged operations server-side.

Database and storage:
- Model ownership, tenant scope, indexes, migrations, retention, and backups.
- Avoid accepting generated schemas without reviewing query patterns and constraints.

Authentication and authorization:
- Authentication identifies a user.
- Authorization decides what that user can do.
- Every protected API path must enforce authorization independently of the UI.

Hosting and deployment:
- Configuration must come from managed environment settings, not source code.
- Deployments must have validation and rollback options.

CI/CD and version control:
- Main branches represent releasable state.
- Checks should catch tests, type errors, lint errors, migration issues, and security regressions where practical.

Security and data protection:
- Protect secrets, personal data, tenant data, uploaded files, and logs.
- Apply least privilege to keys, users, service accounts, and database roles.

Rate limiting:
- Protect expensive endpoints and login, upload, AI, export, and webhook paths.
- Rate limits should be enforced server-side.

Caching and CDN:
- Cache stable expensive responses when correctness allows.
- Avoid caching private or tenant-specific data without explicit scope controls.

Scaling:
- Watch database connections, background job throughput, provider quotas, and request concurrency.
- Do not scale architecture before measuring the bottleneck.

Observability:
- Add logs, metrics, traces, and error reporting where behavior must be operated in production.

Availability and recovery:
- Define how the system recovers from failed deploys, bad migrations, provider outages, and data corruption.
