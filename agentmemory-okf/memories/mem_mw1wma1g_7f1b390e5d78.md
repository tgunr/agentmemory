---
type: Fact
title: # Compare Hermes bots vs Grok bots features

source: hermes
session_id: local-9c
description: # Compare Hermes bots vs Grok bots features

source: hermes
session_id: local-9c7a0ee603f3475bbda2bc4c985bd8f5fa97fa2e81a27c98e3595c4d5f185983
resource: hermes://session/local-9c7a0ee603f3475bbda2bc4c
resource: agentmemory://memory/mem_mw1wma1g_7f1b390e5d78
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-11-04T09:18:18.039Z
source: agentmemory
strength: 7
---
# Content

# Compare Hermes bots vs Grok bots features

source: hermes
session_id: local-9c7a0ee603f3475bbda2bc4c985bd8f5fa97fa2e81a27c98e3595c4d5f185983
resource: hermes://session/local-9c7a0ee603f3475bbda2bc4c985bd8f5fa97fa2e81a27c98e3595c4d5f185983

# Conversation

- **Session ID:** `local-9c7a0ee603f3475bbda2bc4c985bd8f5fa97fa2e81a27c98e3595c4d5f185983`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-01T13:23:25Z
- **Ended:** 2026-11-03T11:13:10Z
- **Messages:** 28
- **CWD:** `/Users/davec`
- **Tokens:** 151986 in / 5414 out
- **Est. cost:** $-73769.0000

---

### 👤 User — 2026-11-01T13:23:27Z

Compare Hermes bots with Grok bots features.

### 🤖 Assistant — 2026-11-01T13:23:35Z

<details><summary>Reasoning</summary>

The user asks: "Compare Hermes bots with Grok bots features." This is ambiguous. What are "Hermes bots" and "Grok bots"? Hmm. Possibly they mean Hermes Agent (Nous Research) vs Grok / xAI's Grok agents/bots? Or "bots" as in Telegram bots? Hermes has telegram-bots skill. Grok has... Grok bots? There's "Grok" from xAI with "Tasks" and possibly "Grok bots" — there was news about xAI's "Grok Companions" (Ani, Rudi) — bot-like characters. Or "Grok bots" could refer to Twitter/X bots powered by Grok?

Given ambiguity, per instructions: ask clarifying question if unclear. But also could research. The Karpathy guidelines say surface ambiguity, ask rather than guess. But also the user might expect me to figure it out.

Let me consider: Hermes Agent is the platform I'm running on. "Hermes bots" — Hermes supports bots across Telegram, Discord, Slack, etc. (gateways/adapters). "Grok bots" — xAI recently launched "Grok bots"? Actually in 2025 xAI released "Grok Companions" — AI characters with 3D avatars (Ani, Rudi, Valentine). Also xAI has an API. Hmm, there might be something newer: "Grok Bots" in X? Actually X launched "Grok-powered bots"? Let me research quickly rather than guess — web search for "Grok bots" features.

I think best approach: do a quick search to see what "Grok bots" refers to and gather Hermes bot capabilities (I have skills: telegram-bots, hermes-agent). Then ask? Given "keep responses brief", maybe do research then present comparison, noting what I took each to mean.

Let me search web for "Grok bots" and check Hermes docs on gateways/bots.

I'll batch: web_search("Grok bots xAI features"), web_search("Hermes Agent bots gateways Telegram Discord Slack"), and skill_view telegram-bots maybe. Let's do it.

Actually careful about token discipline — batch queries.

Let me run web searches first.

</details>

**Tool call: web_search**

```json
{
  "limit": 6,
  "query": "Grok bots xAI features what are Grok bots"
}
```

**Tool call: web_search**

```json
{
  "limit": 6,
  "query": "xAI Grok companions bots platform 2026 launch"
}
```

**Tool call: web_search**

```json
{
  "limit": 6,
  "query": "Nous Research Hermes Agent bot gateways Telegram Discord Slack features"
}
```

### 🤖 Assistant — 2026-11-01T13:23:47Z

<details><summary>Reasoning</summary>

So Grok Bot = xAI's agent product (cloud computer, multi-bot orchestration, routines, skills, approvals, connectors, X integration). Hermes Agent = local agent runtime with bots on 27+ messaging platforms, skills, cron, kanban, memory, MCP, plugins, self-hosted, BYO models.

"Compare Hermes bots with Grok bots features" — I think they mean the agent-bot products: Hermes gateway bots (which run on Telegram/Discord/etc.) vs Grok Bot teammates. I'll build a comparison table focusing on: where it runs (local machine vs cloud VM), surfaces, multi-bot orchestration, persistence/memory, scheduling, skills/routines, approvals, connectors/MCP, model choice, pricing, self-host, privacy.

Note Grok Bot's key differentiator: their own cloud computer, computer-use, shareable team bots, X integration, routine by demonstration. Hermes: 27+ platforms, BYO models, local filesystem/terminal on your machine, full toolset (terminal, browser, delegate_task, kanban, cron), memory, skills, plugins, MIT open source, free (pay for models).

Should I confirm intent? The comparison is answerable. I'll do it with a short note on interpretation. Keep it reasonably brief but it's a comparison — table plus "p
