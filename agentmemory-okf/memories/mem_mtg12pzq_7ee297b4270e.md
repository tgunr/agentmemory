---
type: Fact
title: # look for turboquant model in 7B to 10B range…

source: hermes
session_id: 2026
description: # look for turboquant model in 7B to 10B range…

source: hermes
session_id: 20260825_145114_b2f55c
resource: hermes://session/20260825_145114_b2f55c

# Conversation

- **Session ID:** `20260825_145114
resource: agentmemory://memory/mem_mtg12pzq_7ee297b4270e
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:43.175Z
source: agentmemory
strength: 7
---
# Content

# look for turboquant model in 7B to 10B range…

source: hermes
session_id: 20260825_145114_b2f55c
resource: hermes://session/20260825_145114_b2f55c

# Conversation

- **Session ID:** `20260825_145114_b2f55c`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-25T19:52:10Z
- **Ended:** 2026-08-26T09:21:05Z
- **Messages:** 178
- **CWD:** `/Users/davec`
- **Tokens:** 242602 in / 72375 out

---

### 👤 User — 2026-08-25T19:52:10Z

look for turboquant model in 7B to 10B range and install it like /tq14

### 🤖 Assistant — 2026-08-25T19:52:22Z

<details><summary>Reasoning</summary>

The user wants me to look for a TurboQuant model in the 7B to 10B range and install it similarly to how /tq14 is set up. Based on memory, /tq14 is a profile using a TurboQuant model via Ollama on mini.local. I need to find what models are available in the 7B-10B range, likely Qwen3-based, and set it up with the same structure.

Let me first check the existing /tq14 setup to understand the pattern, then search for available 7B-10B models.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/.hermes/profiles/"
}
```

**Tool call: terminal**

```json
{
  "command": "cat /Users/davec/.hermes/profiles/ollama/config.yaml 2>/dev/null || echo \"NOT FOUND\""
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Volumes/AI/ 2>/dev/null; ls -la /Volumes/work/ 2>/dev/null; mount | grep -E \"AI|work|Samba|smb\""
}
```

### 🤖 Assistant — 2026-08-25T19:52:41Z

<details><summary>Reasoning</summary>

I now have the necessary context. The user wants to install a TurboQuant model in the 7B–10B range, following the same style as the existing /tq14 setup. From the ollama profile config I can already see the likely candidates: Qwen3.5-9B-MLX-4bit, Qwen3.5-4B-MLX-4bit, etc. I should inspect the turboquant-mlx-work setup to see what conversion/install pattern is used for /tq14, then pick a 7B–10B model and install it under the same directory layout with matching config and slash command. I’ll keep this surgical and check the existing setup first.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/MCP_Local/turboquant-mlx-work/ && echo '---' && cat /Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh && echo '---' && find /Users/davec/MCP_Local/turboquant-mlx-work -maxdepth 3 -type f | sed 's#^#/##' | head -200"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/MCP_Local/turboquant-mlx/ 2>/dev/null || true && echo '---' && find /Users/davec/MCP_Local -maxdepth 2 -type d | grep -E 'turboquant|tq' | sort"
}
```

### 👤 User — 2026-08-25T19:54:17Z

[System: The active model for this chat has changed to tencent/hy3:free via provider nous. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-08-25T19:54:21Z

continue

### 🤖 Assistant — 2026-08-25T19:55:54Z

<details><summary>Reasoning</summary>

The user wants to find a TurboQuant model in the 7B-10B range and install it like /tq14. Let me understand what /tq14 does:

1. `/tq14` runs `tq_switch.sh 14` which:
   - Tears down any running TurboQuant serve
   - Starts the 14B TQ4 model on port :8000 using `turboquant_mlx.serve`
   - Waits for it to come up

The 14B model is at `/Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4`. It was converted with `--streaming` per the memory note: "replacement is Qwen/Qwen3-14B-TQ4 (128K native, YaRN factor 4.0, non-gated Apache 2.0, convert with --streaming on 32GB)".

So I need to:
1. Find a TurboQuant model in 7B-10B range
2. Convert it like the 14B was done (with --streaming)
3. Add it to the config.yaml
4. Create a `/tq7` or `/tq8` quick command and a switch option

Let me first understand the conversion process. The memory says the 14B was converted. Let me look at how the 14B model was converted - look at the conversion scripts and any notes.

Let me check:
- The convert.py / convert_streaming.py scripts
- The existing qwen3-14b-tq4 directory to see what format it's in
- Whether there's a TurboQuant model already in 7B-10B range on HuggingFac
