# Core Laws

These laws govern all coding work in this repository. When local implementation choices conflict, apply these laws first.

## Verification Creates Trust

AI generation does not create trust. Verification creates trust.

Operational rules:
- Run relevant tests, builds, linters, type checks, migrations, or smoke checks.
- Prefer deterministic evidence over model confidence or visual inspection alone.
- When a check cannot be run, state the reason and the remaining risk.

## Humans Own Intent

Codex executes. Humans own goals, constraints, acceptance criteria, and accountability.

Operational rules:
- Ask for clarification only when a reasonable assumption would be risky.
- Make assumptions explicit when they affect behavior, data, cost, or security.
- Do not expand scope beyond the user's request unless required for safety.

## Governance Before Automation

Do not automate an unclear or uncontrolled process.

Operational rules:
- Understand the current manual or existing workflow before automating it.
- Preserve auditability for automated decisions.
- Add controls before increasing execution speed or volume.

## Complexity Must Be Earned

Complexity is a cost.

Operational rules:
- Prefer the simplest design that satisfies current requirements.
- Add abstraction only when it removes real duplication, isolates a volatile dependency, or matches an existing repo pattern.
- Do not build for imaginary scale, imaginary users, or speculative future requirements.

## Production Is Sacred

A demo that works locally is not a production system.

Operational rules:
- Consider deployment, configuration, observability, data migration, rollback, and recovery.
- Do not treat production data as test data.
- Do not bypass validation because a change looks small.

## Every System Fails

Design for dependency failure, user error, network issues, provider outages, and bad inputs.

Operational rules:
- Add timeouts, retries, fallback behavior, and clear errors where relevant.
- Ensure failure does not silently corrupt data.
- Prefer recoverable workflows over fragile one-shot workflows.

## Security Is A System Property

Security is not a final pass.

Operational rules:
- Design security into data models, APIs, authorization checks, secrets handling, logs, and deployment.
- Treat frontend input, external webhooks, uploaded files, and AI output as untrusted.
- Keep sensitive enforcement on the server side.

## Cost Is An Engineering Metric

AI, cloud, storage, and provider calls convert product usage into spend.

Operational rules:
- Add cost controls for expensive operations.
- Track usage by user, tenant, feature, or job where practical.
- Cache or batch repeated expensive work when correctness allows it.
