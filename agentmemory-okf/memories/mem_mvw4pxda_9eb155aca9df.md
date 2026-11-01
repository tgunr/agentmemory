---
type: Fact
title: # Add Move to profile menu item

source: hermes
session_id: 20261029_233055_9743
description: # Add Move to profile menu item

source: hermes
session_id: 20261029_233055_974394
resource: hermes://session/20261029_233055_974394

# Conversation

- **Session ID:** `20261029_233055_974394`
- **Sou
resource: agentmemory://memory/mem_mvw4pxda_9eb155aca9df
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Desktop"]
timestamp: 2026-10-31T08:18:28.123Z
source: agentmemory
strength: 7
---
# Content

# Add Move to profile menu item

source: hermes
session_id: 20261029_233055_974394
resource: hermes://session/20261029_233055_974394

# Conversation

- **Session ID:** `20261029_233055_974394`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-30T04:30:55Z
- **Ended:** 2026-10-30T20:27:27Z
- **Messages:** 931
- **CWD:** `/Users/davec/Desktop`
- **Tokens:** 536710 in / 75929 out
- **Est. cost:** $-193181.0000

---

### 👤 User — 2026-10-30T04:30:55Z

when right clicking on a session in the sidebar or in its tab i see a "Move to project" menu item. I want to add to that menu a "Move to profile" item to move the session to a differnt profile.

### 🤖 Assistant — 2026-10-30T04:31:00Z

<details><summary>Reasoning</summary>

Let me load relevant skills: hermes-desktop, session-transfer, hermes-agent, hermes-ui.

Let me look at the codebase.

</details>

**Tool call: skill_view**

```json
{
  "name": "session-transfer"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-ui"
}
```

### 🤖 Assistant — 2026-10-30T04:31:00Z

<details><summary>Reasoning</summary>

Let me load relevant skills: hermes-desktop, session-transfer, hermes-agent, hermes-ui.

Let me look at the codebase.

</details>

**Tool call: skill_view**

```json
{
  "name": "session-transfer"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-ui"
}
```

### 🤖 Assistant — 2026-10-30T04:31:05Z

<details><summary>Reasoning</summary>

The "Move to project" menu item is core renderer code. Let me find it in the hermes-agent desktop app.

Let me also load hermes-desktop skill maybe. First search code.

</details>

**Tool call: search_files**

```json
{
  "limit": 60,
  "output_mode": "files_only",
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop",
  "pattern": "moveToProject|move_to_project|Move to project"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && git log --oneline -3 && git status --short | head -20"
}
```

### 🤖 Assistant — 2026-10-30T04:31:10Z

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/session-actions-menu.tsx"
}
```

### 🤖 Assistant — 2026-10-30T04:31:14Z

<details><summary>Reasoning</summary>

Now I need to understand how "Move to project" works (moveSessionToProject in store/projects), and figure out how to do "Move to profile". I need a backend path: is there an API to move a session between profiles? Let me look at the REST client and gateway for profile-related session endpoints.

Key questions:
1. How to enumerate profiles in the desktop app (there's probably a profile store / gateway list).
2. How to move a session to another profile — check backend for an existing endpoint (`/api/sessions/{id}/move`?) or implement one.

Let me search backend.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && grep -rn \"move.*profile\\|profile.*move\\|transfer_session\\|session.*profile\" --include=*.py hermes/server hermes/cli 2>/dev/null | grep -i \"move\\|transfer\" | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && grep -rn \"move\" --include=*.py -l hermes/ | head -30 && echo ---- && grep -rn \"def move_session\\|moveSessionToProject\" -r apps/desktop/src | head -20"
}
```

### 🤖 Assistant — 2026-10-30T04:31:18Z

<details><summary>Reasoning</summary>

Let me find the Python backend directory structure. Where does the server live? `hermes/server` maybe doesn't exist. Let's check.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && ls && ls hermes 2>/dev/null | head"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && sed -n 760,860p apps/desktop/src/store/projects.ts"
}
```

### 🤖 Assistant — 2026-10-30T04:31:22Z

<details><summary>Reasoning</summary>

So the frontend calls gateway RPC `session.workspace.move` with `{cwd, session_key, profile}`. For "Move to profile", I need a backend RPC that copies/moves a session across profile stat
