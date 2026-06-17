# Data And State Playbook

Data models are architecture. Codex must treat schema, state, ownership, and migration changes as high-risk engineering decisions.

## Data Ownership

Every important record should answer:
- Who owns this data?
- Which tenant or organization can access it?
- Who created or modified it?
- How long should it be retained?
- How can it be recovered or deleted?

## State

Rules:
- Distinguish source-of-truth data from derived, cached, temporary, or display state.
- Avoid duplicating state unless there is a clear synchronization strategy.
- Avoid storing values that can become stale without a refresh or invalidation path.

## Multi-Tenancy

Rules:
- Scope tenant data by tenant or organization identifiers.
- Apply tenant filters in services, repositories, policies, and queries.
- Do not trust tenant identifiers supplied only by the client.
- Ensure exports, background jobs, search indexes, and analytics respect tenant scope.

## Schema Changes

Rules:
- Review constraints, indexes, nullability, defaults, and migration order.
- Make migrations reversible when practical.
- Avoid destructive migrations without backup or explicit approval.
- Consider existing data shape before tightening constraints.

## Query Design

Rules:
- Design for the queries the product actually needs.
- Add indexes for frequent filters, joins, uniqueness checks, and ordering.
- Avoid premature indexing that increases write cost without evidence.

## Events And Audit

Rules:
- Use audit records for important security, billing, admin, and data mutation events.
- Event records should include actor, tenant, timestamp, action, target, and relevant metadata.
- Do not rely only on mutable current state when historical accountability is required.

## Data Safety Checklist

Before completing a data-facing change:
- Confirm ownership and tenant scope.
- Confirm validation at write boundaries.
- Confirm migration and rollback implications.
- Confirm tests or manual checks cover the changed data path.
