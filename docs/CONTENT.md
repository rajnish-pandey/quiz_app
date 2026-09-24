# Question content and translation standards

Status: publishing contract. No bank has been authored or verified yet.

## Scope and honesty

Start with a manageable reviewed history collection. Add pedagogy and other subjects only with suitable sources and review. Show actual topic/question counts and label the collection as a starter practice bank.

Track tags express relevance, not evidence that an item appeared in an exam. A learner's degree does not establish eligibility, paper selection, or complete content coverage.

## Question contract

This is a structural illustration, not a publishable question:

```json
{
  "id": "history-ancient-001",
  "revision": 1,
  "topicId": "ancient-india",
  "tracks": ["ctet", "bpsc-tre", "ugc-net-history"],
  "difficulty": "foundation",
  "kind": "single-choice",
  "stem": { "en": "English question", "hi": "हिंदी प्रश्न" },
  "options": [
    { "id": "a", "text": { "en": "Option A", "hi": "विकल्प क" } },
    { "id": "b", "text": { "en": "Option B", "hi": "विकल्प ख" } },
    { "id": "c", "text": { "en": "Option C", "hi": "विकल्प ग" } },
    { "id": "d", "text": { "en": "Option D", "hi": "विकल्प घ" } }
  ],
  "answerId": "a",
  "explanation": { "en": "Reasoning and context", "hi": "कारण और संदर्भ" },
  "optionExplanations": {
    "a": { "en": "Why A is correct", "hi": "क सही क्यों है" },
    "b": { "en": "Why B is incorrect", "hi": "ख गलत क्यों है" },
    "c": { "en": "Why C is incorrect", "hi": "ग गलत क्यों है" },
    "d": { "en": "Why D is incorrect", "hi": "घ गलत क्यों है" }
  },
  "provenance": { "type": "original-practice", "sourceIds": ["source-id"] },
  "review": { "status": "draft", "reviewedAt": null }
}
```

Source records contain title, institution/author, URL where available, edition/date, exact chapter/section/page locator, and verification date. A general homepage or syllabus link alone does not verify an answer.

Difficulty values: `foundation`, `intermediate`, `advanced`. First-release items have four distinct options and one unambiguous correct answer. Extend the schema explicitly for later formats.

## Publishing workflow

1. Identify topic and relevant curriculum/exam scope.
2. Draft an original question from an authoritative reference and record its precise location.
3. Check the answer and every distractor against the source.
4. Write useful reasoning and short explanations for each option.
5. Translate and compare versions for equivalent meaning.
6. Validate fields, IDs, answer references, duplicate options, sources, and both locales.
7. Complete factual/language review and record its status/date honestly.
8. Include only reviewed, publishable records in production.

AI drafting is not factual verification. A `reviewed` field requires a completed check, not just valid JSON. Human educator review is desirable before expansion or claims of exam-level quality.

## Translation rules

- Preserve task, qualifiers, dates, choices, option order, and correct answer.
- Highlight negatives such as NOT/नहीं consistently.
- Use standard Hindi historical and educational terminology.
- Explain unfamiliar terms with English equivalents when helpful.
- Avoid translations that inadvertently reveal the answer.
- Missing Hindi fields must block publication, not silently fall back to English.

## Provenance and rights

Label original practice clearly. Use previous-year labels only with verified exam/year/paper/question references, answer-key reference, and an appropriate reuse basis. Account for revised final answer keys.

Public access does not automatically permit republication. Prefer original wording and concise sourced explanations. Do not copy paid banks or entire copyrighted explanations.

## Official starting points

- [CTET](https://ctet.nic.in/): current bulletin, paper information, official papers.
- [BPSC syllabus portal](https://bpsc.bihar.gov.in/syllabus/): relevant recruitment notification and level before full-track mapping.
- [UGC NET syllabi](https://www.ugcnetonline.in/syllabus-new.php): History and relevant general-paper syllabus.
- [NCERT textbooks](https://ncert.nic.in/textbook.php): foundational subject references.

These are discovery sources. Each published question still needs specific evidence. Recheck current patterns before introducing exact mocks.

## Corrections

Keep IDs stable and increment revisions for wording/answer changes. Retire ambiguous items from new sessions. Preserve historical snapshots and explain corrections that affect learning. Revised items pass the same checks as new ones.
