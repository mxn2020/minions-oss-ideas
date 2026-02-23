---
title: Quick Start
description: Get up and running with Minions Oss-ideas in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-oss-ideas/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_oss_ideas import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
oss-ideas info
```
