---
type: Fact
title: # Optimizing Background Processes For Development Work

source: hermes
session_i
description: # Optimizing Background Processes For Development Work

source: hermes
session_id: 20260711_235500_6727db
resource: hermes://session/20260711_235500_6727db

# Conversation

- **Session ID:** `20260711
resource: agentmemory://memory/mem_mspcm4wq_fece310c7c4a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T00:25:58.088Z
source: agentmemory
strength: 7
---
# Content

# Optimizing Background Processes For Development Work

source: hermes
session_id: 20260711_235500_6727db
resource: hermes://session/20260711_235500_6727db

# Conversation

- **Session ID:** `20260711_235500_6727db`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-07-12T04:55:00Z
- **Messages:** 248
- **CWD:** `/Users/davec`
- **Tokens:** 462 in / 66591 out
- **Est. cost:** $0.4606

---

### 👤 User — 2026-07-12T04:55:00Z

I want examine my system and cut down the background apps and tasks in use to minimum required for code development and AI work. Need recommendations on what to cut and what to leave that is useful.

### 🤖 Assistant — 2026-07-12T04:55:09Z

<details><summary>Reasoning</summary>

The user wants to examine their Mac system's background apps and processes, get recommendations on what to keep (useful for code dev and AI work) and what to cut. Let me gather information about what's running and scheduled.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== LAUNCH AGENTS (user) ===\" && ls -1 ~/Library/LaunchAgents/ 2>/dev/null && echo && echo \"=== LAUNCH DAEMONS (system) ===\" && ls -1 /Library/LaunchDaemons/ 2>/dev/null && echo && echo \"=== LAUNCH AGENTS (system) ===\" && ls -1 /Library/LaunchAgents/ 2>/dev/null"
}
```

**Tool call: terminal**

```json
{
  "command": "echo \"=== RUNNING PROCESSES ===\" && ps aux --sort=-%mem | head -80"
}
```

**Tool call: terminal**

```json
{
  "command": "echo \"=== LOGIN ITEMS ===\" && osascript -e 'tell application \"System Events\" to get the name of every login item' 2>/dev/null; echo && echo \"=== RUNNING LAUNCH AGENTS ===\" && launchctl list 2>/dev/null | head -60"
}
```

### 🤖 Assistant — 2026-07-12T04:55:23Z

<details><summary>Reasoning</summary>

Let me gather more info about processes.

</details>

**Tool call: terminal**

```json
{
  "command": "ps aux -m | head -80"
}
```

**Tool call: terminal**

```json
{
  "command": "launchctl list 2>/dev/null | grep -v 'com.apple' | grep -v '^-' | head -40"
}
```

### 🤖 Assistant — 2026-07-12T04:55:46Z

<details><summary>Reasoning</summary>

Let me analyze what's running and categorize it for the user. I need to look at:

1. User Launch Agents (~/Library/LaunchAgents/)
2. Login Items
3. Running processes

Let me categorize everything:

**KEEP - AI/Dev work essentials:**
- Hermes (Hermes.app, hermes serve, gateway) - AI work ✓
- MCP Router - AI work ✓
- OpenClaw gateway (ai.openclaw.gateway) - AI-related ✓
- AgentMemory (com.github.agentmemory) - AI memory ✓


- MCP Memory Server (com.mcp.memory-server) - AI memory ✓
- Ollama (net.polymicro.ollama) - local LLM inference ✓
- VS Code / Kilo - code development ✓
- iTerm 2 - terminal ✓
- Docker (com.docker.*) - needed for some dev work ✓
- Redis (homebrew.mxcl.redis) - dev server ✓

**KEEP - System/utility:**
- MXMaster3 button remap - productivity ✓
- SSH agent - dev work ✓

**CUT candidates:**

Now I'm going through the applications that could be disabled. Neo is taking up significant memory with multiple renderer processes, so that's a prime candidate. Then there's a bunch of cloud sync and update services I don't need running constantly—Dropbox, Google updaters, Nextcloud, and JetBrains Toolbox can all be disabled. The rest are either duplicate services like BlueBubbles when I have iMessage, unnecessary background listeners like Boomerang and Rewind AI, or productivity apps I'm not actively using like Setapp and its associated tools. Looking at the remaining apps and services, I see several more candidates for removal—Amazon is clearly unnecessary, and the audio monitor and some utility apps can go. I'm also noting that Nextcloud's relevance depends on whether the user actually needs cloud storage, and there are a few launch agents from Homebrew for Redis and Selenium that might be worth removing if they're not actively being used for development.

</details>

**Tool call: terminal**

```json
{
  "command": "ps aux -m | awk '{cmd=$11; for(i=12;i<=NF;i++) cmd=cmd\" \"$i; if (!seen[cmd]++) print cmd}' | sort | awk -F/ '{print $NF}' | sort -u | grep -iE '(docker|podman|ollama|redis|chrome|safa
