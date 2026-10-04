---
type: Fact
title: # Identify AI model

source: hermes
session_id: 20260928_094525_89c5b1
resource:
description: # Identify AI model

source: hermes
session_id: 20260928_094525_89c5b1
resource: hermes://session/20260928_094525_89c5b1

# Conversation

- **Session ID:** `20260928_094525_89c5b1`
- **Source:** deskt
resource: agentmemory://memory/mem_muqoy6vg_c8c8f34f2fd6
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-02T08:18:26.632Z
source: agentmemory
strength: 7
---
# Content

# Identify AI model

source: hermes
session_id: 20260928_094525_89c5b1
resource: hermes://session/20260928_094525_89c5b1

# Conversation

- **Session ID:** `20260928_094525_89c5b1`
- **Source:** desktop
- **Model:** all-free-cloud
- **Started:** 2026-09-28T14:45:26Z
- **Ended:** 2026-10-01T12:27:36Z
- **Messages:** 4
- **CWD:** `/Volumes/davec`
- **Tokens:** 27731 in / 421 out

---

### 👤 User — 2026-09-28T14:45:26Z

which model is this?

### 🤖 Assistant — 2026-09-28T14:45:32Z

<details><summary>Reasoning</summary>

The user is asking which model is currently active. The system prompt already tells me at the bottom:

Model: all-free-cloud
Provider: moa
Platform: desktop

So I can answer directly without needing to load any skill or call any tools.

</details>

You’re on **all-free-cloud** via **moa**, running on the desktop platform.

### 👤 User — 2026-09-28T14:48:09Z

which project am i in?

### 🤖 Assistant — 2026-09-28T14:48:18Z

<details><summary>Reasoning</summary>

The user is asking which project they are in. This could refer to a few things in Hermes:
1. The current working directory/project workspace
2. A Kanban board/project
3. A Hermes profile project

Let me check the current working directory first, and also look at Kanban context if available. Since the user might be asking about a Kanban task project or the filesystem project, I should check both. The most immediate answer is the filesystem working directory, but in Hermes "project" often refers to the Kanban project tied to the current task.

Let me check the current working directory and also see if there's a HERMES_KANBAN_TASK or project env var. Actually, I can just look at the current working directory from the environment: it's /Volumes/davec. But that's the root of a Samba mount, not necessarily a "project".

I should also check if there's an active Kanban project via environment or Kanban tool. But simpler: I can check the current working directory and also list any project context. Given the Hermes environment mentions project roots and working directories, maybe I should use the kanban_show to see if there's a current task with project info. But the user might just mean filesystem.

I'll give a direct answer based on cwd and mention if there's a Kanban project.

</details>

Filesystem: you’re in `/Volumes/davec` (the Samba mount root).

If you mean the active **Kanban project**, I don’t see a current task/project pinned in this session — want me to check your active board/project for you?
