---
type: Fact
title: # Hermes Desktop Launch Failure

source: hermes
session_id: 20260707_140240_fd3c
description: # Hermes Desktop Launch Failure

source: hermes
session_id: 20260707_140240_fd3ce7
resource: hermes://session/20260707_140240_fd3ce7

# Conversation

- **Session ID:** `20260707_140240_fd3ce7`
- **Sou
resource: agentmemory://memory/mem_mspdvg56_4ac45f16001d
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260707_140240_fd3ce7"]
timestamp: 2026-08-12T01:01:12.166Z
source: agentmemory
strength: 7
---
# Content

# Hermes Desktop Launch Failure

source: hermes
session_id: 20260707_140240_fd3ce7
resource: hermes://session/20260707_140240_fd3ce7

# Conversation

- **Session ID:** `20260707_140240_fd3ce7`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-07T19:02:58Z
- **Ended:** 2026-07-07T19:27:12Z
- **Messages:** 51
- **Tokens:** 199318 in / 32618 out
- **Est. cost:** $0.4050

---

### 👤 User — 2026-07-07T19:02:59Z

hermes desktop fails to launch

### 🤖 Assistant — 2026-07-07T19:11:18Z

<details><summary>Reasoning</summary>

The user is saying the Hermes Desktop GUI fails to launch. I should load the hermes-agent skill first since this is about configuring/troubleshooting Hermes Agent itself. Let me also check if there's a relevant skill for the desktop/webui.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-webui"
}
```

### 🤖 Assistant — 2026-07-07T19:11:18Z

<details><summary>Reasoning</summary>

The user says "hermes desktop fails to launch" - this is a very brief message. I need more information about what happens when they try to launch it. But I should also check common things first:

1. What does the user mean by "hermes desktop"? 
   - Could be the Hermes WebUI launched via the desktop app
   - Could be `hermes desktop` command
   - Could be the Hermes Desktop GUI application

2. Check what's running and any errors
3. Check the relevant files and processes

Let me also check the hermes-workspace-context skill since memory notes say there's a known Desktop GUI bug related to profile switching.

Let me check the status and gather info first, then ask the user for clarification on what they tried.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes --version 2>&1 | head -5; echo \"---\"; which hermes; echo \"---\"; hermes status 2>&1 | head -40",
  "timeout": 15
}
```

**Tool call: terminal**

```json
{
  "command": "pgrep -fl \"hermes-webui|server.py\" 2>/dev/null; echo \"---DASHBOARD---\"; pgrep -fl \"hermes.*dashboard\" 2>/dev/null; echo \"---DESKTOP APP---\"; pgrep -fl \"Hermes Desktop|Hermes.app\" 2>/dev/null; echo \"---PORT 8787---\"; lsof -i :8787 -P 2>/dev/null | head -5",
  "timeout": 10
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/hermes-webui/ 2>&1 | head -20; echo \"---\"; ls -la /Applications/ 2>/dev/null | grep -i hermes",
  "timeout": 10
}
```

### 🤖 Assistant — 2026-07-07T19:11:18Z

<details><summary>Reasoning</summary>

Important findings:
1. Hermes Desktop app IS currently running (PID 42088 - main, 42099/42100/42107/42111 are helpers)
2. Port 8787 is NOT listening - the WebUI server hasn't started
3. The Hermes.app at /Applications/Hermes.app is a symlink to `~/.hermes/hermes-agent/apps/desktop/release/mac-arm64/Hermes.app`

The user says "hermes desktop fails to launch". So either:
- The app is running but showing an error (need to see the window)
- Or it crashed
- Or the WebUI server inside it failed to start

Let me check the window state with computer_use, and check logs.

Wait, before doing that, let me also check:
- Is the app actually showing a window? The process is running but I don't know if a window appeared
- The WebUI server is not on port 8787

I should also be aware of the known bug in memory: "Desktop GUI profile bug: `hermes -p ai desktop` doesn't propagate profile to backend serve — Desktop GUI always serves `default`." But that's a different issue (profile serving).

Let me get a screenshot of what's on screen to see what the user sees, and also look at the logs.

</details>

**Tool call: computer_use**

```json
{
  "action": "capture",
  "mode": "vision"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -lat ~/Library/Logs/Hermes* 2>/dev/null | head -10; echo \"---\"; ls -lat ~/.hermes/logs/ 2>/dev/null | head -20",
  "timeout": 10
}
```

**Tool call: terminal**

```json
{
  "command": "find ~/Library/Application\\ Support/Hermes -name \"*.log\" -mmin -60 2>/dev/null | head -10; echo \"---\"; ls -lat ~/Library/Application\\ Support/Hermes/ 2>/dev/null | head -20",
  "
