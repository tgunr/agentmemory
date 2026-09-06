---
type: Fact
title: # Nous free models explanation and use cases

source: hermes
session_id: 2026090
description: # Nous free models explanation and use cases

source: hermes
session_id: 20260905_031847_a5eb41
resource: hermes://session/20260905_031847_a5eb41

# Conversation

- **Session ID:** `20260905_031847_a5
resource: agentmemory://memory/mem_mto6gcze_e29dcf0526f2
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-05T09:25:26.840Z
source: agentmemory
strength: 7
---
# Content

# Nous free models explanation and use cases

source: hermes
session_id: 20260905_031847_a5eb41
resource: hermes://session/20260905_031847_a5eb41

# Conversation

- **Session ID:** `20260905_031847_a5eb41`
- **Source:** tui
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-09-05T08:19:47Z
- **Messages:** 22
- **CWD:** `/Users/davec`
- **Tokens:** 72630 in / 3364 out

---

### 👤 User — 2026-09-05T08:19:47Z

explain the nous free models, when to use, etc?

### 🤖 Assistant — 2026-09-05T08:20:03Z

<details><summary>Reasoning</summary>

The user is asking about Nous Research free models. They want to understand what models are available, when to use them, etc. Let me load the relevant skill for this - there's a `nous-free-models` skill in the research category.

</details>

**Tool call: skill_view**

```json
{
  "name": "nous-free-models"
}
```

### 🤖 Assistant — 2026-09-05T08:20:14Z

<details><summary>Reasoning</summary>

The skill content is loaded. Let me summarize this clearly for the user.

</details>

## Nous Free Models — Quick Reference

### What's free right now

| Model | Free via | Best at | Watch out for |
|---|---|---|---|
| **Hermes 3 405B** (`:free`) | OpenRouter — `nousresearch/hermes-3-llama-3.1-405b:free` | General chat, long docs, research — 131K context, strong all-rounder | Slower in tight agent/tool-calling loops; rate-limited (20 RPM / 200 RPD) |
| **Hermes 3 70B** | NVIDIA NIM (free credits on signup) | General chat, lightweight coding | Smaller reasoning ceiling than 405B |
| **Step 3.7 Flash** (StepFun) | Nous Portal (promotional windows) | Coding agents, fast tool loops, multimodal — 262K context, SWE-Bench Pro 56.3 | Verbose on hard tasks; per-task $ can exceed sticker price |
| **Nemotron 3 Ultra** (NVIDIA) | Nous Portal / OpenRouter (`:free`) | Hard reasoning, math, STEM, long-document analysis — 1M context, highest intelligence index | Slower TTFT & generation than Flash; heavy; not ideal for rapid tool loops |

### Quick picks by task

- **Everyday chat / general Q&A** → Hermes 3 405B (`:free`) on OpenRouter
- **Coding agent / many tool calls** → Step 3.7 Flash (if portal promo active) — fast per-step, handles agentic loops well
- **One hard reasoning step that others fail on** → Nemotron 3 Ultra
- **Long document/research (free)** → Hermes 3 405B (131K)
- **Local, zero API cost** → any open-weights Hermes model via Ollama / llama.cpp

### Important caveats

1. **Free tiers rotate.** Portal promos (Step 3.7 Flash, Nemotron 3 Ultra) come and go. OpenRouter `:free` models are more stable but rate-limited.
2. **Rate limits bite in agent loops.** Hermes subagents + tool calls burn 20+ requests/task fast — OpenRouter's 200 RPD free cap fills quickly. Portal tiers are usually more generous.
3. **Hermes 4 is not agent-ready** — tuned for chat/reasoning, not rapid tool-calling. Good for research workflows, bad as the engine inside autonomous agent tasks.
4. **Hermes 3 405B (`:free`) is the reliable free workhorse** — broadest generalist capability, sticks around on OpenRouter, good for most non-latency-sensitive work.

### Switch mid-session
```
/model nousresearch/hermes-3-llama-3.1-405b:free
/model stepfun/step-3.7-flash:free
/model nvidia/nemotron-3-ultra-550b-a55b:free
```

Your current model here is **Solar Pro 4** (via Nous, free) — a different model family from Hermes, so the `:free` Hermes models above are alternatives if you want to switch.

### 👤 User — 2026-09-05T08:22:13Z

/model nousresearch/hermes-3-llama-3.1-405b:free

### 🤖 Assistant — 2026-09-05T08:22:20Z

<details><summary>Reasoning</summary>

The user wants to switch the model to Hermes 3 405B free. This is done via the `/model` slash command in Hermes. Let me check if there's a skill or tool that handles this.

Looking at the available skills, I see `model-switch` under `autonomous-ai-agents` which seems relevant. Let me load it to see if there's a proper way to handle this.

</details>

**Tool call: skill_view**

```json
{
  "name": "model-switch"
}
```

### 🤖 Assistant — 2026-09-05T08:22:25Z

<details><summary>Reasoning</summary>

The user is trying to issue `/model ...` wh
