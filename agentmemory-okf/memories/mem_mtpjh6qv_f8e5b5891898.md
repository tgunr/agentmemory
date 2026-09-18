---
type: Fact
title: # Error occurred in handler for 'hermes:api'…

source: hermes
session_id: 202609
description: # Error occurred in handler for 'hermes:api'…

source: hermes
session_id: 20260905_043242_300a05
resource: hermes://session/20260905_043242_300a05

# Conversation

- **Session ID:** `20260905_043242_3
resource: agentmemory://memory/mem_mtpjh6qv_f8e5b5891898
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-06T08:17:46.728Z
source: agentmemory
strength: 7
---
# Content

# Error occurred in handler for 'hermes:api'…

source: hermes
session_id: 20260905_043242_300a05
resource: hermes://session/20260905_043242_300a05

# Conversation

- **Session ID:** `20260905_043242_300a05`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-05T09:32:43Z
- **Messages:** 25
- **CWD:** `/Volumes/davec`
- **Tokens:** 40768 in / 3963 out

---

### 👤 User — 2026-09-05T09:32:43Z

Error occurred in handler for 'hermes:api': Error: 404: {"detail":"Session not found"}
    at IncomingMessage.<anonymous> (file:///Users/davec/.hermes/hermes-agent/apps/desktop/release/mac-arm64/Hermes.app/Contents/Resources/app.asar/dist/electron-main.mjs:25468:22)
    at IncomingMessage.emit (node:events:521:24)
    at endReadableNT (node:internal/streams/readable:1729:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)
Error occurred in handler for 'hermes:api': Error: 404: {"detail":"Session not found"}
    at IncomingMessage.<anonymous> (file:///Users/davec/.hermes/hermes-agent/apps/desktop/release/mac-arm64/Hermes.app/Contents/Resources/app.asar/dist/electron-main.mjs:25468:22)
    at IncomingMessage.emit (node:events:521:24)
    at endReadableNT (node:internal/streams/readable:1729:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)
Error occurred in handler for 'hermes:api': Error: 404: {"detail":"Session not found"}
    at IncomingMessage.<anonymous> (file:///Users/davec/.hermes/hermes-agent/apps/desktop/release/mac-arm64/Hermes.app/Contents/Resources/app.asar/dist/electron-main.mjs:25468:22)
    at IncomingMessage.emit (node:events:521:24)
    at endReadableNT (node:internal/streams/readable:1729:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)

### 🤖 Assistant — 2026-09-05T09:32:57Z

<details><summary>Reasoning</summary>

The user is seeing repeated 404 "Session not found" errors from `hermes:api` handler in the Hermes desktop app. Let me check for relevant skills first — there's a `hermes-session-recovery` skill that covers "Diagnose and recover missing Hermes sessions across Desktops" which seems directly relevant. Let me load it.

I should also check the `hermes-desktop` skill since this is a desktop app error.

Let me load both skills since they're both potentially relevant.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-session-recovery"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-desktop"
}
```

### 🤖 Assistant — 2026-09-05T09:33:09Z

<details><summary>Reasoning</summary>

The error is:
Error: 404: {"detail":"Session not found"}

This is coming from the Desktop Electron app's main process, specifically from the handler for 'hermes:api'. The stack trace points to electron-main.mjs.

This looks like a session lookup issue where the Desktop UI is trying to access a session that no longer exists or is invalid. This is likely related to:
1. Session state becoming stale after a restart/reboot
2. The UI trying to access a session that was cleaned up
3. A mismatch between the UI's session state and the actual session store

Given the Hermes session recovery skill and the Hermes Desktop skill, I should:
1. Check the session databases to see what sessions exist
2. Check logs for any relevant errors
3. Determine if this is a UI state issue or actual data loss

Let me run the diagnostic script from the session recovery skill first to audit the state databases, and also check the logs for relevant errors.

</details>

**Tool call: terminal**

```json
{
  "command": "python3 - <<'PY'\nimport sqlite3, os\n\nroots = [\n    os.path.expanduser('~/.hermes/state.db'),\n    *[os.path.join(os.path.expanduser(f'~/.hermes/profiles/{p}'), 'state.db')\n      for p in os.listdir(os.path.expanduser('~/.hermes/profiles'))\n      if os.path.isdir(os.path.join(os.path.expanduser('~/.hermes/profiles'), p))]\n]\n\nfor p in roots:\n    if not os.path.exists(p) or os.path.getsize(p) == 0:\n        print(f'{p}: missing or empty')\n        continue\n    con = sqlite3.connect(p)\n    cur = con.cursor()\n    try:\n        n = cur.execute('SEL
