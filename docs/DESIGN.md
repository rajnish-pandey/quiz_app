# Experience and visual design

Status: design direction; no finished interface yet.

## Principles

Make starting useful practice easy. Keep feedback encouraging and specific. Show the next revision task without making an empty profile look unsuccessful. Language choice is a prominent control, not a buried setting.

## Visual direction

- Warm ivory background, white cards, deep ink text, forest-green actions, restrained saffron accents.
- Indicative palette: background `#F7F5EF`, surface `#FFFFFF`, text `#182B27`, primary `#245B47`, accent `#B85C18`.
- Verify actual foreground/background contrast before release; palette values alone are not accessibility approval.
- Comfortable spacing, soft card corners, restrained shadows, clear typography.
- System fonts with Devanagari fallbacks such as Nirmala UI and Mangal. Additional bundled fonts need licenses and offline caching.
- Simple local SVG icons; no essential external image/font dependencies.
- Decorative historical imagery must not compete with question text.

## Navigation and screens

Desktop uses a sidebar and persistent top bar. Mobile uses a compact header and bottom navigation, with secondary tools in settings. Main destinations: Home, Practice, Revision, Progress, Settings.

### Profile entry

Two editable profiles with language labels. Explain device-local storage and remember the last profile. Profile selection is not a login or privacy boundary.

### Home

Current learner, language switch, daily practice action, due revision count, and a few actual metrics. Available exam tracks include a starter-bank coverage note. An active session appears as a resume card.

### Practice setup

Track, topic, available count, and mode selection. Explain immediate-feedback learning versus timed practice. Label generic timing/scoring explicitly. Show actual matching question counts.

### Quiz

Question text and four options take priority. Show progress, mode, bookmark, guessed control, and alternate-language toggle. Timed mode adds countdown and mark-for-review.

Learning mode requires Check answer, then displays a textual correctness label, correct option, and explanation before continuation. Timed mode hides explanations until submission. Provide question navigation and submission review with unanswered count.

Leaving saves the quiz; timed deadlines continue. Switching profiles saves the first learner's session and opens the second workspace without transferring the session.

### Results and revision

Score, correct/incorrect/unanswered counts, duration, and question explanations. Offer mistake review and return to home. Distinguish due revision, unresolved mistakes, and bookmarks, each with useful empty states.

### Progress and settings

Completed attempt history and topic accuracy, with text equivalents for graphics. Settings includes profile name, preferred language, backups, local-data explanation, and install guidance.

## Bilingual rules

- Persist `hi`/`en` per profile and update document `lang`.
- Translate navigation, buttons, fields, empty states, validation, results, and installation instructions.
- Preserve question/option IDs and order when switching languages.
- Label each language when showing alternate wording.
- Use common exam vocabulary and useful bilingual terms, e.g. अभिलेख (inscription).
- Write natural Hindi rather than literal English sentence structures.
- Allow more line height for Devanagari; never truncate answer options.
- Format dates/numbers with the selected locale. Shortcuts cannot depend on translated labels.

## Accessibility and responsive checks

- Semantic headings, real buttons, labeled fields, grouped answer controls.
- Visible focus and logical tab order; manage focus when questions/dialogs change.
- At least 44-pixel touch targets where practical.
- Correctness communicated by words/icons as well as color.
- Announce key feedback without reading the countdown every second.
- Respect reduced motion and support 200% zoom.
- Test around 360, 768, and 1440 pixels wide with long Hindi text.
- Dialogs trap focus, permit cancellation, and restore focus when closed.

## Required empty/error states

No history, no revision due, no matching questions, no bookmarks, unavailable storage, invalid backup, unsuccessful caching, and external references unavailable offline. Each should explain the next useful action in the selected language.
