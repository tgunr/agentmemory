---
type: Fact
title: # Understanding Hermes Workspaces

source: hermes
session_id: 20260619_105036_00
description: # Understanding Hermes Workspaces

source: hermes
session_id: 20260619_105036_0008a5
resource: hermes://session/20260619_105036_0008a5

# Conversation

- **Session ID:** `20260619_105036_0008a5`
- **S
resource: agentmemory://memory/mem_mtg11a9y_cfe855d51e51
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:31:36.166Z
source: agentmemory
strength: 7
---
# Content

# Understanding Hermes Workspaces

source: hermes
session_id: 20260619_105036_0008a5
resource: hermes://session/20260619_105036_0008a5

# Conversation

- **Session ID:** `20260619_105036_0008a5`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-19T15:50:40Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 11
- **CWD:** `/Users/davec`
- **Tokens:** 30 in / 2039 out
- **Est. cost:** $0.0302

---

### 👤 User — 2026-06-19T15:50:40Z

What are Hermes workspaces and how do I use them effectively?

### 🤖 Assistant — 2026-06-19T15:51:05Z

<details><summary>Reasoning</summary>

The user is asking about Hermes workspaces. This is related to Hermes Agent configuration and usage, so I should load the relevant skills and check the documentation.

Let me load the `hermes-agent` skill and the `hermes-workspace-context` skill since they're directly relevant.

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
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-19T15:51:05Z

<details><summary>Reasoning</summary>

The user is asking about Hermes workspaces. Let me synthesize what I've learned from both skills into a clear, friendly explanation.

</details>

Great question! Here's the rundown on Hermes workspaces and how to get the most out of them.

---

## What Is a "Workspace"?

In Hermes, your **workspace** is simply your **working directory** — the folder Hermes treats as its project root. All filesystem tools, terminal commands, code edits, and checkpoints operate relative to this directory. There's no separate "workspace" concept — it's just your current working directory, set in different ways depending on how you launch Hermes.

---

## Setting Your Workspace by Interface

### CLI / TUI
Just `cd` into your project before launching:
```bash
cd ~/Projects/my-app
hermes
```
That directory becomes the project root for that session.

### Desktop App
Use `--cwd` at launch time:
```bash
hermes desktop --cwd ~/Projects/my-app
```
⚠️ **Launch-time only** — it doesn't switch projects in an already-running Desktop app. Quit Desktop fully, then relaunch with the new `--cwd`.

### Permanent Config (Durable)
If you always want Hermes to default to a specific project:
```bash
hermes config set terminal.cwd /Users/davec/Projects/my-app
```
Then restart Hermes. This applies to the gateway, cron jobs, and Desktop.

---

## Profiles ≠ Workspaces

This is a common point of confusion:

| | **Profiles** | **Workspaces (cwd)** |
|---|---|---|
| What they isolate | Hermes state (config, memory, skills, sessions, cron) | Filesystem working directory |
| Filesystem access | **Not restricted** — full access regardless of profile | Controls the default project root |

A profile gives Hermes a separate brain, but it can still edit files anywhere. If you set `terminal.cwd` in a profile, that profile defaults to a specific project.

```bash
# Create a profile tied to a specific project
hermes profile create myproject
myproject config set terminal.cwd /Users/davec/Projects/my-app
myproject    # launches Hermes with that profile
```

---

## Parallel Agents on the Same Repo: Use Git Worktrees

If you have **multiple agents** editing the same repository, `cwd` alone isn't enough — they'll step on each other's changes. The clean solution is **git worktrees**:

```bash
cd ~/Projects/my-app
git worktree add ../my-app-feature-a feature/branch-a
git worktree add ../my-app-feature-b feature/branch-b
```

Then launch Hermes in each worktree:
```bash
cd ~/Projects/my-app-feature-a && hermes
```

Each agent gets its own branch, working directory, and checkpoint history — no conflicts.

You can also use the `-w` flag for quick worktree isolation:
```bash
hermes -w   # creates an isolated git worktree
```

---

## Quick Reference

| Goal | How |
|------|-----|
| Work on a project in CLI | `cd ~/project && hermes` |
| Launch Desktop into a project | `hermes desktop --cwd ~/project` |
| Set a permanent default project | `hermes config set terminal.cwd ~/project` |
| Isolate Hermes state per project | Create a 
