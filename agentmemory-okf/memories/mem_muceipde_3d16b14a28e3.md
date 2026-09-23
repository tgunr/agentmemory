---
type: Fact
title: # Set working directory for Hermes project startup

source: hermes
session_id: 2
description: # Set working directory for Hermes project startup

source: hermes
session_id: 20260920_060712_7bbdd1
resource: hermes://session/20260920_060712_7bbdd1

# Conversation

- **Session ID:** `20260920_060
resource: agentmemory://memory/mem_muceipde_3d16b14a28e3
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-22T08:17:41.501Z
source: agentmemory
strength: 7
---
# Content

# Set working directory for Hermes project startup

source: hermes
session_id: 20260920_060712_7bbdd1
resource: hermes://session/20260920_060712_7bbdd1

# Conversation

- **Session ID:** `20260920_060712_7bbdd1`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-20T11:07:16Z
- **Ended:** 2026-09-21T08:48:11Z
- **Messages:** 11
- **CWD:** `/Volumes/davec`
- **Tokens:** 112707 in / 765 out

---

### 👤 User — 2026-09-20T11:07:16Z

How do i work in a project when starting up hermes and get the working directory set to the project folder?

### 🤖 Assistant — 2026-09-20T11:07:23Z

<details><summary>Reasoning</summary>

The user is asking about working in a project in Hermes — specifically how to set up a project workspace so that the working directory is set to the project folder when starting up Hermes. Let me check if there are relevant skills for this.

Looking at the skills, I see `project-workspace-setup` under autonomous-ai-agents, and `hermes-workspace-context` under autonomous-ai-agents. Let me load these to give accurate guidance.

</details>

**Tool call: skill_view**

```json
{
  "name": "project-workspace-setup"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

### 🤖 Assistant — 2026-09-20T11:07:32Z

<details><summary>Reasoning</summary>

We have two matches for `hermes-workspace-context`; I'll load the local one and then answer concisely based on what’s available.

</details>

**Tool call: skill_view**

```json
{
  "name": "autonomous-ai-agents/hermes-workspace-context"
}
```

### 🤖 Assistant — 2026-09-20T11:07:39Z

<details><summary>Reasoning</summary>

The skill is ambiguous. Let me try reading one directly to see if it contains startup/project working directory guidance.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-workspace-context/SKILL.md"
}
```

### 🤖 Assistant — 2026-09-20T11:08:01Z

<details><summary>Reasoning</summary>

I have the relevant skills loaded. Now I can give a concise answer focused on Desktop, since that's what he's using. I'll explain the durable options and the behavior of `--cwd` at launch.

</details>

For Desktop, the reliable options are:

1. **Launch-time cwd** — quit Hermes fully, then start it from the project folder or pass the path explicitly:
```bash
cd /path/to/your/project
open -a Hermes
```
or
```bash
hermes desktop --cwd /path/to/your/project
```

2. **Durable cwd** — set it in config so every new Desktop session starts there:
```bash
hermes config set terminal.cwd /path/to/your/project
```
Then quit Hermes completely and relaunch.

A couple of cautions:
- If you already have a running Desktop window, changing cwd doesn’t retarget it — quit fully and relaunch.
- If `terminal.cwd` was previously pinned to somewhere else, that overrides the launch directory. If project context/`AGENTS.md` isn’t loading, that’s the likely cause.

After relaunching, verify with:
```bash
pwd
```
from a new session to confirm the agent sees the right root.

### 👤 User — 2026-09-20T11:25:18Z

what about in the tui?

### 🤖 Assistant — 2026-09-20T11:25:31Z

In the TUI/CLI, it's even simpler — the directory you launch from becomes the project root:

```bash
cd /path/to/your/project
hermes
```

For a one-shot question:
```bash
cd /path/to/your/project
hermes chat -q "Describe the project structure"
```

If you want it durable (so you don't have to `cd` every time), set it in config:
```bash
hermes config set terminal.cwd /path/to/your/project
```
Then restart the gateway.

**Quick verification** — from within a session, just run:
```
pwd
```
and it should report the project folder. If it reports something else (like your home or a Samba mount), that means `terminal.cwd` is pinned elsewhere and overriding the launch directory — clear it with:
```bash
hermes config unset terminal.cwd
```
