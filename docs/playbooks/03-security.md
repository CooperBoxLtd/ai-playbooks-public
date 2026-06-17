# Security Playbook

Security must be designed into each change. Do not treat it as a final cleanup step.

## Identity

Rules:
- Use established authentication mechanisms.
- Do not invent password, token, or session handling unless required.
- Do not log credentials, tokens, cookies, API keys, reset links, or one-time codes.

## Authorization

Rules:
- Enforce authorization on the backend for every protected action.
- Check role, ownership, tenant, and resource permissions at the point of access.
- Do not rely on hidden buttons, disabled controls, route guards, or client-side checks as the only protection.

## Tenant Isolation

Rules:
- Tenant-owned records must include tenant or organization scope.
- Queries must filter by tenant or organization where relevant.
- Background jobs, exports, search, analytics, and admin views must preserve tenant boundaries.

## Secrets

Rules:
- Never commit secrets.
- Never expose server-only keys to frontend bundles.
- Load secrets from managed environment variables or secret stores.
- Rotate secrets when exposure is suspected.

## External Inputs

Rules:
- Validate request bodies, query parameters, uploaded files, webhook payloads, and external API responses.
- Use schema validation where available.
- Reject or sanitize unexpected values.

## AI Security

Rules:
- Treat AI output as untrusted.
- Validate generated JSON, commands, code, database queries, URLs, and file paths before use.
- Do not let prompt content override system, security, authorization, or data-access rules.

## Logging

Rules:
- Log enough context to debug incidents.
- Redact secrets, tokens, personal data, and sensitive business data.
- Include correlation or request identifiers where practical.

## Security Review Triggers

Perform extra review when a change touches:
- Authentication or authorization.
- Tenant-scoped data.
- Payment, billing, credits, quotas, or paid AI calls.
- File upload, export, import, webhook, or admin functionality.
- Secrets, environment variables, deployment, or logging.
