---
type: Fact
title: # Hermes Agent context window error

source: hermes
session_id: 20260805_080828_
description: # Hermes Agent context window error

source: hermes
session_id: 20260805_080828_bcafc3
resource: hermes://session/20260805_080828_bcafc3

# Conversation

- **Session ID:** `20260805_080828_bcafc3`
- *
resource: agentmemory://memory/mem_msp0dcmq_10615807a7d9
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI"]
timestamp: 2026-08-11T18:43:12.804Z
source: agentmemory
strength: 7
---
# Content

# Hermes Agent context window error

source: hermes
session_id: 20260805_080828_bcafc3
resource: hermes://session/20260805_080828_bcafc3

# Conversation

- **Session ID:** `20260805_080828_bcafc3`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-05T13:08:28Z
- **Messages:** 42
- **CWD:** `/Volumes/AI`
- **Tokens:** 66603 in / 40730 out

---

### 👤 User — 2026-08-05T13:08:29Z

I keep getting:
as a context window of 40,960 tokens, which is below the minimum 64,000 required by Hermes Agent. Choose a model with at least 64K context. If your server reports a window smaller than the model's true window, set model.context_length in config.yaml to the real value (this must be at least 64K).
On the llama models

### 🤖 Assistant — 2026-08-05T13:08:38Z

<details><summary>Reasoning</summary>

The user is getting an error about context window size being below the minimum required by Hermes Agent. They mention "On the llama models" - so they're running local llama models (likely via Ollama) and getting this error about context window of 40,960 tokens being below the minimum 64,000 required.

Let me help them resolve this. The error message itself tells them what to do: set `model.context_length` in config.yaml to the real value (at least 64K).

Let me first check my memory and skills. There's relevant context:
- `ollama-provider-troubleshooting` skill
- `local-model-providers` 
- Memory mentions: "Prefers clean fresh installs from GitHub", and model sizes (Laguna 33GB vs Ornith 9.7GB), "EVERY SESSION: persist key learnings..."

The user has Ollama running locally. The issue is that the model reports a context window of 40,960 tokens but Hermes requires at least 64K.

Let me load the relevant skill to give accurate guidance. The `ollama-provider-troubleshooting` skill seems most relevant. Let me also check the hermes-agent skill since this involves config.yaml.

Actually, the task is about configuring Hermes to work with llama models. Let me load the relevant skills.

Let me think about what's happening:
1. The model reports a context window (num_ctx) of 40,960 tokens
2. Hermes requires at least 64K
3. The fix is to set `model.context_length` in config.yaml

For Ollama, the context length is controlled by `num_ctx` parameter. When Ollama models run, they have a default context length (often 4096, 8192, or 32768 depending on model). 40,960 = 40960 = 40 * 1024. Hmm, that's a weird number. Actually 40960 = 40 * 1024. Could be a default.

The fix involves:
1. Ensuring the Ollama model can actually handle 64K context (some models have a native context that's smaller, but can be extended via num_ctx)
2. Setting `num_ctx` in Ollama (either via Modelfile or via the provider config in Hermes)
3. Setting `model.context_length` in Hermes config.yaml

Let me load the skills to give accurate, tool-specific guidance. Let me load `ollama-provider-troubleshooting` and `hermes-agent`.

Actually, I should verify the current state. Let me check what config they have and what model they're using. But first, let me load the skills since those contain the authoritative procedures.

Let me load the relevant skills.

</details>

**Tool call: skill_view**

```json
{
  "name": "ollama-provider-troubleshooting"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-08-05T13:08:50Z

<details><summary>Reasoning</summary>

The user is getting an error about the model having 40,960 tokens context window, below the minimum 64,000 required. They say "On the llama models."

Wait, the user says "On the llama models" — but the error message about 40,960 is actually a Qwen3 quirk. Let me re-read.

The error message: "as a context window of 40,960 tokens, which is below the minimum 64,000 required by Hermes Agent."

The skill says Qwen3 models report 40,960. But the user says "On the llama models." Hmm. Let me think.

Actually, wait. The user might be saying they're getting this error on llama models. But the 40,960 number is the Qwen3 default. Let me check what's actually going on in their environment rather than assume.

Actually, I should loo
