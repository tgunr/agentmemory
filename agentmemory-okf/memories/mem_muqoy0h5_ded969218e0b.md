---
type: Fact
title: # Self-leveling epoxy bed project template setup

source: hermes
session_id: 202
description: # Self-leveling epoxy bed project template setup

source: hermes
session_id: 20260808_075315_ed73a0
resource: hermes://session/20260808_075315_ed73a0

# Conversation

- **Session ID:** `20260808_07531
resource: agentmemory://memory/mem_muqoy0h5_ded969218e0b
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/projects/Develop"]
timestamp: 2026-10-02T08:18:18.332Z
source: agentmemory
strength: 7
---
# Content

# Self-leveling epoxy bed project template setup

source: hermes
session_id: 20260808_075315_ed73a0
resource: hermes://session/20260808_075315_ed73a0

# Conversation

- **Session ID:** `20260808_075315_ed73a0`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-08-08T12:53:15Z
- **Ended:** 2026-08-27T19:59:36Z
- **Messages:** 122
- **CWD:** `/Users/davec/projects/Develop`
- **Tokens:** 189268 in / 32597 out

---

### 👤 User — 2026-08-08T12:53:16Z

Create the project template folders and files for this project. The project is to research and design a self leveling bed for epoxy projects that can be set on top of a worktable and will adjust its self to be level with the ground.

### 🤖 Assistant — 2026-08-08T12:53:23Z

<details><summary>Reasoning</summary>

The user wants me to create project template folders and files for a project about researching and designing a self-leveling bed for epoxy projects. This is a new project setup task.

Let me think about what's needed:
1. Project structure with proper folders
2. Documentation files
3. Research/design artifacts

Given the user's preferences:
- Projects belong under `~/Work/` or similar
- Uses Hermes profile system
- The current working directory is `/Volumes/davec/Work/tiltpal` (based on workspace snapshot)

Let me first check the current directory structure and see what exists, then create appropriate project template folders.

I should:
1. Check current directory
2. Look at any existing project conventions in the workspace
3. Create a proper project structure

Since this is a maker/fab project (per user profile: `projects`=maker/fab), it likely belongs in the Work directory or a projects folder.

Let me first explore the current workspace to understand conventions, then create the structure.

</details>

**Tool call: terminal**

```json
{
  "command": "pwd && ls -la",
  "workdir": "/Volumes/davec/Work/tiltpal"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Volumes/davec/Work/"
}
```

### 🤖 Assistant — 2026-08-08T12:53:32Z

<details><summary>Reasoning</summary>

We’re inside `/Volumes/davec/Work/tiltpal`, which already exists and is a git repo. The user asked me to create the project template folders and files for a new project: researching and designing a self-leveling bed for epoxy projects that sits on a worktable and adjusts itself to be level with the ground. So I should create a sensible project structure inside this existing repo rather than picking a new root.

I need to set up template folders/files for research, design, CAD, BOM/specs, build notes, and documentation. I don’t want to clobber unrelated existing files, so I’ll add a dedicated top-level directory like `projects/epoxy-self-leveling-bed/` or a similarly scoped structure inside the repo.

Let me inspect the repo a bit first to see what conventions already exist here, then create the scaffold. I’ll check `.gitignore`, existing docs, and project structure before writing files.

</details>

**Tool call: read_file**

```json
{
  "path": "/Volumes/davec/Work/tiltpal/.gitignore"
}
```

**Tool call: read_file**

```json
{
  "path": "/Volumes/davec/Work/tiltpal/IDEA.md"
}
```

**Tool call: terminal**

```json
{
  "command": "find /Volumes/davec/Work/tiltpal -maxdepth 2 -type f | sed 's|/Volumes/davec/Work/tiltpal/||' | sort | head -200"
}
```

### 🤖 Assistant — 2026-08-08T12:53:52Z

<details><summary>Reasoning</summary>

I can see this is the `tiltpal` project repo, which is currently an iOS CoreMotion-based tilt sensing + threaded standoff turn calculation project. The user wants to create a NEW separate project template for a self-leveling epoxy bed research/design project.

This new project is not about TiltPal iOS app, it's about a physical DIY self-leveling worktable surface for epoxy projects. So this should be a standalone research/design project with its own folder structure, likely something like:

`/Users/davec/Work/epoxy-self-leveling-bed` or similar.

The user asked: "Create the project template folders and files for this project. The project is to research and design a self leveling bed for epoxy projects that can be
