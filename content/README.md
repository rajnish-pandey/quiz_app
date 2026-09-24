# Content workspace

This directory is the source of truth for syllabus coverage and future reviewed question packs.

`coverage.json` defines the tracks and topic groups. Every question pack added here must use stable IDs, include Hindi and English text, identify its subject/topic, and record provenance. The current prototype questions remain embedded in `app.js`; they are intentionally kept visible until the external content loader and validator are implemented.

## Release gates

A topic may be marked reviewed only when:

1. The topic is mapped to the current official syllabus.
2. Every question has a verified answer and source.
3. Hindi and English versions have equivalent meaning.
4. Distractors have been checked for ambiguity.
5. The question passes schema validation and duplicate checks.

Never label a pack as an official previous-year paper unless the exam, year, paper, source, and answer-key reference are recorded.

## Planned pack layout

```text
content/
  coverage.json
  sources.json
  packs/
    ctet-paper-1.json
    ctet-paper-2-social-science.json
    ctet-paper-2-math-science.json
    bpsc-tre-6-8.json
    bpsc-tre-9-10.json
    ugc-net-paper-1.json
    ugc-net-history.json
    upsc-general-studies.json
    bpsc-general-studies.json
```

Pack files should be generated from reviewed source records rather than edited as unstructured prose. Current-affairs questions need an explicit publication date and review expiry because their answers can change.
