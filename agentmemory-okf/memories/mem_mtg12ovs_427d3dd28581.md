---
type: Fact
title: # ── Hermes error details ── #2

source: hermes
session_id: 20260825_120002_cfe3
description: # ── Hermes error details ── #2

source: hermes
session_id: 20260825_120002_cfe3de
resource: hermes://session/20260825_120002_cfe3de

# Conversation

- **Session ID:** `20260825_120002_cfe3de`
- **Sou
resource: agentmemory://memory/mem_mtg12ovs_427d3dd28581
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:41.731Z
source: agentmemory
strength: 7
---
# Content

# ── Hermes error details ── #2

source: hermes
session_id: 20260825_120002_cfe3de
resource: hermes://session/20260825_120002_cfe3de

# Conversation

- **Session ID:** `20260825_120002_cfe3de`
- **Source:** tui
- **Model:** /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4
- **Started:** 2026-08-25T17:00:02Z
- **Ended:** 2026-08-25T17:00:33Z
- **Messages:** 11
- **CWD:** `/Users/davec`

---

### 👤 User — 2026-08-25T16:31:28Z

── Hermes error details ──
time: 2026-08-25T16:26:57.144Z
layer: provider
code: timeout
retryable: true
provider: turboquant
model: /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4
error: Connection error.

### 🤖 Assistant — 2026-08-25T16:31:44Z

<details><summary>Reasoning</summary>

The user is showing me a Hermes error from their logs. Let me analyze what's happening:

1. Time: 2026-08-25T16:26:57.144Z
2. Layer: provider
3. Code: timeout
4. Retryable: true
5. Provider: turboquant
6. Model: /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4
7. Error: Connection error

This is a connection timeout to the TurboQuant provider. From my memory, I know that:
- TurboQuant is served via LaunchAgent on specific ports
- /tq14 is served on :8080 (14B model)
- /tq27 is served on :8083 (27B model)
- The model path shows `/Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4` - this is the local model file path

The connection error likely means the TurboQuant serve process isn't running or isn't responding. Let me help diagnose this. I should:
1. Check if the TurboQuant server is running
2. Check the LaunchAgent status
3. Try to restart it if needed

I should use terminal commands to check the status. Let me look for the LaunchAgent plist and check its status.

</details>

This is a provider-layer timeout to TurboQuant for your 14B model. The server process is either down or not responding. Let me check the LaunchAgent status and whether the serve is actually listening.

### 🤖 Assistant — 2026-08-25T16:31:59Z

<details><summary>Reasoning</summary>

Now I have clear information:
1. No TurboQuant LaunchAgents are loaded (the `launchctl list | grep -i turbo` returned nothing, just the `---` separator)
2. Only `ai.hermes.gateway` is running from Hermes (PID 79629)
3. Port 8080 is listening (python3.1 PID 98455) — this is likely the TurboQuant server for the 14B model
4. Port 8083 has nothing listening — this would be the 27B model server

So the 14B model server IS running on port 8080, but the error is a timeout. This could mean:
- The server is running but unresponsive/hung
- The model isn't loaded yet and the first request is timing out
- There's a memory/resource issue

Let me check what the TurboQuant server process actually is and try to hit the health endpoint. I should also look at the memory situation since the user has a 32GB Mac.

Let me check the process on 8080 and the TurboQuant status/health endpoint.

</details>

The 14B server is listening on `:8080`, but the 27B server on `:8083` is down, and the timeout itself suggests the 14B process may be hung or unresponsive. Let me inspect what's actually bound to `:8080` and hit the health endpoint.

### 🤖 Assistant — 2026-08-25T16:32:55Z

<details><summary>Reasoning</summary>

Good. So the `tq_switch.sh` script is clear:
- 27B runs on :8083 via LaunchAgent `com.turboquant.serve`
- 14B runs on :8080 via direct `nohup` `turboquant_mlx.serve`

The current state shows:
- 14B on :8080 is listening but NOT actually serving completions (health OK, but inference failed)
- 27B on :8083 is not listening at all

The fact that `curl /v1/chat/completions` failed but `/health` returned OK suggests the 14B server is in a broken state - maybe the model failed to load, or the serve process is partially crashed but the HTTP server is still up.

Let me check the 14B serve log to see what's happening. The script writes to `/Users/davec/Library/Logs/turboquant-14b-serve.log`.

Also, since 27B is the LaunchAgent mode, let me check if it's loaded or not - the `launchctl list | grep -i turbo` returned nothing, which means it's not loaded. That could be intentional (user switched to 14B) or th
