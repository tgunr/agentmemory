---
type: Fact
title: # Explain Kilo Jev model usage

source: hermes
session_id: 20260928_064036_be4be
description: # Explain Kilo Jev model usage

source: hermes
session_id: 20260928_064036_be4be4
resource: hermes://session/20260928_064036_be4be4

# Conversation

- **Session ID:** `20260928_064036_be4be4`
- **Sour
resource: agentmemory://memory/mem_munu26hr_0832b0491b4e
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-30T08:18:12.296Z
source: agentmemory
strength: 7
---
# Content

# Explain Kilo Jev model usage

source: hermes
session_id: 20260928_064036_be4be4
resource: hermes://session/20260928_064036_be4be4

# Conversation

- **Session ID:** `20260928_064036_be4be4`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-28T11:41:14Z
- **Ended:** 2026-09-29T19:33:52Z
- **Messages:** 9
- **CWD:** `/Users/davec`
- **Tokens:** 40053 in / 596 out

---

### 👤 User — 2026-09-28T11:41:14Z

Explain how to use Kilo Jev model

### 🤖 Assistant — 2026-09-28T11:41:32Z

<details><summary>Reasoning</summary>

The user is asking about how to use the "Kilo Jev model". This is a bit ambiguous - let me check what skills might be relevant here. Looking at the available skills, I see several Kilo-related skills like "kilo-code-integration", "kilo-agentmemory-integration", and "local-model-providers". 

"Kilo Jev model" doesn't immediately ring a bell as a standard model name. Let me search the web to see if this is a specific model or if the user might be referring to something else. I should also check if there are any relevant skills.

Actually, looking more carefully, this might be a typo or misremembered name. Let me search for it. It could be:
1. A local model served through Ollama or similar
2. A specific model in a provider catalog
3. A custom/private model

Let me search the web first to see what "Kilo Jev model" refers to. I'll also check the local model providers skill since it mentions Kilo models.

</details>

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Kilo Jev model LLM local model provider"
}
```

**Tool call: skill_view**

```json
{
  "name": "local-model-providers"
}
```

### 🤖 Assistant — 2026-09-28T11:41:39Z

<details><summary>Reasoning</summary>

I couldn't find specific information about "Kilo Jev model" in the search results. The web search returned information about Kilo Code and local models in general, but nothing specifically about a "Jev" model. Let me search more specifically for this.

</details>

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Kilo Jev model AI coding local LLM"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "\"Kilo Jev\" model Ollama LM Studio"
}
```

### 🤖 Assistant — 2026-09-28T11:41:50Z

<details><summary>Reasoning</summary>

I could not find a verifiable “Kilo Jev model” from these searches. The results show Kilo Code in general, plus unrelated “Jev AI” mentions. I should be honest about that instead of inventing usage steps. Best next move: ask the user which exact product or repo they mean, or if they have a model card/docs link.

</details>

I couldn’t find a verifiable “Kilo Jev model” in the current docs/search results. Kilo Code is documented, but “Jev” is showing up in unrelated non-Kilo contexts, so I don’t want to give you guessed setup steps.

If you have a link or repo, send it and I’ll walk through the actual setup. If you meant using a local model with Kilo in general, I can cover that directly.

### 👤 User — 2026-09-28T11:58:46Z

[System: The active model for this chat has changed to kilo-auto/efficient via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]
