---
type: Fact
title: # Fix sidebar active session display via agentmemory

source: hermes
session_id:
description: # Fix sidebar active session display via agentmemory

source: hermes
session_id: 20260721_092550_1df2c6
resource: hermes://session/20260721_092550_1df2c6

# Conversation

- **Session ID:** `20260721_0
resource: agentmemory://memory/mem_mspdvrna_e90087289b61
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:27.060Z
source: agentmemory
strength: 7
---
# Content

# Fix sidebar active session display via agentmemory

source: hermes
session_id: 20260721_092550_1df2c6
resource: hermes://session/20260721_092550_1df2c6

# Conversation

- **Session ID:** `20260721_092550_1df2c6`
- **Source:** tui
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-07-21T14:25:50Z
- **Messages:** 225
- **CWD:** `/Users/davec`
- **Tokens:** 541854 in / 18425 out

---

### 👤 User — 2026-07-21T14:25:50Z

create an agentmemory action to fix the display of active session in the sidebar

### 🤖 Assistant — 2026-07-21T14:25:57Z

<details><summary>Reasoning</summary>

The user wants to create or fix something in AgentMemory related to "display of active session in the sidebar". Before taking any action, I should:

1. Check if there's an existing skill for agentmemory-hermes-integration, and read it.
2. Understand the current state: inspect AgentMemory docs/code if available.
3. Determine what "sidebar" refers to here (likely Hermes WebUI sidebar or AgentMemory's own UI).
4. Propose a concrete fix/implementation rather than a vague change.
5. Sanity-check it (doc/code inspect, maybe a dry-run or validation), then report back.

Let's start by loading the agentmemory-hermes-integration skill to see the canonical rules, and also check what's in ~/.hermes or related config for context.

</details>

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

**Tool call: search_files**

```json
{
  "target": "files",
  "pattern": "**/agentmemory/**",
  "path": "/Users/davec",
  "limit": 50
}
```

**Tool call: search_files**

```json
{
  "target": "files",
  "pattern": "**/webui/**",
  "path": "/Users/davec",
  "limit": 50
}
```

### 🤖 Assistant — 2026-07-21T14:27:06Z

<details><summary>Reasoning</summary>

I need to find the AgentMemory sidebar/active-session display code. The skill references ports 3111/3113 and the viewer SPA. The likely issue is in the AgentMemory UI on port 3113, which is a separate installed instance, not in this user's home tree by default. I should locate the AgentMemory repo first (likely /Volumes/AI/agentmemory or similar) and then inspect the viewer/sidebar code. I'll search for the AgentMemory repo and for sidebar-related viewer code.

</details>

**Tool call: search_files**

```json
{
  "limit": 20,
  "path": "/Users/davec",
  "pattern": "agentmemory*",
  "target": "files"
}
```

**Tool call: search_files**

```json
{
  "file_glob": "*.{ts,tsx,js,jsx,html,md}",
  "limit": 100,
  "path": "/Users/davec",
  "pattern": "sidebar|active session|current session|sessions list|SessionItem|activeSession",
  "target": "content"
}
```

### 🤖 Assistant — 2026-07-21T14:28:17Z

<details><summary>Reasoning</summary>

The user wants to "create an agentmemory action to fix the display of active session in the sidebar". That's pretty vague. From context, this is presumably about AgentMemory's UI/backend, not a generic UI task. Based on the skill, the likely issue is the 110+ sessions all stuck `status: active` problem (§11.4 #4), which affects the sidebar/session list display in the AgentMemory viewer. So I should offer concrete, bounded options like: backfill titles via `session/update`, close truly stale active sessions via `session/end`, rebuild title sync, or inspect the actual sidebar/session-list behavior first. I'll ask the user to pick one before running anything.

</details>

I can move fast on this, but "active session display" could go a few ways. Pick one:

1. **Fix stuck `status: active` listings** → find truly stale sessions and close them via `POST /agentmemory/session/end`
2. **Backfill blank/sidebar titles** → use `POST /agentmemory/session/update {sessionId, title}` to populate names
3. **Inspect actual viewer behavior first** → probe `/agentmemory/sessions`, `/health`, title/status fields, then tell you what’s really wrong
4. **Rebuild/restart if route/registry issue** → safe restart if this is the 404/first-run/sidebar-empty case

Which one matches what you’re seeing?

### 👤 User — 2026-07-21T14:33:21Z

none of these. The active session is displaying a rotating underscore on the top and the bottom to me. That i
