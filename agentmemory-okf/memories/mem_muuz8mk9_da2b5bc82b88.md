---
type: Fact
title: # Explain Hermes memory graph usage

source: hermes
session_id: 20261004_233515_
description: # Explain Hermes memory graph usage

source: hermes
session_id: 20261004_233515_2ac5e9
resource: hermes://session/20261004_233515_2ac5e9

# Conversation

- **Session ID:** `20261004_233515_2ac5e9`
- *
resource: agentmemory://memory/mem_muuz8mk9_da2b5bc82b88
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261004_233515_2ac5e9"]
timestamp: 2026-10-05T08:17:34.398Z
source: agentmemory
strength: 7
---
# Content

# Explain Hermes memory graph usage

source: hermes
session_id: 20261004_233515_2ac5e9
resource: hermes://session/20261004_233515_2ac5e9

# Conversation

- **Session ID:** `20261004_233515_2ac5e9`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-05T04:35:15Z
- **Messages:** 82
- **Tokens:** 228 in / 21210 out

---

### 👤 User — 2026-10-05T04:35:15Z

Explain what the Hermes memory graph is and how to use it.

### 🤖 Assistant — 2026-10-05T04:35:31Z

<details><summary>Reasoning</summary>

The user is asking about the "Hermes memory graph". I should check the Hermes documentation/skills. The hermes-agent skill is relevant here (it's about understanding Hermes's own features). Also, there might be memory graph tools: mcp__agentmemory__memory_graph_query, memory_relations, etc. But "Hermes memory graph" is probably referring to the agentmemory MCP or Hermes's built-in memory feature. Let me check the hermes-agent skill, and the documentation if needed.

According to the instructions, if a skill matches, load it. hermes-agent is for configuration/extensions/troubleshooting, and for understanding features it points to the documentation at https://hermes-agent.nousresearch.com/docs. Let me load the skill and search the documentation for "memory graph".

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: web_search**

```json
{
  "query": "Hermes Agent memory graph site:hermes-agent.nousresearch.com"
}
```

### 🤖 Assistant — 2026-10-05T04:35:51Z

<details><summary>Reasoning</summary>

The user is asking about "Hermes's memory graph." The search results mention several things: MindGraph plugin (semantic graph memory), mnemosyne (temporal knowledge graph), and agentmemory's memory_graph_query tool. Also, in this session, the agentmemory MCP server with `memory_graph_query`, `memory_relations`, `memory_reflect`, etc. is loaded.

The user has agentmemory installed (see skills: agentmemory-hermes-integration, references/agentmemory-zero-memories-troubleshooting.md). So "Hermes's memory graph" most likely refers to the AgentMemory MCP integration the user has — i.e., the knowledge graph/memory relations feature. Or it might be Hermes's built-in memory system.

Let me check the actual memory documentation page and the agentmemory skill reference. Also, I'll check which memory provider the user has configured (hermes memory status). Let me run some investigation:

1. web_extract the memory documentation page.
2. Check the local agentmemory skill: agentmemory-hermes-integration.
3. Check `hermes memory status` locally? Note — the agent's runtime is on mini.local. The terminal backend is local (this host is macOS). Actually, per memory, the viewer is pro.local and the agent runtime is on mini.local. The current host is macOS 27.0. I can run `hermes memory status` in the terminal.

Also, agentmemory's tools include memory_graph_query and memory_relations. "Memory graph" most likely refers to the AgentMemory knowledge graph. Let me gather info: load the agentmemory-hermes-integration skill and extract the memory documentation.

</details>

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

**Tool call: web_extract**

```json
{
  "urls": [
    "https://hermes-agent.nousresearch.com/docs/user-guide/features/memory",
    "https://hermes-agent.nousresearch.com/docs/zh-Hans/plugins/mindgraph"
  ]
}
```

### 🤖 Assistant — 2026-10-05T04:36:32Z

<details><summary>Reasoning</summary>

The user asks: "Explain what the Hermes memory graph is and how to use it."

Hmm — there's ambiguity. There's the built-in Hermes memory (bounded, curated MEMORY.md/USER.md entries injected each turn) — that's not a "graph." There are memory-provider plugins with graphs: mindgraph plugin, mnemosyne ("temporal knowledge graph"), and AgentMemory's knowledge graph (`memory_graph_query`). Given this user's environment, they run AgentMemory on :3111 which has a graph subsystem with `mcp__agentmemory__memory_graph_query`.

The term "Hermes memory graph" — let me check if there's a doc for it. Let me try fetching
