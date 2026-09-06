---
type: Fact
title: # trying to change and use model:

source: hermes
session_id: 20260825_001139_46
description: # trying to change and use model:

source: hermes
session_id: 20260825_001139_466cc9
resource: hermes://session/20260825_001139_466cc9

# Conversation

- **Session ID:** `20260825_001139_466cc9`
- **S
resource: agentmemory://memory/mem_mtg12nap_5c6f5f042fc4
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:39.673Z
source: agentmemory
strength: 7
---
# Content

# trying to change and use model:

source: hermes
session_id: 20260825_001139_466cc9
resource: hermes://session/20260825_001139_466cc9

# Conversation

- **Session ID:** `20260825_001139_466cc9`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-08-25T05:11:40Z
- **Ended:** 2026-08-26T20:08:41Z
- **Messages:** 28
- **CWD:** `/Users/davec`
- **Tokens:** 63209 in / 5929 out

---

### 👤 User — 2026-08-25T05:11:40Z

trying to change and use model:
·  model → /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4                                           │
 ·  warning: Note: could not reach the turboquant API to validate                                              │
    `/Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4`. If the service isn't down, this model may not  │
     be valid.                                                                                                 │

### 🤖 Assistant — 2026-08-25T05:11:52Z

<details><summary>Reasoning</summary>

The user is trying to use a local model path `/Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4` in Hermes, but getting a warning that the turboquant API can't be reached for validation.

From memory:
- `/tq14` (14B) was wired to Qwen/Qwen3-14B-TQ4 (128K native, YaRN factor 4.0)
- Both in profiles/ollama/config.yaml turboquant provider (:8080=14B, :8083=27B via LaunchAgent)
- tq_switch.sh at MCP_Local/turboquant-mlx-work/

So the issue is likely that:
1. The turboquant service isn't running
2. OR Hermes is trying to validate against the wrong port/address
3. OR the config isn't pointing to the turboquant provider correctly

I should help debug this. Let me check:
1. Is the turboquant service running?
2. What does the Hermes config look like for this model/provider?
3. What's the actual API endpoint?

Let me start by checking the service status and config.

</details>

**Tool call: terminal**

```json
{
  "command": "curl -s --max-time 3 http://localhost:8080/v1/models || echo \"FAIL:8080\"; curl -s --max-time 3 http://localhost:8083/v1/models || echo \"FAIL:8083\"",
  "timeout": 15
}
```

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes/profiles/ollama",
  "pattern": "turboquant|qwen3-14b|tq14|8080",
  "target": "content",
  "limit": 30
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4 2>/dev/null && echo \"---\" && ps aux | grep -i turboquant | grep -v grep",
  "timeout": 10
}
```

### 🤖 Assistant — 2026-08-25T05:12:15Z

<details><summary>Reasoning</summary>

The model IS actually running on :8080 and Hermes is using it. The warning is likely from Hermes trying to validate the model via some other path/cache and failing to reach the right endpoint. Since 8080 is live and serving the model, I should check if there's something in the config or validation logic causing the warning, or if it's just a transient validation check that can be ignored because it already retried.

Key facts:
- `/Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4` is a valid directory with model files
- TurboQuant serve is running on 127.0.0.1:8080 with that model
- `curl http://localhost:8080/v1/models` returns the model in the list
- Hermes config uses `turboquant` provider at `http://127.0.0.1:8080/v1`
- The warning says "could not reach the turboquant API"

The warning is probably from Hermes trying to validate before the server was ready, or from a secondary validation endpoint. Since the user is successfully using the model (the session shows `--model /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4` in the slash_worker), the warning is likely benign/retried.

I should reassure the user that the model is actually up and running, and the warning is either transient or from a stale cache check. I can also suggest pinning the provider/model in config or cron if they want to avoid the warning, and clear any stale provider cache if needed.

Let me check if there's a validation cache file that might be stale, and also check the current Hermes config to see the exact inference block.

</details>

**
