# LLM Wiki Valut project starter

This repository hosts **create-llm-wiki-vault**, a small Node.js CLI that scaffolds a **Cursor LLM Wiki** vault: `.raw/` for source captures, `wiki/` for agent-maintained notes, plus `.cursor` rules and skills.

## Quick start

Install and run from npm (requires Node 18+):

```bash
npx create-llm-wiki-vault@latest [directory]
```

The default target directory is `llm-wiki-vault`. The generator refuses to copy into a non-empty directory.

For local development from this repo:

```bash
cd create-llm-wiki-vault
node bin/create-llm-wiki-vault.js ./path/to/test-vault
```

Full options, publishing notes, and template details are in **[create-llm-wiki-vault/README.md](create-llm-wiki-vault/README.md)**.

## License

MIT — see [LICENSE](LICENSE).
