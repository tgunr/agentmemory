---
type: Fact
title: # Verify iMCP stays running after login or kill

source: hermes
session_id: 2026
description: # Verify iMCP stays running after login or kill

source: hermes
session_id: 20260821_073525_f61b2b
resource: hermes://session/20260821_073525_f61b2b

# Conversation

- **Session ID:** `20260821_073525
resource: agentmemory://memory/mem_mt5jaw6n_1d6cc776215d
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI"]
timestamp: 2026-08-23T08:17:29.651Z
source: agentmemory
strength: 7
---
# Content

# Verify iMCP stays running after login or kill

source: hermes
session_id: 20260821_073525_f61b2b
resource: hermes://session/20260821_073525_f61b2b

# Conversation

- **Session ID:** `20260821_073525_f61b2b`
- **Source:** desktop
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-08-21T12:35:25Z
- **Ended:** 2026-08-21T13:11:16Z
- **Messages:** 33
- **CWD:** `/Volumes/AI`
- **Tokens:** 275563 in / 5201 out

---

### 👤 User — 2026-08-21T12:35:26Z

Verify iMCP is running and will stay running if login or killed

### 🤖 Assistant — 2026-08-21T12:35:48Z

<details><summary>Reasoning</summary>

The user wants me to verify that iMCP is running and check its resilience - whether it stays running if killed or if login is involved. Let me first understand what iMCP is and check its status.

Let me start by:
1. Checking what iMCP is (it's under /Volumes/AI/tools/iMCP based on the AGENTS.md)
2. Checking if it's running
3. Understanding its behavior

Let me look at the iMCP directory and check running processes.

</details>

**Tool call: search_files**

```json
{
  "path": "/Volumes/AI",
  "pattern": "iMCP",
  "target": "files"
}
```

**Tool call: terminal**

```json
{
  "command": "ps aux | grep -i \"imcp\\|iMCP\" | grep -v grep"
}
```

**Tool call: terminal**

```json
{
  "command": "lsof -i :8080 -i :3000 -i :8000 -i :9000 -i :5000 2>/dev/null | head -30"
}
```

### 🤖 Assistant — 2026-08-21T12:37:01Z

<details><summary>Reasoning</summary>

I can see iMCP is running. Let me gather more info:

1. The iMCP.app is running (PID 47106, 47102, 1321)
2. There's a `keep-imcp-alive.sh` watchdog (PID 1288)
3. There's a `mcp_stdio_watchdog.py` (PID 47102)
4. No obvious ports open on common ports

Let me look at the iMCP app structure, the watchdog script, and figure out what ports iMCP uses.

</details>

**Tool call: terminal**

```json
{
  "command": "cat /Users/davec/.local/bin/keep-imcp-alive.sh"
}
```

**Tool call: terminal**

```json
{
  "command": "cat /Users/davec/.hermes/hermes-agent/tools/mcp_stdio_watchdog.py"
}
```

**Tool call: search_files**

```json
{
  "file_glob": "*.plist",
  "path": "/Library/LaunchAgents ~/Library/LaunchAgents",
  "pattern": "iMCP|imcp",
  "target": "content"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Applications/iMCP.app/Contents/"
}
```

### 🤖 Assistant — 2026-08-21T12:37:32Z

<details><summary>Reasoning</summary>

Now let me read the LaunchAgent plist to understand how it's configured, and also check the full keepalive script.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Library/LaunchAgents/co.dododo.iMCP.keepalive.plist"
}
```

**Tool call: terminal**

```json
{
  "command": "cat /Users/davec/.local/bin/keep-imcp-alive.sh 2>/dev/null; echo \"---\"; cat /tmp/keep-imcp-alive.out 2>/dev/null | tail -5; echo \"---\"; cat /tmp/keep-imcp-alive.err 2>/dev/null | tail -5"
}
```

**Tool call: terminal**

```json
{
  "command": "# Check if the watchdog wrapper is working: what's its parent?\nps -o pid,ppid,args -p 47102 2>/dev/null; echo \"---\"; ps -o pid,ppid,args -p 47106 2>/dev/null"
}
```

### 🤖 Assistant — 2026-08-21T12:37:56Z

<details><summary>Reasoning</summary>

Now I have a full picture. Let me now test the failure modes:

1. **Login scenario**: The LaunchAgent has `LimitLoadToSessionType=Aqua`, meaning it only starts in a GUI session. Let me check how it behaves.
2. **Kill scenario**: Let me kill the iMCP server process and see if the watchdog wrapper (mcp_stdio_watchdog.py) reaps it, and if the keep-alive bash script restarts the app.

Let me first understand the process tree:
- PID 1288: `/bin/bash /Users/davec/.local/bin/keep-imcp-alive.sh` (the keepalive wrapper, launched by LaunchAgent)


- PID 1321: `/Applications/iMCP.app/Contents/MacOS/iMCP` (the GUI app itself, launched by the keepalive script)
- PID 47033: the Hermes process ( spawning the watchdog)
- PID 47102: `mcp_stdio_watchdog.py --ppid 47033` (watchdog, parent is Hermes)
- PID 47106: `imcp-server` (the actual MCP server, parent is watchdog)

So there's an important distinction here: the keepalive wrapper manages the GUI app, while t
