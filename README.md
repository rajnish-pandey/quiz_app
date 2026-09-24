# Itihaas Prep

A bilingual study companion for a Hindi-medium history graduate preparing for CTET, BPSC TRE, and UGC NET, and her English-medium brother.

**Status: first working static slice implemented; deployment is prepared but not yet verified live.** Itihaas Prep is a working name.

## Product direction

- Complete Hindi and English interfaces and learning content.
- Separate local learner profiles, language preferences, and progress.
- Topic practice, timed practice, answer explanations, bookmarks, and mistake revision.
- Daily practice and spaced revision based on each learner's results.
- A responsive, accessible interface for phones and laptops.
- Offline use after successful application caching.
- Export/import backups and static deployment to GitHub Pages.

The first question bank will be a clearly labeled starter collection of original practice questions. It will not be presented as complete syllabus coverage or as official previous-year papers.

## Documentation

| Document | Purpose |
| --- | --- |
| [context.md](context.md) | Requirements, decisions, assumptions, and current project state |
| [REQUIREMENTS.md](docs/REQUIREMENTS.md) | Feature behavior, scope, and acceptance criteria |
| [DESIGN.md](docs/DESIGN.md) | Screens, visual direction, accessibility, and bilingual experience |
| [TECHNOLOGIES.md](docs/TECHNOLOGIES.md) | Stack, responsibilities, and tradeoffs |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Data models, persistence, quiz lifecycle, and offline strategy |
| [CONTENT.md](docs/CONTENT.md) | Question schema, translation rules, sourcing, and review |
| [IMPLEMENTATION.md](docs/IMPLEMENTATION.md) | Delivery milestones and verification plan |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Planned local workflow, GitHub Pages release, and recovery |

Start with `context.md`, then requirements and architecture before implementing changes. Update documentation when decisions or behavior change.

## Planned stack

React, TypeScript, Vite, Tailwind CSS, IndexedDB through Dexie, and a generated PWA service worker. GitHub Actions will build and deploy to GitHub Pages. See [technology decisions](docs/TECHNOLOGIES.md).

The app is dependency-free for this first slice: `index.html`, `styles.css`, and `app.js` can be served directly by GitHub Pages.

Run locally with `python -m http.server 8080`, then open `http://localhost:8080/`.

## Data and hosting

Profiles will be local conveniences, not authenticated accounts. Progress belongs to the current browser and device. Clearing browser storage can erase it; backups are essential. Automatic synchronization between devices is outside the first release.

Code and bundled content served by GitHub Pages are publicly downloadable. Personal results must remain in the browser or an explicitly exported backup. No secret keys belong in the frontend or repository.

## Open decisions

- Sister's exact BPSC TRE teaching level and subject, and confirmation of CTET paper.
- Brother's target exams and subjects.
- Final product name and personalized profile names.

These do not block the shared foundation. They do block claims that a track is a complete or exact mock examination.
