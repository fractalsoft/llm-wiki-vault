---
name: wiki-lint
description: >-
  Use when the user asks to lint the wiki, run a health check, find orphan pages,
  broken wikilinks, or verify the manifest matches .raw/ files. Lightweight
  consistency checks for wiki/ and .raw/.
---

# wiki-lint — wiki health checks

## Checks

1. **Orphan `wiki/` pages** — Pages with no inbound wikilinks from other `wiki/` pages (excluding intentional leaves); report or tag for linking.
2. **Broken links** — Wikilinks and markdown links pointing to missing `wiki/` or `.raw/` paths.
3. **Manifest vs disk** — Entries in `.raw/.manifest.json` whose `raw_path` does not exist; `.raw/` files with no manifest entry (optional report as “untracked”).
4. **Empty or stale `wiki/hot.md`** — Nudge to refresh if older than the user’s session expectations (informational).

## Process

- Enumerate `wiki/**/*.md` and build a simple link graph from `[[...]]` and `](...)` targets where resolvable.
- Compare to `.raw/` listing and manifest JSON.

## Output

- Structured list: **errors** (broken links, missing raw files), **warnings** (orphans, untracked raws), **suggestions** (merge or split pages).
- Do not delete content automatically unless the user asks; propose fixes.

## Related

- After fixes, **`wiki-query`** answers should improve.
- **`wiki-ingest`** — Use to register new raws in the manifest if untracked.
