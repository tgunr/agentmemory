---
type: Fact
title: # Fixing Hermes Agent Context Length Error

source: hermes
session_id: 20260614_
description: # Fixing Hermes Agent Context Length Error

source: hermes
session_id: 20260614_123959_17c681
resource: hermes://session/20260614_123959_17c681

# Conversation

- **Session ID:** `20260614_123959_17c6
resource: agentmemory://memory/mem_msp0cf9l_ae60bbc51a5f
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260614_123959_17c681"]
timestamp: 2026-08-11T18:42:29.572Z
source: agentmemory
strength: 7
---
# Content

# Fixing Hermes Agent Context Length Error

source: hermes
session_id: 20260614_123959_17c681
resource: hermes://session/20260614_123959_17c681

# Conversation

- **Session ID:** `20260614_123959_17c681`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-14T17:39:59Z
- **Ended:** 2026-06-14T18:06:42Z
- **Messages:** 125
- **Tokens:** 2008082 in / 14884 out

---

### 👤 User — 2026-06-14T17:50:24Z

[Note: model was just switched from qwen2.5-coder:14b to kilo-auto/free via Kilo Gateway. Adjust your self-identification accordingly.]

I set model.context_length in config.yaml to 32768 but keep getting error message Failed to initialize agent: Model
qwen2.5-coder:14b has a context window of 32,768 tokens, which is below the minimum 64,000 required
by Hermes Agent.  Choose a model with at least 64K context, or set model.context_length in config.yaml to override.

### 🤖 Assistant — 2026-06-14T17:50:24Z

<details><summary>Reasoning</summary>


The user is getting an error about context length. Let me understand what's happening:

1. They set `model.context_length` in config.yaml to 32768
2. They're getting an error saying qwen2.5-coder:14b has 32,768 tokens which is below the minimum 64,000 required by Hermes Agent

This is confusing because the error mentions qwen2.5-coder:14b, but they just switched to kilo-auto/free. Let me think about this:

- The error seems to be coming from somewhere that's checking model context lengths
- The user mentions they set `model.context_length` in config.yaml, but the error suggests it's not being respected
- The model was just switched, so there might be some caching or the config isn't being read properly

Let me help them troubleshoot this. I should:
1. Check their config.yaml to see what's set
2. Understand how Hermes reads the context_length setting
3. Help them resolve the issue

Let me start by reading their config.yaml to see the current state.


</details>

**Tool call: read_file**

```json
{
  "path": "~/.hermes/config.yaml"
}
```

### 👤 User — 2026-06-14T17:50:24Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' / '## Historical In-Progress State' / '## Historical Pending User Asks' / '## Historical Remaining Work' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
User asked: "I set model.context_length in config.yaml to 32768 but keep getting error message Failed to initialize agent: Model qwen2.5…" — this appears to be ongoing troubleshooting with Hermes agent configuration where the model context length setting isn't resolving the initialization error.

## Goal
Configure Hermes agent to work with models having less than 64K context window, specifically after switching from qwen2.5-coder:14b to kilo-auto/free via Kilo Gateway.

## Constraints & Preferences
- Hermes enforces 64K minimum context for models
- Ollama's `/v1/models` endpoint doesn't expose context length metadata
- Must 
