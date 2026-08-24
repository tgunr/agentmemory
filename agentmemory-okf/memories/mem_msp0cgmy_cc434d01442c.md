---
type: Fact
title: # Hermes reverting to Ollama model after a prompt

source: hermes
session_id: 20
description: # Hermes reverting to Ollama model after a prompt

source: hermes
session_id: 20260615_065722_127460
resource: hermes://session/20260615_065722_127460

# Conversation

- **Session ID:** `20260615_0657
resource: agentmemory://memory/mem_msp0cgmy_cc434d01442c
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260615_065722_127460"]
timestamp: 2026-08-11T18:42:31.349Z
source: agentmemory
strength: 7
---
# Content

# Hermes reverting to Ollama model after a prompt

source: hermes
session_id: 20260615_065722_127460
resource: hermes://session/20260615_065722_127460

# Conversation

- **Session ID:** `20260615_065722_127460`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-06-15T11:57:22Z
- **Ended:** 2026-06-15T12:14:55Z
- **Messages:** 73
- **Tokens:** 494875 in / 2821 out

---

### 👤 User — 2026-06-15T12:02:06Z

Why is hermes switch back to ollama model after I issue a prompt?

### 🤖 Assistant — 2026-06-15T12:02:06Z

<details><summary>Reasoning</summary>


The user is asking why Hermes switches back to the Ollama model after they issue a prompt. This sounds like a configuration issue related to providers. Let me check the Hermes configuration to understand what's happening.

According to the user's profile, they prefer exactly two providers: Kilo Gateway and local Ollama. They mention wanting fast models (qwen3:1.7b is preferred at 1.4GB) with 32K context support.

This could be related to:
1. The model_catalog.enabled setting converting colons to slashes
2. Some configuration in config.yaml
3. Provider fallback behavior

Let me first check the hermes-agent skill for guidance on this, and also look at the config to understand the provider setup.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 👤 User — 2026-06-15T12:02:06Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' / '## Historical In-Progress State' / '## Historical Pending User Asks' / '## Historical Remaining Work' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
User asked: "Why is hermes switch back to ollama model after I issue a prompt?" — needs investigation + answer

## Goal
Troubleshoot and understand why the Hermes system switches back to the `ollama` model after receiving a user prompt.

## Constraints & Preferences
- Focus on specific log analysis, configuration review, and session recovery logic.
- Do not disrupt the current user sessions or system operations unless absolutely necessary.

## Completed Actions
None.

## Active State
- Working directory: `/Users/davec/.hermes/hermes-agent`
- Modified/created files with brief note:
  - `gateway/run.py`: Investigating model selection and session handling logic.
  - `tui_gateway/server.py`: Examining `_apply_model_switch` and related functions.
  - `model_catalog|fallback|default_model`: Searching for configuration insights.
- Test status: Not applicable (current focus is on investigation).
- Running processes or servers: Hermes agent in full operation without interference.
- Environment details:
  - System: macOS
  - Python version: 3.10
  - Hermes version: [REDACTED]

## Historical In-Progress State
Investigating the `gateway/run.py` and `tui_gateway/server.py` files to understand how model switching occurs and why it might default to the `ollama` model upon user prompts.

## Blocked
N
