# Knowledge Harvesting

Knowledge harvesting is the process for converting source material into structured CooperBox knowledge assets.

The goal is to prevent document sprawl. New notes, reviews, workshops, case studies, and research should enrich the structured registry, pattern library, and controls library instead of creating unmanaged prose.

## Pipeline

```text
Source
-> Candidate Principles
-> Patterns
-> Controls
-> Playbook Mapping
-> Capability Mapping
-> Assessment Evidence
```

## Source Types

Accepted source types:
- transcript
- meeting notes
- architecture review
- incident review
- case study
- implementation research
- benchmark result
- external standard or reference

Each source must be added to `docs/registry/sources.yaml` before extracted knowledge is added to registries.

## Extraction Rules

Extract only durable knowledge:
- principles that remain true across products or stacks
- patterns that describe reusable implementation approaches
- controls that prove a practice exists
- anti-patterns that identify repeated failure modes

Do not extract:
- one-off opinions
- vendor-specific tactical advice unless generalized
- marketing language
- duplicate principles with different wording
- implementation details that belong only in one product repo

## Output Targets

Use the right target:

- `docs/registry/principles.yaml`: WHAT should be true.
- `docs/patterns/patterns.yaml`: HOW to implement a recurring solution.
- `docs/controls/controls.yaml`: HOW to prove a practice exists.
- `docs/playbooks/`: readable curated guidance.

## Harvesting Workflow

1. Register the source in `docs/registry/sources.yaml`.
2. Extract candidate principles.
3. Deduplicate against existing principles.
4. Add accepted principles to `docs/registry/principles.yaml`.
5. Extract reusable implementation patterns into `docs/patterns/patterns.yaml`.
6. Extract assessable proof controls into `docs/controls/controls.yaml`.
7. Map every record to one or more frozen capabilities.
8. Map every principle to one or more playbooks.
9. Add assessment hints and evidence classes.
10. Keep long narrative in playbooks only when it improves readability.

## Quality Gate

A harvested record must answer at least one of these:
- What should engineering teams believe or enforce?
- How should they implement it?
- How can they prove it exists?
- Which capability does it improve?
- Which assessment evidence would detect it?

If it answers none of these, do not add it.
