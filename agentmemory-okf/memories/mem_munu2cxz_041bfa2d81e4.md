---
type: Fact
title: # Add projects to bottom bar

source: hermes
session_id: 20260929_150528_e8d109

description: # Add projects to bottom bar

source: hermes
session_id: 20260929_150528_e8d109
resource: hermes://session/20260929_150528_e8d109

# Conversation

- **Session ID:** `20260929_150528_e8d109`
- **Source
resource: agentmemory://memory/mem_munu2cxz_041bfa2d81e4
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260929_150528_e8d109"]
timestamp: 2026-09-30T08:18:20.689Z
source: agentmemory
strength: 7
---
# Content

# Add projects to bottom bar

source: hermes
session_id: 20260929_150528_e8d109
resource: hermes://session/20260929_150528_e8d109

# Conversation

- **Session ID:** `20260929_150528_e8d109`
- **Source:** desktop
- **Model:** default
- **Started:** 2026-09-29T20:05:29Z
- **Messages:** 430
- **Tokens:** 270146 in / 57603 out
- **Est. cost:** $2.0330

---

### 👤 User — 2026-09-29T20:05:29Z

it was a session concerning changing the bottom bar to add projects alongside the gateway and profile

### 🤖 Assistant — 2026-09-29T20:05:52Z

<details><summary>Reasoning</summary>

The user is referencing a previous Hermes session about changing the bottom bar UI to add "projects" alongside gateway and profile. They want me to find/continue that prior conversation or work, not to re-read my own system prompt.

This is a good case for session_search to locate that specific prior discussion so I can pick up where it left off.

</details>

**Tool call: session_search**

```json
{
  "queries": "[\"bottom bar projects gateway profile UI\"]"
}
```

### 🤖 Assistant — 2026-09-29T20:05:57Z

<details><summary>Reasoning</summary>

The user is referencing a previous session about changing the bottom bar UI in Hermes desktop to add projects alongside gateway and profile. I don't have session_search available, but I do have the relevant skill: `hermes-ui` which is about "adding UI or readouts to Hermes desktop/TUI". Let me check that skill and also look for any related files in the workspace that might contain notes or plans from that session.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-ui"
}
```

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes",
  "pattern": "bottom bar|projects.*gateway|profile.*gateway|gateway.*profile",
  "target": "files",
  "limit": 20
}
```

### 🤖 Assistant — 2026-09-29T20:06:05Z

<details><summary>Reasoning</summary>

The skill `hermes-ui` is clearly relevant: it covers desktop/TUI UI changes, including bottom-bar chips and live plugin reloading. The search_files approach wasn’t useful here because I can’t rely on filename discovery to find a past session. I should switch to code-based inspection of Hermes session state to locate the actual session rather than continuing blind file searches.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import terminal, read_file\nimport json, os\n\nhome = os.path.expanduser(\"~\")\npaths = [\n    os.path.join(home, \".hermes\", \"state.db\"),\n    os.path.join(home, \".hermes\", \"sessions.db\"),\n    os.path.join(home, \".hermes\", \"sessions\", \"state.db\"),\n]\nfor p in paths:\n    print(\"PATH\", p, \"EXISTS\", os.path.exists(p), \"SIZE\", os.path.getsize(p) if os.path.exists(p) else None)\n"
}
```

### 🤖 Assistant — 2026-09-29T20:06:12Z

<details><summary>Reasoning</summary>

The user said: "it was a session concerning changing the bottom bar to add projects alongside the gateway and profile". They're referencing a previous conversation/session where they discussed changing the bottom bar to add projects alongside the gateway and profile. 

I need to find that session. Let me search for it. I can use session_search, but that tool doesn't exist. Let me think about what tools I have available...

Looking at my tools, I have `session_search` listed in the deferred tool catalog? Wait, no - the available tools at the top don't include session_search. Let me re-read... No, `session_search` is not in the main tools list. But I do have `read_file` and `terminal` and `execute_code`.

I could try to search the Hermes session state database or look for session files. Let me check what session storage looks like.

Actually, looking more carefully at the system prompt, it mentions Hermes sessions and state.db. Let me try to use sqlite3 to query the state.db for sessions matching that description.

</details>

**Tool call: terminal**

```json
{
  "command": "sqlite3 /Users/davec/.hermes/state.db \".tables\" 2>/dev/null | head -50",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-09-29T20:06:19Z

<details><summary>Reasoning</summary>

I need to find the se
