# create-llm-wiki-vault

Scaffold a **Cursor LLM Wiki (Phase A)** vault: `.raw/`, `wiki/`, `.cursor/rules`, `.cursor/skills`, `AGENTS.md`, and `README.md`.

## Usage

```bash
npx create-llm-wiki-vault@latest [directory]
```

- **directory** — Where to create the vault (default: `llm-wiki-vault`). Parent directories are created if needed.
- The generator refuses to copy into a **non-empty** directory.

After generation, open the folder in [Cursor](https://cursor.com/) and read `AGENTS.md`.

## Generated marker

Each vault includes `.llm-wiki-template-version` with the package name and semver (e.g. `create-llm-wiki-vault@1.0.0`) so you can tell which template version you have.

## Local development

From this repo:

```bash
node bin/create-llm-wiki-vault.js ./path/to/test-vault
```

Publish to npm (set `"repository"` in `package.json` first if you use a public repo):

```bash
cd create-llm-wiki-vault
npm publish --access public
```

## License

MIT
