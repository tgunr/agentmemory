---
type: Fact
title: # Add New Project to projects popup

source: hermes
session_id: local-239b6a373b
description: # Add New Project to projects popup

source: hermes
session_id: local-239b6a373b9f92d4ebaaaf727b1877f6ec9c3a0f72eeba2184fd3243dc426e32
resource: hermes://session/local-239b6a373b9f92d4ebaaaf727b1877f6
resource: agentmemory://memory/mem_mwj1vtbp_052aadd9cef8
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/Ideas"]
timestamp: 2026-11-16T09:17:46.038Z
source: agentmemory
strength: 7
---
# Content

# Add New Project to projects popup

source: hermes
session_id: local-239b6a373b9f92d4ebaaaf727b1877f6ec9c3a0f72eeba2184fd3243dc426e32
resource: hermes://session/local-239b6a373b9f92d4ebaaaf727b1877f6ec9c3a0f72eeba2184fd3243dc426e32

# Conversation

- **Session ID:** `local-239b6a373b9f92d4ebaaaf727b1877f6ec9c3a0f72eeba2184fd3243dc426e32`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-15T16:50:57Z
- **Messages:** 99
- **CWD:** `/Volumes/projects/Ideas`
- **Tokens:** 76311 in / 12353 out

---

### 👤 User — 2026-11-15T16:50:58Z

The projects popup should have a "New Project" to create a new project in both places.

### 🤖 Assistant — 2026-11-15T16:51:03Z

<details><summary>Reasoning</summary>

The user wants a "New Project" item in the projects popup in the Hermes desktop app, creating the project "in both places" — likely meaning ~/.hermes/projects.db and possibly the directory/workspace. Let me investigate the codebase first.

Load relevant skills: hermes-desktop, hermes-ui.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-desktop"
}
```

**Tool call: search_files**

```json
{
  "limit": 30,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop",
  "pattern": "projects",
  "target": "files"
}
```

### 🤖 Assistant — 2026-11-15T16:51:10Z

<details><summary>Reasoning</summary>

I need to find what "the projects popup" is. Likely the projects selector in the chat prompt/composer — a popup listing projects to pick for the session. Let me search.

</details>

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src",
  "pattern": "project",
  "target": "files"
}
```

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src",
  "pattern": "New Project|NewProject|newProject"
}
```

### 🤖 Assistant — 2026-11-15T16:51:15Z

<details><summary>Reasoning</summary>

There's a project-dialog.tsx which creates projects. "In both places" — what are the two places? Probably the desktop app being connected to two gateways? Or creating the project in projects.db AND on disk? Hmm.

Actually likely: the user means the projects popup exists in two places (e.g., the sidebar project header popup and the composer/project switcher popup), and both should have a "New Project" option. Let me find the popup(s).

Let me search for a projects popup component.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent/apps/desktop/src && grep -rln \"project\" --include=*.tsx --include=*.ts app components 2>/dev/null | head -60"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent/apps/desktop/src && grep -rn \"Popover\\|DropdownMenu\" --include=*.tsx -l | grep -i project"
}
```

### 🤖 Assistant — 2026-11-15T16:51:19Z

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/projects/project-menu.tsx"
}
```

### 🤖 Assistant — 2026-11-15T16:51:23Z

<details><summary>Reasoning</summary>

This is per-project menu, not the "projects popup". The "projects popup" is likely a picker in the composer/prompt area where you choose which project a session belongs to. Let me search for a project selector in the composer.

"in both places" — maybe there are two popups: the sidebar projects section header popup and the composer project chip popup. Need to find candidates. Search for i18n keys related to projects menu, and components with "project" and popup semantics.

Let me grep for "ProjectPicker" or "project-switcher".

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent/apps/desktop/src && grep -rn \"openProjectDialog\\|projectDialog\" --include=*.tsx --include=*.ts | grep -v test | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent/apps/desktop/src && grep -rln \"project\" --include=*.tsx app/session app/composer 2>/dev/null | head -30; echo ---; ls app"
}
```

### 🤖 Assistant — 2026-11-15T16:51:29Z

<details><summary>R
