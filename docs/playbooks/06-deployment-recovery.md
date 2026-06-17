# Deployment And Recovery Playbook

Deployment is not complete until the system can be validated and recovered.

## Deployment Rules

- Do not rely on local success alone for production-facing changes.
- Keep configuration outside source code.
- Validate required environment variables and provider configuration.
- Avoid direct pushes to protected production branches unless the repository workflow explicitly allows it.
- Prefer small deployable changes over large risky batches.

## Migration Rules

- Review database migrations for destructive operations.
- Back up important data before risky migrations.
- Prefer expand-and-contract migrations for zero-downtime changes.
- Confirm application code and schema changes are compatible during rollout.

## Background Work

Use background jobs for:
- Long-running exports.
- AI processing that may exceed request timeouts.
- File conversion.
- Bulk imports.
- Expensive provider calls.

Rules:
- Jobs should be retryable or idempotent where practical.
- Jobs should record status, errors, and ownership.
- Users should not need to guess whether a job succeeded.

## Rollback And Recovery

Every production-facing change should answer:
- How do we roll back code?
- How do we roll back or repair data?
- What configuration must be reverted?
- What user impact could remain after rollback?
- What logs or metrics confirm recovery?

## Release Checklist

Before completion:
- Run tests, build, type checks, and migrations checks relevant to the change.
- Confirm required environment changes are documented.
- Confirm rollback or recovery path.
- Mention any deployment assumptions in the final response.
