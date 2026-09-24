# Product requirements

Status: planned first-release specification.

## Learning model

Organize practice by exam track, topic, and difficulty. History is the initial focus, but the model must support pedagogy, social science, and other relevant subjects. Track labels express intended relevance, not complete syllabus coverage.

## First-release behavior

| Area | Required behavior | Acceptance criterion |
| --- | --- | --- |
| Profiles | Two editable local profiles with independent preferences and records | Switching profiles never displays the other learner's attempts, bookmarks, or revision queue |
| Languages | Hindi and English throughout UI and content | Switching mid-question preserves answer, position, flags, and deadline |
| Alternate wording | Show the other language on demand | Compare wording without changing the default language |
| Practice setup | Select track, topic, available count, and learning/timed mode | Empty filters explain missing content; counts never create duplicates |
| Learning mode | Select an option, then explicitly check it | Explain the correct answer and distractors; checked responses cannot be rewritten to improve score |
| Timed mode | Navigate, change unsubmitted answers, flag questions, and submit | No answer key before submission; expiration submits once |
| Resume | Persist active sessions | Reload restores order and responses; expired timed sessions finalize on reopening |
| Results | Correct, incorrect, unanswered, accuracy, and time | Results derive from submitted responses; unanswered items cannot inflate accuracy |
| Review | Explain all submitted questions | Correct answer and explanations available in both languages |
| Mistakes | Retain incorrectly answered questions | Remain until a later completed session answers them correctly |
| Confidence | Mark questions as guessed | Correct guesses still enter revision |
| Bookmarks | Save/unsave questions | Persist separately per profile |
| Revision | Schedule using completed results | Due items visible; abandoned sessions do not change mastery |
| Daily practice | Combine due, weak, and unseen questions | No duplicates or invented content availability |
| Progress | Actual attempt history and topic accuracy | New profiles show honest empty states |
| Backups | Export all profiles; restore validated backups | Invalid input leaves data untouched; replacement requires an explicit in-app confirmation |
| Offline | Cache application and starter bank | After successful online caching, reload works offline and results persist |
| Installation | Supported install action or guidance | No nonfunctional install button on unsupported browsers |

## Scoring and revision defaults

- Generic practice: one point per correct answer, zero for incorrect/unanswered, no negative marking.
- Accuracy: correct divided by all questions in the submitted session, as a percentage.
- Timed practice: default 60 seconds per question, labeled as a practice setting rather than an official rule.
- Incorrect, skipped, or guessed questions become due the next day. Confident correct responses progress through 1, 3, 7, 14, and 30 day intervals.
- Failed or guessed responses reset the interval. Apply each question's revision update once per completed session.
- Official timing/marking requires a separately verified exam configuration.

## Quality requirements

- Work at `/quiz_app/` and narrow mobile widths.
- Keyboard-operable controls, visible focus, adequate contrast, and readable Devanagari.
- Never indicate correctness through color alone.
- No network request required to answer bundled questions.
- No learner analytics or external data transmission by default.
- Report storage failures instead of falsely reporting saved progress.
- Render imported and question-bank strings as text, never executable HTML.

## Later releases

Exact full-length mocks after target confirmation; expanded reviewed packs; interactive chronology/matching exercises; optional cloud sync; additional subjects. These are not first-release completion criteria.

## Outside current scope

Live AI tutoring, runtime AI question generation, leaderboards, payments, authentication, eligibility advice, and guaranteed complete exam coverage.
