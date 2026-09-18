---
type: Fact
title: # Increase Ollama Context for Hermes #2

source: hermes
session_id: 20260614_145
description: # Increase Ollama Context for Hermes #2

source: hermes
session_id: 20260614_145946_507a6e
resource: hermes://session/20260614_145946_507a6e

# Conversation

- **Session ID:** `20260614_145946_507a6e`
resource: agentmemory://memory/mem_mspdv2ue_61409f26eac9
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260614_145946_507a6e"]
timestamp: 2026-08-12T01:00:54.919Z
source: agentmemory
strength: 7
---
# Content

# Increase Ollama Context for Hermes #2

source: hermes
session_id: 20260614_145946_507a6e
resource: hermes://session/20260614_145946_507a6e

# Conversation

- **Session ID:** `20260614_145946_507a6e`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-14T19:59:46Z
- **Ended:** 2026-06-14T20:02:00Z
- **Messages:** 103
- **Tokens:** 318530 in / 1423 out

---

### 👤 User — 2026-06-14T20:01:40Z

[Note: model was just switched from qwen3:1.7b to kilo-auto/free via Kilo Gateway. Adjust your self-identification accordingly.]

Getting 
     Ollama loaded qwen3:1.7b with only 40,960 tokens of runtime context, but Hermes needs at least 64,000
     tokens for reliable tool use.

     Increase the Ollama context for this model and restart/reload the model before trying again. A
     known-good starting point is 65,536 tokens. In Hermes config, set model.ollama_num_ctx: 65536 (and
     model.context_length: 65536 if you also override the displayed model context). If you manage the model
     through an Ollama Modelfile, set PARAMETER num_ctx 65536 there instead.
on profile fastest

### 🤖 Assistant — 2026-06-14T20:01:40Z

<details><summary>Reasoning</summary>


The user is getting a warning about Ollama context size. They mention their profile "fastest" and the issue is that qwen3:1.7b was loaded with only 40,960 tokens of runtime context, but Hermes needs at least 64,000 tokens for reliable tool use.

Based on the memory notes I have, the user prefers Ollama models and has a specific preference for qwen3:1.7b with 32K context support. The memory also mentions a model naming fix: use colons (`:`) not slashes (`/`) for Ollama models, and to set `model_catalog.enabled=false` in config.yaml to prevent automatic conversion of `:` to `/` in model names.

This is a Hermes configuration issue. Let me load the hermes-agent skill to understand the proper way to configure this.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 👤 User — 2026-06-14T20:01:40Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' / '## Historical In-Progress State' / '## Historical Pending User Asks' / '## Historical Remaining Work' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
- User asked: "getting Ollama loaded qwen3:1.7b with only 40,960 tokens of runtime context, but Hermes needs at least 64,000 tokens for reliable..." — focused on resolving context size mismatch for Hermes compatibility

## Goal
- Configure Hermes to operate with sufficient context (≥64,000 tokens) by adjusting Ollama model settings

## Constraints & Preferences
- Hermes requires minimum 64,000 tokens of runtime context for reliable operation
- Model must support tools for Hermes functionality

## Completed Actions
1. READ references/ollama-model-picker-context-filtering.md — reviewed context filtering settings [tool: skill_view]
2. READ /Users/davec/.her
