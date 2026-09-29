---
type: Fact
title: # Show all commands

source: hermes
session_id: 20260924_091419_9cba88
resource:
description: # Show all commands

source: hermes
session_id: 20260924_091419_9cba88
resource: hermes://session/20260924_091419_9cba88

# Conversation

- **Session ID:** `20260924_091419_9cba88`
- **Source:** deskt
resource: agentmemory://memory/mem_mul67pdj_ac9ce6a39d6f
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-28T11:35:06.923Z
source: agentmemory
strength: 7
---
# Content

# Show all commands

source: hermes
session_id: 20260924_091419_9cba88
resource: hermes://session/20260924_091419_9cba88

# Conversation

- **Session ID:** `20260924_091419_9cba88`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-24T14:14:19Z
- **Ended:** 2026-09-27T16:27:10Z
- **Messages:** 110
- **CWD:** `/Users/davec`
- **Tokens:** 718772 in / 5420 out

---

### 👤 User — 2026-09-24T14:14:19Z

Explain the hermes aux models, how and when they are used, the best configuration for them.

### 👤 User — 2026-09-24T14:14:19Z

Explain the hermes aux models, how and when they are used, the best configuration for them.

### 🤖 Assistant — 2026-09-24T14:14:26Z

<details><summary>Reasoning</summary>

The user is asking about Hermes auxiliary models - what they are, how/when they're used, and best configuration. This is a Hermes-specific question, so I should check if there's a relevant skill first.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-09-24T14:14:26Z

<details><summary>Reasoning</summary>

The user is asking about Hermes auxiliary models - what they are, how/when they're used, and best configuration. This is a Hermes-specific question, so I should check if there's a relevant skill first.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-09-24T14:14:39Z

<details><summary>Reasoning</summary>

The skill output was too large, but it’s saved on disk. I should read the saved file and look for the “aux models” section directly, then summarize how they’re used and the recommended configuration.

</details>

**Tool call: execute_code**

```json
{
  "code": "\nimport os\npath = '/Users/davec/.hermes/cache/spillover/call-d7cb462a-c94a-4754-b935-04cb43c90c1a.txt'\ntext = open(path, 'r', encoding='utf-8', errors='ignore').read()\nneedle = 'aux'\nfor kw in ['aux model','aux models','auxiliary model','submodel','classifier model','cheap model']:\n    idx = text.lower().find(kw)\n    if idx != -1:\n        start = max(0, idx-300)\n        end = min(len(text), idx+1800)\n        print('\\n--- MATCH:', kw, '---\\n')\n        print(text[start:end])\n        print('\\n' + '='*80 + '\\n')\n"
}
```

### 🤖 Assistant — 2026-09-24T14:15:00Z

<details><summary>Reasoning</summary>

The skill content only has a brief mention of auxiliary models under troubleshooting: vision/compression/session_search and `auto` provider resolution. That’s helpful but incomplete for the user’s question. I should check the Hermes docs site for a deeper explanation of auxiliary models, their roles, and recommended config.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://hermes-agent.nousresearch.com/docs/user-guide/configuration",
    "https://hermes-agent.nousresearch.com/docs/user-guide/providers"
  ],
  "char_limit": 20000
}
```

### 🤖 Assistant — 2026-09-24T14:15:07Z

<details><summary>Reasoning</summary>

**Considering search options**

I'm thinking that since the extraction method failed, it might be best to use web search instead. I need to find documentation or information that can help me understand the topic better. It seems like a good plan to explore reputable sources through search to gather the necessary details. I'll focus on what I need and see what I can find to get the information I'm after!

</details>

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "Hermes Agent auxiliary models configuration vision compression session_search"
}
```

### 🤖 Assistant — 2026-09-24T14:15:15Z

<details><summary>Reasoning</summary>

Great, I have enough context from the web search results. Let me also extract the official Hermes docs page directly if possible, and maybe the GitHub markdown source.

</details>

**Tool call: web_extract**

```json
{
  "char_limit": 20000,
  "urls": [
    "https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/configuring-models.md"
  ]
}
```

### 🤖 Assistant — 2026-09-24T14:15:29Z

<details><summary>Reasoning</summary>

I have good search results but can't extract
