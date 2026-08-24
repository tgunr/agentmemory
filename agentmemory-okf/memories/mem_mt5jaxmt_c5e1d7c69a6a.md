---
type: Fact
title: # Compare memory tools and recommend agentmemory alternative

source: hermes
ses
description: # Compare memory tools and recommend agentmemory alternative

source: hermes
session_id: 20260822_073449_ac8029
resource: hermes://session/20260822_073449_ac8029

# Conversation

- **Session ID:** `20
resource: agentmemory://memory/mem_mt5jaxmt_c5e1d7c69a6a
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI"]
timestamp: 2026-08-23T08:17:31.511Z
source: agentmemory
strength: 7
---
# Content

# Compare memory tools and recommend agentmemory alternative

source: hermes
session_id: 20260822_073449_ac8029
resource: hermes://session/20260822_073449_ac8029

# Conversation

- **Session ID:** `20260822_073449_ac8029`
- **Source:** desktop
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-08-22T12:35:19Z
- **Messages:** 28
- **CWD:** `/Volumes/AI`
- **Tokens:** 621130 in / 10034 out

---

### 👤 User — 2026-08-22T12:35:19Z

Compare the following to agentmemory and tell me your recomendation:
Honcho, the reference implementation with AI-native cross-session modeling

Hindsight (vectorize.io), a purpose-built plugin hitting 91.4% accuracy on LongMemEval

Mem0, widely adopted but cloud-focused

Letta (formerly MemGPT), a full agent platform with tiered memory

Zep/Graphiti, temporal knowledge graphs

OpenViking, Holographic, RetainDB, ByteRover, community alternatives

### 🤖 Assistant — 2026-08-22T12:35:29Z

<details><summary>Reasoning</summary>

The user wants me to compare several AI memory/agent memory systems against AgentMemory (which seems to be the system they're currently using or considering). Let me break down what they're asking:

1. Honcho - "reference implementation with AI-native cross-session modeling"
2. Hindsight (vectorize.io) - "purpose-built plugin hitting 91.4% accuracy on LongMemEval"
3. Mem0 - "widely adopted but cloud-focused"
4. Letta (formerly MemGPT) - "full agent platform with tiered memory"
5. Zep/Graphiti - "temporal knowledge graphs"
6. OpenViking, Holographic, RetainDB, ByteRover - "community alternatives"

They want a comparison against "agentmemory" and a recommendation.

Let me first check what AgentMemory is in this context - looking at the workspace, I see `/Volumes/AI/agentmemory/` and `/Volumes/AI/agentmemory-kilo-hooks/` mentioned in AGENTS.md. There's also skills related to AgentMemory integration.

Let me search for information about these systems and also look at what AgentMemory actually is in this context. I should probably do web searches to get current information about each of these systems.

Let me start by:
1. Understanding what AgentMemory is in this workspace
2. Searching for information about each of the comparison targets

I'll batch these independent searches.

</details>

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Honcho AI agent memory cross-session modeling reference implementation 2025 2026"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Hindsight vectorize.io LongMemEval 91.4% accuracy agent memory plugin"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Mem0 AI memory layer cloud-focused agent memory 2025 2026 comparison"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Letta MemGPT agent platform tiered memory system 2025 2026"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Zep Graphiti temporal knowledge graph agent memory 2025 2026"
}
```

**Tool call: session_search**

```json
{
  "query": "agentmemory architecture capabilities features",
  "limit": 3
}
```

### 🤖 Assistant — 2026-08-22T12:35:38Z

<details><summary>Reasoning</summary>

The session_search for agentmemory came back empty. Let me look at what's actually on disk - there's `agentmemory/` and `agentmemory-kilo-hooks/` in the workspace. Let me also search for the community alternatives and look at the local agentmemory code.

</details>

**Tool call: search_files**

```json
{
  "path": "/Volumes/AI/agentmemory",
  "pattern": "*.md",
  "target": "files"
}
```

**Tool call: search_files**

```json
{
  "path": "/Volumes/AI/agentmemory",
  "pattern": "*.py",
  "target": "files"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "OpenViking Holographic RetainDB ByteRover agent memory 2025 2026"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Honcho Plastic Labs agent memory peer representation cross-session benchmark accuracy 2026"
}
```

### 🤖 Assistant — 2026-08-22T12:36:30Z

<details><summary>Reasoning</summary>

The user is asking me to compare several AI agent memory systems to AgentMemory and provide a recomme
