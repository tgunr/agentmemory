---
type: Fact
title: # Assessing Hermes Usage Effectiveness

source: hermes
session_id: 20260722_1112
description: # Assessing Hermes Usage Effectiveness

source: hermes
session_id: 20260722_111231_1c186c
resource: hermes://session/20260722_111231_1c186c

# Conversation

- **Session ID:** `20260722_111231_1c186c`

resource: agentmemory://memory/mem_mspdzvcm_ab2b44c021fd
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:38.468Z
source: agentmemory
strength: 7
---
# Content

# Assessing Hermes Usage Effectiveness

source: hermes
session_id: 20260722_111231_1c186c
resource: hermes://session/20260722_111231_1c186c

# Conversation

- **Session ID:** `20260722_111231_1c186c`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-22T16:12:31Z
- **Messages:** 29
- **CWD:** `/Users/davec`
- **Tokens:** 185966 in / 4880 out
- **Est. cost:** $0.1662

---

### 👤 User — 2026-07-22T16:12:31Z

Looking at my sessions, am I using Hermes effectivley?

### 🤖 Assistant — 2026-07-22T16:12:39Z

<details><summary>Reasoning</summary>

The user is asking me to look at their past sessions to assess whether they're using Hermes effectively. Let me search their session history to get a sense of what they've been doing and how they're using the tool.


</details>

**Tool call: session_search**

```json
{
  "limit": 10,
  "sort": "newest"
}
```

### 🤖 Assistant — 2026-07-22T16:12:55Z

**Tool call: session_search**

```json
{
  "around_message_id": 1,
  "session_id": "20260722_091508_5ddc4a",
  "window": 20
}
```

**Tool call: session_search**

```json
{
  "around_message_id": 1,
  "session_id": "20260721_061945_d50974",
  "window": 20
}
```

**Tool call: session_search**

```json
{
  "around_message_id": 1,
  "session_id": "20260721_065755_a95130",
  "window": 20
}
```

**Tool call: session_search**

```json
{
  "around_message_id": 1,
  "session_id": "20260722_093959_0d09a2",
  "window": 20
}
```

### 🤖 Assistant — 2026-07-22T16:13:06Z

**Tool call: session_search**

```json
{
  "session_id": "20260722_091508_5ddc4a"
}
```

**Tool call: session_search**

```json
{
  "session_id": "20260721_061945_d50974"
}
```

**Tool call: session_search**

```json
{
  "session_id": "20260722_093959_0d09a2"
}
```

### 🤖 Assistant — 2026-07-22T16:13:24Z

**Tool call: terminal**

```json
{
  "command": "ls ~/.hermes/skills/ 2>/dev/null; echo '---'; ls ~/.hermes/skills/productivity/ 2>/dev/null; echo '---'; ls ~/.hermes/skills/autonomous-ai-agents/ 2>/dev/null; echo '---'; ls ~/.hermes/skills/rare/ 2>/dev/null; echo '---'; ls ~/.hermes/skills/software-development/ 2>/dev/null"
}
```

**Tool call: session_search**

```json
{
  "query": "delegate_task OR subagent OR parallel"
}
```

### 🤖 Assistant — 2026-07-22T16:13:37Z

**Tool call: session_search**

```json
{
  "limit": 5,
  "query": "cronjob create"
}
```

**Tool call: session_search**

```json
{
  "limit": 5,
  "query": "todo write plan"
}
```

### 🤖 Assistant — 2026-07-22T16:14:11Z

Now I have a solid picture of your usage. Here's my honest assessment:

---

## How You're Using Hermes: An Assessment

### What You're Doing Well

**Skill creation & accumulation** — You've built 30+ skills across multiple domains. The `hermes-conversation-export` session is a great example: you identified a real problem (SQLite corruption risk for session archives), designed a solution, verified it end-to-end, and saved it as a reusable skill. That's exactly how Hermes is meant to work.

**Multi-provider routing** — You tackled the "which model is cheapest for this task" problem head-on and built a `model-selection-routing` skill with a `router.py` script. You also set up a quick command (`/route`) and even configured me to auto-route prompts. This is advanced usage.

**System-level debugging** — The git-auto-commit daemon fix was impressive. You traced a thrash bug (daemon firing every 40 seconds), diagnosed the root cause (submodule dirty content failing pre-commit hooks), implemented a skip-set filter with TTL, and verified it live. That's real systems work.

**Hermes self-configuration** — You fixed the `web_search` Brave provider issue by patching the Hermes source itself. You also fixed the `/route` autocomplete issue. You're not just using Hermes, you're extending it.

**Cron jobs** — You have multiple scheduled jobs running (OKF mirror, reminders). The cron creation workflow is correct.

---

### Where You Could Be More Effective

**1. Todo lists for multi-step work**

You have complex sessions (110-168 messages) but I found zero `todo` usage. For sessions like the OKF exporter or the git-auto-commit fix, a `todo` would
