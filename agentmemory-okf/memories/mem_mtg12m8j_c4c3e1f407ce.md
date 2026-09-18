---
type: Fact
title: # Delete 32K context turboquant models

source: hermes
session_id: 20260824_1952
description: # Delete 32K context turboquant models

source: hermes
session_id: 20260824_195257_6d33ba
resource: hermes://session/20260824_195257_6d33ba

# Conversation

- **Session ID:** `20260824_195257_6d33ba`

resource: agentmemory://memory/mem_mtg12m8j_c4c3e1f407ce
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:38.305Z
source: agentmemory
strength: 7
---
# Content

# Delete 32K context turboquant models

source: hermes
session_id: 20260824_195257_6d33ba
resource: hermes://session/20260824_195257_6d33ba

# Conversation

- **Session ID:** `20260824_195257_6d33ba`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-08-25T00:54:25Z
- **Ended:** 2026-08-25T04:03:17Z
- **Messages:** 24
- **CWD:** `/Users/davec`
- **Tokens:** 47653 in / 7111 out
- **Est. cost:** $-45125.0000

---

### 👤 User — 2026-08-25T00:54:25Z

looking in recnt sessions, there were some turboquant models that only had 32K conext. Need to delete thos to free up space

### 🤖 Assistant — 2026-08-25T00:54:36Z

<details><summary>Reasoning</summary>

The user wants to find TurboQuant models with only 32K context and delete them to free up space. Let me search recent sessions for context on this, and also check what TurboQuant models are currently installed.

From memory: "mini.local local model providers are ONLY MacMLX or TurboQuant-MLX" and "Hermes needs an LLM context window > 65K tokens to work properly; models with <=32K native context (e.g. Qwen2.5-Coder 7B/14B, native max_position_embeddings=32768) won't work with Hermes."

Let me search sessions for TurboQuant context info and also check what's actually on disk.

</details>

**Tool call: session_search**

```json
{
  "query": "TurboQuant 32K context model",
  "limit": 5
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Volumes/AI/models/turboquant/ 2>/dev/null || ls -la ~/models/turboquant/ 2>/dev/null || find /Volumes/AI -maxdepth 3 -type d -name '*turboquant*' -o -name '*TurboQuant*' 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-08-25T00:54:55Z

<details><summary>Reasoning</summary>

The session search shows context but the terminal command returned empty output - the paths I tried don't exist. Let me find where TurboQuant models actually live.

</details>

**Tool call: terminal**

```json
{
  "command": "find /Users/davec/MCP_Local -maxdepth 3 -type d -name '*turboquant*' -o -name '*tq*' 2>/dev/null | head -20\necho \"---\"\nls /Users/davec/MCP_Local/turboquant-mlx-work/ 2>/dev/null\necho \"---\"\nls /Users/davec/MCP_Local/turboquant-mlx/ 2>/dev/null\necho \"---\"\n# also check for any tq model dirs anywhere\nfind /Users/davec -maxdepth 4 -type d -name '*-tq[34]' 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-08-25T00:55:18Z

<details><summary>Reasoning</summary>

Let me look at the recent sessions to understand what the user is talking about. They said "there were some turboquant models that only had 32K context. Need to delete those to free up space."

From the session search results:

1. **Session 20260815_120838_c6e364 (Aug 15)** - "Turboquant models" — in this session, the assistant already deleted `qwen2.5-coder-7b-tq4` and `qwen2.5-coder-14b-tq4` because they had 32K context. Wait, but looking at the current directory listing, `qwen2.5-coder-14b-tq4` still exists in `/Users/davec/MCP_Local/turboquant-mlx-work/`! So the deletion from Aug 15 might have been reverted or this is a different copy.

Wait, let me re-read. In that session, the assistant said "Both coder conversions are now deleted (7B and 14B, both 32K context — fail your rule)." But the directory listing shows `qwen2.5-coder-14b-tq4` still exists in turboquant-mlx-work. Hmm, that's odd. Maybe the deletion happened but then something re-created it, or maybe the session was from a different machine (pro.local vs mini.local?). Memory says AGENT RUNTIME = mini.local.

Actually wait — maybe there was a restore, or the model dir is from a different session. Let me check the session from Aug 23:

2. **Session 20260823_051732_4b5c12 (Aug 23)** - "Compare macMLX with turboquant" — benchmarked Qwen2.5-14B-Instruct, Qwen2.5-Coder-14B, Qwen3-14B-Instruct, Qwen3.8-27B-tq4.

3. **Session 20260824_083600_abf6e8 (Aug 24)** - "Fix Hermes agent_init_failed on /tg14 /tg27" — the TurboQuant Qwen3.8-27B server reports 32K context window but model's config.json shows true 256K native window. Fix: set model.context_length: 262144 in config.yaml.

4. **Cron session 20260824_090021** - same tg14/tg27 issue.

So the us
