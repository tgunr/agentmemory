---
type: Fact
title: # Compare Kilo Auto Beta and Auto modes

source: hermes
session_id: 20260923_051
description: # Compare Kilo Auto Beta and Auto modes

source: hermes
session_id: 20260923_051414_7e108b
resource: hermes://session/20260923_051414_7e108b

# Conversation

- **Session ID:** `20260923_051414_7e108b`
resource: agentmemory://memory/mem_muf9ep39_cc50a55ff42c
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-24T08:17:54.958Z
source: agentmemory
strength: 7
---
# Content

# Compare Kilo Auto Beta and Auto modes

source: hermes
session_id: 20260923_051414_7e108b
resource: hermes://session/20260923_051414_7e108b

# Conversation

- **Session ID:** `20260923_051414_7e108b`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-23T10:14:15Z
- **Messages:** 166
- **CWD:** `/Volumes/davec`
- **Tokens:** 137573 in / 16132 out
- **Est. cost:** $-52266.0000

---

### 👤 User — 2026-09-23T10:14:15Z

Explain the difference in Kilo's Auto Beta and Auto modes as compared to the Free, Efficient, and Balanced

### 👤 User — 2026-09-23T10:14:15Z

Explain the difference in Kilo's Auto Beta and Auto modes as compared to the Free, Efficient, and Balanced

### 👤 User — 2026-09-23T10:14:15Z

[STILL IN PROGRESS — this is the active request, restated after the compaction boundary because it was not finished yet. Continue it; do not start over.]
Explain the difference in Kilo's Auto Beta and Auto modes as compared to the Free, Efficient, and Balanced

### 👤 User — 2026-09-23T10:14:15Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. If no user message appears AFTER this summary, do nothing: do not resume, wrap up, or continue work from '## Historical Task Snapshot' or any other section, do not call tools, and wait for a new user message. This handoff must never become the active turn by itself. (Exception: if tool results or your own tool calls appear after this summary, you are mid-way through an in-flight exchange — continue that exchange normally.) Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. None of the above restricts HOW you work: your tools remain fully active — keep calling them normally for the active task (edit files, run commands, search) instead of merely narrating what you would do. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
User asked (deterministic, from compacted turns): "Explain the difference in Kilo's Auto Beta and Auto modes as compared to the Free, Efficient, and Balanced"
Historical only; newer protected-tail messages after this summary win.

## Goal
Four linked goals around the user's Kilo Code setup and billing (all on 2026-09-23, session `20260923_051414_7e108b`):
- Explain how Kilo Code's dynamic model-routing modes (**Auto Beta**, **Auto**) differ from the fixed tiers (**Free**, **Efficient**, **Balanced**) — routing behavior, model pools, cost/quality tradeoffs — using Kilo docs, OpenRouter auto-router docs, and the local `model-selection-routing` skill.
- Answer whether OpenRouter models offered through Kilo bill against Kilo credits; user wants single-provider billing ("I only want to be paying for one provider").
- Audit the user's configuration files and verify only Kilo is configured for use.
- Retry the login the user botched ("try again, i goofed the login").

## Constraints & Preferences
- Verbatim user constraint: "I only want to be paying for one provider" — all model billing must flow through Kilo; no secon
