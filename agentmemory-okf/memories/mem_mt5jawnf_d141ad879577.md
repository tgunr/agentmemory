---
type: Fact
title: # Compare fireworks.ai pricing to Kilocode

source: hermes
session_id: 20260821_
description: # Compare fireworks.ai pricing to Kilocode

source: hermes
session_id: 20260821_082405_638042
resource: hermes://session/20260821_082405_638042

# Conversation

- **Session ID:** `20260821_082405_6380
resource: agentmemory://memory/mem_mt5jawnf_d141ad879577
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI"]
timestamp: 2026-08-23T08:17:30.253Z
source: agentmemory
strength: 7
---
# Content

# Compare fireworks.ai pricing to Kilocode

source: hermes
session_id: 20260821_082405_638042
resource: hermes://session/20260821_082405_638042

# Conversation

- **Session ID:** `20260821_082405_638042`
- **Source:** desktop
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-08-21T13:24:05Z
- **Messages:** 96
- **CWD:** `/Volumes/AI`
- **Tokens:** 2191069 in / 18463 out

---

### 👤 User — 2026-08-21T13:24:08Z

Compare fireworks.ai pricing to Kilocode

### 👤 User — 2026-08-21T13:24:08Z

Compare fireworks.ai pricing to Kilocode

### 🤖 Assistant — 2026-08-21T13:24:22Z

<details><summary>Reasoning</summary>

The user wants me to compare pricing between fireworks.ai and Kilocode (which seems to be related to Kilo Code / kilocode). Let me search for pricing info on both and then compare.

Let me start by searching for both services' pricing pages.

</details>

**Tool call: web_search**

```json
{
  "query": "fireworks.ai pricing plans API tokens 2025 2026"
}
```

**Tool call: web_search**

```json
{
  "query": "kilocode pricing plans API tokens 2025 2026"
}
```

### 🤖 Assistant — 2026-08-21T13:24:22Z

<details><summary>Reasoning</summary>

The user wants me to compare pricing between fireworks.ai and Kilocode (which seems to be related to Kilo Code / kilocode). Let me search for pricing info on both and then compare.

Let me start by searching for both services' pricing pages.

</details>

**Tool call: web_search**

```json
{
  "query": "fireworks.ai pricing plans API tokens 2025 2026"
}
```

**Tool call: web_search**

```json
{
  "query": "kilocode pricing plans API tokens 2025 2026"
}
```

### 🤖 Assistant — 2026-08-21T13:24:34Z

<details><summary>Reasoning</summary>

The user wants a comparison between fireworks.ai pricing and Kilocode pricing. I have both search results. Let me pull the actual pricing pages to get specific numbers.

Let me extract the key data from what I have:

**Fireworks.ai** (from search results):
- Pay per token, postpaid billing
- $1 free credits to get started
- Input costs range from $0.18 to $0.90 per 1M tokens across models
- Some models start at $0.05 per 1M input tokens (via Requesty routing)
- On-demand H100 GPU: $7.00/hr
- No $0/token models

I should pull the actual pricing pages for more specific numbers on model-by-model costs.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://fireworks.ai/pricing",
    "https://pricepertoken.com/pricing-page/provider/fireworks"
  ]
}
```

**Tool call: web_extract**

```json
{
  "urls": [
    "https://kilo.ai/pricing",
    "https://kilo.ai/inference"
  ]
}
```

### 🤖 Assistant — 2026-08-21T13:24:47Z

<details><summary>Reasoning</summary>

The web extraction failed because we're using the free brave search backend. Let me try with the browser tool or other approaches to get more detailed pricing info. Let me use the browser_exec to fetch the actual pricing pages.

Actually, let me look at what we already have from the search results - there's quite a bit of detail. Let me also try fetching the pricing pages via browser_exec since the extract backend isn't available.

Let me try browser_exec to get the Fireworks pricing page and Kilo pricing page.

</details>

**Tool call: browser_exec**

```json
{
  "code": "\n# Fetch Fireworks AI pricing page\nfrom hermes_tools import terminal\n\n# Use curl to fetch the pricing pages\nresult = terminal(\"curl -sL 'https://fireworks.ai/pricing' 2>/dev/null | grep -iE '(price|\\\\$|token|credit|plan|model|free|usage|rates|per)' | head -80\")\nprint(\"=== FIREWORKS ===\")\nprint(result[\"output\"][:4000])\n"
}
```

**Tool call: browser_exec**

```json
{
  "code": "\n# Fetch Kilo pricing page\nfrom hermes_tools import terminal\n\nresult = terminal(\"curl -sL 'https://kilo.ai/pricing' 2>/dev/null | grep -iE '(price|\\\\$|token|credit|plan|model|free|usage|rates|per|monthly|subscription)' | head -80\")\nprint(\"=== KILO ===\")\nprint(result[\"output\"][:4000])\n"
}
```

### 🤖 Assistant — 2026-08-21T13:24:47Z

<details><summary>Reasoning</summary>

The web extraction failed because we're using the free brave search backend. Let me try with the br
