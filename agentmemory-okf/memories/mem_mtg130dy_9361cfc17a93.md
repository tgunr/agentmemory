---
type: Fact
title: # How is basic-memory functioning alongside AM in…

source: hermes
session_id: 2
description: # How is basic-memory functioning alongside AM in…

source: hermes
session_id: 20260830_110521_05cb8f
resource: hermes://session/20260830_110521_05cb8f

# Conversation

- **Session ID:** `20260830_110
resource: agentmemory://memory/mem_mtg130dy_9361cfc17a93
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-30T16:32:56.659Z
source: agentmemory
strength: 7
---
# Content

# How is basic-memory functioning alongside AM in…

source: hermes
session_id: 20260830_110521_05cb8f
resource: hermes://session/20260830_110521_05cb8f

# Conversation

- **Session ID:** `20260830_110521_05cb8f`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-08-30T16:06:42Z
- **Messages:** 222
- **CWD:** `/Volumes/davec`
- **Tokens:** 149382 in / 51524 out

---

### 👤 User — 2026-08-30T16:06:42Z

How is basic-memory functioning alongside AM in Hermes?

### 👤 User — 2026-08-30T16:06:42Z

How is basic-memory functioning alongside AM in Hermes?

### 🤖 Assistant — 2026-08-30T16:06:50Z

<details><summary>Reasoning</summary>

The user is asking about how "basic-memory" functions alongside "AM" (AgentMemory) in Hermes. This seems to be about the relationship between two memory systems in Hermes Agent. Let me search for relevant information.

First, I should look at what skills might be relevant. The user's memory mentions AgentMemory and there are skills like `agentmemory-hermes-integration`, `okf-agentmemory-index`, etc. Let me check those skills and also search for information about basic-memory.

</details>

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

**Tool call: session_search**

```json
{
  "query": "basic-memory AM AgentMemory Hermes"
}
```

### 🤖 Assistant — 2026-08-30T16:06:50Z

<details><summary>Reasoning</summary>

The user is asking about how "basic-memory" functions alongside "AM" (AgentMemory) in Hermes. This seems to be about the relationship between two memory systems in Hermes Agent. Let me search for relevant information.

First, I should look at what skills might be relevant. The user's memory mentions AgentMemory and there are skills like `agentmemory-hermes-integration`, `okf-agentmemory-index`, etc. Let me check those skills and also search for information about basic-memory.

</details>

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

**Tool call: session_search**

```json
{
  "query": "basic-memory AM AgentMemory Hermes"
}
```

### 🤖 Assistant — 2026-08-30T16:07:08Z

<details><summary>Reasoning</summary>

I have enough context to answer this from memory plus the session hit. The key point from history: `basic-memory` shows up in Hermes configs as a generic/local memory MCP entry, but the user’s real long-term memory backend is AgentMemory. So the question is really about how those two sit alongside each other in Hermes, not whether they’re the same system.

</details>

In your setup, `basic-memory` and AgentMemory are **parallel, separate memory layers**, not one replacing the other.

- **AgentMemory** is your primary long-term memory store for Hermes/Kilo sessions, insights, actions, and cross-tool retrieval via MCP.
- **basic-memory** shows up in Hermes config as a **secondary/generic memory MCP server**, but in your observed usage it does **not** replace or mirror AM.

The real integration path is:
- Hermes sessions → AgentMemory directly
- Kilo sessions → hooks/OKF indexer → AgentMemory
- `basic-memory` is just another available MCP server in the desktop panel

So they can coexist, but if your goal is “one searchable memory across Hermes and Kilo,” that’s **AgentMemory**, while `basic-memory` is independent and not required for that.

### 👤 User — 2026-08-30T16:08:11Z

explain how they differ, i like having a human readable memory system

### 🤖 Assistant — 2026-08-30T16:08:23Z

<details><summary>Reasoning</summary>

Thinking Process:

1.  **Analyze the User's Request:**
    *   **Question:** Explain how `basic-memory` and `AgentMemory` (AM) differ.
    *   **User Preference:** "I like having a human readable memory system."
    *   **Context:** The user is running Hermes on macOS, has multiple profiles, uses AgentMemory extensively for cross-tool (Hermes/Kilo) memory, and has `basic-memory` enabled in at least one profile (`ai` profile config).

2.  **Identify the Core Subjects:**
    *   **AgentMemory (AM):** The complex, graph-based, vector-search, action-oriented memory system the user has heavily integrated (REST API, MCP, OKF bundles, sessions, act
