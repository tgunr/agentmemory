---
type: Fact
title: # Claude Codex Gemini cost comparison

source: hermes
session_id: 20260726_10185
description: # Claude Codex Gemini cost comparison

source: hermes
session_id: 20260726_101852_f66fa4
resource: hermes://session/20260726_101852_f66fa4

# Conversation

- **Session ID:** `20260726_101852_f66fa4`
-
resource: agentmemory://memory/mem_mtg11yvv_f1905ca1818d
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:08.103Z
source: agentmemory
strength: 7
---
# Content

# Claude Codex Gemini cost comparison

source: hermes
session_id: 20260726_101852_f66fa4
resource: hermes://session/20260726_101852_f66fa4

# Conversation

- **Session ID:** `20260726_101852_f66fa4`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-26T15:18:52Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 651
- **CWD:** `/Users/davec`
- **Tokens:** 574057 in / 120782 out

---

### 👤 User — 2026-07-26T15:18:52Z

compare costs between Claude, Codex, and Gemini

### 🤖 Assistant — 2026-07-26T15:19:05Z

<details><summary>Reasoning</summary>

The user wants me to compare costs between Claude, Codex, and Gemini. These are AI model API providers. Let me think about what "costs" means here — likely API pricing per token for the main coding/models. Let me search the web for current pricing.

Let me do parallel web searches for current pricing of each.

Actually, let me think about what's most relevant. The user said "Claude, Codex, and Gemini" — these are AI coding assistant / API services. Costs could refer to:
- API pricing (per token)
- Subscription pricing (Claude Pro, ChatGPT Plus/Pro, Gemini Advanced)

Given the context (Hermes Agent, coding), they probably mean API pricing for models. But it could be subscription. Let me get both, but focus on API pricing since that's the most concrete comparison, and mention subscriptions.

Let me search the web for current pricing. I'll do parallel searches.

Let me be careful — pricing changes. I should fetch live data. Let me do web searches

</details>

**Tool call: web_search**

```json
{
  "query": "Claude API pricing per million tokens 2026 Opus Sonnet Haiku"
}
```

**Tool call: web_search**

```json
{
  "query": "OpenAI Codex API pricing per million tokens 2026"
}
```

**Tool call: web_search**

```json
{
  "query": "Gemini API pricing per million tokens 2026 Pro Flash"
}
```

### 🤖 Assistant — 2026-07-26T15:19:12Z

<details><summary>Reasoning</summary>

Two of the three hit rate limits (429). Let me retry Claude and Codex searches, and also fetch the Gemini pricing page to verify. Let me do these in parallel.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://www.anthropic.com/pricing#api",
    "https://ai.google.dev/gemini-api/docs/pricing"
  ]
}
```

**Tool call: web_search**

```json
{
  "query": "Anthropic Claude API pricing input output per million tokens Opus Sonnet Haiku 2025"
}
```

**Tool call: web_search**

```json
{
  "query": "OpenAI Codex pricing per million tokens input output 2025"
}
```

### 🤖 Assistant — 2026-07-26T15:19:36Z

<details><summary>Reasoning</summary>

The web search results are returning clearly fabricated/hallucinated 2026 "future" model numbers (Claude Opus 4.8, Sonnet 5, Gemini 3.6, etc.). The current date in the context is July 26, 2026 — but these model names like "Opus 4.8", "Sonnet 5", "Gemini 3.6" are suspicious. Actually, given the conversation date is July 2026, some of these could be real. But I should be careful — many of these "felloai.com" / "benchlm.ai" / "finout.io" aggregator sites may be hallucinating.

Let me go to authoritative sources directly. The web_extract failed because the Brave backend can't extract. Let me try fetching the official pricing pages via curl in terminal, or web_extract with a different backend. Actually, I have web_extract but it said the backend is search-only. Let me check — the error said "Set web.extract_backend to firecrawl, tavily, exa, or parallel." 

But I have terminal access. Let me curl the official pricing pages directly. That's the most authoritative. Let me fetch:
- Anthropic: https://www.anthropic.com/pricing or the docs
- OpenAI API pricing: https://openai.com/api/pricing/ or https://platform.openai.com/docs/pricing
- Gemini: https://ai.google.dev/gemini-api/docs/pricing

These are all plain-ish web pages. Let me curl them. Actually the pricing pages may be JS-heavy. Let me try. The official Anthropic pricing docs page is at https://docs.anthropic.com/en/docs/about-claude/pricing (now platform.claude.com). Let me curl those.

Also for Codex — Codex is OpenAI's coding agent. The user want
