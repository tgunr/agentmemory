---
type: Fact
title: # Add backup provider for hermes

source: hermes
session_id: 20260815_064834_471
description: # Add backup provider for hermes

source: hermes
session_id: 20260815_064834_4716be
resource: hermes://session/20260815_064834_4716be

# Conversation

- **Session ID:** `20260815_064834_4716be`
- **So
resource: agentmemory://memory/mem_mt5jaofi_000feec03165
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-23T08:17:19.590Z
source: agentmemory
strength: 7
---
# Content

# Add backup provider for hermes

source: hermes
session_id: 20260815_064834_4716be
resource: hermes://session/20260815_064834_4716be

# Conversation

- **Session ID:** `20260815_064834_4716be`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-15T11:49:41Z
- **Ended:** 2026-08-15T12:05:03Z
- **Messages:** 69
- **CWD:** `/Users/davec`
- **Tokens:** 103931 in / 23674 out

---

### 👤 User — 2026-08-15T11:49:42Z

can hermes have a backup provider? E.G. Running in a session and the current provider fails for some reason, a backup rovider takes over?

### 🤖 Assistant — 2026-08-15T11:49:53Z

<details><summary>Reasoning</summary>

The user is asking whether Hermes Agent can have a backup/fallback provider — e.g., running in a session and the current provider fails, then a backup provider takes over.

This is a question about Hermes Agent itself. According to my instructions, when the user asks about configuring, setting up, or understanding Hermes Agent, I should load the `hermes-agent` skill. But this is more of a conceptual question about whether the feature exists. Let me check the docs/skill.

Let me load the hermes-agent skill to give an accurate answer. Actually, let me think — the question is specifically about fallback/backup providers. Let me search the hermes-agent skill and possibly the docs.

Let me load the hermes-agent skill first, and maybe also look at relevant skills like `local-model-providers`, `model-selection-routing`, `ollama-provider-troubleshooting`. But the core question is about provider fallback/failover.

Let me start by loading the hermes-agent skill to understand the capabilities and configuration

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-08-15T11:50:06Z

<details><summary>Reasoning</summary>

The user asks: can Hermes have a backup provider? E.g., running in a session and the current provider fails, a backup provider takes over?

Let me look at the skill content I have. It mentions:
- "Provider-agnostic — swap models and providers mid-workflow without changing anything else. Credential pools rotate across multiple API keys automatically."
- Config sections: `model` has `default`, `provider`, `base_url`, `api_key`, `context_length`. Also `delegation` has `model`, `provider`, `base_url`, `api_key`, `max_iterations`, `reasoning_effort`.

I don't see an explicit "backup provider" / failover feature documented in the skill. Let me check the actual config and the model routing code to see if there's a fallback feature. The skill mentions credential pools rotate across multiple API keys automatically. That's for the same provider though.

Let me be honest and accurate. I should check the actual current behavior. Let me look at the config / source code for any fallback provider feature. I don't have the source installed locally necessarily. Let me check if there's a config option for fallback.

Actually, the best approach: check the docs site for "fallback" or "backup provider". But I can be reasonably confident that the skill doesn't document a built-in automatic failover to a *different* provider. Credential pools rotate across multiple API *keys* (same provider) but not automatic provider failover.

Let me verify by checking the live config reference and possibly searching the source. But I don't have source locally. Let me do a quick check of the actual config file and maybe the docs.

Actually, let me reason about what's accurate. The user is asking a direct factual question. I should answer based on what's actually supported. The skill says "Credential pools rotate across multiple API keys automatically" — this is within a provider. There's no documented "backup provider" that automatically takes over if a provider fails mid-session.

However, there are related capabilities:
1. You can force provider per-call with `--provider` flag or `/model`.
2. `delegation` has its own model/provider — so subagents can use a different provider than the main session.
3. Credential pools rotate API keys within a provider for rate-limit/key exhaustion resilience.
4. `model
