---
type: Fact
title: # Using REDIS for agentmemory

source: hermes
session_id: 20260616_123610_652022
description: # Using REDIS for agentmemory

source: hermes
session_id: 20260616_123610_652022
resource: hermes://session/20260616_123610_652022

# Conversation

- **Session ID:** `20260616_123610_652022`
- **Sourc
resource: agentmemory://memory/mem_mtg119h0_1244c0fc78ce
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:31:35.108Z
source: agentmemory
strength: 7
---
# Content

# Using REDIS for agentmemory

source: hermes
session_id: 20260616_123610_652022
resource: hermes://session/20260616_123610_652022

# Conversation

- **Session ID:** `20260616_123610_652022`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-16T17:38:05Z
- **Ended:** 2026-06-16T19:50:32Z
- **Messages:** 217
- **CWD:** `/Users/davec`
- **Tokens:** 1821863 in / 25636 out
- **Est. cost:** $0.9645

---

### 👤 User — 2026-06-16T17:38:05Z

Configure agaentmeory to use REDIS and check if it is usings sessions, memories, lesson, etc properly

### 🤖 Assistant — 2026-06-16T17:50:33Z

<details><summary>Reasoning</summary>

Thinking Process:

1.  **Understand the Goal**: The user wants to configure "agentmemory" (agentmemory is a persistent memory system described in AGENTS.md) to use REDIS instead of its current state management (which is file-based SQLite via iii-engine's StateModule according to AGENTS.md). Then, check if it is using sessions, memories, lessons, etc., properly.
2.  **Analyze Context**:
    *   Project: `agentmemory` in `/Volumes/AI/agentmemory`
    *   Architecture: ESM, ii-engine's StateModule, WebSocket on port 49134, built with tsdown, tested with vitest.
    *   Current State Module: File-based SQLite via iii-engine's StateModule (`./data/state_store.db`)
    *   User wants to switch to REDIS.
3.  **Identify Tasks**:
    *   Find where the state engine / KV store is configured and initialized.
    *   Modify the configuration/code to use REDIS instead of SQLite/file-based state.
    *   Check how sessions, memories, lessons, etc., are stored and if they are used properly with the new REDIS setup.
4.  **First Step**: Look at the project structure to find state/db configuration.
    *   Search for "state", "redis", "sqlite", "iii-sdk", "StateModule", "kv".
    *   Let's run `search_files` to find references to `StateModule`, `state_store`, `redis`, `kv`.

</details>

**Tool call: search_files**

```json
{
  "pattern": "StateModule|state_store|redis|redis-client",
  "target": "content"
}
```

### 🤖 Assistant — 2026-06-16T17:50:34Z

<details><summary>Reasoning</summary>

Let's search specifically in the `agentmemory` project directory for `sqlite`, `state`, `kv`, `session`, `memory`, `lesson`.

</details>

**Tool call: search_files**

```json
{
  "target": "content",
  "pattern": "(StateModule|sqlite|redis|kv\\.set|kv\\.get|memory_|lesson_|session_)",
  "path": "/Volumes/AI/agentmemory",
  "limit": 50
}
```

### 🤖 Assistant — 2026-06-16T17:50:34Z

<details><summary>Reasoning</summary>

Let's look at the `src/state/schema.ts` or `src/` directory structure to understand where KV storage is defined.


</details>

**Tool call: terminal**

```json
{
  "command": "find /Volumes/AI/agentmemory/src -type f -name \"*.ts\" | head -30"
}
```

### 🤖 Assistant — 2026-06-16T17:50:34Z

<details><summary>Reasoning</summary>

Let's look for where `kv` is initialized or created. The `AGENTS.md` mentions "File-based SQLite via iii-engine's StateModule". Let's search for how `kv` is exposed or imported.

</details>

**Tool call: search_files**

```json
{
  "pattern": "import.*kv|from.*iii-sdk|StateModule",
  "path": "/Volumes/AI/agentmemory/src",
  "target": "content"
}
```

### 🤖 Assistant — 2026-06-16T17:50:34Z

<details><summary>Reasoning</summary>

Let's look at `/Volumes/AI/agentmemory/src/state/kv.ts` to understand the `StateKV` class and how it interacts with the database.


</details>

**Tool call: read_file**

```json
{
  "limit": 100,
  "path": "/Volumes/AI/agentmemory/src/state/kv.ts"
}
```

### 🤖 Assistant — 2026-06-16T17:50:34Z

<details><summary>Reasoning</summary>

The `StateKV` class delegates to `iii-sdk`'s `state::*` functions (`state::get`, `state::set`, `state::update`, `state::delete`, `state::list`).

This means the actual state storage is managed by the `iii-engine` (which is running on port 49134 as per AGENTS.md). The engine uses `StateModule`.

If the user wants to configure agentmemory to use REDIS, we might need to:
1. Check if `iii-engine` can be configured to use REDIS.
2. Or if agentmemory has its own way to connect
