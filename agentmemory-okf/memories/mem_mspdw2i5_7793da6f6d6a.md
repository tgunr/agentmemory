---
type: Fact
title: # Understanding AgentMemory UI components and relationships

source: hermes
sess
description: # Understanding AgentMemory UI components and relationships

source: hermes
session_id: 20260811_192552_0abbc3
resource: hermes://session/20260811_192552_0abbc3

# Conversation

- **Session ID:** `202
resource: agentmemory://memory/mem_mspdw2i5_7793da6f6d6a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:41.101Z
source: agentmemory
strength: 7
---
# Content

# Understanding AgentMemory UI components and relationships

source: hermes
session_id: 20260811_192552_0abbc3
resource: hermes://session/20260811_192552_0abbc3

# Conversation

- **Session ID:** `20260811_192552_0abbc3`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-12T00:25:52Z
- **Messages:** 54
- **CWD:** `/Users/davec`
- **Tokens:** 113754 in / 16079 out

---

### 👤 User — 2026-08-12T00:25:52Z

Explain to me in simple terms and examples how I should use the AgentMemory UI. I don't understand the relationship between sessions, memory, actions, lessons crystals, etc

### 🤖 Assistant — 2026-08-12T00:26:15Z

<details><summary>Reasoning</summary>

The user wants me to explain the AgentMemory UI in simple terms, including the relationship between sessions, memory, actions, lessons, crystals, etc.

Let me think about what I know. There are memory tools available via MCP (agentmemory). But the user is asking about the UI, not the tools. I have some knowledge from memory about AgentMemory being a local REST service at 127.0.0.1:3111. But the user wants a conceptual explanation of the data model.

I should be careful not to fabricate. The system prompt says I should not substitute plausible-looking fabricated output. For explaining a UI, I should ground my explanation in actual facts. I have the memory note about AgentMemory: REST 127.0.0.1:3111 = iii engine + node dist/index.mjs worker child.

But the user is asking about the conceptual relationship between sessions, memory, actions, lessons, crystals. I should look at the actual tool descriptions since those reveal the data model. Let me think about what the MCP tools tell us:

- mcp__agentmemory__memory_action_create / memory_action_update — actions
- mcp__agentmemory__memory_crystallize — crystals
- mcp__agentmemory__memory_lesson_save / memory_lesson_recall — lessons
- mcp__agentmemory__memory_recall / memory_save — memory
- mcp__agentmemory__memory_sessions — sessions
- mcp__agentmemory__memory_slot_create / get / list / append / replace — slots
- mcp__agentmemory__memory_sketch_create / promote — sketches
- mcp__agentmemory__memory_sentinel_create / trigger — sentinels
- mcp__agentmemory__memory_routine_run — routines
- mcp__agentmemory__memory_commit_lookup / commits — git commits
- mcp__agentmemory__memory_facet_query / facet_tag — facets
- mcp__agentmemory__memory_relations — relations
- mcp__agentmemory__memory_audit, memory_heal, memory_frontier, memory_governance_delete
- mcp__agentmemory__memory_observations... 
- mcp__agentmemory__memory_signal_read / send — signals
- mcp__agentmemory__memory_team_feed / team_share — team
- mcp__agentmemory__memory_vision_search — vision
- mcp__agentmemory__memory_graph_query — graph
- mcp__agentmemory__memory_patterns — patterns
- mcp__agentmemory__memory_profile, memory_governance_delete, memory_checkpoint, memory_compress_file, memory_consolidate, memory_crystallize, memory_diagnose, memory_export, memory_frontier, memory_insight_list, memory_lease, memory_mesh_sync, memory_next, memory_obfuscate... 

The user wants to understand the AgentMemory UI. This is the local AgentMemory service. I should probably actually look at the docs or the UI to give an accurate explanation. The honest approach: I should ground this in real knowledge rather than fabricate the UI's appearance.

Let me think. The user profile memory says "Local AgentMemory: REST 127.0.0.1:3111 = iii engine + node dist/index.mjs worker child". And there's a skill `okf-agentmemory-index`. There might be a skill about agentmemory integration: `agentmemory-hermes-integration`.

Given the request is conceptual ("explain in simple terms and examples how I should use the AgentMemory UI"), I should provide an explanation. But I must not fabricate details I don't know. I think the best approach is:

1. Check if there's a skill or docs I can load for agentmemory to ground the explanation.
2. Possibly look at the actual UI via browser or check the service.

Actually, the user is asking me to explain the UI from their perspective (they're the user). I should give a genuinely useful, accurate conceptual model. T
