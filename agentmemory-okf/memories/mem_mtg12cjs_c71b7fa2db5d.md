---
type: Fact
title: # Create /todo command with agentmemory

source: hermes
session_id: 20260819_050
description: # Create /todo command with agentmemory

source: hermes
session_id: 20260819_050402_e7b961
resource: hermes://session/20260819_050402_e7b961

# Conversation

- **Session ID:** `20260819_050402_e7b961`
resource: agentmemory://memory/mem_mtg12cjs_c71b7fa2db5d
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI"]
timestamp: 2026-08-30T16:32:25.788Z
source: agentmemory
strength: 7
---
# Content

# Create /todo command with agentmemory

source: hermes
session_id: 20260819_050402_e7b961
resource: hermes://session/20260819_050402_e7b961

# Conversation

- **Session ID:** `20260819_050402_e7b961`
- **Source:** desktop
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-08-19T10:05:19Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 105
- **CWD:** `/Volumes/AI`
- **Tokens:** 1271535 in / 13918 out

---

### 👤 User — 2026-08-19T10:05:19Z

Need to create a /todo which adds tasks to be done, perhaps using agentmemory? Is there some kind of hermes action that already does this?

### 🤖 Assistant — 2026-08-19T10:05:34Z

<details><summary>Reasoning</summary>

The user is asking about creating a todo system that adds tasks to be done, possibly using agentmemory. They want to know if there's already a Hermes action that does this.

Let me think about what tools are available:
1. The `todo` tool I have available - this manages a task list for the current session
2. There might be agentmemory tools that could be used for persistent todos
3. There might be a skill that handles this

Let me search for relevant skills and tools. The user is asking about a "todo" functionality - there might be an existing skill for this. Let me check the skills list and also search for relevant tools.

Looking at the available skills, I see:
- `session-librarian` - "Organize sessions by prompt: find, rename, archive, prune."
- `productivity-tools` - "Productivity integrations: email (Himalaya), Google Works..."

But there's no explicit "todo" skill. Let me search for agentmemory tools and see if there's a way to create persistent todos.

The user might be thinking of:
1. The session-level `todo` tool I have
2. Some agentmemory-based persistent todo system
3. A cron job that manages todos

Let me search for relevant tools and skills to give them a good answer. I should load the `hermes-agent` skill since the question is about Hermes actions/capabilities, and also search for agentmemory tools.

Actually, looking more carefully, the user is asking about:
1. Whether there's a Hermes action that already creates/manages todos
2. Whether agentmemory can be used for this

Let me search for relevant tools and check if there's a skill for this.

</details>

**Tool call: skills_list**

```json
{
  "category": "productivity"
}
```

**Tool call: tool_search**

```json
{
  "query": "agentmemory todo task"
}
```

**Tool call: tool_search**

```json
{
  "query": "hermes action create task todo list"
}
```

### 🤖 Assistant — 2026-08-19T10:05:47Z

<details><summary>Reasoning</summary>

The user is asking about creating a todo system. Let me look at what they have available:

1. There's a `todo` tool I have access to — it's in my tool list already (I can see it in the system prompt). It manages task lists for the current session.
2. AgentMemory tools are available — `mcp__agentmemory__memory_save`, `mcp__agentmemory__memory_recall`, etc. These are durable memory across sessions.
3. There are productivity skills like `document-to-action-items`, `meeting-action-items`, `weekly-review-planning`.

The user seems to be asking whether there's a built-in Hermes action (like a slash command or MCP tool) that creates todos. Let me check the `todo` tool more carefully — it's already in my available tools:

```
"todo": Manage your task list for the current session. Use for complex tasks with 3+ steps or when the user provides multiple tasks.


```

And then there's the AgentMemory approach with the `memory_save` tool for persistent storage across sessions. So the answer is that the `todo` tool exists for session-specific tasks, but if they want something that persists beyond the current conversation, AgentMemory would be the way to go.

</details>

There's actually a built-in **`todo` tool** already available to me — it manages a task list for the current session. It's not a slash command or Hermes action per se, but it's a first-class tool I can use directly.

As for AgentMemory — yes, it has `memory_save` / `memory_recall` tools that could back a todo system, but those are for durable facts/notes, not structured t
