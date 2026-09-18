---
type: Fact
title: # Handoff session in desktop to TUI

source: hermes
session_id: 20260815_070503_
description: # Handoff session in desktop to TUI

source: hermes
session_id: 20260815_070503_44aa13
resource: hermes://session/20260815_070503_44aa13

# Conversation

- **Session ID:** `20260815_070503_44aa13`
- *
resource: agentmemory://memory/mem_mt5jaook_44c09d175c23
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-23T08:17:19.906Z
source: agentmemory
strength: 7
---
# Content

# Handoff session in desktop to TUI

source: hermes
session_id: 20260815_070503_44aa13
resource: hermes://session/20260815_070503_44aa13

# Conversation

- **Session ID:** `20260815_070503_44aa13`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-15T12:05:30Z
- **Ended:** 2026-08-15T12:13:12Z
- **Messages:** 28
- **CWD:** `/Users/davec`
- **Tokens:** 64503 in / 6275 out

---

### 👤 User — 2026-08-15T12:05:30Z

what is the proper way to handoff a session in the desktop to the TUI?

### 🤖 Assistant — 2026-08-15T12:05:37Z

<details><summary>Reasoning</summary>

The user is asking about handing off a session from the desktop to the TUI. This is specifically about Hermes Agent itself - configuring, using, extending it. According to my instructions, when the user asks about Hermes Agent itself, I should load the `hermes-agent` skill first.

Let me load the hermes-agent

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-08-15T12:05:50Z

<details><summary>Reasoning</summary>

The user is asking about handing off a session from the desktop to the TUI. Let me look at the relevant references for session management. The skill has a `references/sessions-vs-agentmemory.md` which might be relevant. Also there's the TUI model override stuff. But the core question is about handing off a session — i.e., starting a session in the Desktop app, then continuing it in the TUI (terminal).

Key facts from the skill:
- Sessions are stored in `~/.hermes/state.db` (SQLite + FTS5), canonical session store.
- `hermes sessions list` lists recent sessions.
- `hermes --resume SESSION` resumes by ID or title.
- `hermes --continue NAME` resumes by name or most recent.
- `hermes sessions browse` interactive picker.
- Sessions have IDs like `20260225_143052_a1b2c3`.

So the proper way to hand off: the Desktop app and the TUI share the same session store (`state.db`). You find the session ID/title in the Desktop, then resume it in the TUI with `hermes --resume <id>` or `hermes --continue`.

Let me check if there's more specific guidance. The question is "proper way to handoff a session in the desktop to the TUI." This likely means: you're working in the Hermes Desktop app, and you want to continue that same session in the terminal/TUI. Since they share the same backend state.db, you just need the session ID.

Let me look at the references file about sessions vs agentmemory, and possibly check the actual CLI behavior. But I think the answer is straightforward. Let me verify by checking the sessions command and the actual resume flag behavior.

Actually, let me check the references/sessions-vs-agentmemory.md to see if there's relevant info about Desktop session storage and resume. But that's about AgentMemory (a separate thing). Let me also consider whether the Desktop stores sessions in the same state.db.

The skill says state.db is "Canonical session store (SQLite + FTS5)". Both Desktop and CLI/Gateway use it. So resume works across interfaces.

Let me give a precise, accurate answer. I should verify the exact resume mechanics. Let me run a quick check on the sessions command and the resume flag to be accurate rather than guessing.

Actually, the conversation context shows the user is currently in the TUI (Platform: tui). So they want to know how to pick up a session that was running in the Desktop app, here in the TUI.

The proper way:
1. In the Desktop, the session has an ID (shown in the session header / URL or via the session list). 
2. In the TUI: `hermes --resume <session_id>` resumes that exact session, or `hermes --continue` to resume the most recent session.

Since the user is already IN the TUI, they'd exit current and run `hermes --resume ...`. Or within the TUI slash commands there's `/resume [name]`.

Let me verify the current session and what's available. Let me just check `hermes sessions list --help` quickly to be precise, and confirm the Desktop and TUI share state.db. Actually, I'm fairly confident. But to be safe and accurate, let me run `hermes sessions list` to show real output and confirm the mechanism w
