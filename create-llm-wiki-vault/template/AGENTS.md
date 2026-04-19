# Agent instructions — Cursor LLM Wiki (Phase A)

This repository follows a **Karpathy-style LLM Wiki** pattern: immutable **sources** in `.raw/`, agent-curated **knowledge** in `wiki/`, and **rules + skills** in `.cursor/` that define how to work here. It works with any Cursor agent that respects project rules and skills.

## Bootstrap (read first)

1. Read this file and [`.cursor/rules/llm-wiki-core.mdc`](.cursor/rules/llm-wiki-core.mdc) for non-negotiables.
2. If `wiki/hot.md` exists, read it for recent context before large wiki tasks.
3. Use the **skills** below for workflows; **rules** enforce invariants.

## Directory map

| Path | Role |
|------|------|
| `.raw/` | Immutable ingested sources (articles, notes, exports). Add new files; do not routinely edit existing captures. |
| `.raw/.manifest.json` | Registry of sources (ids, paths, optional URL/date) for dedup and traceability. |
| `wiki/` | Generated and maintained wiki pages: summaries, concepts, hubs, cross-links. |
| `wiki/hot.md` | Short session handoff: what matters now, links to key pages. |
| `.cursor/rules/` | Always-on and scoped rules (`llm-wiki-core.mdc`, `llm-wiki-markdown.mdc`). |
| `.cursor/skills/` | Workflow skills: raw capture, ingest, query, lint, orchestration. |

## Rules vs skills

- **Rules** — Enforce safety and structure (immutable `.raw/`, manifest updates, `hot.md`, no secrets).
- **Skills** — Step-by-step workflows for capture, ingest, answering from the wiki, and linting.

## Project skills

| Skill | When to use |
|-------|----------------|
| `wiki-raw` | User adds or prepares new material: naming, frontmatter, placement under `.raw/`. |
| `wiki` | Vault layout, conventions, how `hot.md` and manifest fit together. |
| `wiki-ingest` | Compile sources into `wiki/`: new pages, cross-links, manifest updates. |
| `wiki-query` | Answer questions from the wiki: order of reads, citations to files. |
| `wiki-lint` | Health checks: orphans, broken links, manifest vs `.raw/` consistency. |

Each skill lives in `.cursor/skills/<name>/SKILL.md`.

## Phase A vs Phase B (future)

- **Phase A (this repo)** — Curated markdown wiki, full-file or chunked **reading** of sources at ingest time, navigation via `wiki/`, search, and links. No embedding index is required.
- **Phase B (optional extension)** — Vector embeddings and semantic retrieval over very large corpora. Does not replace Phase A; it can complement it (e.g. retrieve candidate passages before updating the wiki). Not implemented here unless added explicitly.

## References

- Karpathy LLM Wiki pattern: [gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- Similar multi-agent layout: [claude-obsidian AGENTS.md](https://raw.githubusercontent.com/AgriciDaniel/claude-obsidian/main/AGENTS.md)
