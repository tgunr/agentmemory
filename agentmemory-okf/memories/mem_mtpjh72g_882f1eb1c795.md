---
type: Fact
title: # I had a recent srssion about hermes vs kilo…

source: hermes
session_id: 20260
description: # I had a recent srssion about hermes vs kilo…

source: hermes
session_id: 20260905_043701_a9f0f5
resource: hermes://session/20260905_043701_a9f0f5

# Conversation

- **Session ID:** `20260905_043701_
resource: agentmemory://memory/mem_mtpjh72g_882f1eb1c795
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-06T08:17:47.164Z
source: agentmemory
strength: 7
---
# Content

# I had a recent srssion about hermes vs kilo…

source: hermes
session_id: 20260905_043701_a9f0f5
resource: hermes://session/20260905_043701_a9f0f5

# Conversation

- **Session ID:** `20260905_043701_a9f0f5`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-05T09:37:01Z
- **Messages:** 14
- **CWD:** `/Volumes/davec`
- **Tokens:** 27006 in / 1064 out

---

### 👤 User — 2026-09-05T09:37:01Z

I had a recent srssion about hermes vs kilo using the same model for coding, now i cant find it

### 🤖 Assistant — 2026-09-05T09:37:18Z

<details><summary>Reasoning</summary>

The user wants to find a past session about Hermes vs Kilo using the same model for coding. I should search for that conversation using session_search.

Let me search for relevant terms: "hermes", "kilo", "model", "coding".

</details>

**Tool call: session_search**

```json
{
  "queries": "[\"hermes kilo same model coding\", \"hermes vs kilo coding model\", \"kilo code hermes comparison\", \"hermes kilo model comparison\"]"
}
```

### 🤖 Assistant — 2026-09-05T09:37:25Z

<details><summary>Reasoning</summary>

The `session_search` tool is not available in the main tools list, but I saw `session_search tools (1): - session_search: Recall past conversations: search or read old Hermes…` in the deferred tools section. I need to use `tool_describe` first to load the schema, then `tool_call` to invoke it.

Actually, I should just invoke it directly with `tool_call` since I know the name and basic usage from the description. But it's better to use `tool_describe` first to make sure I get the parameters right. Let me do that.

</details>

**Tool call: tool_describe**

```json
{
  "names": [
    "session_search"
  ]
}
```

### 🤖 Assistant — 2026-09-05T09:37:36Z

<details><summary>Reasoning</summary>

I found the tool - it's called session_search, but in the main tool list it's listed as "session_search" not "mcp__sequential_thinking__sequentialthinking". Let me try calling it directly. It appears the tool_describe confirmed it exists as "session_search" directly.

Looking again at the tools list, I see:
- session_search: "Recall past conversations: search or read old Hermes sessions (FTS5), or scroll inside one."

So it should be directly available. Let me try calling it.

</details>

**Tool call: session_search**

```json
{
  "query": "hermes kilo same model coding",
  "limit": "5",
  "sort": "newest"
}
```

### 🤖 Assistant — 2026-09-05T09:37:41Z

<details><summary>Reasoning</summary>

The tool description shows session_search exists, but it's not directly available. I should call it via tool_call since it's listed as a deferred tool.

</details>

**Tool call: tool_call**

```json
{
  "arguments": {
    "limit": 5,
    "query": "hermes kilo same model coding",
    "sort": "newest"
  },
  "name": "session_search"
}
```

### 🤖 Assistant — 2026-09-05T09:37:47Z

<details><summary>Reasoning</summary>

Found it. The top result matches exactly: a session about Hermes vs Kilo using the same Kilo model for coding, and Hermes being wordier. I'll give them the direct link.

</details>

I found it — it looks like that conversation is in your session from September 5, 2026, where you asked exactly why Hermes is much wordier than Kilo when both use the same Kilo model.

Open it here: `@session:default/20260905_040150_d90bfb`

Short answer from that session: the model is the same, but Hermes wraps it with a heavier coding system prompt, verification/coaching instructions, and more workspace context per turn — so the outputs naturally get longer. Kilo’s wrapper is leaner around the same underlying model.

### 👤 User — 2026-09-05T09:39:31Z

how did you find that? using AM or what?

### 🤖 Assistant — 2026-09-05T09:39:47Z

<details><summary>Reasoning</summary>

The user is asking how I found the previous session. Let me check what tool I used. I used `tool_call` to call `session_search`, which is a built-in Hermes tool for searching past conversations. It's not AgentMemory (AM) - it's Hermes's native session search using FTS5. I should clarify this distinction.

Looking at my memory notes, I can see references to AgentM
