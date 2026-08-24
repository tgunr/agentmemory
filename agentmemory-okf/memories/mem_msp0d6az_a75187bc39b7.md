---
type: Fact
title: # Expected model error and scope decision

source: hermes
session_id: 20260724_0
description: # Expected model error and scope decision

source: hermes
session_id: 20260724_031532_50bdce
resource: hermes://session/20260724_031532_50bdce

# Conversation

- **Session ID:** `20260724_031532_50bdc
resource: agentmemory://memory/mem_msp0d6az_a75187bc39b7
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-11T18:43:04.594Z
source: agentmemory
strength: 7
---
# Content

# Expected model error and scope decision

source: hermes
session_id: 20260724_031532_50bdce
resource: hermes://session/20260724_031532_50bdce

# Conversation

- **Session ID:** `20260724_031532_50bdce`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-24T08:15:33Z
- **Messages:** 39
- **CWD:** `/Users/davec`
- **Tokens:** 78029 in / 20666 out

---

### 👤 User — 2026-07-24T08:15:33Z

I want to move away from ollama and start using llama.cpp. What needs to be done to accomplish this? I have llama installed via homebrew, how do we get Hermes to begin using llama in place of, or as a new provider.

### 🤖 Assistant — 2026-07-24T08:15:41Z

<details><summary>Reasoning</summary>

The user wants to move away from Ollama and start using llama.cpp. They have llama.cpp installed via homebrew. They want to know what needs to be done to get Hermes to use llama.cpp as a provider.

Let me think about this. This is about configuring Hermes Agent. I should look at the relevant skills - there's `local-model-providers` and `ollama-provider-troubleshooting` in the autonomous-ai-agents category, and also `hermes-config-audit`. The user is asking about setting up llama.cpp as a provider in Hermes.

Let me load relevant skills first. The `hermes-agent` skill is mandatory for configuring Hermes. There's also `local-model-providers` which seems directly relevant.

Let me scan skills. The relevant ones:
- `hermes-agent` - Configure, extend, or contribute to Hermes Agent
- `local-model-providers` - Configure local OpenAI-compatible inference servers (Apple... wait it says Apple but probably llama.cpp)
- `ollama-provider-troubleshooting` - Configure local Ollama provider in Hermes

Let me load `hermes-agent` and `local-model-providers` to understand the setup. Let me do these in parallel.

Actually, the user wants to know what needs to be done. Let me gather the info first by loading skills, then provide a plan. Let me load the skills

</details>

**Tool call: skill_view**

```json
{
  "name": "local-model-providers"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-07-24T08:16:11Z

<details><summary>Reasoning</summary>

Let me understand the situation. The user wants to move away from Ollama and use llama.cpp instead. They have llama.cpp installed via homebrew. They want Hermes to begin using llama.cpp either in place of, or as a new provider.

From the skills, I learned:
1. The `local-model-providers` skill shows the general pattern for any local OpenAI-compatible server. llama.cpp's `llama-server` exposes an OpenAI-compatible `/v1/chat/completions` endpoint.
2. Hermes uses a `providers:` section in config.yaml.

So the plan is:
- Start llama.cpp's server (`llama-server` from homebrew, exposes `http://localhost:8080/v1`)
- Add a provider config to `~/.hermes/config.yaml` under `providers:`
- Set it as active model via `hermes config set model.default` and `hermes config set model.provider`

But I should verify the actual state — check current config, check if llama.cpp server binary is available, etc. Let me be a good coworker and actually check the environment rather than just giving a generic plan.

Let me check:
1. Current Hermes config (what provider is being used now - Ollama?)
2. Whether `llama-server` is installed via homebrew
3. The model files available

Actually, let me think about what the user really wants. They want to know "what needs to be done" — a plan/explanation — and they have llama installed via homebrew. They want Hermes to use llama.cpp. 

I should:
1. Verify the current setup (config, ollama usage, llama.cpp binary)
2. Give them a concrete plan
3. Possibly do the actual setup if they want

But the user is asking "What needs to be done to accomplish this?" — this is somewhat a question asking for a plan. But given the "Finishing the job" directive, and that they might want me to actually do it, I should clarify or offer. Actually, let me first gather the facts, then present a plan, and offer to execute it.

Let me check the environment. I'll run several independent checks in parallel:
- Check current c
