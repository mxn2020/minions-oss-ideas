# minions-oss-ideas

**Idea brainstorms, feasibility scores, tech stack picks, and market gaps**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-oss-ideas/sdk minions-sdk

# Python
pip install minions-oss-ideas

# CLI (global)
npm install -g @minions-oss-ideas/cli
```

---

## CLI

```bash
# Show help
oss-ideas --help
```

---

## Python SDK

```python
from minions_oss_ideas import create_client

client = create_client()
```

---

## Project Structure

```
minions-oss-ideas/
  packages/
    core/           # TypeScript core library (@minions-oss-ideas/sdk on npm)
    python/         # Python SDK (minions-oss-ideas on PyPI)
    cli/            # CLI tool (@minions-oss-ideas/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [oss-ideas.minions.help](https://oss-ideas.minions.help)
- Blog: [oss-ideas.minions.blog](https://oss-ideas.minions.blog)
- App: [oss-ideas.minions.wtf](https://oss-ideas.minions.wtf)

---

## License

[MIT](LICENSE)
