---
type: Fact
title: # Selecting cost-efficient models across Kilo Nous Ollama

source: hermes
sessio
description: # Selecting cost-efficient models across Kilo Nous Ollama

source: hermes
session_id: 20260721_061945_d50974
resource: hermes://session/20260721_061945_d50974

# Conversation

- **Session ID:** `20260
resource: agentmemory://memory/mem_mspdztk0_97107e2f5512
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:36.144Z
source: agentmemory
strength: 7
---
# Content

# Selecting cost-efficient models across Kilo Nous Ollama

source: hermes
session_id: 20260721_061945_d50974
resource: hermes://session/20260721_061945_d50974

# Conversation

- **Session ID:** `20260721_061945_d50974`
- **Source:** tui
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-07-21T11:19:46Z
- **Messages:** 86
- **CWD:** `/Users/davec`
- **Tokens:** 362194 in / 23934 out

---

### 👤 User — 2026-07-21T11:19:46Z

Comparing Kilo models with Nous models, it is confusing to have so many choices, how do I determine the most cost efficient model to use? I thought I had a session that attempted to select a model based on the current prompt and auto select a model. I think it was for ollama models but it needs to be the 3 providers I use the most, Kilo, Nous, and Ollama.

### 🤖 Assistant — 2026-07-21T11:19:51Z

<details><summary>Reasoning</summary>

The user wants to find a past session where they attempted to auto-select a model based on the current prompt across three providers they use most: Kilo, Nous, and Ollama. They want to know if such a session exists and retrieve the relevant context.

I should use session_search to look for prior discussions about model selection, auto-selection, Ollama/Kilo/Nous routing, or anything close to that. I’ll do one broad session_search query first.

</details>

**Tool call: session_search**

```json
{
  "query": "auto select model Kilo Nous Ollama prompt routing",
  "limit": 10,
  "sort": "newest"
}
```

### 🤖 Assistant — 2026-07-21T11:19:58Z

<details><summary>Reasoning</summary>

No prior session matched. I’ll search with broader keywords to see if you already built something like this.

</details>

**Tool call: session_search**

```json
{
  "limit": 10,
  "query": "model selection routing cost cheapest provider",
  "sort": "newest"
}
```

### 🤖 Assistant — 2026-07-21T11:20:05Z

<details><summary>Reasoning</summary>

No prior session found on that exact topic, so I’ll move straight to building it with you. The most actionable approach is: 1) list your current models for Kilo, Nous, and Ollama with known cost/capability proxies, 2) create a provider/model selection rubric, 3) optionally automate routing through Hermes configuration or helper logic. Before I sketch a concrete recommendation, I want one quick clarification: do you currently use the same Hermes provider routing for Kilo and Nous, or do you treat them as separate provider families?

</details>

I didn’t find a prior session on this, so I’ll build this from scratch with you.

The useful next step is to decide whether you want:
1. **A repeatable selection rubric** — upfront rules by task type, e.g. planner/reasoner/provider-first/fallback
2. **An automation mechanism** — actual auto-selection inside Hermes/provider config/cron/skill rather than manual choice each time

Before I draft either, one quick clarification: do you currently drive **Kilo** and **Nous** through the same provider/routing config, or are they separate provider entries you independently choose between?

### 👤 User — 2026-07-21T11:21:32Z

I am in Hermes, so I have to select using the model popup right now to override the default in the settings for the profile.

### 🤖 Assistant — 2026-07-21T11:21:43Z

<details><summary>Reasoning</summary>

The user is clarifying their setup: in Hermes, they currently switch models via the model popup, overriding the profile default. That means manual model selection each session/conversation. They have three providers they use most: Kilo, Nous, and Ollama, and want a way to auto/prompt-route to the most cost-efficient one instead of choosing blindly.

So I should offer two concrete things:
- A simple selection rubric/tradeoff for these three providers right now
- An actual Hermes-side automation path if they want it

Since I didn’t find a prior session, I’m starting from scratch. The next useful step is to propose a practical auto-selection approach inside Hermes: likely a model-routing prompt or a small automation wrapper. I should keep it simple and actionable, since they’re asking because the popup choice is tedious and confusing.

</details>

Got it — so right now 
