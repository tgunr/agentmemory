---
type: Fact
title: # Hermes backend missing session.cwd.set

source: hermes
session_id: local-45260
description: # Hermes backend missing session.cwd.set

source: hermes
session_id: local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79
resource: hermes://session/local-45260ea5a0f60ca408ae8c47c8e
resource: agentmemory://memory/mem_mvxm9l2j_f0a4c513e6d1
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-11-01T09:17:24.945Z
source: agentmemory
strength: 7
---
# Content

# Hermes backend missing session.cwd.set

source: hermes
session_id: local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79
resource: hermes://session/local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79

# Conversation

- **Session ID:** `local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-31T17:36:49Z
- **Ended:** 2026-10-31T18:25:28Z
- **Messages:** 171
- **CWD:** `/Users/davec`
- **Tokens:** 113858 in / 40405 out
- **Est. cost:** $-24221.0000

---

### 👤 User — 2026-10-31T17:37:58Z

║ error: This Hermes backend does not provide session.cwd.set, so that was not done.         ║

### 🤖 Assistant — 2026-10-31T17:38:02Z

<details><summary>Reasoning</summary>

The user pasted an error: "This Hermes backend does not provide session.cwd.set, so that was not done."

This is likely from a slash command like /cd or a cwd-setting tool. Let me think about what's happening. The user probably ran something that tried to change the session working directory.

Let me check the hermes-agent codebase for "session.cwd.set" to see where it's referenced, and check skills like hermes-slash-command-dispatch or terminal-tool-selection.

Actually, the message suggests a UI/backend mismatch: frontend sends session.cwd.set, backend (this TUI backend) doesn't implement it. Let me grep.

</details>

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "cwd\\.set|session_cwd|sessionCwd"
}
```

**Tool call: search_files**

```json
{
  "limit": 60,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "*.py",
  "target": "files"
}
```

### 🤖 Assistant — 2026-10-31T17:38:09Z

<details><summary>Reasoning</summary>

So `session.cwd.set` IS implemented in tui_gateway/methods_session.py line 1081. The error says "This Hermes backend does not provide session.cwd.set". That error text — let's grep for it.

</details>

**Tool call: search_files**

```json
{
  "limit": 30,
  "output_mode": "content",
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "does not provide"
}
```

### 🤖 Assistant — 2026-10-31T17:38:14Z

<details><summary>Reasoning</summary>

So the error is produced by the TUI client (ui-tui) when the backend returns method-not-found for `session.cwd.set`. But the backend in ~/.hermes/hermes-agent DOES implement it in methods_session.py:1081.

Possibility: the running backend is an older version (before that method existed) — i.e., the gateway process running is stale, started before the code was updated. Or the running backend on mini.local is a different install. The user is on TUI connecting to a gateway on mini.local? Actually memory says agent runtime on mini.local, viewer pro.local. We're running... host macOS, cwd /Users/davec. Which machine? Unknown but likely mini (agent runtime) — the viewer is pro.

Let me check the frontend domain/projects.ts around line 75-100 to understand the dual verb, and check methods_session.py:1081 for how it's registered (maybe gated by a feature flag / capability list). Also check whether there's a capability declaration that must list session.cwd.set — maybe the gateway returns an error if not in a registered allowlist.

Let's read both spots.

</details>

**Tool call: read_file**

```json
{
  "limit": 60,
  "offset": 1060,
  "path": "/Users/davec/.hermes/hermes-agent/tui_gateway/methods_session.py"
}
```

**Tool call: read_file**

```json
{
  "limit": 50,
  "offset": 60,
  "path": "/Users/davec/.hermes/hermes-agent/ui-tui/src/domain/projects.ts"
}
```

### 🤖 Assistant — 2026-10-31T17:38:19Z

<details><summary>Reasoning</summary>

So the error the user saw ("This Hermes backend does not provide session.cwd.set, so that was not done.") with the "methodUnavailable" template — that comes from a general RPC wrapper in userMessages.ts. It's rendered when a method returns "method not found". So the client tried session.cwd.set and the backend replied method-not-found. Presumably session.workspace.move also failed (otherwise fallback wouldn't run)... Actually the error mentions exactly `session.cwd.set`, so the first call fa
