---
name: wiki-ingest
description: >-
  Use when the user asks to ingest, compile, or integrate sources into the wiki,
  process new .raw files, update the manifest, or refresh topic hubs from reading
  material. Compiles .raw/ into wiki/ with cross-links.
---

# wiki-ingest — compile sources into the wiki

## Preconditions

- New or updated captures exist under **`.raw/`** (see **`wiki-raw`**).
- Read **`.raw/.manifest.json`** to avoid duplicate ingest of the same `id`.

## Steps

1. **Enumerate sources** — List new `.raw/` files not yet reflected in the manifest (or marked pending).
2. **Read each source** — Extract themes, entities, and claims needed for wiki pages.
3. **Write or update `wiki/` pages** — Topic pages, hub pages, and short source-summary stubs that link to the raw file.
4. **Cross-link** — Connect related `wiki/` pages with wikilinks; link summaries to `[[../.raw/...]]` or markdown paths as appropriate.
5. **Update manifest** — For each ingested source, append or merge an entry in **`.raw/.manifest.json`**: `id`, `raw_path`, optional `source_url`, `ingested_at`, `wiki_pages` touched.
6. **Update `wiki/hot.md`** — Note what was ingested and any follow-ups.

## Manifest entry shape (example)

Root file `.raw/.manifest.json` uses `version` and a `sources` array. Append one object per ingested source:

```json
{
  "version": 1,
  "sources": [
    {
      "id": "example-article-slug",
      "raw_path": ".raw/example-article-slug.md",
      "source_url": "https://example.com/article",
      "ingested_at": "2026-04-19",
      "wiki_pages": ["wiki/Topic - Example.md"]
    }
  ]
}
```

Keep this schema consistent across the repo.

## Related

- **`wiki-lint`** — Run after large ingests to catch broken links and orphans.
