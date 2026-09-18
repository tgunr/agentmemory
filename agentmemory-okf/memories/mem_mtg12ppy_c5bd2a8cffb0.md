---
type: Fact
title: # look at how turboquant is loading models via…

source: hermes
session_id: 2026
description: # look at how turboquant is loading models via…

source: hermes
session_id: 20260825_141931_bb0a47
resource: hermes://session/20260825_141931_bb0a47

# Conversation

- **Session ID:** `20260825_141931
resource: agentmemory://memory/mem_mtg12ppy_c5bd2a8cffb0
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:42.821Z
source: agentmemory
strength: 7
---
# Content

# look at how turboquant is loading models via…

source: hermes
session_id: 20260825_141931_bb0a47
resource: hermes://session/20260825_141931_bb0a47

# Conversation

- **Session ID:** `20260825_141931_bb0a47`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-08-25T19:21:22Z
- **Ended:** 2026-08-26T09:19:45Z
- **Messages:** 82
- **CWD:** `/Users/davec`
- **Tokens:** 137122 in / 11238 out

---

### 👤 User — 2026-08-25T19:21:22Z

look at how turboquant is loading models via /tq14 and /tq27. Using two different serves on different ports. Seems to me they should use just a single port for the desired model.

### 🤖 Assistant — 2026-08-25T19:21:45Z

<details><summary>Reasoning</summary>

The user wants me to look at how turboquant is loading models via /tq14 and /tq27, and they have a hypothesis that both should use a single port for the desired model. This is related to the turboquant-mlx configuration in their Hermes setup.

From memory, I know:
- /tq14 (14B) was wired to Qwen2.5-Coder-14B (32K hard cap -> fails gate); replacement is Qwen/Qwen3-14B-TQ4 (128K native, YaRN factor 4.0, non-gated Apache 2.0, convert with --streaming on 32GB)
- /tq27 = Qwen3.8-27B-tq4-g64 (256K true window; TurboQuant serve_vlm underreports 32768 -> set context_length 262144)
- Both in profiles/ollama/config.yaml turboquant provider (:8080=14B, :8083=27B via LaunchAgent)
- tq_switch.sh at MCP_Local/turboquant-mlx-work/

I should look at the actual configuration files to understand the current setup. Let me search for the relevant files.

</details>

**Tool call: search_files**

```json
{
  "path": "/Users/davec",
  "pattern": "turboquant|tq14|tq27",
  "target": "files"
}
```

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes",
  "pattern": "turboquant|tq14|tq27",
  "target": "content"
}
```

### 🤖 Assistant — 2026-08-25T19:22:59Z

<details><summary>Reasoning</summary>

Now let me look at the actual config files and the tq_switch.sh script to understand the current port-based setup.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh"
}
```

**Tool call: read_file**

```json
{
  "limit": 30,
  "offset": 100,
  "path": "/Users/davec/.hermes/config.yaml"
}
```

**Tool call: read_file**

```json
{
  "limit": 25,
  "offset": 660,
  "path": "/Users/davec/.hermes/config.yaml"
}
```

### 🤖 Assistant — 2026-08-25T19:23:21Z

<details><summary>Reasoning</summary>

Now I have a clear picture of what's going on. Let me also check the local-model-providers skill reference for more context.

The user's observation is spot-on. Here's the current architecture:

**Current state — two ports, two processes, mutual exclusion:**
- `/tq14` → `tq_switch.sh 14` → kills everything → starts `turboquant_mlx.serve` on **:8080** with the 14B model
- `/tq27` → `tq_switch.sh 27` → kills everything → starts `turboquant_mlx.serve_vlm` on **:8083** with the 27B model

**The Hermes turboquant provider config:**
```yaml
turboquant:
  api: http://127.0.0.1:8083/v1    # <-- hardcoded to :8083
  default_model: /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4
  models:
    /Users/davec/MCP_Local/turboquant-mlx/Qwen3.8-27B-tq4-g64:
      context_length: 262144
    /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4:
      context_length: 262144
```

So the provider config has a **fixed `api: http://127.0.0.1:8083/v1`** endpoint, meaning:
- When you run `/tq14`, it starts the serve on :8080, but Hermes is still pointing at :8083 → it would fail
- When you run `/tq27`, it starts on :8083 → this is the only case that actually works with the current config

The user is right — this is unnecessarily complex. Since only one model runs at a time (32GB Mac can't hold both), there's no reason for two ports. A single port that gets reused by whichever model you switch to would be cleaner.

Let me look at what the local-model-providers skill says about this, and the turboquant reference, to see if there's any documented reason for the dual-port approach.

Actually, I can already see the reason from `tq_switch.sh`:
- The 27B model uses `turb
