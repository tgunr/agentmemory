---
type: Fact
title: # Troubleshoot Hermes Desktop errors

source: hermes
session_id: 20260930_062027
description: # Troubleshoot Hermes Desktop errors

source: hermes
session_id: 20260930_062027_920d61
resource: hermes://session/20260930_062027_920d61

# Conversation

- **Session ID:** `20260930_062027_920d61`
- 
resource: agentmemory://memory/mem_muscps7o_17dab89e30a8
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-10-03T12:11:31.341Z
source: agentmemory
strength: 7
---
# Content

# Troubleshoot Hermes Desktop errors

source: hermes
session_id: 20260930_062027_920d61
resource: hermes://session/20260930_062027_920d61

# Conversation

- **Session ID:** `20260930_062027_920d61`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-30T11:21:09Z
- **Ended:** 2026-10-02T19:04:28Z
- **Messages:** 213
- **CWD:** `/Users/davec`
- **Tokens:** 2720396 in / 72905 out
- **Est. cost:** $-1610742.0000

---

### 👤 User — 2026-09-30T11:21:09Z

errors during 'hermes desktop'

### 👤 User — 2026-09-30T11:21:09Z

errors during 'hermes desktop'

### 🤖 Assistant — 2026-09-30T11:21:19Z

<details><summary>Reasoning</summary>

The user says "errors during 'hermes desktop'". That's vague. I should figure out what they mean — probably they ran `hermes desktop` and got errors. Let me check logs / try running it.

Per skills: software-development/hermes-desktop skill exists. Load it.

Let me batch: load skill and check for recent logs.

Actually let me first check what `hermes desktop` is and reproduce errors. Let's load the skill and check logs.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-desktop"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/ 2>/dev/null | head -40; echo \"---- desktop logs ----\"; ls -lat ~/.hermes/logs/ 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-09-30T11:21:19Z

<details><summary>Reasoning</summary>

The user says "errors during 'hermes desktop'". That's vague. I should figure out what they mean — probably they ran `hermes desktop` and got errors. Let me check logs / try running it.

Per skills: software-development/hermes-desktop skill exists. Load it.

Let me batch: load skill and check for recent logs.

Actually let me first check what `hermes desktop` is and reproduce errors. Let's load the skill and check logs.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-desktop"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/ 2>/dev/null | head -40; echo \"---- desktop logs ----\"; ls -lat ~/.hermes/logs/ 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-09-30T11:21:27Z

<details><summary>Reasoning</summary>

The user said "errors during 'hermes desktop'". Let me find the actual errors. Let me check the most recent errors — desktop.log, errors.log, gateway.error.log, and see the actual command output.

Let me search for recent errors.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && echo \"===== desktop.log tail (last 120) =====\"; tail -120 logs/desktop.log"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && echo \"===== errors.log tail (last 80) =====\"; tail -80 logs/errors.log"
}
```

### 🤖 Assistant — 2026-09-30T11:21:36Z

<details><summary>Reasoning</summary>

The user just says "errors during 'hermes desktop'". They want to know what errors happened. Let me gather a fuller picture. The logs show various things. Let me check whether they ran `hermes desktop` and got errors. Let me look at recent desktop.log entries more systematically — maybe there's a distinct error block. Also check `.restart_pending.json`, gateway crash log tail, mcp-stderr (424MB!).

Actually the huge mcp-stderr.log (424MB) and tui_gateway_crash.log (144MB) are notable. Let me summarize the error classes:

1. `Error: Hermes Desktop is quitting.` on GET /api/profiles — shutdown-time noise.
2. `404: Session not found` for sessions that were just created — timeline/messages 404s.
3. `404 ... Headless backend (hermes serve): web UI disabled` on GET /api/sessions/default%2F.
4. `_CancelledPreparation: Terminal approval preparation cancelled; command was not started`.
5. `Tool search_files returned error: [Errno 3] No such process`.
6. `Context engine 'default' not found — falling back to built-in compressor`.
7. Model fallback chain: moa unavailable (billing/quota), poolside rate-limited, stepfun used.
8. Session compressed 6 times.

Let me check the crash logs for real crashes — tui_gateway_crash.log is 144MB, that's a red flag. And gateway.error.log 60MB, mcp-stderr 424MB.

Let me batch some investigati
