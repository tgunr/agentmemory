---
type: Fact
title: # SillyTavern Dialog Steering Guide

source: hermes
session_id: 20260707_140339_
description: # SillyTavern Dialog Steering Guide

source: hermes
session_id: 20260707_140339_cccfe7
resource: hermes://session/20260707_140339_cccfe7

# Conversation

- **Session ID:** `20260707_140339_cccfe7`
- *
resource: agentmemory://memory/mem_mspcm2bb_f7f91b21437f
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T00:25:54.728Z
source: agentmemory
strength: 7
---
# Content

# SillyTavern Dialog Steering Guide

source: hermes
session_id: 20260707_140339_cccfe7
resource: hermes://session/20260707_140339_cccfe7

# Conversation

- **Session ID:** `20260707_140339_cccfe7`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-07T19:03:55Z
- **Ended:** 2026-07-08T05:15:30Z
- **Messages:** 80
- **CWD:** `/Volumes/davec`
- **Tokens:** 227057 in / 18053 out
- **Est. cost:** $0.2002

---

### 👤 User — 2026-07-07T19:03:56Z

how do i steer a dialog in sillytavern

### 🤖 Assistant — 2026-07-07T19:04:41Z

<details><summary>Reasoning</summary>

The user is asking about how to steer a dialog in SillyTavern. I should first check if there's a relevant skill or documentation. Let me look at the available skills - I see there's a `sillytavern-setup` skill under productivity. Let me load that and also do a web search for SillyTavern dialog steering techniques.

</details>

**Tool call: skill_view**

```json
{
  "name": "sillytavern-setup"
}
```

**Tool call: web_search**

```json
{
  "query": "SillyTavern how to steer dialog conversation guide",
  "limit": 5
}
```

### 🤖 Assistant — 2026-07-07T19:04:41Z

<details><summary>Reasoning</summary>

Let me load the SillyTavern setup skill from the productivity category and also grab the official docs page on prompts.

</details>

**Tool call: skill_view**

```json
{
  "name": "productivity/sillytavern-setup"
}
```

**Tool call: web_extract**

```json
{
  "urls": [
    "https://docs.sillytavern.app/usage/prompts/"
  ]
}
```

### 🤖 Assistant — 2026-07-07T19:04:41Z

<details><summary>Reasoning</summary>

The skill already has a great section on "Steering the AI (OOC / Direction)" with a table. Let me also try to get the official docs page for more detail.

</details>

**Tool call: browser_navigate**

```json
{
  "url": "https://docs.sillytavern.app/usage/prompts/"
}
```

### 🤖 Assistant — 2026-07-07T19:04:41Z

<details><summary>Reasoning</summary>

I have the skill loaded and it has a great "Steering the AI" section. Let me also get the full page content from the docs.

</details>

**Tool call: browser_snapshot**

```json
{
  "full": true
}
```

### 🤖 Assistant — 2026-07-07T19:04:41Z

<details><summary>Reasoning</summary>

The page content is truncated. Let me scroll down to see the actual content of the Prompts page.

</details>

**Tool call: browser_scroll**

```json
{
  "direction": "down"
}
```

### 🤖 Assistant — 2026-07-07T19:04:41Z

<details><summary>Reasoning</summary>

Let me take a different approach and use the search function on the docs page, or just use the web_extract with the content from the Reddit post and the SeaArt blog. Actually, I already have a great answer from the skill itself. Let me just present that to the user. The skill has a comprehensive "Steering the AI (OOC / Direction)" section with a table. Let me also try to extract the web page content via execute_code or just present what I have.

Actually, I have enough information. Let me give the user a comprehensive answer based on the skill and the search results.

</details>

Here's your SillyTavern dialog-steering toolkit, from quick one-shots to persistent control:

## Steering Methods at a Glance

| Method | How | Best for |
|--------|-----|----------|
| **OOC parentheses** | Type `(Be more assertive. Describe the room.)` inline in your message | One-shot direction mid-reply |
| **Author's Note** | User Settings → Author's Note, depth ~1 | Persistent tone/style that sits near the top of context |
| **Slash commands** | `/sys [direction]` or `/note [direction]` | Invisible system injection the character doesn't "see" |
| **Narrative stage direction** | `*The lights flicker and go out.*` or `*Time skip: three days later.*` | Scene shifts without the character reacting to them |
| **Quick Replies** | Extensions → Quick Replies, bind `/note ...` | Reusable one-click steering buttons |
| **World Info / Lorebook** | Globe icon → keyword-triggered entries | Recurring backstory, locations, or scene rules that fire automatically |
| **Example dialogues** | In the character card, especially the last one | Shape the AI's *de
