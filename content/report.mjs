import fs from 'node:fs';
import path from 'node:path';
const here = path.dirname(new URL(import.meta.url).pathname).replace(/^\//, '').replace(/^([A-Za-z]):/, '$1:');
const coverage = JSON.parse(fs.readFileSync(path.join(here, 'coverage.json'), 'utf8'));
const packDir = path.join(here, 'packs');
const files = fs.readdirSync(packDir).filter(f => f.endsWith('.json'));
const questions = files.flatMap(file => JSON.parse(fs.readFileSync(path.join(packDir, file), 'utf8')));
const topics = new Set(questions.map(q => q.topic.toLowerCase()));
const rows = [];
for (const [subject, topicIds] of Object.entries(coverage.subjects)) {
  const matched = topicIds.filter(id => [...topics].some(topic => topic.includes(id.replaceAll('-', ' '))));
  rows.push({subject, plannedTopics: topicIds.length, matchedTopics: matched.length, missingTopicIds: topicIds.filter(id => !matched.includes(id))});
}
const totalPlanned = rows.reduce((n, r) => n + r.plannedTopics, 0);
const totalMatched = rows.reduce((n, r) => n + r.matchedTopics, 0);
console.log(JSON.stringify({packs: files.length, questions: questions.length, plannedTopicGroups: totalPlanned, matchedTopicGroups: totalMatched, coveragePercent: totalPlanned ? Math.round(totalMatched / totalPlanned * 100) : 0, subjects: rows}, null, 2));
