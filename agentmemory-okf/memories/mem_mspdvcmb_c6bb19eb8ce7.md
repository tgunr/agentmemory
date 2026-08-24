---
type: Fact
title: # Project Management Skill Setup

source: hermes
session_id: 20260704_085129_dfd
description: # Project Management Skill Setup

source: hermes
session_id: 20260704_085129_dfdb7b
resource: hermes://session/20260704_085129_dfdb7b

# Conversation

- **Session ID:** `20260704_085129_dfdb7b`
- **So
resource: agentmemory://memory/mem_mspdvcmb_c6bb19eb8ce7
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260704_085129_dfdb7b"]
timestamp: 2026-08-12T01:01:07.597Z
source: agentmemory
strength: 7
---
# Content

# Project Management Skill Setup

source: hermes
session_id: 20260704_085129_dfdb7b
resource: hermes://session/20260704_085129_dfdb7b

# Conversation

- **Session ID:** `20260704_085129_dfdb7b`
- **Source:** tui
- **Model:** gemma4:12b-mlx
- **Started:** 2026-07-04T13:51:50Z
- **Ended:** 2026-07-04T14:01:40Z
- **Messages:** 2
- **Tokens:** 27359 in / 623 out

---

### 👤 User — 2026-07-04T13:51:51Z

[IMPORTANT: The user has invoked the "projects" skill, indicating they want you to follow its instructions. The full skill content is loaded below.]

---
name: projects
description: >-
  Project registry for the Hermes Desktop sidebar (SQLite-backed) AND per-profile
  YAML registries. Handle both: the global `~/.hermes/projects.db` uses
  `projects` + `project_folders` tables (multi-folder per project) and is what
  the sidebar reads; per-profile `projects.yaml` is the workspace-tracking
  registry with notes and linked sessions.
  ~/.hermes/profiles/<name>/projects.yaml). Works with any Hermes profile.
version: 1.0.0
author: Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [projects, organization, productivity, workflow, registry, consolidation, audit, dedup]
    related_skills: [hermes-workspace-context, hermes-agent, file-organizer]
---

# Projects

Generic per-profile project registry. Every Hermes profile gets its own
`projects.yaml` for tracking work — separate data, same API.

## When to Use

Use this skill when the user:
- Wants to organize their work into named projects
- Asks to list, create, update, delete, or archive a project
- Wants to switch to (or detect) a specific project's working directory
- Wants to add notes or track progress on a specific project
- Wants to filter projects by status, category, or tag
- Mentions "my projects", "what am I working on", "what's active", etc.
- Wants to **start a new session for a specific project** ("work on project X",
  "start a session for the USPIS project")
- Asks **"what have we done on project X?"** or "show me the project context"
- Wants to **link or unlink a session** to a project
- Says "what did we last do?" and a project can be detected from cwd

## How It Works

### Data Location

The registry is a single `projects.yaml` per profile:

| Profile | Registry path |
|---------|---------------|
| default (no `$HERMES_PROFILE`) | `~/.hermes/projects.yaml` |
| named (`$HERMES_PROFILE=cnc`)  | `~/.hermes/profiles/cnc/projects.yaml` |

Override with `$HERMES_PROJECT_FILE` for tests or custom locations. When using a profile-specific registry, set both env vars together:

```bash
export HERMES_PROFILE=ai
export HERMES_PROJECT_FILE=~/.hermes/profiles/ai/projects.yaml
python3 ~/.hermes/skills/productivity/projects/scripts/projects.py list
```

### The Manager Script

All operations go through:
```
python3 ~/.hermes/skills/productivity/projects/scripts/projects.py [options] <command> [args]
```

Create a shell function for convenience (add to `~/.zshrc` or similar):
```bash
proj() { python3 ~/.hermes/skills/productivity/projects/scripts/projects.py "$@"; }
```

### Quick Command Reference

| Command | Purpose |
|---------|---------|
| `list [--status S] [--category C] [--tag T] [--archived]` | Show projects (active by default) |
| `show <name>` | Detailed view of one project (includes linked sessions) |
| `create <name> [-d desc] [-c cat] [-t tags] [--path /dir]` | Add a new project |
| `update <name> [-d desc] [-c cat] [-t tags] [--path /dir] [--status S]` | Modify fields |
| `delete <name> [--force]` | Remove permanently (must archive first unless --force) |
| `archive <name>` | Soft-delete (status → archived) |
| `restore <name>` | Bring archived project back to active |
| `note <name> "text"` | Append timestamped note |
| `notes <name>` | Show all notes for a project |
| `switch <name>` | Print the project's path (for cd / cwd) |
| `detect` | Identify project matching current working directory |
| `stats` | Summary counts by status and category |
| `export` | Dump full registry as JSON |
| `link-session <name> <session_id> [note]` | Link a session to a project |
| `un
