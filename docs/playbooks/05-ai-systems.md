# AI Systems Playbook

AI features are production systems with non-deterministic behavior. Codex must design them with intent, context, validation, observability, and cost controls.

## Intent

Rules:
- Define what the AI feature should do, for whom, and under what constraints.
- Define acceptable and unacceptable outputs.
- Do not implement vague AI behavior without acceptance criteria.

## Context

Rules:
- Provide only the context needed for the task.
- Avoid leaking secrets, private tenant data, or irrelevant personal data into prompts.
- Prefer structured context over large unfiltered text dumps.
- Track where context came from when output needs to be auditable.

## Model And Provider Abstraction

Rules:
- Avoid scattering direct provider SDK calls across the codebase.
- Put model calls behind a local service, adapter, or gateway when the app has more than trivial AI usage.
- Keep provider, model, timeout, retry, and cost controls configurable.

## Output Validation

Rules:
- Validate AI output before showing it to users or passing it to downstream systems.
- Use schemas for structured outputs.
- Reject, retry, or degrade gracefully when output fails validation.
- Never execute AI-generated commands, code, queries, or file operations without explicit validation and authorization.

## Evaluation

Rules:
- Add deterministic tests for prompts, parsing, validation, and routing where practical.
- Use representative examples for expected output shape and failure cases.
- Avoid exact string matching for naturally variable AI responses unless the output is constrained.

## Safety And Abuse Controls

Rules:
- Protect AI endpoints with authentication, authorization, rate limits, quotas, and usage logging.
- Add tenant or user attribution for expensive calls.
- Prevent prompt injection from overriding security and data-access rules.

## AI Completion Checklist

Before completing an AI-facing change:
- Confirm input validation.
- Confirm context boundaries.
- Confirm output validation.
- Confirm cost controls or usage tracking.
- Confirm logs avoid sensitive prompt or response leakage.
