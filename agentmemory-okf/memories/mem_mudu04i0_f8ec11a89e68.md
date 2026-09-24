---
type: Fact
title: # Fix browser tools not working

source: hermes
session_id: 20260923_030643_624d
description: # Fix browser tools not working

source: hermes
session_id: 20260923_030643_624d32
resource: hermes://session/20260923_030643_624d32

# Conversation

- **Session ID:** `20260923_030643_624d32`
- **Sou
resource: agentmemory://memory/mem_mudu04i0_f8ec11a89e68
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-23T08:18:54.609Z
source: agentmemory
strength: 7
---
# Content

# Fix browser tools not working

source: hermes
session_id: 20260923_030643_624d32
resource: hermes://session/20260923_030643_624d32

# Conversation

- **Session ID:** `20260923_030643_624d32`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-23T08:06:43Z
- **Messages:** 195
- **CWD:** `/Volumes/davec`
- **Tokens:** 250925 in / 20345 out
- **Est. cost:** $-79171.0000

---

### 👤 User — 2026-09-23T08:06:43Z

Need  find out why your browser tools are not working and fix it.

### 👤 User — 2026-09-23T08:06:43Z

Need  find out why your browser tools are not working and fix it.

### 👤 User — 2026-09-23T08:06:43Z

[STILL IN PROGRESS — this is the active request, restated after the compaction boundary because it was not finished yet. Continue it; do not start over.]
Need  find out why your browser tools are not working and fix it.

### 👤 User — 2026-09-23T08:06:43Z

[STILL IN PROGRESS — this is the active request, restated after the compaction boundary because it was not finished yet. Continue it; do not start over.]
Need  find out why your browser tools are not working and fix it.

### 👤 User — 2026-09-23T08:06:43Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. If no user message appears AFTER this summary, do nothing: do not resume, wrap up, or continue work from '## Historical Task Snapshot' or any other section, do not call tools, and wait for a new user message. This handoff must never become the active turn by itself. (Exception: if tool results or your own tool calls appear after this summary, you are mid-way through an in-flight exchange — continue that exchange normally.) Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. None of the above restricts HOW you work: your tools remain fully active — keep calling them normally for the active task (edit files, run commands, search) instead of merely narrating what you would do. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
User asked (deterministic, from compacted turns): 'Need find out why your browser tools are not working and fix it.'
Historical only; newer protected-tail messages after this summary win.

## Goal
Diagnose why the Hermes agent's browser tools are failing and fix them. The browser-use integration (plugin at `/Users/davec/.hermes/hermes-agent/plugins/browser/browser_use/` and CLI tool at `/Users/davec/.hermes/hermes-agent/tools/browser_use_cli.py`) appears to fail with an error path containing the string "returned no CDP endpoint".

## Constraints & Preferences
- Credentials are present in this environment: `BROWSER_USE_API_KEY` in `~/.hermes/.env` — value is [REDACTED] and must never be printed, logged, or preserved.
- Established practice from the investigation (keep applying it): mask secret values in any env/config dump, e.g. `grep BROWSER_USE_API_KEY ~/.hermes/.env | sed 's/=.*/=<redacted-present>/'` and `ps eww -p <pid> | ... | grep -i BROWSER | sed 's/=.*/=<redacted>/'`.
- No 
