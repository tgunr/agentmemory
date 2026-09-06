---
type: Fact
title: # Clearing a blocked task in Hermes Kanban

source: hermes
session_id: 20260817_
description: # Clearing a blocked task in Hermes Kanban

source: hermes
session_id: 20260817_154429_4d6e00
resource: hermes://session/20260817_154429_4d6e00

# Conversation

- **Session ID:** `20260817_154429_4d6e
resource: agentmemory://memory/mem_mtg12c2j_7ca0b4e3e924
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:25.164Z
source: agentmemory
strength: 7
---
# Content

# Clearing a blocked task in Hermes Kanban

source: hermes
session_id: 20260817_154429_4d6e00
resource: hermes://session/20260817_154429_4d6e00

# Conversation

- **Session ID:** `20260817_154429_4d6e00`
- **Source:** desktop
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-08-17T20:44:30Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 41
- **CWD:** `/Users/davec`
- **Tokens:** 411491 in / 5408 out

---

### 👤 User — 2026-08-17T20:44:30Z

Explain how to clear a blocked task in my Hermes Kanban

### 🤖 Assistant — 2026-08-17T20:44:38Z

<details><summary>Reasoning</summary>

The user is asking about clearing a blocked task in their Hermes Kanban. This seems related to the `kanban` skill that's available. Let me load that skill to get the proper instructions for how to handle this.

</details>

**Tool call: skill_view**

```json
{
  "name": "kanban"
}
```

### 🤖 Assistant — 2026-08-17T20:44:43Z

<details><summary>Reasoning</summary>

The user wants to know how to clear a blocked task in Hermes Kanban. According to the skill, the recovery section is in the orchestrator playbook. Let me load that reference file.

</details>

**Tool call: skill_view**

```json
{
  "file_path": "references/kanban-orchestrator.md",
  "name": "kanban"
}
```

### 🤖 Assistant — 2026-08-17T20:44:54Z

<details><summary>Reasoning</summary>

The user asked about clearing a blocked task in their Hermes Kanban. Let me summarize what I found in the skill.

The recovery section covers this. Blocked tasks can happen in a few ways:
1. A worker is stuck/crashing/hallucinating
2. A goal-mode card budget exhausted
3. A review card blocked with "needs changes"

The recovery actions are:
1. **Reclaim** - abort the running worker, reset to ready
2. **Reassign** - switch to a different profile
3. **Change profile model** - edit config, then reclaim to retry

The commands mentioned:
- `hermes kanban reclaim <task_id>` 
- `hermes kanban reassign <task_id> <new-profile> --reclaim`

Also mentioned: `/unblock` slash command for tasks that blocked waiting for input.

Let me give a clear, practical answer.

</details>

Here's how to clear a blocked task in your Hermes Kanban board, based on the recovery section of the kanban skill:

---

## Identify why it's blocked

The kanban dashboard flags problematic tasks with a ⚠ badge and opens a **Recovery** section in the drawer. Common causes:

| Cause | What it looks like |
|-------|-------------------|
| Worker crashing/hallucinating | Profile keeps failing, wrong model, missing skill, broken credential |
| Goal-mode card exhausted | Budget ran out without completion — card is **sticky-blocked** for human review |
| Worker called `kanban_block()` waiting for input | Just needs `/unblock` to resume |
| Hallucination gate | Worker claimed card IDs it didn't create; completion is blocked |

---

## Recovery actions (pick the right one)

### 1. Reclaim — kill a stuck worker and reset
If the worker is spinning, crashing, or just stuck:

```
hermes kanban reclaim <task_id>
```

This aborts the running worker immediately and resets the task back to `ready`. Claim TTL is ~15 minutes, so this is the fast path out.

### 2. Reassign — switch to a different profile
If the current profile's model/skill/credential is the problem:

```
hermes kanban reassign <task_id> <new-profile> --reclaim
```

This moves the task to a different profile (one that actually exists on your setup) and lets the dispatcher pick it up fresh. The `--reclaim` flag clears the old claim.

### 3. Unblock a human-waiting task
If the task blocked itself calling `kanban_block()` waiting for your input:

```
/unblock <task_id>
```

The dispatcher respawns after this with the comment thread still carrying full context.

### 4. Change the profile's model, then reclaim
If the issue is the model itself (e.g., hallucinations, insufficient context window):

1. Edit the profile config in a terminal: `hermes -p <profile> model`
2. Then reclaim the stuck task so it picks up the new model on retry.

---

## Don't do this

- **Don't re-run the same task with a "stern look"** when a reviewer blocks with "needs changes" —
