---
type: Fact
title: # Ollama Hermes Agent Context Window Limits

source: hermes
session_id: 20260708
description: # Ollama Hermes Agent Context Window Limits

source: hermes
session_id: 20260708_010451_e3bfaf
resource: hermes://session/20260708_010451_e3bfaf

# Conversation

- **Session ID:** `20260708_010451_e3b
resource: agentmemory://memory/mem_mspcm2pq_bb76a4178db8
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.joe"]
timestamp: 2026-08-12T00:25:55.244Z
source: agentmemory
strength: 7
---
# Content

# Ollama Hermes Agent Context Window Limits

source: hermes
session_id: 20260708_010451_e3bfaf
resource: hermes://session/20260708_010451_e3bfaf

# Conversation

- **Session ID:** `20260708_010451_e3bfaf`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-07-08T06:04:51Z
- **Messages:** 136
- **CWD:** `/Users/davec/.joe`
- **Tokens:** 1966321 in / 31541 out
- **Est. cost:** $0.0805

---

### 👤 User — 2026-07-08T06:40:15Z

In profile ollama I get:
agent init failed: Model qwen3:4B has a context window of 40,960 tokens, which is below the minimum 64,000 required by Hermes Agent. Choose a model with at least 64K context. If your server reports a window smaller than the model's true window, set model.context_length in config.yaml to the real value (this must be at least 64K).
Explain what is "your server" and how to permit hermes to use less than 64K if possible.

### 🤖 Assistant — 2026-07-08T06:40:15Z

<details><summary>Reasoning</summary>

The user is asking about the Hermes Agent minimum context window requirement and how to configure it. Let me load the hermes-agent skill for accurate information, and check the ollama profile config.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "cat ~/.hermes/profiles/ollama/config.yaml 2>/dev/null || echo \"File not found\""
}
```

### 🤖 Assistant — 2026-07-08T06:40:15Z

<details><summary>Reasoning</summary>

Let me analyze the user's question. They're in the `ollama` profile and getting an error:

```
agent init failed: Model qwen3:4B has a context window of 40,960 tokens, which is below the minimum 64,000 required by Hermes Agent. Choose a model with at least 64K context. If your server reports a window smaller than the model's true window, set model.context_length in config.yaml to the real value (this must be at least 64K).
```

The user wants to know:
1. What is "your server" in this context?
2. How to permit Hermes to use less than 64K if possible.

Let me look at the ollama profile config. The config.yaml I read seems to be from the `default` profile (it shows `~/.hermes/config.yaml` not `~/.hermes/profiles/ollama/config.yaml`). Wait, I ran `cat ~/.hermes/profiles/ollama/config.yaml` but the output looks like the default profile config. Let me re-read...

Actually wait, the output has `cwd: /Users/davec/.joe` and `default: gemma4:12b-mlx` and `provider: ollama-launch`. But the user said they're in the "ollama" profile. Let me check if there's actually an ollama profile config.

Actually, looking more carefully at the terminal output, the command was `cat ~/.hermes/profiles/ollama/config.yaml 2>/dev/null || echo "File not found"` and the output shows a full config file, so the file exists. But it's showing the default profile's config? That seems odd. Let me check what's in the ollama profile.

Wait, actually when I look at the config, it shows `model.default: gemma4:12b-mlx` and `model.provider: ollama-launch`. This seems like it might actually be the ollama profile's config. But the user is using `qwen3:4B` and getting an error about it.

Let me look at the ollama profile's config more carefully. The config shows:
- `model.provider: ollama-launch`
- `model.default: gemma4:12b-mlx`
- `model.base_url: http://127.0.0.1:11434/v1`
- `model.ollama_num_ctx: 131072`

And the custom provider config:
```yaml
providers:
  ollama-launch:
    api: http://127.0.0.1:11434/v1
    default_model: llama3.2:3b
    models:
    - qwen3:4B
    ...
```

Now let me understand the error. The error says "Model qwen3:4B has a context window of 40,960 tokens". This means Hermes queried the Ollama server for the model's context window, and Ollama reported 40,960 tokens. The minimum Hermes requires is 64,000.

"You server" refers to the Ollama server running at `http://127.0.0.1:11434`. When Hermes queries Ollama's API for the model info, Ollama returns the context window size. For qwen3:4B, Ollama reports 40,960 (which is probably the default context window that Ollama assigned to this model).

Now let me address the user's questions:

1. **"Your server"** =
