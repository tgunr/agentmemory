---
type: Fact
title: # Retiring projects process guidance

source: hermes
session_id: local-f72daeb20
description: # Retiring projects process guidance

source: hermes
session_id: local-f72daeb20ac9380be3e18cf64b32ac02cc7aac75cbdaaa69291e411e5ead06e6
resource: hermes://session/local-f72daeb20ac9380be3e18cf64b32ac0
resource: agentmemory://memory/mem_mvz1qgws_3d4225336def
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes"]
timestamp: 2026-11-02T09:18:13.139Z
source: agentmemory
strength: 7
---
# Content

# Retiring projects process guidance

source: hermes
session_id: local-f72daeb20ac9380be3e18cf64b32ac02cc7aac75cbdaaa69291e411e5ead06e6
resource: hermes://session/local-f72daeb20ac9380be3e18cf64b32ac02cc7aac75cbdaaa69291e411e5ead06e6

# Conversation

- **Session ID:** `local-f72daeb20ac9380be3e18cf64b32ac02cc7aac75cbdaaa69291e411e5ead06e6`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-01T09:58:24Z
- **Ended:** 2026-11-01T16:19:47Z
- **Messages:** 160
- **CWD:** `/Users/davec/.hermes`
- **Tokens:** 124590 in / 25923 out
- **Est. cost:** $-23749.0000

---

### 👤 User — 2026-11-01T09:59:12Z

How should I go about retiring projects

### 🤖 Assistant — 2026-11-01T09:59:17Z

**Tool call: tool_describe**

```json
{
  "names": [
    "desktop_project"
  ]
}
```

### 🤖 Assistant — 2026-11-01T09:59:22Z

The answer depends on what you mean by "project." There are two cases:

**Hermes desktop Projects** (the named workspaces in `~/.hermes/projects.db`)
- The `desktop_project` tool can only create, switch, and list. It can't archive or delete, so retiring one means using the UI or editing the DB directly.
- Before removing one, check whether any chats are still in it (`desktop_project list` shows which one this chat is in).
- If you want to keep history, rename it with a prefix like `ARCHIVED-` rather than deleting it. Renaming means updating both `name` and `slug` in the DB, then verifying with `list`.
- Deleting is permanent, so back up `projects.db` first.

**Kanban tasks** (boards, if that's what you meant)
- Move finished work to `done`, then `archived`. Archived tasks are hidden from default listings and can be restored.

**Real-world repos or CAD projects**
- Archive the repo on GitHub or tag it, and keep the files. Don't delete print assets or scad/STL files that your slicer profiles point to.

Which kind do you want to retire? I can walk you through the exact steps for that one.

### 👤 User — 2026-11-01T10:00:45Z

basically I don't want to see it in the sidebar anymore but would like to be able to revive it if needed

### 🤖 Assistant — 2026-11-01T10:00:53Z

<details><summary>Reasoning</summary>

So they want to hide desktop Project from sidebar but keep revivable. That's an archive/hide flag in projects.db. Let me look at the schema and the desktop app code for sidebar filtering.

Let me inspect the DB schema and check if there's an archived/hidden column.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && sqlite3 projects.db \".schema\" 2>&1 | head -60; echo ---; sqlite3 projects.db \"select * from projects\" 2>&1 | head -20"
}
```

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop",
  "pattern": "archived|hidden|ARCHIVE"
}
```

### 🤖 Assistant — 2026-11-01T10:01:02Z

<details><summary>Reasoning</summary>

Good: `projects` table has `archived INTEGER NOT NULL DEFAULT 0`. So archiving is the mechanism. Now check how the desktop sidebar behaves re archived — does it have UI to archive, and does it hide archived projects (with a way to show them)?

Let me grep in desktop src for archived project usage and the projects API/RPC.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && sqlite3 projects.db \"select count(*), sum(archived) from projects\"; echo ---; sqlite3 projects.db \"select id,slug,name,archived from projects where archived=1\"; echo ---META---; sqlite3 projects.db \"select * from project_meta\""
}
```

**Tool call: search_files**

```json
{
  "limit": 60,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "project(Archived|_archived|\\.archived)|archived_project|projects\\.archive"
}
```

### 🤖 Assistant — 2026-11-01T10:01:11Z

<details><summary>Reasoning</summary>

So there's an existing archive mechanism. Check the desktop sidebar code around workspace-groups.ts:459, and tui_gateway/methods_projects.py archive/unarchive. Also is there UI to archive (context menu)?

</details>

**Tool call: read_file**

```json
{
  "limit": 45,
  "offset": 430,
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/projects/workspace-group
