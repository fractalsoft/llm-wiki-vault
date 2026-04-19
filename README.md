# Cursor LLM Wiki (Phase A)

A **Karpathy-style LLM Wiki** in a folder: you keep **immutable sources** in `.raw/`, and Cursor agents maintain a linked **wiki** in `wiki/` using project **rules** and **skills**. Optional: open the same folder as an [Obsidian](https://obsidian.md/) vault for reading and graph view.

## What this is

- **Phase A** — Curated markdown, wikilinks, and summaries. Ingest reads your sources and updates `wiki/`; you navigate with search, hubs, and `wiki/hot.md`.
- **Not included** — Vector databases and embedding pipelines (“Phase B”). You can add them later; they complement this layout rather than replacing it.

## Best uses

### Strong fits

- **Research and learning** — Articles, papers, course notes, and podcast summaries in one linked graph; agents help maintain cross-references and concept pages.
- **Personal or team knowledge bases** — Playbooks, decisions, “how we work,” and meeting notes with immutable sources and a curated `wiki/` layer.
- **Long-horizon topics** — Areas where new material **compounds** (each ingest updates hubs and related pages).
- **Markdown-first workflows** — Files in git, Cursor as editor/agent, Obsidian optional as a reader.
- **Traceability** — Answers grounded in named files under `.raw/` and `wiki/`, not only free-form chat.

### Poor fits (consider other tools)

- **Huge unstructured corpora** — If you need semantic search over millions of chunks without curating pages, you likely want an embeddings/RAG pipeline in addition to (or instead of) this pattern.
- **Production, low-latency retrieval** — This repo is for **working knowledge**, not a hosted search API.
- **Secrets and regulated data** — Do not store sensitive content without a clear threat model; use private repos and team policies. See [`AGENTS.md`](AGENTS.md) and `.cursor/rules/llm-wiki-core.mdc`.

## Prerequisites

- [Cursor](https://cursor.com/) with this folder opened as the project.
- Optional: Obsidian pointing at this folder if you want local graph and reading features.

## Repository layout

| Path | Purpose |
|------|---------|
| `.raw/` | Immutable captures (your reading material). |
| `.raw/.manifest.json` | Registry of sources (`version`, `sources` array) for dedup and traceability. |
| `wiki/` | Agent-curated pages: summaries, topics, cross-links. |
| `wiki/hot.md` | Short session handoff — what matters now, pointers to key pages. |
| `.cursor/rules/` | Invariants and wiki markdown conventions. |
| `.cursor/skills/` | Workflows: raw capture, ingest, query, lint. |
| [`AGENTS.md`](AGENTS.md) | **Agent bootstrap** — read this when teaching an AI how to work in this repo. |

### Manifest entry shape

Each item in `sources` can include fields such as:

- `id` — Stable identifier.
- `raw_path` — Path under `.raw/`.
- `source_url` — Optional canonical URL.
- `ingested_at` — ISO date string.
- `wiki_pages` — List of `wiki/` paths touched by ingest.

Start with an empty `sources` array; see the `wiki-ingest` skill for the full workflow.

## Typical usage

Work in **natural language** in Cursor. The agent uses **skills** when relevant:

1. **Add sources** — Ask to capture or save material into `.raw/` (skill: `wiki-raw`).
2. **Ingest** — Ask to compile new `.raw/` files into `wiki/`, update cross-links, and append to `.manifest.json` (skill: `wiki-ingest`).
3. **Query** — Ask what the wiki knows about a topic; answers should cite file paths (skill: `wiki-query`).
4. **Lint** — Ask for a health check: orphans, broken links, manifest vs files (skill: `wiki-lint`).

Orientation and vault structure: skill `wiki`.

## Where to go next

- **Agents** — [`AGENTS.md`](AGENTS.md) (bootstrap, skill index, Phase B note).
- **Pattern** — [Karpathy LLM Wiki gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

## TODOS:
- add npx support to create new wikis.
- add claude support
- different source ingests
- add integration gateways
- add custom AI harness