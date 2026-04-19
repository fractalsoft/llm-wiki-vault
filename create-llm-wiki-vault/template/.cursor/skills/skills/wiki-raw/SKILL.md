---
name: wiki-raw
description: >-
  Use when the user adds reading material or asks to save a source, clip an article,
  create a raw capture, or prepare files under .raw/ before ingest. Covers naming,
  optional frontmatter, folder layout, and checklist before wiki-ingest.
---

# wiki-raw — create and organize raw captures

## Goal

Place **immutable** source material under `.raw/` so `wiki-ingest` can compile it into `wiki/` without ambiguity.

## Placement

- Use topic subfolders if helpful: `.raw/ai/`, `.raw/books/`, etc. Keep names ASCII-safe and stable.
- One logical source per file is ideal (one article → one `.md` file), unless the user bundles a batch intentionally.

## Filename

- Prefer `YYYY-MM-DD-slug.md` or `source-title-kebab-case.md`.
- Avoid spaces or characters that break cross-tool paths.

## Optional YAML frontmatter (top of file)

```yaml
---
id: unique-stable-id
title: "Human-readable title"
source_url: https://...
captured_at: YYYY-MM-DD
kind: article | book-notes | podcast | pdf | other
---
```

- **`id`** — Stable string for `.raw/.manifest.json` (often slug or hash prefix).

## Body

- Paste or export the main content below frontmatter.
- Do not rewrite historical `.raw/` files to “improve” them; add a **new** file or a dated addendum if the user needs updates.

## Before handing off to ingest

- [ ] File lives under `.raw/` with a clear name.
- [ ] `title` and `source_url` (if any) are set for traceability.
- [ ] User knows this file will not be edited routinely after capture.

## Related

- After capture, use **`wiki-ingest`** to compile into `wiki/` and update `.raw/.manifest.json`.
