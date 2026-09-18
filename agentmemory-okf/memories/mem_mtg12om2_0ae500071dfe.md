---
type: Fact
title: # ── Hermes error details ──

source: hermes
session_id: 20260825_112742_ab39b8

description: # ── Hermes error details ──

source: hermes
session_id: 20260825_112742_ab39b8
resource: hermes://session/20260825_112742_ab39b8

# Conversation

- **Session ID:** `20260825_112742_ab39b8`
- **Source
resource: agentmemory://memory/mem_mtg12om2_0ae500071dfe
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:41.357Z
source: agentmemory
strength: 7
---
# Content

# ── Hermes error details ──

source: hermes
session_id: 20260825_112742_ab39b8
resource: hermes://session/20260825_112742_ab39b8

# Conversation

- **Session ID:** `20260825_112742_ab39b8`
- **Source:** tui
- **Model:** /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4
- **Started:** 2026-08-25T16:27:49Z
- **Ended:** 2026-08-25T17:00:03Z
- **Messages:** 82
- **CWD:** `/Users/davec`
- **Tokens:** 197707 in / 12359 out

---

### 👤 User — 2026-08-25T16:27:49Z

── Hermes error details ──
time: 2026-08-25T16:26:57.144Z
layer: provider
code: timeout
retryable: true
provider: turboquant
model: /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4
error: Connection error.

### 🤖 Assistant — 2026-08-25T16:28:04Z

<details><summary>Reasoning</summary>

The user is getting a connection timeout error from the TurboQuant provider. Let me look at what's going on. The error is:

- provider: turboquant
- model: /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4
- error: Connection error (timeout, retryable)

Let me first check the TurboQuant serving status and configuration. I should check if the TurboQuant server is actually running, and what port it's on. From memory, I know the TurboQuant models are served on different ports - 8080 for 14B and 8083 for 27B.

Let me check the current state of things.

</details>

**Tool call: terminal**

```json
{
  "command": "curl -s -o /dev/null -w \"%{http_code}\" http://localhost:8080/health 2>&1; echo; curl -s -o /dev/null -w \"%{http_code}\" http://localhost:8083/health 2>&1",
  "timeout": 15
}
```

**Tool call: search_files**

```json
{
  "limit": 5,
  "path": "/Users/davec",
  "pattern": "turboquant",
  "target": "files"
}
```

### 🤖 Assistant — 2026-08-25T16:29:31Z

<details><summary>Reasoning</summary>

The 14B TurboQuant endpoint is healthy (`:8080/health = 200`), but `:8083/health` timed out. The failing provider/model path in the error points at a local TurboQuant path rather than an `ollama` tag, so this looks like a provider/host mapping issue rather than the model file itself.

I’m going to inspect the Hermes TurboQuant provider config and the Ollama provider setup to see whether `turboquant` is wired to the dead `:8083` port or an invalid local path, then I can tell you the actual fix.

</details>

**Tool call: search_files**

```json
{
  "limit": 20,
  "output_mode": "content",
  "path": "/Users/davec/.hermes",
  "pattern": "turboquant|8083|qwen3-14b-tq4|turboquant-mlx-work"
}
```

**Tool call: terminal**

```json
{
  "command": "lsof -nP -iTCP:8083 -sTCP:LISTEN 2>/dev/null || true; echo '---'; ps aux | rg -i \"turboquant|mlx|llama|server\" | rg -v \"rg \" || true",
  "timeout": 15
}
```

### 👤 User — 2026-08-25T16:31:02Z

[System: The active model for this chat has changed to /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4 via provider turboquant. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

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
2. Che
