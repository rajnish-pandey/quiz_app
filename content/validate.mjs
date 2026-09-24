import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const coverage = JSON.parse(fs.readFileSync(path.join(root, 'coverage.json'), 'utf8'));
const sourceIds = new Set(JSON.parse(fs.readFileSync(path.join(root, 'sources.json'), 'utf8')).map(source => source.id));
const packsDir = path.join(root, 'packs');
const files = fs.existsSync(packsDir) ? fs.readdirSync(packsDir).filter(f => f.endsWith('.json')) : [];
const questions = files.flatMap(file => JSON.parse(fs.readFileSync(path.join(packsDir, file), 'utf8')));
const errors = [];
const ids = new Set();
for (const q of questions) {
  if (!q.id || ids.has(q.id)) errors.push(`${q.id || '<missing id>'}: duplicate or missing id`);
  ids.add(q.id);
  for (const locale of ['en', 'hi']) {
    if (!q.stem?.[locale] || !q.explanation?.[locale]) errors.push(`${q.id}: missing ${locale} stem/explanation`);
    if (!Array.isArray(q.options?.[locale]) || q.options[locale].length !== 4) errors.push(`${q.id}: ${locale} must have four options`);
  }
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) errors.push(`${q.id}: invalid answer`);
  if (!q.topic || !q.tracks?.length) errors.push(`${q.id}: missing topic or tracks`);
  if (!q.provenance?.sourceIds?.length) errors.push(`${q.id}: missing provenance`);
  for (const sourceId of q.provenance?.sourceIds || []) if (!sourceIds.has(sourceId)) errors.push(`${q.id}: unknown source ${sourceId}`);
}
console.log(JSON.stringify({packs: files.length, questions: questions.length, errors}, null, 2));
if (errors.length) process.exitCode = 1;
