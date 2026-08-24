---
type: Fact
title: # Print working directory

source: hermes
session_id: 20260815_110332_fb0fba
res
description: # Print working directory

source: hermes
session_id: 20260815_110332_fb0fba
resource: hermes://session/20260815_110332_fb0fba

# Conversation

- **Session ID:** `20260815_110332_fb0fba`
- **Source:**
resource: agentmemory://memory/mem_mt5jaq6r_504f43034af7
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-23T08:17:21.865Z
source: agentmemory
strength: 7
---
# Content

# Print working directory

source: hermes
session_id: 20260815_110332_fb0fba
resource: hermes://session/20260815_110332_fb0fba

# Conversation

- **Session ID:** `20260815_110332_fb0fba`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-15T16:03:56Z
- **Messages:** 155
- **CWD:** `/Users/davec`
- **Tokens:** 272495 in / 62828 out

---

### 👤 User — 2026-08-15T16:03:57Z

pwd

### 🤖 Assistant — 2026-08-15T16:04:07Z

<details><summary>Reasoning</summary>

The user just wants to know the current working directory. Let me check. The system says working directory is /Users/davec. But let me verify with a terminal call or just answer. Actually the system prompt already tells me: Working directory: /Users/davec. But I could run pwd to confirm. The user asked "pwd" — let me just run

</details>

**Tool call: terminal**

```json
{
  "command": "pwd && echo \"HOME=$HOME\""
}
```

### 🤖 Assistant — 2026-08-15T16:04:15Z

<details><summary>Reasoning</summary>

The user just ran `pwd` and we've confirmed the working directory is `/Users/davec` with HOME `/Users/davec`.

That's the whole question — they asked for pwd. Simple response

</details>

`/Users/davec` — your home directory. (HOME is set to the same.)

### 👤 User — 2026-08-15T16:05:12Z

[IMPORTANT: The user has invoked the "project-workspace-setup" skill, indicating they want you to follow its instructions. The full skill content is loaded below.]

---
name: project-workspace-setup
description: Set up a new project workspace in the active Hermes profile — projects.yaml entry, directory structure, and brief template. Originally designed for CNC but reusable for any project type; CNC-specific brief sections are included as an optional block.
version: 1.1.0
tags: [project, workspace, setup, brief, cnc]
---

# Project Workspace Setup

## When to Use
Create a new project workspace in the **active Hermes profile** before starting any work that benefits from tracked structure — cutting/toolpath design, material planning, writing, research, software, or anything else. Originally created for CNC projects (plaques, signs, furniture, hybrid UV+CNC work, etc.), but the workspace scaffolding and brief template apply to any project domain.

## Determining the Active Profile
The skill writes to the profile you are currently running under. Find it from:
- The system prompt line `Active Hermes profile: <name>` (use that value for `<PROFILE>`), OR
- The environment variable if one is exported, OR
- Default to `default` if no profile is shown.

For the rest of this skill, substitute `<PROFILE>` with that name (e.g. `cnc`, `default`, `jo`).

## Steps

### 1. Check Existing Projects AND resolve their folder BEFORE asking the user
`projects.yaml` is the canonical **project-name → folder** map for **all** project types, not just
CNC. Before asking the user "which folder is X in?", resolve it from the registry:

- Active profile first: `~/.hermes/profiles/<PROFILE>/projects.yaml`.
- If no match, scan the other profiles' `projects.yaml` for a `path:`.

If the project is registered, use its `path:` — do NOT re-prompt the user for a location they
already declared. If it is NOT registered, that is a **registry gap, not "unknown project"**:
register it (Step 2) so the next session resolves it automatically. Treating an unregistered
project as if its folder can't be known — and asking the user to re-specify it every time — is the
failure mode to avoid. (Real case: TiltPal, an iOS/Swift app at `/Users/davec/Work/TiltPal`, was
unknowable to any agent until it was added to the default profile's `projects.yaml`.)

### 2. Add to projects.yaml
Standard entry format:
```yaml
projects:
- name: <PROJECT_NAME>
  description: >
    One-line description of what this is.
  category: <plaque|sign|furniture|hybrid|functional|other|...>
  tags: [<relevant>, <tags>]
  status: active
  path: ''  # optional external path if project files live elsewhere
  notes: []
  created: '<ISO timestamp>'
  updated: '<ISO timestamp>'
project_order:
- <PROJECT_NAME>  # add to list, most recent last
```

### 3. Create Workspace Directory
For this user
