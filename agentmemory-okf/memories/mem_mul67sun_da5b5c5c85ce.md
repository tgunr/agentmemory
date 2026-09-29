---
type: Fact
title: # Review auxiliary model configuration recommendations

source: hermes
session_i
description: # Review auxiliary model configuration recommendations

source: hermes
session_id: 20260927_073430_e2753c
resource: hermes://session/20260927_073430_e2753c

# Conversation

- **Session ID:** `20260927
resource: agentmemory://memory/mem_mul67sun_da5b5c5c85ce
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-28T11:35:11.398Z
source: agentmemory
strength: 7
---
# Content

# Review auxiliary model configuration recommendations

source: hermes
session_id: 20260927_073430_e2753c
resource: hermes://session/20260927_073430_e2753c

# Conversation

- **Session ID:** `20260927_073430_e2753c`
- **Source:** desktop
- **Model:** kilo-auto/balanced
- **Started:** 2026-09-27T12:34:32Z
- **Messages:** 364
- **CWD:** `/Volumes/davec`
- **Tokens:** 622074 in / 43872 out
- **Est. cost:** $-266769.0000

---

### 👤 User — 2026-09-27T12:34:32Z

We had a session about configuring the auxiliary models. What was the recommendation?

### 👤 User — 2026-09-27T12:34:32Z

We had a session about configuring the auxiliary models. What was the recommendation?

### 🤖 Assistant — 2026-09-27T12:34:41Z

<details><summary>Reasoning</summary>

The user is asking about a previous session on setting up auxiliary models in Hermes. There's no session_search tool in the list… no wait, there is a session_search tool that was deferred: "session_search tools (1 item): session_search". I can use tool_describe and tool_call. Let me try searching sessions for the setup recommendations regarding "auxiliary models".

</details>

**Tool call: tool_describe**

```json
{
  "names": [
    "session_search"
  ]
}
```

### 🤖 Assistant — 2026-09-27T12:34:41Z

<details><summary>Reasoning</summary>

The user is asking about a previous session on setting up auxiliary models in Hermes. There's no session_search tool in the list… no wait, there is a session_search tool that was deferred: "session_search tools (1 item): session_search". I can use tool_describe and tool_call. Let me try searching sessions for the setup recommendations regarding "auxiliary models".

</details>

**Tool call: tool_describe**

```json
{
  "names": [
    "session_search"
  ]
}
```

### 🤖 Assistant — 2026-09-27T12:34:46Z

<details><summary>Reasoning</summary>

Search for a session about the setup of the auxiliary model.

</details>

**Tool call: tool_call**

```json
{
  "calls": [
    {
      "name": "session_search",
      "arguments": {
        "query": "auxiliary models configuration recommendation",
        "limit": 5
      }
    }
  ]
}
```

### 🤖 Assistant — 2026-09-27T12:34:51Z

<details><summary>Reasoning</summary>

The search isn't returning results with the current parameters, so I should experiment with different search terms or try removing the date filters to cast a wider net.

</details>

**Tool call: tool_call**

```json
{
  "calls": [
    {
      "arguments": {
        "limit": 5,
        "query": "auxiliary model"
      },
      "name": "session_search"
    }
  ]
}
```

### 🤖 Assistant — 2026-09-27T12:35:10Z

<details><summary>Reasoning</summary>

The session is @session:default/20260924_091419_9cba88 — "Show all commands" (originally "Explain the hermes aux models..."). The recommendation was "Option A", which was applied:

- compression → apple-fm (local FM via launchd `fm serve`, http://localhost:8001/v1, Neural Engine), model "system", context_length 128000, timeout 120
- vision → kilocode stepfun/step-3.7-flash:free
- everything else (session_search, title_generation, skills_hub, approval, mcp, tts_audio_tags, triage_specifier, kanban_decomposer) → kilocode kilo-auto/free, with adjusted timeouts
- the rest are auto

Also a note from the user: fm serve is a launchd daemon — don't run two of them.

Should I scroll a bit to get the description of Option A? The bookend_end summary shows the final state. That should be enough. I'll answer concisely with the link included.


</details>

Found it — @session:default/20260924_091419_9cba88 ("Explain the hermes aux models…", Sep 24). The recommendation was **"Option A"**, which you then had me apply:

| Aux task | Provider | Model |
|---|---|---|
| compression | **apple-fm** (local) | `system` @ `http://localhost:8001/v1`, context_length 128000, timeout 120 |
| vision | kilocode | `stepfun/step-3.7-flash:free` |
| session_search, title_generation, skills_hub, approval, mcp, tts_audio_tags, triage_specifier, kanban_decomposer | kilocode | `kilo-auto/free` (timeouts 20–120s per task) |
| review, goal_judge, curator, monitor, … | auto | — |

Rationale: keep the strong model f
