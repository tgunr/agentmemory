---
type: Fact
title: # Fixing Hermes Agent Context Length Error #2

source: hermes
session_id: 202606
description: # Fixing Hermes Agent Context Length Error #2

source: hermes
session_id: 20260614_130642_786b8f
resource: hermes://session/20260614_130642_786b8f

# Conversation

- **Session ID:** `20260614_130642_7
resource: agentmemory://memory/mem_msp0cfgj_5395d453d69e
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260614_130642_786b8f"]
timestamp: 2026-08-11T18:42:29.822Z
source: agentmemory
strength: 7
---
# Content

# Fixing Hermes Agent Context Length Error #2

source: hermes
session_id: 20260614_130642_786b8f
resource: hermes://session/20260614_130642_786b8f

# Conversation

- **Session ID:** `20260614_130642_786b8f`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-14T18:06:42Z
- **Ended:** 2026-06-14T18:17:33Z
- **Messages:** 33
- **Tokens:** 306451 in / 1350 out

---

### 👤 User — 2026-06-14T18:08:26Z

[Note: model was just switched from qwen3:1.7b to kilo-auto/free via Kilo Gateway. Adjust your self-identification accordingly.]

Now getting 
     Error: Auxiliary compression model qwen3:1.7b has a context window of 40,960 tokens, which is below the minimum 64,000
     required by Hermes Agent.  Choose a compression model with at least 64K context (set auxiliary.compression.model in
     config.yaml), or set auxiliary.compression.context_length to override the detected value if it is wrong.

In the default profile when i try to use ollama model, switched back to Kilo to issue this prompt

### 🤖 Assistant — 2026-06-14T18:08:26Z

<details><summary>Reasoning</summary>


The user is getting an error about the auxiliary compression model having insufficient context window. They're using Ollama locally and want to use the qwen3:1.7b model, but Hermes is complaining that it needs 64K context while the model has 40,960 tokens.

Let me first understand the current state of their config and then help resolve this. I should:
1. Check their current config.yaml to understand the setup
2. Look at the hermes-agent skill for guidance on configuring this

Let me start by reading the config and the skill for this issue.


</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/profiles/default/config.yaml"
}
```

### 👤 User — 2026-06-14T18:08:26Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' / '## Historical In-Progress State' / '## Historical Pending User Asks' / '## Historical Remaining Work' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
User asked: "Now getting Error: Auxiliary compression model qwen3:1.7b has a context window of 40,960 tokens, which is below the minimum 64,000…" — needs investigation and resolution of the context window requirement for the compression task.

## Goal
Resolve the "minimum 64,000 tokens" context window error for auxiliary compression in the Hermes configuration by selecting and configuring a capable model.

## Constraints & Preferences
- Auxiliary compression tasks require a model with at least 64K context window.
- The user is currently using Ollama for local models.
- Avoid using credentials/keys directly in the summary.

## Completed Actions
1. VIEW skill `hermes-agent` — reviewed agent skills and capabilities. [tool: skill_view]
2. READ `/Users/davec/.hermes/config.yaml` — confirmed `auxiliary.compression.provider` was set to `auto` and falling back to `qwen3:1.7b` (40,960 tokens
