# Observability Playbook

If a system cannot be observed, it cannot be operated reliably.

## Logging

Rules:
- Use structured logs where the repo supports them.
- Include useful identifiers: request id, user id, tenant id, job id, resource id, or provider request id when appropriate.
- Log failures with enough context to debug.
- Do not log secrets, tokens, full payment data, private documents, or sensitive prompt content.

## Metrics

Track metrics for:
- Request volume, latency, and error rate.
- Job queue depth, retries, and failures.
- AI calls, token usage, latency, model, and cost where available.
- Database connection usage and slow queries.
- Cache hit rate for expensive cached paths.

## Tracing

Use tracing or correlation identifiers when a workflow crosses:
- Frontend to backend.
- API to database.
- API to external provider.
- API to background job.
- Multiple services.

## Alerting

Alert on user-impacting symptoms:
- Elevated error rates.
- Failed payments or billing jobs.
- AI provider failures above threshold.
- Queue backlog that misses service targets.
- Database connection exhaustion.
- Failed backups, migrations, or deployments.

Avoid alerts for noise that does not require action.

## Incident Readiness

Production features should expose:
- Clear error messages for users.
- Diagnostic details for operators.
- Logs that support root cause analysis.
- Recovery steps for known failure modes.
