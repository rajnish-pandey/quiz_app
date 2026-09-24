# Application architecture

Status: planned contracts. Keep synchronized with implemented types and migrations.

## Proposed structure

```text
src/
  app/                 # Shell, navigation, providers, error handling
  components/          # Accessible shared controls
  features/
    profiles/
    dashboard/
    practice/
    revision/
    progress/
    settings/
  content/             # Bilingual packs and source catalog
  i18n/                # Hindi/English interface dictionaries
  domain/              # Pure scoring, selection, scheduling, validation
  storage/             # IndexedDB, migrations, repositories, backups
  styles/
public/                # Local icons and static assets
tests/                 # Integration and browser tests
docs/
.github/workflows/     # Checks and Pages deployment
```

## Domain records

| Record | Essential fields |
| --- | --- |
| Profile | Stable ID, name, preferred locale, creation time |
| Question | Stable ID, revision, topic, difficulty, track tags, bilingual stem/options/explanations, correct option ID, provenance |
| Session | ID, profile ID, mode, settings, question snapshots, ordered IDs, responses, checked IDs, flags, guessed IDs, position, start time, optional deadline, status |
| Attempt | Session ID, profile ID, submission time, duration, result summary, responses, question snapshots |
| Question progress | Profile/question composite key, last result, last-seen time, revision step, due date, unresolved-mistake flag |
| Bookmark | Profile/question composite key and creation time |
| Backup | Schema version, content version, export time, profiles, sessions, attempts, progress, bookmarks |

Use stable string IDs. Answers refer to option IDs, not positions or translations. Persist instants as UTC epoch milliseconds. Revision due dates use local calendar `YYYY-MM-DD` values; calculate intervals by calendar-day arithmetic rather than adding a fixed number of milliseconds across daylight-saving transitions.

Snapshot questions into sessions so bank updates cannot change existing scores. Historical attempts retain the exact wording and answer key used. Missing/retired content must not crash revision or imported history.

## Quiz lifecycle

```text
setup -> active -> submitted -> results/review
           |
           +-> saved active session -> resume
```

- One active session per profile. Starting another requires choosing resume or explicit discard.
- Learning mode locks responses after checking. Timed mode allows changes until submission.
- A timed deadline is absolute (`startedAt + duration`), not an interval tick counter.
- Recompute remaining time on refresh, visibility changes, and resume. Device clock changes remain a limitation of a local study tool.
- Submission is idempotent by session ID; timer expiration and button clicks cannot duplicate attempts.
- Finalize the session, add the attempt, and update revision within one IndexedDB transaction.
- Persist meaningful answer/navigation changes promptly, not solely on unload.
- Timed duration is capped at the configured session duration. Learning-mode duration represents elapsed wall time, including time away; label it accordingly rather than claiming focused study time.

## Selection and revision

Filter by track/topic, deduplicate question IDs, and cap count to available content. Shuffle once and persist order.

Daily practice prioritizes due revision, then unresolved mistakes/weak performance, then unseen questions. Fill from other available questions if needed. Explain the resulting count honestly.

Apply [revision intervals](REQUIREMENTS.md) only after completion. Skip retired questions safely and explain when bookmarked content is unavailable for new practice.

## Storage reliability

Every learner-data repository operation includes a profile ID. Components cannot issue unscoped learner queries. This is logical separation, not authenticated security.

Version database migrations and preserve existing records when adding fields. Report quota/permission failures visibly. Never claim an attempt is saved before its transaction succeeds. Listen for cross-tab changes or warn against simultaneous editing of the same active session; test the selected approach before release.

## Backup contract

- Export UTF-8 JSON with all profiles and records plus schema version.
- Limit first-release imports to 10 MB and explain larger-file rejection.
- Validate types, supported versions, unique IDs, relationships, option references, finite timestamps, record counts, and text lengths before writing.
- Reject future unsupported schemas; explicitly migrate supported older ones.
- Preview profile/attempt counts and require confirmation before replacement. Offer export of current data first.
- Restore atomically; no partial imports or silent merging of conflicting IDs.
- Render imported strings as text, never HTML.
- Explain that exported backups contain personal learning history.

## Offline and updates

Precache the shell, icons, and starter bank using the generated build manifest. Scope registration to the Vite base path. External references are not required for offline quizzes.

Show offline-ready status only after successful caching. A first visit without connectivity cannot work. Offer updates at a safe point and never force reload during a quiz. Preserve IndexedDB across cache updates.

## Hosting and privacy

Assets and manifest must work at `/quiz_app/`. Hash routes avoid Pages deep-link errors. No frontend secrets, analytics, telemetry, or remote learner storage are required. Local profile switching is not password protection.
