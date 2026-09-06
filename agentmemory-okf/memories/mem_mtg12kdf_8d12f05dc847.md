---
type: Fact
title: # Fix Hermes agent_init_failed on /tg14 /tg27 #4

source: hermes
session_id: 202
description: # Fix Hermes agent_init_failed on /tg14 /tg27 #4

source: hermes
session_id: 20260824_114640_681786
resource: hermes://session/20260824_114640_681786

# Conversation

- **Session ID:** `20260824_11464
resource: agentmemory://memory/mem_mtg12kdf_8d12f05dc847
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:35.905Z
source: agentmemory
strength: 7
---
# Content

# Fix Hermes agent_init_failed on /tg14 /tg27 #4

source: hermes
session_id: 20260824_114640_681786
resource: hermes://session/20260824_114640_681786

# Conversation

- **Session ID:** `20260824_114640_681786`
- **Source:** desktop
- **Model:** /Users/davec/MCP_Local/turboquant-mlx/Qwen3.8-27B-tq4-g64
- **Started:** 2026-08-24T16:46:40Z
- **Ended:** 2026-08-25T00:03:00Z
- **Messages:** 87
- **CWD:** `/Users/davec`

---

### 👤 User — 2026-08-24T13:15:15Z

Both /tg14 and /tg27 report:
── Hermes error details ──
time: 2026-08-24T13:13:51.867Z
layer: runtime
code: agent_init_failed
retryable: true
error: Model /Users/davec/MCP_Local/turboquant-mlx/Qwen3.8-27B-tq4-g64 has a context window of 32,768 tokens, which is below the minimum 64,000 required by Hermes Agent.  Choose a model with at least 64K context.  If your server reports a window smaller than the model's true window, set model.context_length in config.yaml to the real value (this must be at least 64K).

### 🤖 Assistant — 2026-08-24T13:15:58Z

<details><summary>Reasoning</summary>

Let me analyze this error. The user is reporting that both `/tg14` and `/tg27` (these look like slash commands or commands) fail with an agent init error: the model `Qwen3.8-27B-tq4-g64` has a context window of 32,768 tokens, which is below the minimum 64,000 required by Hermes Agent.

This matches memory: "Hermes needs an LLM context window > 65K tokens to work properly; models with <=32K native context (e.g. Qwen2.5-Coder 7B/14B, native max_position_embeddings=32768) won't work with Hermes. When selecting a local model for Hermes, verify max_position_embeddings > 65000 (or that it supports reliable context extension)."

The error message suggests a fix: set `model.context_length` in config.yaml to the real value (at least 64K). But here, the native context really IS 32,768 tokens. So the model genuinely can't meet the requirement.

Let me think about what the user wants. They reported an error. They want a fix. The real issue: TurboQuant-MLX `Qwen3.8-27B-tq4-g64` has native 32K context. Hermes requires 64K minimum.

Options:
1. Set `model.context_length: 64000` (or higher) in config.yaml — but this would be lying about the model's true window. The error explicitly says: "If your server reports a window smaller than the model's true window, set model.context_length in config.yaml to the real value." But here the model's TRUE window is 32K. So setting context_length to 64K would make Hermes send prompts up to 64K which the model can't actually handle → it would error out or truncate.

So that's not a real fix. The real fix is to use a model with ≥64K context.

Let me think about the topology. The model is at `/Users/davec/MCP_Local/turboquant-mlx/Qwen3.8-27B-tq4-g64`. This is a TurboQuant-MLX model. Memory says: "mini.local local model providers are ONLY MacMLX or TurboQuant-MLX."

The issue: This particular model has 32K context. The user needs a model with ≥64K. 

Wait — maybe TurboQuant-MLX supports context extension via RoPE scaling? Some MLX models can be extended. But the error is about the reported window.

Actually, let me reconsider. The real question is what the user wants me to do. They just pasted an error. They probably want me to fix it. Let me investigate the actual situation rather than guess.

Let me check:
1. What models are available in TurboQuant-MLX
2. The config for these slash commands /tg14 and /tg27
3. Whether there's a model with ≥64K available

Actually, let me first understand what /tg14 and /tg27 are. They might be Hermes slash commands. The error is an "agent_init_failed" — meaning when the slash command tries to spawn an agent, the model init fails.

Let me look at the config to understand what model is configured. Let me check the hermes config.yaml and the turboquant-mlx setup.

Actually, I should be careful. The user pasted an error and didn't ask a specific question. The implied task: fix this error so /tg14 and /tg27 work.

The most honest path: this model genuinely has 32K context. To make Hermes work we need a model with ≥64K. Options:
- Use a different TurboQuant-MLX model variant that has ≥64K context (m
