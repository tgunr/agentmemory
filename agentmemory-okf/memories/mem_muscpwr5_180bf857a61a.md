---
type: Fact
title: # Use skill-library-maintenance

source: hermes
session_id: 20261002_122234_92ac
description: # Use skill-library-maintenance

source: hermes
session_id: 20261002_122234_92ac79
resource: hermes://session/20261002_122234_92ac79

# Conversation

- **Session ID:** `20261002_122234_92ac79`
- **Sou
resource: agentmemory://memory/mem_muscpwr5_180bf857a61a
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-03T12:11:37.237Z
source: agentmemory
strength: 7
---
# Content

# Use skill-library-maintenance

source: hermes
session_id: 20261002_122234_92ac79
resource: hermes://session/20261002_122234_92ac79

# Conversation

- **Session ID:** `20261002_122234_92ac79`
- **Source:** desktop
- **Model:** free-mix
- **Started:** 2026-10-02T17:23:14Z
- **Messages:** 4
- **CWD:** `/Volumes/davec`
- **Tokens:** 5997 in / 2833 out

---

### 👤 User — 2026-10-02T17:23:14Z

show me how to use skill-library-maintenance

### 🤖 Assistant — 2026-10-02T17:23:35Z

**Tool call: skill_view**

```json
{
  "name": "skill-library-maintenance"
}
```

### 🤖 Assistant — 2026-10-02T17:23:44Z

<details><summary>Reasoning</summary>

The references were guessing; I have the real content. Answer concisely.

</details>

Here's the real skill (loaded from `rare/skill-library-maintenance/SKILL.md`).

## What it is
A **meta** skill: the deliverable is skill/memory edits, not user-facing work. In a curation run only `skill_view` / `skills_list` / `skill_manage` / `memory` are available.

## How to trigger it
Either
- explicitly: *"review the conversation above and update the skill library"*, or
- proactively, right after any session that produced a user correction, a new technique, or a workflow fix.

## The decision procedure — take the FIRST that fits
1. **Update a currently-loaded skill** covering the new learning's territory — *only if curator-managed*.
2. **Patch an existing umbrella** (`skills_list` + `skill_view`): add a pitfall, a step, or broaden a trigger.
3. **Add a support file** under an umbrella: `references/<topic>.md` (session detail + knowledge banks), `templates/<name>`, `scripts/<name>` (each gets a one-line pointer in SKILL.md).
4. **Create a new class-level umbrella** only when nothing covers the class.

Naming rule: a skill name must still make sense next month. Never `fix-x-today`, a PR number, an error string.

## Protected — writes are refused
Bundled (`hermes-agent`), hub-installed, `skills.external_dirs`, pinned (`hermes curator pin`), and anything user-owned. If only protected skills need work: **"Nothing to save."** and stop. If one is wrong, *say so and recommend `hermes curator adopt <name>`* — don't try to patch it.

## What not to capture
Environment failures ("command not found", unconfigured creds) unless you also capture the fix; negative claims about tools ("X is broken"); transient errors that resolved (capture the retry *pattern* instead); one-off narratives; dead ends from sessions that ended without a working method. Fabricated or environment-bound entries actively mislead future sessions.

## The one live pitfall here
Don't create both a `quick_commands: <name>` exec entry and a skill named `<name>` — the skill wins, `/<name> <args>` runs as a chat message instead of passing `$1` to the script. Symptom: `No prompt. Usage: ...` while a twin wired only as a quick_command (like `/route`) works. Fix: keep only the exec entry, delete the skill, then `/reset`. This bit the `/optimize` port.

## Also
- User style/workflow preferences belong in the **SKILL.md body**, not only in memory.
- Overlapping skills: *note it in the reply*, don't silently merge — the background curator consolidates.
- If the session was pure scaffolding, stay parked. "Nothing to save" is a valid outcome.

Want me to run a live curation pass on a recent session, or on a specific skill?
