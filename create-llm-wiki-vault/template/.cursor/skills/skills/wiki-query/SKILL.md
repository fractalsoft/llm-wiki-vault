---
name: wiki-query
description: >-
  Use when the user asks what the wiki knows, wants an answer grounded in vault
  files, or says query, what do we know about, summarize from notes, or recall
  from the knowledge base. Answers from wiki/ and .raw/ with citations.
---

# wiki-query — answer from the wiki

## Read order

1. **`wiki/hot.md`** — If present, for session context and pointers.
2. **Hub or index pages** in `wiki/` — `_Index.md`, `README`-style pages, or topic hubs the user names.
3. **Target pages** — Open specific `wiki/` files suggested by search or filenames.
4. **`.raw/`** — When the user needs exact source wording or verification; cite the path.

## Search strategy

- Use repository search and glob listing to find relevant `wiki/**/*.md` and `.raw/**/*.md` by title, tag, or keyword.
- Prefer quoting short passages and linking paths over paraphrasing without sources when the question is factual.

## Response shape

- Short direct answer, then **Sources** with bullet list of file paths (and optional section anchors).
- If evidence is missing, say what is missing and suggest **`wiki-ingest`** for new material or **`wiki-raw`** to add captures.

## Related

- **`wiki-lint`** — If answers keep failing, lint may reveal broken links or orphan pages.
