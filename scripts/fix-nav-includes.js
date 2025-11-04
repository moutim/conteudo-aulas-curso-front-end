#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const repoRoot = process.cwd();

function computeRelNav(filePath) {
  const dir = path.dirname(filePath);
  if (dir === '.' || dir === '') return 'nav.js';
  const parts = dir.split(path.sep).filter(Boolean);
  const ups = parts.map(() => '..').join('/');
  return `${ups}/nav.js`;
}

function fixFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const expected = computeRelNav(file);

  const scriptTag = `<script src="${expected}" defer></script>`;

  const navRegex = /<script[^>]*src=["'][^"']*nav\.js["'][^>]*><\/script>/i;

  let newContent = content;
  if (navRegex.test(content)) {
    const current = content.match(navRegex)[0];
    if (!current.includes(expected)) {
      newContent = content.replace(navRegex, scriptTag);
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Updated script in: ${file} -> ${expected}`);
      return true;
    }
    return false;
  } else {
    const headClose = /<\/head>/i;
    if (headClose.test(content)) {
      newContent = content.replace(headClose, `  ${scriptTag}\n</head>`);
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Inserted script into: ${file} -> ${expected}`);
      return true;
    } else {
      console.warn(`No </head> found in ${file}; skipping`);
      return false;
    }
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    const rel = path.relative(repoRoot, full);
    if (rel.startsWith('node_modules') || rel.startsWith('scripts')) continue;
    if (ent.isDirectory()) {
      files = files.concat(walk(full));
    } else if (ent.isFile() && ent.name.endsWith('.html')) {
      files.push(rel);
    }
  }
  return files;
}

const files = walk(repoRoot);
let changed = 0;
files.forEach(f => {
  const did = fixFile(f);
  if (did) changed++;
});
console.log(`Done. Files modified: ${changed}`);
