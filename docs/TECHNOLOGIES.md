# Technology decisions

Status: selected architecture, not installed dependencies. Exact compatible versions will be checked and locked during scaffolding.

| Technology | Responsibility | Reason |
| --- | --- | --- |
| React | Application interface | Shared bilingual components and predictable composition |
| TypeScript | App/content types | Catch incompatible question, session, and progress data |
| Vite | Development and production build | Static assets suitable for GitHub Pages |
| Tailwind CSS | Styling | Consistent spacing, typography, responsive variants |
| Dexie / IndexedDB | Profiles, sessions, attempts, revision | Structured asynchronous persistence and transactions |
| JSON packs | Versioned bilingual questions | Content review independent of UI code |
| vite-plugin-pwa / Workbox | Manifest and service worker | Reliably cache generated assets for offline use |
| Vitest | Unit/integration tests | Scoring, scheduling, transitions, validation |
| Testing Library | Component tests | Verify user-visible behavior |
| Playwright | Browser regression tests | Complete flows, mobile layouts, offline behavior |
| GitHub Actions | Checks and deployment | Reproducible builds from committed source |
| GitHub Pages | Static hosting | Meets hosting requirement without a server |

## Architectural choices

- Start with React state/reducers and a small repository layer rather than another state library.
- Use hash navigation if URL routing is needed; Pages does not require server rewrites this way.
- Bundle the question bank; keep progress separately in IndexedDB.
- Reserve localStorage for small noncritical preferences, if needed. Do not split authoritative progress between stores.
- Prefer system fonts and local SVGs over CDNs.
- Generate the service worker from the build rather than maintaining hashed asset lists manually.
- Include no API keys, runtime AI integration, or server-only functionality.

## Tradeoffs

Local storage simplifies hosting and keeps progress on the device, but cannot automatically synchronize devices. Browser data can be cleared or evicted. Backup export/import is therefore a first-release requirement.

Static content needs a rebuild for updates and cannot hide answers from a technically knowledgeable learner. This is a self-study tool, not a proctored assessment platform.

Cloud login/sync would require a backend and a separate privacy/security design; they are deferred.

## Dependency policy

Commit `package-lock.json`, use `npm ci` in CI, and record the supported Node version. Avoid unpinned CDN imports. Preserve licenses for fonts, icons, and content. Install dependencies only when they serve a delivered feature.

## References

- [Vite static deployment](https://vite.dev/guide/static-deploy)
- [GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

Consult current official package documentation during implementation. This file records architecture, not verified package API signatures or exact versions.
