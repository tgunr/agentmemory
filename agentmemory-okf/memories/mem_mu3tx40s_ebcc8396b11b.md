---
type: Fact
title: # Restart Hermes WebUI

source: hermes
session_id: 20260914_112945_75f89a
resour
description: # Restart Hermes WebUI

source: hermes
session_id: 20260914_112945_75f89a
resource: hermes://session/20260914_112945_75f89a

# Conversation

- **Session ID:** `20260914_112945_75f89a`
- **Source:** tu
resource: agentmemory://memory/mem_mu3tx40s_ebcc8396b11b
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes"]
timestamp: 2026-09-16T08:18:52.304Z
source: agentmemory
strength: 7
---
# Content

# Restart Hermes WebUI

source: hermes
session_id: 20260914_112945_75f89a
resource: hermes://session/20260914_112945_75f89a

# Conversation

- **Session ID:** `20260914_112945_75f89a`
- **Source:** tui
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-14T16:30:02Z
- **Ended:** 2026-09-15T12:44:58Z
- **Messages:** 25
- **CWD:** `/Users/davec/.hermes`
- **Tokens:** 35612 in / 2124 out

---

### 👤 User — 2026-09-14T16:30:02Z

restart hermes webui

### 🤖 Assistant — 2026-09-14T16:30:21Z

<details><summary>Reasoning</summary>

The user wants to restart the Hermes WebUI. I should load the hermes-webui skill since it's directly relevant. According to the skill guidance, I should load it before configuring, modifying, or troubleshooting Hermes components.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-webui"
}
```

### 🤖 Assistant — 2026-09-14T16:30:28Z

<details><summary>Reasoning</summary>

The user wants to restart the Hermes WebUI. I need to follow the skill guidance. Since this is a support/troubleshooting request, the first turn should gather information.

First, I should check what is actually running: process for Hermes WebUI, port 8787 listener, and recent logs like `desktop.log`, `webui-watchdog.log`, `bootstrap-*.log`. I need to find which restart path is appropriate: direct server process, desktop app, or launchd service.

I should run terminal commands to inspect state first. I need to:
1. Check if Hermes WebUI process is running: `pgrep -fl "server.py"` or `pgrep -fl "hermes-webui"` or `pgrep -fl "Hermes.app"`.
2. Check if port 8787 is listening: `lsof -i :8787 -P | grep LISTEN`.
3. Check watchdog log: `tail -20 ~/.hermes/logs/webui-watchdog.log`.
4. Check desktop log: `grep "boot\|bootstrap\|failed" ~/.hermes/logs/desktop.log | tail -10`.
5. Check bootstrap logs: `ls -t ~/.hermes/logs/bootstrap-*.log | head -3 | xargs -I{} sh -c 'echo "=== {} ===" && grep "failed" {}'`.
6. Check if there's a launchd plist: `ls ~/Library/LaunchAgents/ai.hermes.webui.plist` and check its status.
7. Check if the desktop app is running: `pgrep -fl "Hermes.app"`.

I should do these in parallel if possible. Let's batch the reads.

</details>

**Tool call: terminal**

```json
{
  "command": "pgrep -fl \"server.py|hermes-webui|Hermes.app\" 2>/dev/null || true"
}
```

**Tool call: terminal**

```json
{
  "command": "lsof -i :8787 -P 2>/dev/null | grep LISTEN || true"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -t ~/.hermes/logs/webui-watchdog.log ~/.hermes/logs/desktop.log ~/.hermes/logs/bootstrap-*.log 2>/dev/null | head -10 || true"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -l ~/Library/LaunchAgents/ai.hermes.webui.plist 2>/dev/null || true"
}
```

### 🤖 Assistant — 2026-09-14T16:30:53Z

<details><summary>Reasoning</summary>

The WebUI is already running on port 8787 (PID 13039). But the user asked to restart it. I should check if the user wants a full restart anyway, or if they just want to verify status. Given they explicitly said "restart hermes webui", I'll do a clean restart: stop the server and watchdog-related launches, then bring it back up. I'll avoid killing the desktop app process unless needed; first I'll target the server process itself and the launchd service if present.

Let me inspect the plist to see if this is launchd-managed, then restart appropriately. Also check watchdog/desktop logs for obvious issues before restarting.

</details>

**Tool call: terminal**

```json
{
  "command": "plutil -convert xml1 -o - ~/Library/LaunchAgents/ai.hermes.webui.plist 2>/dev/null || cat ~/Library/LaunchAgents/ai.hermes.webui.plist"
}
```

**Tool call: terminal**

```json
{
  "command": "tail -n 20 ~/.hermes/logs/webui-watchdog.log 2>/dev/null || true"
}
```

**Tool call: terminal**

```json
{
  "command": "tail -n 20 ~/.hermes/logs/desktop.log 2>/dev/null || true"
}
```

**Tool call: terminal**

```json
{
  "command": "ps -Ewww -p 13039 | tr ' ' '\\n' | grep -E 'HERMES_WEBUI|PORT' || true"
}
```

### 🤖 Assistant — 2026-09-14T16:31:10Z

<details><summary>Reasoning</summary>

Based on the skill and
