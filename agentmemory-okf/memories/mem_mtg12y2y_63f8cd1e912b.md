---
type: Fact
title: # List free models and uses table

source: hermes
session_id: 20260829_045526_e7
description: # List free models and uses table

source: hermes
session_id: 20260829_045526_e7890e
resource: hermes://session/20260829_045526_e7890e

# Conversation

- **Session ID:** `20260829_045526_e7890e`
- **S
resource: agentmemory://memory/mem_mtg12y2y_63f8cd1e912b
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:53.663Z
source: agentmemory
strength: 7
---
# Content

# List free models and uses table

source: hermes
session_id: 20260829_045526_e7890e
resource: hermes://session/20260829_045526_e7890e

# Conversation

- **Session ID:** `20260829_045526_e7890e`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-29T09:58:31Z
- **Ended:** 2026-08-29T10:53:09Z
- **Messages:** 579
- **CWD:** `/Users/davec`
- **Tokens:** 366732 in / 110538 out

---

### 👤 User — 2026-08-29T09:58:31Z

name the different free models and what they can be used for in a simple table

### 👤 User — 2026-08-29T09:58:31Z

name the different free models and what they can be used for in a simple table

### 🤖 Assistant — 2026-08-29T09:58:39Z

<details><summary>Reasoning</summary>

The user wants a simple table naming the different free models and what they can be used for. This is about Nous Research free models. Let me load the relevant skill first since there's a `nous-free-models` skill and `free-model-benchmark` skill.

Let me check the skill

</details>

**Tool call: skill_view**

```json
{
  "name": "nous-free-models"
}
```

### 🤖 Assistant — 2026-08-29T09:58:39Z

<details><summary>Reasoning</summary>

The user wants a simple table naming the different free models and what they can be used for. This is about Nous Research free models. Let me load the relevant skill first since there's a `nous-free-models` skill and `free-model-benchmark` skill.

Let me check the skill

</details>

**Tool call: skill_view**

```json
{
  "name": "nous-free-models"
}
```

### 🤖 Assistant — 2026-08-29T09:58:44Z

<details><summary>Reasoning</summary>

The user wants a simple table of the free models and what they can be used for. Let me create a simple table based on the skill content. I'll focus on the free/affordable options and keep it simple

</details>

Here's a simple table of the free (or very cheap) Nous-research models and what each is best for:

| Model | Free Via | Context | Best For | Not Great At |
|---|---|---|---|---|
| **Hermes 3 405B** (`:free`) | OpenRouter `:free` | 131K | General chat, long docs, research, roleplay, function calling | Slow in tight agentic tool loops |
| **Hermes 3 70B** | NVIDIA NIM (free credits) | 131K | General chat, lightweight coding, multi-turn | Less raw reasoning than 405B |
| **Step 3.7 Flash** (StepFun) | Nous Portal promos | 262K | Coding agents, fast tool loops, multimodal (text+image) | Slow on single hard reasoning steps; verbose |
| **Nemotron 3 Ultra** (NVIDIA) | Nous Portal / OpenRouter promos | 1M | Hard reasoning, math, STEM, long-document analysis | Slower TTFT; heavy for latency-sensitive loops |
| **Hermes 2 Pro 8B** | OpenRouter (very cheap) | ~8K | Lightweight function calling, JSON mode, fast simple tasks | Limited context, weaker reasoning |
| **DeepHermes 3** (8B / 24B) | Mostly paid | 131K | Dual-mode reasoning (chat ↔ chain-of-thought), math, logic | Free tier uncommon |

**Quick pick:**
- 💬 Everyday chat → **Hermes 3 405B** (`:free`)
- 🤖 Coding / agent loops → **Step 3.7 Flash**
- 🧠 Deep reasoning / long docs → **Nemotron 3 Ultra**
- ⚡ Cheap & fast simple tasks → **Hermes 2 Pro 8B**

One caveat worth repeating: free tiers rotate often (especially the Portal promos), so check [portal.nousresearch.com](https://portal.nousresearch.com/) or [openrouter.ai](https://openrouter.ai) before relying on a specific model staying free.

### 👤 User — 2026-08-29T09:59:52Z

compare these with the kilocode free models

### 🤖 Assistant — 2026-08-29T10:00:00Z

<details><summary>Reasoning</summary>

The user wants me to compare the Nous free models with the "kilocode free models". Kilocode refers to Kilo Code, a coding agent. Let me think about what "kilocode free models" means.

Kilo Code is a VS Code extension coding agent. It has free models available. I should look up what free models Kilo Code offers. Let me check if there's a skill for kilo-code-integration. There were two skills: `kilo-code-integration` and `kilo-agentmemory-integration`. Let me load the kilo-code-integration skill to see if it has info on free models.

Actually, the kilo-code-integration skill might not list free models. Let me check
