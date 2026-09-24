import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const required = [
  'index.html', 'styles.css', 'app.js', 'manifest.webmanifest', 'sw.js',
  'content/coverage.json', 'content/sources.json',
  'content/blueprints.json',
  'content/packs/foundation.json', 'content/packs/general-studies.json',
  'content/packs/teacher-exams.json', 'content/packs/ugc-net.json',
  'content/packs/upsc-gs.json', 'content/packs/bpsc-bihar.json',
  'content/packs/ctet-subjects.json'
];
const missing = required.filter(file => !fs.existsSync(file));
if (missing.length) throw new Error(`Missing required files: ${missing.join(', ')}`);
const blueprints = JSON.parse(fs.readFileSync('content/blueprints.json', 'utf8'));
const coverage = JSON.parse(fs.readFileSync('content/coverage.json', 'utf8'));
const knownSubjects = new Set(Object.keys(coverage.subjects));
for (const [id, blueprint] of Object.entries(blueprints)) {
  if (!blueprint.label || !Array.isArray(blueprint.sections) || !blueprint.sections.length) throw new Error(`Invalid blueprint: ${id}`);
  for (const section of blueprint.sections) {
    if (!knownSubjects.has(section.subject) || !Number.isInteger(section.questions) || section.questions <= 0) throw new Error(`Invalid blueprint section: ${id}/${section.subject}`);
  }
}
execFileSync(process.execPath, ['--check', 'app.js'], {stdio: 'inherit'});
execFileSync(process.execPath, ['content/validate.mjs'], {stdio: 'inherit'});
execFileSync(process.execPath, ['content/report.mjs'], {stdio: 'inherit'});
console.log(`Local release check passed: ${required.length} required files present.`);
