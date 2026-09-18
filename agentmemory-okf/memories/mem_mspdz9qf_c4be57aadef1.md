---
type: Fact
title: # CNC Profile Not Changing Working Directory #2

source: hermes
session_id: 2026
description: # CNC Profile Not Changing Working Directory #2

source: hermes
session_id: 20260619_112112_c73c4f
resource: hermes://session/20260619_112112_c73c4f

# Conversation

- **Session ID:** `20260619_112112
resource: agentmemory://memory/mem_mspdz9qf_c4be57aadef1
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260619_112112_c73c4f"]
timestamp: 2026-08-12T01:04:10.447Z
source: agentmemory
strength: 7
---
# Content

# CNC Profile Not Changing Working Directory #2

source: hermes
session_id: 20260619_112112_c73c4f
resource: hermes://session/20260619_112112_c73c4f

# Conversation

- **Session ID:** `20260619_112112_c73c4f`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-19T16:21:12Z
- **Ended:** 2026-06-19T16:29:11Z
- **Messages:** 144
- **Tokens:** 8601 in / 6719 out
- **Est. cost:** $0.0784

---

### 👤 User — 2026-06-19T16:25:01Z

I clicked on CNC profile but according to the current working directory it's still on the default. It did not switch to the terminal specified in the profile for CNC.

### 🤖 Assistant — 2026-06-19T16:25:01Z

<details><summary>Reasoning</summary>

The user is saying that even though they clicked on the CNC profile in the Hermes GUI, the current working directory is still the default one (their volume mount at /Volumes/davec) rather than whatever the CNC profile specifies.

Looking at my memory, I have:
- "CNC machining profile at ~/.hermes/profiles/cnc/ — a dedicated Hermes profile for CNC work. Uses the cnc wrapper command."

The user expects that when they switch to the CNC profile, the terminal should also switch to a specific working directory defined in that profile.

This is a question about how Hermes profiles work - specifically whether switching profiles in the GUI also changes the terminal's working directory.


I should check the Hermes documentation or the CNC profile configuration to see what working directory it expects and understand how profile switching actually works in the system.

</details>

**Tool call: skill_view**

```json
{
  "role": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "pwd"
}
```

**Tool call: read_file**

```json
{
  "role": "~/.hermes/profiles/cnc/config.yaml"
}
```

### 👤 User — 2026-06-19T16:25:01Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' / '## Historical In-Progress State' / '## Historical Pending User Asks' / '## Historical Remaining Work' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
User asked: "What I want is when I switch the profile to CNC that it switches over to the proper folder. Why can't it be done?"

## Goal
Fix the issue where switching the profile to CNC does not automatically switch to the proper folder.

## Constraints & Preferences
None

## Completed Actions
1. Viewed `hermes-agent` skill — 53,148 chars [tool: skill_view]
2. Viewed `herms-workspace-context` skill — 13,954 chars [tool: skill_view]
3. Ran command `find ~/.hermes/profiles/cnc/ -type f 2>/dev/null` — exit 0, 1 line output [tool: terminal]

## Active State
Working directory: `~/.hermes`
Branch: cnc-profile-fix

Modified files:
- None

Test status: Not applicable
Running processes or servers: None
Environment details that matter: Using hermes-agent for profile management.

## Historical In-Progress State
Switching profiles to CNC not automatically switc
