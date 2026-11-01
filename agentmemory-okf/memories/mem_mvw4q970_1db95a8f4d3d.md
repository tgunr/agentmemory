---
type: Fact
title: # Testing the bot locally

source: hermes
session_id: local-e49df9712a3e9a279be8
description: # Testing the bot locally

source: hermes
session_id: local-e49df9712a3e9a279be8ea5d6eb7d66d5d70ae98d740e8f9f548cc83098b4aac
resource: hermes://session/local-e49df9712a3e9a279be8ea5d6eb7d66d5d70ae98d7
resource: agentmemory://memory/mem_mvw4q970_1db95a8f4d3d
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-31T08:18:43.465Z
source: agentmemory
strength: 7
---
# Content

# Testing the bot locally

source: hermes
session_id: local-e49df9712a3e9a279be8ea5d6eb7d66d5d70ae98d740e8f9f548cc83098b4aac
resource: hermes://session/local-e49df9712a3e9a279be8ea5d6eb7d66d5d70ae98d740e8f9f548cc83098b4aac

# Conversation

- **Session ID:** `local-e49df9712a3e9a279be8ea5d6eb7d66d5d70ae98d740e8f9f548cc83098b4aac`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-30T16:36:25Z
- **Ended:** 2026-10-30T20:22:02Z
- **Messages:** 56
- **CWD:** `/Volumes/davec`
- **Tokens:** 80282 in / 6516 out
- **Est. cost:** $-56698.0000

---

### 👤 User — 2026-10-30T16:36:26Z

reference local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa how do i test the bot

### 🤖 Assistant — 2026-10-30T16:36:32Z

<details><summary>Reasoning</summary>

The user asks about a reference: "local-dc35c5b..." — this looks like a session reference or a file? "how do i test the bot". Ambiguous. Likely they're referring to a previous conversation/session with that ID, or a skill reference. "local-<hash>" looks like a Hermes session reference ID.

I should search past sessions for that ID and for "bot" testing context.

Let me use session_search tool (deferred). First tool_describe.

Actually maybe there's a session-librarian skill. Let me search sessions.

</details>

**Tool call: tool_search**

```json
{
  "queries": [
    "session search read past conversation",
    "session id lookup"
  ]
}
```

**Tool call: terminal**

```json
{
  "command": "grep -rl \"dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa\" ~/.hermes 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-10-30T16:40:23Z

<details><summary>Reasoning</summary>

Let's read that session to find what "the bot" is.

</details>

**Tool call: tool_call**

```json
{
  "calls": [
    {
      "name": "session_search",
      "arguments": {
        "session_id": "local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa"
      }
    }
  ]
}
```

### 🤖 Assistant — 2026-10-30T16:40:27Z

<details><summary>Reasoning</summary>

So the project is /Users/davec/Desktop/telegram-warden — a Telegram business bot ("warden"). The user asks "how do i test the bot". So they want how to test it, likely end-to-end: without a real business account, or with. Let me check the project's existing test setup, docs (README, cli commands: doctor/simulate/classify/serve), and whether offset of middle messages has more info. Let me inspect the repo.

Let me look at the repo: bin/warden, cli.py, README, tests.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/Desktop/telegram-warden && ls -la && echo \"=== README ===\" && ls *.md && echo \"=== cli ===\" && sed -n 1,200p warden/cli.py"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/Desktop/telegram-warden && ls tests/ && sed -n 1,80p README.md 2>/dev/null"
}
```

### 🤖 Assistant — 2026-10-30T16:41:18Z

<details><summary>Reasoning</summary>

Now let's actually run the tests to give verified answers, and check current connection state, doctor. Let's run tests + connections + doctor maybe (doctor makes a live LLM call; fine but slow). I'll run tests and connections and simulate dry-run.

Also check .env for WARDEN_BOT_TOKEN presence and log file. Let's check if a serve is running.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/Desktop/telegram-warden && .venv/bin/python -m pytest -q 2>&1 | tail -3; echo \"=== connections ===\"; ./bin/warden connections; echo \"=== token set? ===\"; grep -c WARDEN_BOT_TOKEN .env; echo \"=== serve running? ===\"; pgrep -fl \"warden serve\" || echo none; echo \"=== log files ===\"; ls -la *.log 2>/dev/null || echo no-log"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/Desktop/telegram-warden && ls scenarios && cat scenarios/*.jsonl | head -20 && sed -n 1,60p warden/adapters/console.py"
}
```

### 🤖 Assistant — 2026-10-30T16:41:34Z

<details><summary>Reasoning</summary>

Important findings:
1. A live `serve --send` process (PID 7085) is already running — live mode, will send.
2. No business connections stored in warden.db — so the bot isn't connected to the account yet (or connection update n
