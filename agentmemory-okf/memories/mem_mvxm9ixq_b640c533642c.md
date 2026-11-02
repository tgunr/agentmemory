---
type: Fact
title: # Add Move to profile menu item #2

source: hermes
session_id: 20261030_014235_5
description: # Add Move to profile menu item #2

source: hermes
session_id: 20261030_014235_5099cf
resource: hermes://session/20261030_014235_5099cf

# Conversation

- **Session ID:** `20261030_014235_5099cf`
- **
resource: agentmemory://memory/mem_mvxm9ixq_b640c533642c
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Desktop"]
timestamp: 2026-11-01T09:17:22.196Z
source: agentmemory
strength: 7
---
# Content

# Add Move to profile menu item #2

source: hermes
session_id: 20261030_014235_5099cf
resource: hermes://session/20261030_014235_5099cf

# Conversation

- **Session ID:** `20261030_014235_5099cf`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-30T06:42:35Z
- **Ended:** 2026-10-31T11:35:22Z
- **Messages:** 24
- **CWD:** `/Users/davec/Desktop`

---

### 👤 User — 2026-10-30T06:42:35Z

when right clicking on a session in the sidebar or in its tab i see a "Move to project" menu item. I want to add to that menu a "Move to profile" item to move the session to a differnt profile.

### 👤 User — 2026-10-30T06:42:35Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. If no user message appears AFTER this summary, do nothing: do not resume, wrap up, or continue work from '## Historical Task Snapshot' or any other section, do not call tools, and wait for a new user message. This handoff must never become the active turn by itself. (Exception: if tool results or your own tool calls appear after this summary, you are mid-way through an in-flight exchange — continue that exchange normally.) Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. None of the above restricts HOW you work: your tools remain fully active — keep calling them normally for the active task (edit files, run commands, search) instead of merely narrating what you would do. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Historical Task Snapshot
User asked to extend the existing session context menu in Hermes Desktop — which currently shows a **"Move to project"** item when right-clicking a session in the sidebar **or in its tab** — with a new **"Move to profile"** menu item that moves that session to a different profile. The assistant was still in code-discovery phase (no edits made, no plan presented yet); the next substantive reply owed is the implementation plan/locate of the backend RPC for cross-profile session move.

## Goal
Add a "Move to profile" action alongside "Move to project" in every session context-menu surface (sidebar row + session tab), wired to a backend gateway RPC that relocates the session's state to the target profile, with i18n strings for all supported locales and tests.

## Constraints & Preferences
- Work targets Hermes Desktop renderer: `hermes-agent/apps/desktop` (React + Vite, bundled into `app.asar` → `dist/`), talking JSON-RPC over WebSocket to the Python `serve`/`gateway` child.
- Menu labels must go through the i18n namespace (`i18n/en_projects.ts` etc.), not hardcoded strings.
- Verification commands: `npm run build` (tsc -b && vite build), `npm run typecheck` (`tsc -p . --noEmit`), and `npx eslint <your-file>` — `npm run lint` surface-wide routinely fails on pre-existing unrelated errors (e.g. `perfectionist/sort-imports` in `store/profile.ts`) and must not be conflated with new changes.
- From the `hermes-desktop` skill: **"The asar repack requires user approval (it overwrites the install
