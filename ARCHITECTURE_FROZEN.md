# Architecture Freeze

Date: 2026-06-16

## Status

The CooperBox AI Playbooks repository architecture is frozen for version 0.1.

This means the foundational structure should not be redesigned unless a fundamental defect is found.

## Frozen Architecture

```text
Core Laws
-> Playbooks
-> Principle Registry
-> Pattern Library
-> Control Library
-> Evidence Registry
-> Capability Model
-> Assessment Framework
-> Product Implementations
-> Future Benchmark Layer
```

## Frozen Capabilities

The 10 AI Engineering capabilities are frozen:

1. Architecture
2. Security
3. Data Governance
4. Delivery And CI/CD
5. Deployment And Recovery
6. Observability
7. AI Governance
8. Cost Governance
9. Agent Readiness
10. Operational Maturity

Do not add an 11th capability unless the existing model has a fundamental defect that cannot be solved through principles, patterns, controls, evidence, or playbook expansion.

## Allowed Work

Future work should focus on knowledge acquisition:

```text
Source
-> Principles
-> Patterns
-> Controls
-> Evidence
-> Capability Mapping
```

Allowed work:
- add sources to `docs/registry/sources.yaml`
- expand `docs/registry/principles.yaml`
- expand `docs/patterns/patterns.yaml`
- expand `docs/controls/controls.yaml`
- expand `docs/evidence/evidence.yaml`
- improve playbook prose when it clarifies already-registered knowledge
- add examples that map to existing principles, patterns, controls, or evidence

## Restricted Work

Avoid:
- new strategy layers
- new maturity models
- new top-level capability categories
- new assessment frameworks
- product-specific concepts inside vendor-neutral framework files
- certification or benchmark mechanics before the knowledge base is substantially larger

## Current Priority

The next phase is knowledge harvesting.

Priority order:

1. Registry expansion
2. Pattern expansion
3. Control expansion
4. Evidence expansion
5. Transcript/source processing
6. Additional playbook prose

## Rationale

The repository now has enough structure to absorb thousands of principles, patterns, controls, and evidence items without collapsing into document sprawl.

The strategic goal is to grow the CooperBox AI Engineering Body of Knowledge while preserving the ontology:

```text
Principle
-> Pattern
-> Control
-> Evidence
-> Capability
-> Assessment
```
