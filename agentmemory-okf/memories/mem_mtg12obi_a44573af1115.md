---
type: Fact
title: # Fix hermes dashboard failure

source: hermes
session_id: 20260825_105828_e1877
description: # Fix hermes dashboard failure

source: hermes
session_id: 20260825_105828_e1877d
resource: hermes://session/20260825_105828_e1877d

# Conversation

- **Session ID:** `20260825_105828_e1877d`
- **Sour
resource: agentmemory://memory/mem_mtg12obi_a44573af1115
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:41.006Z
source: agentmemory
strength: 7
---
# Content

# Fix hermes dashboard failure

source: hermes
session_id: 20260825_105828_e1877d
resource: hermes://session/20260825_105828_e1877d

# Conversation

- **Session ID:** `20260825_105828_e1877d`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-25T15:58:41Z
- **Ended:** 2026-08-25T16:27:42Z
- **Messages:** 75
- **CWD:** `/Users/davec`
- **Tokens:** 110360 in / 48863 out

---

### 👤 User — 2026-08-25T15:58:41Z

hermes dashboard is failing

### 🤖 Assistant — 2026-08-25T15:58:54Z

<details><summary>Reasoning</summary>

The user says "hermes dashboard is failing". This is quite vague. Let me think about what the Hermes dashboard is. There's a Hermes Desktop UI and a WebUI. Let me look at the skills available - there's `hermes-webui` and `hermes-desktop` skills.

Let me first understand what's happening. The user is reporting that the "hermes dashboard" is failing. I should gather information. But I need to know what specifically is failing. Let me check if there's a way to diagnose.

Let me think about context. The terminal backend is ssh on a Mac. The Hermes process runs on mini.local presumably. The "dashboard" could be the Hermes WebUI or Desktop.

Let me load the relevant skill - `hermes-webui` since "dashboard" likely refers to the WebUI dashboard. Let me also consider using `hermes computer-use doctor` if it's computer use related, but that's about computer_use.

Actually, "dashboard" is ambiguous. Let me ask for clarification OR gather diagnostic info. Given the user gave a terse message, I should investigate. But I don't know what dashboard. Let me load the hermes-webui skill to understand the dashboard concept, and maybe check running processes.

Actually, let me think - the best first step is to load the hermes-agent skill and hermes-webui skill to understand what "dashboard" means in this context. But these could be large. Let me be efficient.

Let me ask a clarifying question since "dashboard failing" is ambiguous - but the user seems to want me to just fix it. The persona says "Speak like a friendly coworker who happens to know everything." And the Finishing the job rule says I should produce a working artifact.

I think the right move: gather diagnostic info about what's running. Let me check if there's a hermes webui process, and check logs. But I should first understand what dashboard means here. Let me load the hermes-webui skill which is most likely relevant, and run some diagnostics in parallel.

Actually, let me reconsider. The memory mentions "Hermes Desktop UI (TUI)" and the session is running in TUI. The "dashboard" might be the WebUI served by the gateway. Let me check what processes are running and load the skill.

Let me do parallel calls:
1. Load hermes-webui skill
2. Check running hermes processes / ports

But the skill load is a separate tool. Let me do both in one block since they're independent.

Actually, let me first check what's actually failing by looking at processes and the gateway. Let me run diagnostics. I'll batch: skill_view for hermes-webui, and terminal commands to check processes.

Let me think about what "dashboard" is. In Hermes, there's:
- The WebUI (web interface) - has a dashboard
- The Desktop UI

The most common "dashboard" is the WebUI. Let me investigate.

Let me run a terminal command to see what hermes processes are running and check the webui status, plus load the skill

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-webui"
}
```

**Tool call: terminal**

```json
{
  "command": "echo \"=== hermes procs ===\"; ps aux | grep -i hermes | grep -v grep; echo \"=== listening ports ===\"; lsof -nP -iTCP -sTCP:LISTEN 2>/dev/null | grep -iE 'hermes|808|3000|5173|4173|8787|8788' ; echo \"=== which hermes ===\"; which hermes; echo \"=== hermes --version ===\"; hermes --version 2>&1 | head -5"
}
```

### 🤖 Assistant — 2026-08-25T15:59:17Z

<details><summary>Reasoning</summary>

The user says "hermes dashboard is failing." The dashboard is the WebUI at port 8787. There's a process running (PID 1292) listening on *:8787. So the server is up. But the user says it's failing. Let me ch
