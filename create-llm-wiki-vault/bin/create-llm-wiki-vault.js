#!/usr/bin/env node
'use strict';

const fs = require('fs/promises');
const path = require('path');

function printHelp() {
  console.log(`
create-llm-wiki-vault — scaffold a Cursor LLM Wiki (Phase A) vault

Usage:
  npx create-llm-wiki-vault@latest [directory]

Arguments:
  directory    Target folder (default: llm-wiki-vault)

Options:
  -h, --help   Show this message

Example:
  npx create-llm-wiki-vault@latest ./my-notes
`);
}

function parseArgs(argv) {
  let target = 'llm-wiki-vault';
  for (const a of argv) {
    if (a === '-h' || a === '--help') return { help: true };
    if (a.startsWith('-')) continue;
    target = a;
  }
  return { help: false, target };
}

async function pathExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function isNonEmptyDir(p) {
  if (!(await pathExists(p))) return false;
  const entries = await fs.readdir(p);
  return entries.length > 0;
}

async function main() {
  const argv = process.argv.slice(2);
  const parsed = parseArgs(argv);
  if (parsed.help) {
    printHelp();
    process.exit(0);
  }

  const { target } = parsed;
  const cwd = process.cwd();
  const dest = path.resolve(cwd, target);

  if (await isNonEmptyDir(dest)) {
    console.error(`Error: destination is not empty: ${dest}`);
    process.exit(1);
  }

  const templateRoot = path.join(__dirname, '..', 'template');
  if (!(await pathExists(templateRoot))) {
    console.error(`Error: template not found at ${templateRoot}`);
    process.exit(1);
  }

  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.cp(templateRoot, dest, { recursive: true });

  const pkgPath = path.join(__dirname, '..', 'package.json');
  const pkgRaw = await fs.readFile(pkgPath, 'utf8');
  const pkg = JSON.parse(pkgRaw);
  const versionFile = path.join(dest, '.llm-wiki-template-version');
  await fs.writeFile(
    versionFile,
    `${pkg.name}@${pkg.version}\n`,
    'utf8'
  );

  console.log(`Created LLM Wiki vault at ${dest}`);
  console.log(`Template: ${pkg.name}@${pkg.version}`);
  console.log('');
  console.log('Next: open this folder in Cursor and read AGENTS.md.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
