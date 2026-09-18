---
type: Fact
title: # Compare the Kilocode Kilocase Pro subscription…

source: hermes
session_id: 20
description: # Compare the Kilocode Kilocase Pro subscription…

source: hermes
session_id: 20260915_085046_049d0f
resource: hermes://session/20260915_085046_049d0f

# Conversation

- **Session ID:** `20260915_0850
resource: agentmemory://memory/mem_mu3tx51u_8df181a6398b
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260915_085046_049d0f"]
timestamp: 2026-09-16T08:18:53.667Z
source: agentmemory
strength: 7
---
# Content

# Compare the Kilocode Kilocase Pro subscription…

source: hermes
session_id: 20260915_085046_049d0f
resource: hermes://session/20260915_085046_049d0f

# Conversation

- **Session ID:** `20260915_085046_049d0f`
- **Source:** desktop
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-15T13:50:46Z
- **Ended:** 2026-09-15T14:15:06Z
- **Messages:** 24
- **Tokens:** 159100 in / 4320 out

---

### 👤 User — 2026-09-15T13:50:46Z

Compare the Kilocode Kilocase Pro subscription with Kilocode Mini Max Token Plan Max

### 🤖 Assistant — 2026-09-15T13:51:06Z

<details><summary>Reasoning</summary>

The user is asking me to compare two Kilocode subscription plans: "Kilocase Pro" and "Mini Max Token Plan Max". I need to research these plans to provide a comparison. Let me search for information about these plans.

</details>

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "Kilocode Kilocase Pro subscription plan pricing features"
}
```

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "Kilocode Mini Max Token Plan Max pricing limits"
}
```

### 🤖 Assistant — 2026-09-15T13:51:20Z

<details><summary>Reasoning</summary>

Based on the search results, I can see that Kilocode has:

1. Kilo Pass Pro - $49/month subscription with bonus credits
2. MiniMax Token Plan Max - $50/30 days (~5.1B tokens/mo)

Let me get more details from the official pages to make a comprehensive comparison.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://kilo.ai/pricing/kilo-pass",
    "https://kilo.ai/inference/subscriptions/minimax"
  ]
}
```

### 🤖 Assistant — 2026-09-15T13:51:29Z

<details><summary>Reasoning</summary>

I have enough info to answer. Kilo Pass Pro is the credit-funding layer; MiniMax Token Plan Max is a model-provider flat-rate quota bought inside Kilo. They're described as mutually exclusive because both fund coding-model usage. I should present the comparison clearly.

</details>

They’re not two versions of the same thing — they’re different layers, and Kilo itself treats them as **mutually exclusive funding sources for coding-model usage**.

## Kilo Pass **Pro**

- **Price:** $49/month
- **What it is:** A Kilo credit subscription. Your $49 becomes Kilo Credits spent at **provider list prices with no markup**, across 500+ models.
- **Bonus structure:** First month = 50% welcome bonus; months 2–8 = +5%/month; caps at **40% bonus** from month 8 onward, giving **$68.60/month total value** on Pro. Annual billing locks in **50% every month** immediately.
- **Credits:** Paid subscription credits are non-expiring; monthly free bonus credits **expire at month-end**.
- **What it powers:** Any model Kilo Code supports — Anthropic, OpenAI, Google, DeepSeek, etc. Use across IDE, CLI, Cloud Agents, App Builder.

## MiniMax Token Plan **Max**

- **Price:** $50/30 days
- **What it is:** MiniMax’s own flat-rate subscription bought **directly with Kilo Credits** and auto-configured — no separate MiniMax account/key needed inside Kilo.
- **Quota:** ~**5.1 billion tokens/month**, with **4–5 concurrent agents**.
- **What it powers:** MiniMax coding models only — most notably **MiniMax-M2.1**.
- **Limitations:** MiniMax is excluded from Teams/Enterprise shared billing; Kilo Pass **cannot** fund it and vice versa.

## Head-to-Head

| | Kilo Pass Pro | MiniMax Token Plan Max |
|---|---|---|
| **Price** | $49/mo | $50/30 days |
| **Type** | Kilo credit subscription | MiniMax flat-rate token quota |
| **Models** | 500+ across all providers | MiniMax models only |
| **Best for** | Multi-model heavy usage | Single-provider, MiniMax-centric workflows |
| **Concurrency** | Provider/model dependent | 4–5 agents |
| **Monthly value** | Up to $68.60 in credits | ~5.1B tokens |
| **Compatibility** | Works everywhere Kilo Code runs | Not available on Teams/Enterprise |
| **Can use together?** | ❌ Mutually exclusive for coding usage | ❌ Mutually exclusive for coding usage |

**TL;DR:** If you want provider flexibility and stacking bonus credits, go **Kilo Pass Pro**. If you live in MiniMax models and want a predictable monthly token bucket, go **MiniMax Token Plan Ma
