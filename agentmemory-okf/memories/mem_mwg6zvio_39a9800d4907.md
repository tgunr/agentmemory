---
type: Fact
title: # Set up project workspace

source: hermes
session_id: local-e055b50b8fefc441967
description: # Set up project workspace

source: hermes
session_id: local-e055b50b8fefc44196799d577b70813517e72a93d6f09b674597fdf0d3e07181
resource: hermes://session/local-e055b50b8fefc44196799d577b70813517e72a93d
resource: agentmemory://memory/mem_mwg6zvio_39a9800d4907
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/Ideas"]
timestamp: 2026-11-14T09:17:35.038Z
source: agentmemory
strength: 7
---
# Content

# Set up project workspace

source: hermes
session_id: local-e055b50b8fefc44196799d577b70813517e72a93d6f09b674597fdf0d3e07181
resource: hermes://session/local-e055b50b8fefc44196799d577b70813517e72a93d6f09b674597fdf0d3e07181

# Conversation

- **Session ID:** `local-e055b50b8fefc44196799d577b70813517e72a93d6f09b674597fdf0d3e07181`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-13T19:41:14Z
- **Ended:** 2026-11-14T06:16:48Z
- **Messages:** 46
- **CWD:** `/Volumes/projects/Ideas`
- **Tokens:** 70022 in / 4578 out
- **Est. cost:** $-62789.0000

---

### 👤 User — 2026-11-13T19:41:15Z

[IMPORTANT: The user has invoked the "project-workspace-setup" skill, indicating they want you to follow its instructions. The full skill content is loaded below.]

---
name: project-workspace-setup
description: Use when setting up a new project workspace.
version: 1.3.0
tags: [project, workspace, setup, brief]
---

# Project Workspace Setup

## When to Use
Create a new project workspace in the **active Hermes profile** before starting any work that benefits from tracked structure — CNC/making, writing, research, software, or anything else. Domain-specific add-ons (e.g. `project-cnc`) layer on top of this generic scaffold.

## Determining the Active Profile
The skill writes to the profile you are currently running under. Find it from:
- The system prompt line `Active Hermes profile: <name>` (use that value for `<PROFILE>`), OR
- The environment variable if one is exported, OR
- Default to `default` if no profile is shown.

For the rest of this skill, substitute `<PROFILE>` with that name (e.g. `cnc`, `default`, `jo`).

## Steps

### 1. Ask the three questions FIRST — create nothing until all three are answered

Every run of this skill begins with ONE `clarify` call carrying exactly these three questions.
Do not create directories, write files, init git, or edit `projects.yaml` before the answers
come back.

1. **Project name** — the canonical short name: it becomes the folder name and the
   `projects.yaml` entry. Ask in the same free-text question for a one-line description and
   whether source files already exist somewhere (and where), since "existing material to import"
   changes the initial commit.
2. **Category** — single-select over the common values (`software/app`, `making/CNC`,
   `writing/research`, `other (I'll describe)`), recommended first.
3. **Project folder location** — the full absolute path to scaffold. Read the registry (Step 2)
   first so the choices are concrete and the recommended option is first:
   - the registered `path:` for that project, if one exists — pre-fill it as the recommended
     choice rather than silently overriding or re-inventing it,
   - `/Volumes/projects/<PROJECT_NAME>` — the canonical default for a new project,
   - an "other location" row for anything else (`/Volumes/AI/...`, a repo path, `~/Work/...`).

A missing or skipped answer is not permission to guess. Do not fall back to the canonical
default, the profile `workspace/` dir, or a path from another profile without an explicit answer —
re-ask instead of scaffolding somewhere the user did not choose.

### 2. Reconcile the answer with existing projects
`projects.yaml` is the canonical **project-name → folder** map for **all** project types, not just
CNC. Consult it before the questions (to pre-fill the folder choice) and after them:

- Active profile first: `~/.hermes/profiles/<PROFILE>/projects.yaml`.
- If no match, scan the other profiles' `projects.yaml` for a `path:`.

If the project is registered and the user confirmed the same path, update that entry (Step 3)
instead of adding a duplicate. If it is registered at a dead or different path and the user chose
a new one, correct the entry and note the superseded path. If it is NOT registered, that is a
**registry gap, not "unknown project"**: register it (Step 3) so the next session resolves it
automatically. (Real case: TiltPal, an iOS/Swift app at `/Users/davec/Work/TiltPal`, was
unknowable to any agent until it was added to the default profile's `projects.yaml`.)

### 3. Add to projects.yaml
Standard entry format:
```yaml
projects:
- name: <PROJECT_NAME>
  description: >
    One-line descri
