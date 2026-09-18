---
type: Fact
title: # Waiting for Notifications from Another Profile

source: hermes
session_id: 202
description: # Waiting for Notifications from Another Profile

source: hermes
session_id: 20260723_164941_fa586b
resource: hermes://session/20260723_164941_fa586b

# Conversation

- **Session ID:** `20260723_16494
resource: agentmemory://memory/mem_msp0d5om_31d20ae92dc3
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI/agentmemory"]
timestamp: 2026-08-11T18:43:03.802Z
source: agentmemory
strength: 7
---
# Content

# Waiting for Notifications from Another Profile

source: hermes
session_id: 20260723_164941_fa586b
resource: hermes://session/20260723_164941_fa586b

# Conversation

- **Session ID:** `20260723_164941_fa586b`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-23T21:49:43Z
- **Messages:** 510
- **CWD:** `/Volumes/AI/agentmemory`
- **Tokens:** 964714 in / 28812 out
- **Est. cost:** $1.0176

---

### 👤 User — 2026-07-23T21:49:44Z

i am running a seesion in another profile, waiting for some notifications

### 👤 User — 2026-07-23T21:49:44Z

i am running a seesion in another profile, waiting for some notifications

### 🤖 Assistant — 2026-07-23T21:49:51Z

**Tool call: session_search**

```json
{
  "limit": 10
}
```

### 🤖 Assistant — 2026-07-23T21:49:51Z

**Tool call: session_search**

```json
{
  "limit": 10
}
```

### 🤖 Assistant — 2026-07-23T21:49:55Z

**Tool call: process**

```json
{
  "action": "list"
}
```

### 🤖 Assistant — 2026-07-23T21:49:57Z

**Tool call: cronjob**

```json
{
  "action": "list"
}
```

### 🤖 Assistant — 2026-07-23T21:50:02Z

I can see several scheduled jobs. The ones delivering via BlueBubbles (iMessage bridge) are experiencing delivery errors. 

To help you with the session in the **other profile** you're waiting on, could you let me know:

1. **Which profile name** is the session in? (e.g., "work", "jo", "personal", etc.)
2. **Session ID** if you have it, or **approximate start time**?

You can find session IDs in the other profile's database at `~/.hermes/profiles/<profile-name>/sessions/` or I can search across profiles. For example, if your session is in profile "work", I can query it like:

```
session_search(session_id="<id>", profile="work")
```

Once you tell me the profile name, I can check what's happening with that session and any pending notifications!

### 👤 User — 2026-07-23T21:50:37Z

profile is "ai" started about 3 minutes ago

### 🤖 Assistant — 2026-07-23T21:50:45Z

<details><summary>Reasoning</summary>

The user wants me to check a session in profile "ai" that started about 3 minutes ago. I need to search the session database for that profile. I can use session_search with profile="ai" and maybe browse recent sessions.

</details>

**Tool call: session_search**

```json
{
  "profile": "ai",
  "limit": 5
}
```

### 🤖 Assistant — 2026-07-23T21:50:49Z

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/ | grep -E \"ai|default\"",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/ai/sessions/ 2>/dev/null | tail -20",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-07-23T21:51:02Z

<details><summary>Reasoning</summary>

The "ai" profile exists, but its sessions folder only contains request dumps from July 4-5 and July 21. The user said they started a session about 3 minutes ago in the "ai" profile. 

Wait - the session_search tool with profile="ai" returned results from the default profile, which suggests the profile parameter might not be working correctly for browse mode, or the sessions are stored differently. 

The "ai" profile directory has 46 items (drwx------@ 46 davec staff 1472 Jul 23 16:45 ai), so it's quite active. Let me look at its structure. Also, the user said "running a session in another profile" - maybe they mean a live session in the Hermes Desktop app or another TUI instance? The "ai" profile has 46 items so it's a big profile.

Let me check the actual state database of the "ai" profile to find recent sessions. The sessions might be in ~/.hermes/profiles/ai/state.db. Let me also check what files are in the ai profile directory.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/ai/ | tail -50",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "sqlite3 ~/.hermes/profiles/ai/state.db \"SELECT id, title, source, created_at, updated_at FROM sessions ORDER BY updated_at DESC LIMIT 10;\" 2>/dev/null",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-07-23T21:51:13Z

<details><summary>Reasoning</summary>

The sqlite3 query returned no output and exit code 1. Let me check if the sta
