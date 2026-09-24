# Implementation and verification plan

Status: documentation milestone complete; application milestones pending. Checkboxes reflect verified work, not intent.

## Milestone 0 — Documentation

- [x] Record requirements and unresolved exam details.
- [x] Define bilingual UX, data ownership, and local profiles.
- [x] Specify architecture, content review, and deployment approach.
- [x] Define completion criteria and test scenarios.

## Milestone 1 — Foundation

- [ ] Scaffold React, TypeScript, Vite, and styling.
- [ ] Lock dependencies and record supported Node/npm versions.
- [ ] Add Hindi/English dictionaries and locale formatting.
- [ ] Implement responsive shell, navigation, and profiles.
- [ ] Add IndexedDB schema, migrations, repositories, and storage errors.

Exit: both learners can enter, change language, and reload with independent preferences.

## Milestone 2 — Content and quiz engine

- [ ] Implement question/source schema and build-time validation.
- [ ] Author/review a starter bank and document actual coverage.
- [ ] Add filters, unique capped selection, and stable ordering.
- [ ] Implement learning/timed modes, navigation, guesses, and review flags.
- [ ] Persist active sessions and implement idempotent submission.
- [ ] Add results and bilingual explanations.

Exit: complete sessions work in both languages and survive reload without answer loss or deadline reset.

## Milestone 3 — Learning records

- [ ] Bookmarks, mistake notebook, spaced revision, daily practice.
- [ ] Actual attempt history and topic statistics.
- [ ] Validated backup export/import with atomic replacement.
- [ ] Profile isolation and storage-failure handling.

Exit: completed sessions update only the correct learner; backup round trips preserve data.

## Milestone 4 — Offline and usability

- [ ] Manifest, icons, service worker, offline-ready feedback.
- [ ] Safe updates and supported installation guidance.
- [ ] Mobile, keyboard, focus, contrast, and Hindi layout checks.
- [ ] Offline reload/completion and version-update checks.

Exit: a successfully cached app works offline without external fonts/APIs.

## Milestone 5 — Release

- [ ] CI checks and Pages workflow.
- [ ] Production verification under `/quiz_app/`.
- [ ] Required automated checks and browser smoke tests.
- [ ] README with actual commands, test results, content counts, limitations.
- [ ] Publish when repository access/settings permit; verify the live URL.

## Test priorities

| Layer | Critical scenarios |
| --- | --- |
| Domain | Scoring including unanswered; zero counts; unique selection; small banks; revision reset/intervals |
| Content | Missing translations; invalid answers; duplicate IDs/options; missing sources; drafts in production |
| Persistence | Profile isolation; migrations; timer/button submission races; transactional import failure |
| UI | Locale switching mid-question; checked response locking; hidden timed answers; empty filters; errors |
| Browser | Complete bilingual sessions; reload/resume; expiration on reopen; profile switch; backup round trip; invalid import preservation |
| Hosting/offline | Subpath assets; hash refresh; cached offline reload; cache failure; safe app update |
| Accessibility | Keyboard, labels, dialogs, announcements, reduced motion, zoom, narrow Hindi layouts |

Prefer tests for meaningful failure cases that could lose data, misgrade questions, or mix learner records. Do not add tests merely to repeat implementation code.

## Definition of done

All first-release requirements work, content passes review/validation, required checks pass, and documentation matches the application. Deployment is a separate verified state: a local build does not mean a live site.

Record blocked external steps precisely. Never substitute fabricated test results or an expected URL for deployment evidence.
