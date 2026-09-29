---
type: Fact
title: # Get model context window size

source: hermes
session_id: 20260924_101301_9370
description: # Get model context window size

source: hermes
session_id: 20260924_101301_9370e6
resource: hermes://session/20260924_101301_9370e6

# Conversation

- **Session ID:** `20260924_101301_9370e6`
- **Sou
resource: agentmemory://memory/mem_mul67q9i_feabf783b1e7
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-28T11:35:08.068Z
source: agentmemory
strength: 7
---
# Content

# Get model context window size

source: hermes
session_id: 20260924_101301_9370e6
resource: hermes://session/20260924_101301_9370e6

# Conversation

- **Session ID:** `20260924_101301_9370e6`
- **Source:** tui
- **Model:** Qwen3.5-0.8B-BF16
- **Started:** 2026-09-24T15:13:24Z
- **Ended:** 2026-09-27T16:27:10Z
- **Messages:** 21
- **CWD:** `/Users/davec`
- **Tokens:** 111171 in / 1174 out

---

### 👤 User — 2026-09-24T15:13:24Z

what is the context window for the current model

### 🤖 Assistant — 2026-09-24T15:13:59Z

<details><summary>Reasoning</summary>

The user is asking about the context window for the current model. I need to check what model is currently being used. Looking at the conversation context, I can see:

- Model: kilo-auto/free
- Provider: kilocode
- Platform: tui

The context window would depend on the specific model being used by the kilo-auto/free routing. Since this is a "free" tier model via Kilo Code, I should check what the actual model is and its context window.

Let me check if there's a way to determine this. The user profile mentions they use Kilo/VS Code slash commands and want Hermes parity. The model is listed as "kilo-auto/free" which suggests it's an auto-routing to a free model.

I should probably check the Hermes configuration or the current model being used. Let me look at the available skills - there's a `model-selection-routing` skill that might help understand the routing, and there's also `local-model-providers` for local models.

But actually, the simplest answer is that I don't have a direct tool to query the current model's context window. The context window is a property of the model itself, not something Hermes tracks directly. For Kilo Code's free tier, it's likely using a model with a standard context window (like 32K, 128K, or 200K depending on the specific model).

Let me provide a helpful answer based on what's known.

</details>

The current model is **kilo-auto/free** via the Kilo Code provider — this is an auto-routing endpoint that selects a free-tier model at request time. The exact model (and thus its context window) isn't fixed; Kilo rotates free models behind that alias.

Typical free-tier models Kilo routes to have context windows in the **32K–128K token** range (e.g., Llama 3.1 8B ~128K, Qwen 2.5 7B ~32K, etc.). There's no single guaranteed number for `kilo-auto/free`.

If you need a specific context window, pin a concrete model instead of the auto router (e.g., via `/model` slash command or Hermes model selection). Want me to check what model was actually used for this conversation, or help you pin one with a known context size?

### 👤 User — 2026-09-24T15:15:16Z

[System: The active model for this chat has changed to Qwen3.6-35B-A3B-UD-Q4_K_M via provider llamacpp. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-09-24T15:16:14Z

[System: The active model for this chat has changed to Qwen3.6-35B-A3B-UD-Q4_K_M via provider llamacpp. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-09-24T15:16:43Z

[System: The active model for this chat has changed to Qwen3.5-0.8B-BF16 via provider llamacpp. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-09-24T15:17:04Z

what is the context window for the current model

### 🤖 Assistant — 2026-09-24T15:17:17Z

<details><summary>Reasoning</summary>

The user is asking about the context window for the current model. Based on the conversation context, I can see:
- Model: kilo-auto/free
- Provider: kilocode
- Platform: tui

I need to check what the context window is for this model. This information might be available in the Hermes configuration or I could search for it. Let me first check if there's any relevant skill or configuration that would have this information.

</details>

**Tool call: skill_view**

```json
{
  "name": "model-selection-routing"
}
```

### 🤖 Assistant — 2026-09-24T15:17:28Z

<details><summary>Reaso
