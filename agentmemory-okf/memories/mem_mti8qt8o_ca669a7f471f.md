---
type: Fact
title: # Qdrant Database Collections

source: abacus
session_id: 1359fed935
resource: a
description: # Qdrant Database Collections

source: abacus
session_id: 1359fed935
resource: abacus://conversation/1359fed935

# Conversation

- **Session ID:** `1359fed935`
- **Source:** abacus.ai
- **Project:** A
resource: agentmemory://memory/mem_mti8qt8o_ca669a7f471f
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/1359fed935"]
timestamp: 2026-09-01T05:42:56.815Z
source: agentmemory
strength: 7
---
# Content

# Qdrant Database Collections

source: abacus
session_id: 1359fed935
resource: abacus://conversation/1359fed935

# Conversation

- **Session ID:** `1359fed935`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-01-08T14:37:09+00:00
- **Messages:** 2

---

### 👤 User

what are the collections in the qdrant database?

---

### 🤖 Assistant

### What “collections” are in Qdrant

In Qdrant, a **collection** is the top-level container that stores your data. Conceptually it’s like a “table” (or sometimes an “index”) in other databases/search engines.

A collection contains:

- **Points** (records), each with:
  - an `id`
  - one or more **vectors** (embeddings)
  - optional **payload** (metadata fields)
- The collection’s **vector configuration** (size/dimension, distance metric like cosine/dot/euclid, optional multi-vector/named vectors)
- Indexing/storage settings (payload indexes, quantization, shards/replicas, etc.)

### How to see what collections exist in *your* Qdrant instance

I can’t see your Qdrant server from here, but you can list collections with any of these:

#### 1) REST API (cURL)
```bash
curl -s http://localhost:6333/collections
```

If your Qdrant is remote, replace `localhost` with the host, and add API key headers if enabled.

#### 2) Python client

```python
from qdrant_client import QdrantClient

client =

QdrantClient(url="http://localhost:6333")
print(client.get_collections())
```

#### 3) Qdrant UI
Open the Qdrant Web UI (if you’re running it / have it exposed) and it will show a list of collections.

### Get details about a specific collection
```bash
curl -s http://localhost:6333/collections/<collection_name>
```

If you tell me how you’re running Qdrant (Docker? Qdrant Cloud? URL + whether you use an API key), I can give you the exact command for your setup.

---
