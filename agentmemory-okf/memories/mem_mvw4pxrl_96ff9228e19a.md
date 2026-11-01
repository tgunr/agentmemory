---
type: Fact
title: # Slash command: rename session from conversation

source: hermes
session_id: 20
description: # Slash command: rename session from conversation

source: hermes
session_id: 20261030_001120_f8c5f7
resource: hermes://session/20261030_001120_f8c5f7

# Conversation

- **Session ID:** `20261030_0011
resource: agentmemory://memory/mem_mvw4pxrl_96ff9228e19a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Desktop"]
timestamp: 2026-10-31T08:18:28.642Z
source: agentmemory
strength: 7
---
# Content

# Slash command: rename session from conversation

source: hermes
session_id: 20261030_001120_f8c5f7
resource: hermes://session/20261030_001120_f8c5f7

# Conversation

- **Session ID:** `20261030_001120_f8c5f7`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-30T05:11:21Z
- **Messages:** 66
- **CWD:** `/Users/davec/Desktop`
- **Tokens:** 175806 in / 12465 out

---

### 👤 User — 2026-10-30T05:11:21Z

create a slash command to rename the current session by examining the conversation

### 🤖 Assistant — 2026-10-30T05:11:25Z

<details><summary>Reasoning</summary>

The user wants a slash command in Hermes that renames the current session by examining the conversation. Let me load the relevant skills: hermes-slash-command-dispatch and hermes-agent, maybe session-librarian.

Let me look at skills.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-slash-command-dispatch"
}
```

**Tool call: skill_view**

```json
{
  "name": "session-librarian"
}
```

### 🤖 Assistant — 2026-10-30T05:11:34Z

<details><summary>Reasoning</summary>

Now, the actual task: create a slash command like `/rename-current` that renames the current session by examining the conversation. This requires knowing the current session id at dispatch time, and reading the conversation from state.db, then calling `hermes sessions rename <id> <title>`.

Key question: how does the dispatch know the current session id? In the desktop WebSocket path, `command.dispatch` params include `session_id`. But the exec command runs via shell; does it get session id passed? Possibly via env var. Let me check the Hermes docs and source for what env vars are passed to quick command exec, e.g. HERMES_SESSION_ID.

Also, maybe Hermes already has a built-in `/rename` command? Let me check. There's `hermes sessions rename`. And in the desktop UI maybe there's a session title edit. Let me investigate docs and source.

Let me search the repo.

Plan:
1. Agent-side approach: quick_command exec that runs a python script with `$@` args (optional explicit title), which finds session id. How to know the session? If HERMES_SESSION_ID env is available, great. Otherwise fallback: use the most recently updated non-empty session in the profile DB.

2. Title generation: examining the conversation requires an LLM. Options: use a cheap local model or use the deterministic heuristic (first user message + topics). Best: script reads last N messages from state.db and either sends to a model (via provider config) or heuristically derives title. Simpler and robust: heuristic summarization — but "examining the conversation" suggests an LLM. Could use the "hermes" CLI's own... Hmm.

Actually maybe simpler: make the slash command a *prompt* that instructs the agent to rename the current session. But quick_commands only support exec/alias; alias redirects to another slash command. However, skill commands: a SKILL.md named `rename-session` would appear as `/rename-session` and be expanded as a prompt to the agent — i.e., a skill prompt command. That's the cleanest: the agent has session id in its context? The agent does have the session id in its environment maybe.

Let's check how skill commands work — get_skill_commands turns a skill into a slash command that injects the skill prompt. Then the agent (me) executes: reads conversation (I already have it), generates a title, and runs `hermes sessions rename`. That's very natural: "/rename-session" → prompt "examine this conversation and rename the current session using hermes sessions rename".

But does the skill command pass session id? The agent would need it. Check state: is there a tool with session id? Let me check env or the DB latest session. Actually there might be HERMES_SESSION_ID env in the agent process.

Let me investigate the source quickly.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && git log --oneline -1 && grep -rn \"HERMES_SESSION_ID\" --include=*.py . | head -30 && echo ---- && grep -rn \"def get_skill_commands\" -A 60 hermes_cli/commands.py | head -100"
}
```

**Tool call: terminal**

```json
{
  "command": "
