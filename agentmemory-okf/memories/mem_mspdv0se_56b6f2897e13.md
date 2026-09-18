---
type: Fact
title: # Filtering Ollama models with <64K context from /models

source: hermes
session
description: # Filtering Ollama models with <64K context from /models

source: hermes
session_id: 20260613_103106_a03a8d
resource: hermes://session/20260613_103106_a03a8d

# Conversation

- **Session ID:** `202606
resource: agentmemory://memory/mem_mspdv0se_56b6f2897e13
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260613_103106_a03a8d"]
timestamp: 2026-08-12T01:00:52.259Z
source: agentmemory
strength: 7
---
# Content

# Filtering Ollama models with <64K context from /models

source: hermes
session_id: 20260613_103106_a03a8d
resource: hermes://session/20260613_103106_a03a8d

# Conversation

- **Session ID:** `20260613_103106_a03a8d`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-13T15:31:06Z
- **Ended:** 2026-06-14T15:17:15Z
- **Messages:** 291
- **Tokens:** 1255913 in / 8765 out

---

### 👤 User — 2026-06-13T15:46:20Z

i still see ollama models in the `/models` command under Ollama that have context window < 64K, they should not be in the list

### 🤖 Assistant — 2026-06-13T15:46:20Z

<details><summary>Reasoning</summary>


The user is saying that when they run `/models` command under Ollama, they still see models with context window < 64K, but they think these should not be showing up. This relates to my memory note about model naming fix and context window preferences.

Let me first check the current state of things - I should look at the .hermes configuration and understand what's happening. The user mentioned they prefer models with 65K+ context support, and specifically mentioned qwen3:1.7b as preferred (1.4GB / 128K context).

Let me check the Hermes status and configuration to understand what's going on with the models listing.


</details>

**Tool call: terminal**

```json
{
  "command": "hermes status"
}
```

### 👤 User — 2026-06-13T15:46:20Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' / '## Historical In-Progress State' / '## Historical Pending User Asks' / '## Historical Remaining Work' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
"i still see ollama models in the `/models` command under Ollama that have context window < 64K, they should not be in the list"

## Goal
Filter out Ollama models with context windows smaller than 64K tokens from appearing in the `/models` command output.

## Constraints & Preferences
- Model catalog filtering should hide models with context_length < 64,000
- Configuration setting `model_catalog.enabled: false` is already set in `/Users/davec/.hermes/config.yaml`
- Focus on preserving context window filtering logic details

## Completed Actions
1. READ `/Users/davec/.hermes/config.yaml` (full file, 14,945 chars) — confirmed `model_catalog.enabled: false` setting exists [tool: read_file]
2. READ `/Users/davec/.hermes/config.yaml` (offset 501, 7,856 chars) — continued config inspection [tool: read_file]
3. SEARCH `context.*64|window|context_length` in `/Users/davec/.hermes/hermes-agent/*.py` — found 50 matches indicating context filtering patterns exist in codebase [tool: grep]
4. READ `/Users/davec/.hermes/hermes-agent/hermes_cli/commands.py` (27,325 chars) — examined command structure [tool: read_file]
5. SEARCH `models.*command|def models` in hermes-agent — found 7 matches including references to Gemini models, model commands, and Nous Portal integration [tool: grep]
6. SEARCH `/models|list.*model|
