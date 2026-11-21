# DevSecOps adoption record — 21 November 2026

Accountable owner: Cristian Bogdan. Actual executor: Codex automation; this is not independent human approval or residual-risk acceptance.

Profile: Public engineering guidance and templates.

Adopted engineering target: CooperBox DevSecOps engineering baseline, CB-DEVSECOPS-001 version 1.0 (20 November 2026). Formal organisational policy approval remains separately recorded by the owner.

The remediation batch begins from source `0dd72833fd8f715638a71a4f533d7810935d0a7e`. Exact resulting commits and GitHub check results are recorded in the pull request and workflow runs.

## Change and dependency controls

The DevSecOps baseline workflow validates immutable external action references and rejects deprecated JavaScript action runtimes. Negative checks demonstrate rejection of mutable action tags, mutable Docker actions and unsupported Node versions. Dependabot runs daily for configured applicable ecosystems; major changes require compatibility review and bot pull requests are not automatically accepted.

Protected change must require a pull request and successful applicable validation. Branch protection is a separate GitHub setting; this file does not establish that it is enforced. CI executes with read-only default permissions; privileged release workflows retain target-specific permissions and environment controls.

## Evidence and release scope

Application tests, dependency audits, package inspection and container checks remain applicable according to shipped artifacts. A source/action policy check does not substitute for SAST, authenticated DAST, runtime image scanning, SBOM or release provenance. Those outcomes require their actual workflow evidence. Routine evidence is retained at least 14 days, release qualification at least 90 days.

Repository remediation does not qualify a new deployment. Existing target settings, data, identities, secrets and rollback routes must be preserved. Production promotion requires successful target staging qualification and the exact recorded artifact digests.

No alert is dismissed or risk accepted solely to obtain a green build. Intentional unsafe benchmark scenarios remain independently identified and must retain their detection expectations. Missing paid controls are gaps with compensating process, not not-applicable controls.
