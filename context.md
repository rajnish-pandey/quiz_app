# Project context

Last updated: 2026-09-24.

## User intent

Build and eventually deploy an exam-preparation quiz app end to end. The user specifically requested documentation before application implementation. GitHub Pages compatibility is a primary constraint.

The sister graduated with history and completed an MA in History (MAH) from IGNOU. She is preparing for CBSE CTET and BPSC TRE and also intends to target NET. She studies in Hindi. The brother studies in English and will also use the app; his exam targets have not been specified.

## Confirmed requirements

- Both Hindi and English in one application.
- Separate learner progress and language preferences.
- Easy hosting on GitHub Pages.
- A usable application, including testing and deployment preparation.
- Useful documentation before implementation, kept accurate as work progresses.

## Working decisions

- Working name: Itihaas Prep.
- Static React and TypeScript application built with Vite.
- No backend, authentication service, paid API, or cloud database in the first release.
- Two initial editable local profiles: sister (Hindi) and brother (English).
- One stable question identity across languages.
- Local persistence, downloadable backups, and offline application support.
- Exam-oriented practice with a reviewed starter bank and clear coverage limitations.
- Mobile-first design with a comfortable desktop dashboard.

These are implementation choices, not additional facts supplied by the user. Detailed specifications are linked from [README.md](README.md).

## Open questions and safe defaults

| Unknown | Interim behavior |
| --- | --- |
| Sister's CTET paper | Clearly labeled CTET-oriented practice; no claim of an exact paper simulation |
| BPSC TRE level and subject | Configurable filters; no assumed secondary or higher-secondary pattern |
| Brother's exams | Either profile can select any available track |
| Personalized names | Editable neutral profile labels |
| Comprehensive content source | Publish only questions that complete content review |

Verify official syllabi and notifications before implementing exact exam patterns. A degree alone does not establish eligibility or determine the correct paper.

## Current repository state

- Repository: `rajnish-pandey/quiz_app`, branch `main`.
- Before documentation, only a placeholder README existed.
- No application scaffold, dependencies, question bank, tests, build, or deployment exists yet.
- Specifications describe planned behavior. Record milestones as complete only after implementation and verification.

## Delivery rules

- Finish documentation before writing application code.
- Keep Hindi and English at feature parity from the first screen.
- Never label original/generated practice as official previous-year questions.
- Do not claim comprehensive coverage, device synchronization, or deployment without evidence.
- Keep personal learner data and API secrets out of Git.
- Use functional controls, honest statistics, and useful empty states.
- Keep this context brief; maintain detailed acceptance tests in the implementation guide.

## Continuing work

1. Follow [IMPLEMENTATION.md](docs/IMPLEMENTATION.md).
2. Build the shared bilingual foundation while exam-specific details remain unresolved.
3. Verify browser behavior, profile isolation, offline use, and project-subpath hosting.
4. Record actual test/build results and deployment status in README.
