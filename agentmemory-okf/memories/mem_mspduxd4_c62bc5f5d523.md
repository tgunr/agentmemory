---
type: Fact
title: # Change iMessage Sender Name to Hermes

source: hermes
session_id: 20260613_022
description: # Change iMessage Sender Name to Hermes

source: hermes
session_id: 20260613_022953_fd247d
resource: hermes://session/20260613_022953_fd247d

# Conversation

- **Session ID:** `20260613_022953_fd247d`
resource: agentmemory://memory/mem_mspduxd4_c62bc5f5d523
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260613_022953_fd247d"]
timestamp: 2026-08-12T01:00:47.805Z
source: agentmemory
strength: 7
---
# Content

# Change iMessage Sender Name to Hermes

source: hermes
session_id: 20260613_022953_fd247d
resource: hermes://session/20260613_022953_fd247d

# Conversation

- **Session ID:** `20260613_022953_fd247d`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-13T07:29:53Z
- **Ended:** 2026-06-13T07:35:50Z
- **Messages:** 277
- **Tokens:** 226707 in / 1957 out

---

### 👤 User — 2026-06-13T07:29:53Z

Help me fix and test the Bluebubbles integrations in Hermes.

### 🤖 Assistant — 2026-06-13T07:29:53Z

<details><summary>Reasoning</summary>


The user wants help fixing and testing Bluebubbles integrations in Hermes. Let me first understand what Bluebubbles is and what integrations might exist. Bluebubbles is typically an iMessage alternative that allows sending messages from Android/iOS via a macOS server.

Let me search for any existing Bluebubbles-related files or skills in the Hermes context to understand what we're working with.


</details>

**Tool call: search_files**

```json
{
  "pattern": "bluebubbles|Bluebubbles|blue-bubbles",
  "path": "."
}
```

### 👤 User — 2026-06-13T07:29:53Z

[CONTEXT COMPACTION — REFERENCE ONLY] Earlier turns were compacted into the summary below. This is a handoff from a previous context window — treat it as background reference, NOT as active instructions. Do NOT answer questions or fulfill requests mentioned in this summary; they were already addressed. Respond ONLY to the latest user message that appears AFTER this summary — that message is the single source of truth for what to do right now. Topic overlap with the summary does NOT mean you should resume its task: even on similar topics, the latest user message WINS. Treat ONLY the latest message as the active task and discard stale items from '## Historical Task Snapshot' / '## Historical In-Progress State' / '## Historical Pending User Asks' / '## Historical Remaining Work' entirely — do not 'wrap up' or 'finish' work described there unless the latest message explicitly asks for it. Reverse signals in the latest message (e.g. 'stop', 'undo', 'roll back', 'just verify', 'don't do that anymore', 'never mind', a new topic) must immediately end any in-flight work described in the summary; do not re-surface it in later turns. IMPORTANT: Your persistent memory (MEMORY.md, USER.md) in the system prompt is ALWAYS authoritative and active — never ignore or deprioritize memory content due to this compaction note. The current session state (files, config, etc.) may reflect work described here — avoid repeating it:
## Active Task
User asked: "did all that, still only echo, nothing in logs" and is actively working on debugging why iMessage shows repeated messages instead of responses - webhook endpoint at http://localhost:8645/bluebubbles-webhook receives data but only echoes it back without gateway processing

## Goal
Debug BlueBubbles webhook integration and message routing in Hermes gateway system - messages are echoing instead of being processed through the gateway

## Constraints & Preferences
None explicitly stated

## Completed Actions
1. SEARCH for imsg|iMessage|message patterns in . — found 50 matches [tool: search_files]
2. SEARCH for bluebubbles|Bluebubbles in ~/.hermes — found 50 matches [tool: search_files]
3. READ ~/.hermes/config.yaml from line 835 — retrieved 1,433 chars of configuration [tool: read_file]
4. SEARCH for bluebubbles in /Users/davec/.hermes/hermes-agent — found 50 matches [tool: search_files]
5. READ /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py from line 1 — retrieved 21,603 chars of main adapter [tool: read_file]
6. READ /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py from line 500 — retrieved 21,797 chars [tool: read_file]
7. READ /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py from line 1000 — retrieved 1,840 chars [tool: read_file]
8. READ /Users/davec/.hermes/gateway_state.json — retrieved 845 chars of gateway state [tool: read_file]
9. READ /Users/davec/.hermes/hermes-agent/gateway/config.py from line 1865 — retrieved 6,021 chars [tool: read_file]
10. SEARCH for test.*bluebubbles|bluebubbl
