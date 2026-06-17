# Cost Control Playbook

Cost is an engineering concern. AI, cloud, storage, and provider usage must be controlled by design.

## Cost Visibility

Rules:
- Attribute expensive operations to user, tenant, feature, request, or job where practical.
- Track usage for AI calls, storage, file conversion, exports, search, and third-party APIs.
- Expose enough internal data to identify runaway spend.

## Controls

Use controls such as:
- Authentication.
- Authorization.
- Rate limits.
- Quotas.
- Budgets.
- Caching.
- Batching.
- Timeouts.
- Circuit breakers.
- Background jobs.

## AI Cost Rules

- Choose the smallest model that satisfies the quality requirement.
- Route high-value or complex tasks to stronger models only when needed.
- Cache repeated deterministic or near-deterministic AI work when safe.
- Avoid sending unnecessary context.
- Set max output limits where practical.
- Track token usage and provider latency when available.

## Provider Dependency Rules

- Abstract providers when the app depends on them for important workflows.
- Keep timeouts and retries bounded.
- Plan degradation when a paid provider is unavailable.
- Avoid designs where one loop or public endpoint can create uncontrolled spend.

## Cost Review Triggers

Perform extra review when a change adds or modifies:
- AI calls.
- File processing.
- Bulk import/export.
- Scheduled jobs.
- Webhooks.
- Search, embedding, or vector storage.
- External paid APIs.
