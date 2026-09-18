---
type: Fact
title: # what is the impact of renaming a profile? I…

source: hermes
session_id: 20260
description: # what is the impact of renaming a profile? I…

source: hermes
session_id: 20260825_122540_dae1d0
resource: hermes://session/20260825_122540_dae1d0

# Conversation

- **Session ID:** `20260825_122540_
resource: agentmemory://memory/mem_mtg12pg1_b4fe8a4f07f2
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:42.448Z
source: agentmemory
strength: 7
---
# Content

# what is the impact of renaming a profile? I…

source: hermes
session_id: 20260825_122540_dae1d0
resource: hermes://session/20260825_122540_dae1d0

# Conversation

- **Session ID:** `20260825_122540_dae1d0`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-25T17:26:22Z
- **Ended:** 2026-08-26T09:38:37Z
- **Messages:** 90
- **CWD:** `/Users/davec`
- **Tokens:** 287904 in / 37831 out

---

### 👤 User — 2026-08-25T17:26:22Z

what is the impact of renaming a profile? I want to rename ollama to local

### 🤖 Assistant — 2026-08-25T17:26:38Z

<details><summary>Reasoning</summary>

The user wants to rename a Hermes profile from "ollama" to "local". I need to understand what files and references would be affected by this change. Let me first check what exists for the ollama profile and search for references to it.

</details>

**Tool call: terminal**

```json
{
  "command": "find ~/.hermes/profiles -maxdepth 2 -name 'ollama' -o -path '*/profiles/ollama/*' 2>/dev/null | head -100"
}
```

**Tool call: search_files**

```json
{
  "limit": 100,
  "output_mode": "content",
  "path": "/Users/davec/.hermes",
  "pattern": "ollama"
}
```

**Tool call: cronjob**

```json
{
  "action": "list"
}
```

### 👤 User — 2026-08-25T17:27:55Z

[System: The active model for this chat has changed to tencent/hy3:free via provider nous. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-08-25T17:29:05Z

The turboquant model I was just using triggered a fallback , why?

### 🤖 Assistant — 2026-08-25T17:29:22Z

<details><summary>Reasoning</summary>

The user is asking a question about a turboquant model triggering a fallback. But there's a system message saying the active model changed to tencent/hy3:free via provider nous. Let me think about this.

The user says "The turboquant model I was just using triggered a fallback, why?" — they want to understand why the turboquant model (probably /tq14 or /tq27 from their ollama profile) triggered a fallback. A fallback means the model was unavailable or failed some gate, so Hermes fell back to a different provider/model.

Let me think about what I know from memory. From the MEMORY.md:
- /tq14 (14B) was wired to Qwen2.5-Coder-14B (32K hard cap -> fails gate); replacement is Qwen/Qwen3-14B-TQ4 (128K native, YaRN factor 4.0, non-gated Apache 2.0, convert with --streaming on 32GB). /tq27 = Qwen3.8-27B-tq4-g64 (256K true window; TurboQuant serve_vlm underreports 32768 -> set context_length 262144). Both in profiles/ollama/config.yaml turboquant provider (:8080=14B, :8083=27B via LaunchAgent); tq_switch.sh at MCP_Local/turboquant-mlx-work/. Verify max_position_embeddings > 65K.

So the turboquant models are served by a local MLX server. A fallback would trigger if:
1. The model context_length is underreported (TurboQuant serve_vlm underreports 32768) — but that's a gate failure
2. The server is down
3. The context window is too small

Actually, the question is "why did the turboquant model I was just using trigger a fallback". The most likely reason based on my memory: TurboQuant serve_vlm underreports context_length (reports 32768), which fails the >65K gate, causing a fallback to another provider. OR if the gate was fixed, then maybe the server wasn't running.

But I should verify rather than guess. The user wants a real diagnosis. Let me check:
1. The turboquant provider config in profiles/ollama/config.yaml
2. The gateway state / logs for the fallback
3. Whether the turboquant server is running

Actually, the conversation shows I'm currently running on tencent/hy3:free via provider nous — that IS the fallback model! So whatever model the user was using, it fell back to hy3:free (the Nous remote provider). That's the fallback target.

So the question is why did /tq14 or /tq27 fall back to nous hy3:free. Let me investigate.

Let me check the config and the gateway logs / state to see what happened. Let me look at:
- profiles/ollama/config.yaml (the turboquant provider section)
- gateway_state.json or logs
- whether the turboquant server is up and what it reports

Let 
