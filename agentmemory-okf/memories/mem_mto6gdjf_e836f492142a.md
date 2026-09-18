---
type: Fact
title: # explain how coding works in hermes vs kilocode…

source: hermes
session_id: 20
description: # explain how coding works in hermes vs kilocode…

source: hermes
session_id: 20260905_040150_d90bfb
resource: hermes://session/20260905_040150_d90bfb

# Conversation

- **Session ID:** `20260905_0401
resource: agentmemory://memory/mem_mto6gdjf_e836f492142a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes/hermes-agent"]
timestamp: 2026-09-05T09:25:27.705Z
source: agentmemory
strength: 7
---
# Content

# explain how coding works in hermes vs kilocode…

source: hermes
session_id: 20260905_040150_d90bfb
resource: hermes://session/20260905_040150_d90bfb

# Conversation

- **Session ID:** `20260905_040150_d90bfb`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-09-05T09:03:08Z
- **Ended:** 2026-09-05T09:08:10Z
- **Messages:** 59
- **CWD:** `/Users/davec/.hermes/hermes-agent`
- **Tokens:** 137580 in / 3250 out

---

### 👤 User — 2026-09-05T09:03:08Z

explain how coding works in hermes vs kilocode if both are using a kilo model. Herrmes seems to be much more wordy in its output

### 👤 User — 2026-09-05T09:03:08Z

explain how coding works in hermes vs kilocode if both are using a kilo model. Herrmes seems to be much more wordy in its output

### 👤 User — 2026-09-05T09:03:08Z

[STILL IN PROGRESS — this is the active request, restated after the compaction boundary because it was not finished yet. Continue it; do not start over.]
explain how coding works in hermes vs kilocode if both are using a kilo model. Herrmes seems to be much more wordy in its output

### 👤 User — 2026-09-05T09:03:08Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. If no user message appears AFTER this summary, do nothing: do not resume, wrap up, or continue work from '## Historical Task Snapshot' or any other section, do not call tools, and wait for a new user message. This handoff must never become the active turn by itself. (Exception: if tool results or your own tool calls appear after this summary, you are mid-way through an in-flight exchange — continue that exchange normally.) Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. None of the above restricts HOW you work: your tools remain fully active — keep calling them normally for the active task (edit files, run commands, search) instead of merely narrating what you would do. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
User asked (deterministic, from compacted turns): 'explain how coding works in hermes vs kilocode if both are using a kilo model. Herrmes seems to be much more wordy in its output'
Historical only; newer protected-tail messages after this summary win.

## Goal
Explain how coding works in Hermes vs. Kilocode if both are using a kilo model, specifically addressing why Hermes seems much more wordy in its output.

## Constraints & Preferences
None

## Completed Actions
1. READ `/Users/davec/.hermes/hermes-agent/agent/prompt_builder.py` — examined implementation of prompt construction [tool: read_file]
2. SEARCH for patterns related to context, agents, and toolsets in `/Users/davec/.hermes/hermes-agent` — found 50 matches for `CONTEXT_FILE|context_files|AGENTS.md|skills_manifest|_build_system|toolsets.*load|prompt_block` [tool: search_files]
3. SEARCH for patterns related to tool schemas and discovery in `/Users/davec/.hermes/hermes-agent` — found 30 matches for `tool_schemas|function_call.*schema|tools=.*tool_schemas|discover_builtin_tools
