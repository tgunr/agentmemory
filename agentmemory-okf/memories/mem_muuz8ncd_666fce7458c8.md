---
type: Fact
title: # Compare kilo/auto-free and MOA/Free

source: hermes
session_id: 20261005_01275
description: # Compare kilo/auto-free and MOA/Free

source: hermes
session_id: 20261005_012759_d8e5b3
resource: hermes://session/20261005_012759_d8e5b3

# Conversation

- **Session ID:** `20261005_012759_d8e5b3`
-
resource: agentmemory://memory/mem_muuz8ncd_666fce7458c8
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261005_012759_d8e5b3"]
timestamp: 2026-10-05T08:17:35.414Z
source: agentmemory
strength: 7
---
# Content

# Compare kilo/auto-free and MOA/Free

source: hermes
session_id: 20261005_012759_d8e5b3
resource: hermes://session/20261005_012759_d8e5b3

# Conversation

- **Session ID:** `20261005_012759_d8e5b3`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-10-05T06:28:00Z
- **Messages:** 211
- **Tokens:** 291420 in / 49905 out

---

### 👤 User — 2026-10-05T06:28:00Z

what are the differencn using  kilo/auto-free and MOA/Free

### 🤖 Assistant — 2026-10-05T06:28:05Z

<details><summary>Reasoning</summary>

The user is asking about the difference between "kilo/auto-free" and "MOA/Free" — presumably two free model routing options in their Hermes/kilo setup. Let me look for relevant context. This looks like a Hermes configuration question about provider/model routing.

Let me check skills: "nous-inference-api", "local-model-providers", "model-selection-routing", "hermes-config-audit". Also maybe check the actual config for model aliases "kilo/auto-free" and "MOA/Free".

Let me search the config.

Also "MOA" = Mixture of Agents? In OpenRouter there's "openrouter/free", "openrouter/auto". MOA = Mixture-of-Agents (together.ai moa model). "MOA/Free" might be a Nous provider route... Let's grep configs.

Let me do parallel searches.

</details>

**Tool call: search_files**

```json
{
  "pattern": "MOA|moa|MoA",
  "path": "/Users/davec/.hermes",
  "output_mode": "content",
  "limit": 40
}
```

**Tool call: search_files**

```json
{
  "pattern": "auto-free|auto_free",
  "path": "/Users/davec/.hermes",
  "output_mode": "content",
  "limit": 40
}
```

### 🤖 Assistant — 2026-10-05T06:28:13Z

<details><summary>Reasoning</summary>

Let me look at the config for both models. The user asks about differences between "kilo/auto-free" and "MOA/Free". MOA is likely "Mixture of Agents" — a router config. Let me read the config.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/config.yaml",
  "offset": 460,
  "limit": 130
}
```

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/config.yaml",
  "pattern": "kilo",
  "context": 3
}
```

### 🤖 Assistant — 2026-10-05T06:28:17Z

<details><summary>Reasoning</summary>

The user asks: "what are the differences using kilo/auto-free and MOA/Free". They're comparing two model options in the desktop app model picker presumably. Let me check the MoA config more and understand what "MOA/Free" means in the UI — likely a Mixture-of-Agents preset using free models vs the plain kilo-auto/free model.

Let me look at the skill for hermes-agent MoA section and the rest of the moa config.

</details>

**Tool call: read_file**

```json
{
  "limit": 60,
  "offset": 588,
  "path": "/Users/davec/.hermes/config.yaml"
}
```

**Tool call: search_files**

```json
{
  "context": 6,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-agent/SKILL.md",
  "pattern": "moa|Mixture of Agents"
}
```

### 🤖 Assistant — 2026-10-05T06:28:21Z

<details><summary>Reasoning</summary>

Let me check what MOA toolset actually does — the implementation. Let's look for moa in hermes-agent source, and understand the difference: the current model is kilo-auto/free (a single model routed by Kilo's auto router among free models), while MoA is a mixture-of-agents preset that fans out your turn to several reference models and then aggregates with an aggregator model.

Let me verify MoA behavior in the source and check the aggregator default. Note the top-level moa.aggregator = kilo-auto/free, default_preset: free-mix. So the difference: MoA fanout runs 3 models in parallel (step-3.7-flash:free, longcat-2.5-preview:free, kilo-auto/free) and aggregates with kilo-auto/free, at reference_max_tokens 600 and max_tokens 4096.

Let me quickly confirm how MoA is wired (does it add a tool or intercept each turn?).

</details>

**Tool call: search_files**

```json
{
  "limit": 30,
  "output_mode": "files_only",
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "moa|Mixture of Agents"
}
```

### 🤖 Assistant — 2026-10-05T06:28:24Z

<details><summary>R
