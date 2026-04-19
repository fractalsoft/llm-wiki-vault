---
name: wiki
description: >-
  Use when the user asks how this vault works, how to set up the wiki, what folders
  mean, or how hot.md and the manifest relate. Orchestration and orientation for
  the LLM Wiki layout in Cursor.
---

# wiki — vault layout and orchestration

## Layers

1. **`.raw/`** — Source captures (immutable). Created via **`wiki-raw`**, listed in **`.raw/.manifest.json`**.
2. **`wiki/`** — Curated pages produced by **`wiki-ingest`**, updated over time.
3. **`wiki/hot.md`** — Short-lived session context; read at start of substantive work, update after major sessions.

## Workflow order

1. **Capture** — `wiki-raw` → new files under `.raw/`.
2. **Ingest** — `wiki-ingest` → pages in `wiki/`, manifest entries.
3. **Query** — `wiki-query` → answer from `wiki/` + citations.
4. **Lint** — `wiki-lint` → orphans, broken links, manifest drift.

## Conventions

- Rules in `.cursor/rules/` enforce core invariants; this skill does not override them.
- Prefer wikilinks from `wiki/` back to `.raw/` files for traceability.

## Related skills

| Skill | Role |
|-------|------|
| `wiki-raw` | Creating raw captures |
| `wiki-ingest` | Compiling into `wiki/` |
| `wiki-query` | Answering from the wiki |
| `wiki-lint` | Health checks |

See root [`AGENTS.md`](../../../AGENTS.md) for the full agent index.
