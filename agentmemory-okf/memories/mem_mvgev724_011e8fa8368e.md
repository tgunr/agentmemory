---
type: Fact
title: # Restore projects popup in bottom status bar

source: hermes
session_id: 202610
description: # Restore projects popup in bottom status bar

source: hermes
session_id: 20261010_125129_b40f5d
resource: hermes://session/20261010_125129_b40f5d

# Conversation

- **Session ID:** `20261010_125129_b
resource: agentmemory://memory/mem_mvgev724_011e8fa8368e
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261010_125129_b40f5d"]
timestamp: 2026-10-20T08:18:11.279Z
source: agentmemory
strength: 7
---
# Content

# Restore projects popup in bottom status bar

source: hermes
session_id: 20261010_125129_b40f5d
resource: hermes://session/20261010_125129_b40f5d

# Conversation

- **Session ID:** `20261010_125129_b40f5d`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-10T17:52:02Z
- **Ended:** 2026-10-19T09:36:25Z
- **Messages:** 486
- **Tokens:** 195795 in / 122260 out
- **Est. cost:** $-95651.0000

---

### 👤 User — 2026-10-10T17:52:02Z

The projects popup is missing from the status bar on bottom

### 🤖 Assistant — 2026-10-10T17:52:08Z

<details><summary>Reasoning</summary>

The user says the projects popup is missing from the status bar at the bottom. This is about the Hermes desktop app UI. Let me check relevant skills: hermes-ui, hermes-desktop, hermes-workspace-context, desktop_project.

Let me load the hermes-ui skill and hermes-workspace-context skill.

Also relevant memory: "Hermes desktop Projects live in ~/.hermes/projects.db (sqlite); desktop_project tool has no rename — edit name+slug in DB, verify with list."

So the Projects popup (a menu to switch Projects) is missing from bottom status bar. This requires code investigation in ~/.hermes/hermes-agent.

Let me start by loading skills and checking status.

Let me batch: skill_view hermes-ui, hermes-workspace-context, and search for projects in the desktop UI code.

Actually let me first understand the situation. The user is on desktop app, bottom status bar. There's a popup menu for projects. It's missing. Possibly related to a recent patch, or the projects feature being disabled because projects.db is empty, or a UI change.

Let me load skills first.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-ui"
}
```

### 🤖 Assistant — 2026-10-10T17:52:08Z

<details><summary>Reasoning</summary>

The user says the projects popup is missing from the status bar at the bottom. This is about the Hermes desktop app UI. Let me check relevant skills: hermes-ui, hermes-desktop, hermes-workspace-context, desktop_project.

Let me load the hermes-ui skill and hermes-workspace-context skill.

Also relevant memory: "Hermes desktop Projects live in ~/.hermes/projects.db (sqlite); desktop_project tool has no rename — edit name+slug in DB, verify with list."

So the Projects popup (a menu to switch Projects) is missing from bottom status bar. This requires code investigation in ~/.hermes/hermes-agent.

Let me start by loading skills and checking status.

Let me batch: skill_view hermes-ui, hermes-workspace-context, and search for projects in the desktop UI code.

Actually let me first understand the situation. The user is on desktop app, bottom status bar. There's a popup menu for projects. It's missing. Possibly related to a recent patch, or the projects feature being disabled because projects.db is empty, or a UI change.

Let me load skills first.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-ui"
}
```

### 🤖 Assistant — 2026-10-10T17:52:13Z

<details><summary>Reasoning</summary>

The user says "The projects popup is missing from the status bar on bottom". This is about the Hermes desktop app status bar — a projects popup. Let me look at the desktop plugins skill reference, and also check whether there's a plugin that provides the projects popup. The user's memory says: "UI taste: dislikes horizontal/cluttered status bars — prefers pop-up menus for gateway/profile switching."

So there might be a desktop plugin that adds a projects popup to the status bar. Let me check ~/.hermes/desktop-plugins/.

Let me be efficient: list desktop-plugins dir, grep for "projects" in it, and check the app's status bar built-ins.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/desktop-plugins/ 2>/dev/null; echo \"---\"; for d in ~/.hermes/desktop-plugins/*/; do echo \"== $d\"; ls -la \"$d\"; done 2>/dev/null | head -60"
}
```

**Tool call: skill_view**

```json
{
  "file_path": "references/desktop-plugins
