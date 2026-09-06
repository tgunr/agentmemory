---
type: Fact
title: # Explain MOA default model and prompt routing

source: hermes
session_id: 20260
description: # Explain MOA default model and prompt routing

source: hermes
session_id: 20260902_080338_bb0260
resource: hermes://session/20260902_080338_bb0260

# Conversation

- **Session ID:** `20260902_080338_
resource: agentmemory://memory/mem_mto6g7qn_26d4f950f25e
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes"]
timestamp: 2026-09-05T09:25:20.156Z
source: agentmemory
strength: 7
---
# Content

# Explain MOA default model and prompt routing

source: hermes
session_id: 20260902_080338_bb0260
resource: hermes://session/20260902_080338_bb0260

# Conversation

- **Session ID:** `20260902_080338_bb0260`
- **Source:** tui
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-02T13:05:30Z
- **Ended:** 2026-09-02T13:16:01Z
- **Messages:** 92
- **CWD:** `/Users/davec/.hermes`
- **Tokens:** 412559 in / 19812 out

---

### 👤 User — 2026-09-02T13:05:30Z

explain how the MOA default model works, where is the prompt sent?

### 🤖 Assistant — 2026-09-02T13:05:49Z

<details><summary>Reasoning</summary>

The user is asking about how the MOA (Mixture of Agents) default model works and where the prompt is sent. This seems to be about a specific AI/model setup, possibly related to Hermes or a particular framework.

I need to look at the Hermes documentation since the instructions say "When the user needs help with Hermes itself — configuring, setting up, using, extending, or troubleshooting it — or when you need to understand your own features, tools, or capabilities, the documentation at https://hermes-agent.nousresearch.com/docs is your authoritative reference."

Let me first check if there's a relevant skill to load, and also search the documentation or code for MOA. Given the context about Hermes Agent, I should look at the Hermes documentation and possibly search the codebase for MOA references.

Actually, looking more carefully - MOA might refer to "Mixture of Agents" which is a concept in AI. The user might be asking about how Hermes implements or uses MOA, or they might be asking about a specific MOA setup. Let me search the Hermes docs and also check the codebase.

Let me start by searching for MOA in the Hermes context, and also check the docs.

</details>

**Tool call: skill_view**

```json
{
  "name": "autonomous-ai-agents"
}
```

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "site:hermes-agent.nousresearch.com MOA default model prompt sent"
}
```

### 🤖 Assistant — 2026-09-02T13:05:56Z

<details><summary>Reasoning</summary>

The user wants an explanation of how the "MOA default model" works and where the prompt is sent. Based on the web search results, I can see some relevant info from the Hermes docs. The top result from "Mixture of Agents - Hermes Agent" seems directly relevant. Let me fetch that page for more details. I should also check if there's any local Hermes config or docs in the repo that might be relevant. But first, let me get the official docs content.

</details>

**Tool call: web_extract**

```json
{
  "char_limit": 8000,
  "urls": [
    "https://hermes-agent.nousresearch.com/docs/user-guide/features/mixture-of-agents",
    "https://hermes-agent.nousresearch.com/docs/reference/cli-commands"
  ]
}
```

### 🤖 Assistant — 2026-09-02T13:06:02Z

<details><summary>Reasoning</summary>

The docs search results are enough for this question, but I can pull one more reliable source just to confirm.

</details>

**Tool call: web_extract**

```json
{
  "char_limit": 8000,
  "urls": [
    "https://hermes-agent.nousresearch.com/docs/user-guide/features/mixture-of-agents"
  ]
}
```

### 🤖 Assistant — 2026-09-02T13:06:09Z

<details><summary>Reasoning</summary>

Extract backend is unavailable here, so I’ll fall back to the browser-based fetch path for this one doc page and then answer from that. Also, I should stop guessing: the authoritative docs are `mixture-of-agents` and `cli-commands`, so a direct browser read is the right move.

</details>

**Tool call: browser_exec**

```json
{
  "code": "# Open the Hermes MoA docs page and extract the readable text\nnew_tab(\"https://hermes-agent.nousresearch.com/docs/user-guide/features/mixture-of-agents\")\nwait_for_load()\nprint(page_info()[\"url\"])\nprint(page_info()[\"title\"])\nprint(page_info()[\"text\"])\n",
  "timeout_s": 300
}
```

### 🤖 Assistant — 2026-09-02T13:06:17Z

<details><summary>Reasoning</summary>

I have enough to answer the question accurately from the authoritative Hermes docs snippets surfaced by web search. I’ll explain it directly without editing anything.

</details>

Based on
