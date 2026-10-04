---
type: Fact
title: # Fork or branch keeping last 4 messages

source: hermes
session_id: 20260930_04
description: # Fork or branch keeping last 4 messages

source: hermes
session_id: 20260930_044653_66ee9d
resource: hermes://session/20260930_044653_66ee9d

# Conversation

- **Session ID:** `20260930_044653_66ee9d
resource: agentmemory://memory/mem_muscpqub_79d90d80d1a6
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Desktop/DXF/Samples"]
timestamp: 2026-10-03T12:11:29.591Z
source: agentmemory
strength: 7
---
# Content

# Fork or branch keeping last 4 messages

source: hermes
session_id: 20260930_044653_66ee9d
resource: hermes://session/20260930_044653_66ee9d

# Conversation

- **Session ID:** `20260930_044653_66ee9d`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-30T09:50:02Z
- **Ended:** 2026-10-02T19:04:28Z
- **Messages:** 339
- **CWD:** `/Users/davec/Desktop/DXF/Samples`
- **Tokens:** 570391 in / 15976 out
- **Est. cost:** $-239147.0000

---

### 👤 User — 2026-09-30T09:50:02Z

how to fork or branch keeping the last 4 messages

### 👤 User — 2026-09-30T09:50:02Z

how to fork or branch keeping the last 4 messages

### 👤 User — 2026-09-30T09:50:02Z

[STILL IN PROGRESS — this is the active request, restated after the compaction boundary because it was not finished yet. Continue it; do not start over.]
how to fork or branch keeping the last 4 messages

### 👤 User — 2026-09-30T09:50:02Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. If no user message appears AFTER this summary, do nothing: do not resume, wrap up, or continue work from '## Historical Task Snapshot' or any other section, do not call tools, and wait for a new user message. This handoff must never become the active turn by itself. (Exception: if tool results or your own tool calls appear after this summary, you are mid-way through an in-flight exchange — continue that exchange normally.) Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. None of the above restricts HOW you work: your tools remain fully active — keep calling them normally for the active task (edit files, run commands, search) instead of merely narrating what you would do. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
User asked (deterministic, from compacted turns): 'how to fork or branch keeping the last 4 messages'
Historical only; newer protected-tail messages after this summary win.

## Goal
Explain how to fork or branch a hermes-agent session while keeping only the last 4 messages (exact commands, slash-command semantics, and how keep-recent-N interacts with forking/branching), and diagnose the reported 65K context-window status-bar display for the kilo/auto efficient model.

## Constraints & Preferences
- "**Avoid searching [REDACTED] CLI files for fork/branch patterns** — user explicitly requested to not search within [REDACTED] CLI files." (carried verbatim from prior checkpoint; still active)
- "**Do not search [REDACTED] CLI files for fork/branch** — user instructed to exclude these files from search scope." (carried verbatim)
- No credentials/secrets may be stored in this summary; any that appeared were replaced with [REDACTED].

## Completed Actions
Prior checkpoint actions 1–19 (preserved): search_files found `fork|branch` matches in [REDACTED] cache and [REDACTED] CLI dir; `hermes --help` (lines 2–60, 60–120) and `hermes sessions --help` (lines 2–40) reviewed [tool: terminal]; greps for `fork`/`branch` across [REDACTED] web router
