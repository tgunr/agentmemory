---
type: Fact
title: # Kilocode vs Nous Portal for Hermes

source: hermes
session_id: 20260708_021709
description: # Kilocode vs Nous Portal for Hermes

source: hermes
session_id: 20260708_021709_0140a8
resource: hermes://session/20260708_021709_0140a8

# Conversation

- **Session ID:** `20260708_021709_0140a8`
- 
resource: agentmemory://memory/mem_mspdvh42_4cc5a7d27819
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T01:01:13.423Z
source: agentmemory
strength: 7
---
# Content

# Kilocode vs Nous Portal for Hermes

source: hermes
session_id: 20260708_021709_0140a8
resource: hermes://session/20260708_021709_0140a8

# Conversation

- **Session ID:** `20260708_021709_0140a8`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-07-08T07:17:11Z
- **Messages:** 25
- **CWD:** `/Volumes/davec`
- **Tokens:** 54 in / 2695 out
- **Est. cost:** $0.0218

---

### 👤 User — 2026-07-08T07:17:11Z

compare pricing, features, capabilities of kilocode with nous protal, which would be better for hermes use

### 🤖 Assistant — 2026-07-08T07:19:09Z

<details><summary>Reasoning</summary>

The user wants to compare Kilocode with Nous Portal in terms of pricing, features, and capabilities, specifically for use with Hermes Agent. Let me research both to give an accurate comparison.

</details>

**Tool call: web_search**

```json
{
  "query": "Kilocode pricing plans features AI coding 2025 2026",
  "limit": 10
}
```

**Tool call: web_search**

```json
{
  "query": "Nous Portal pricing plans features Hermès Agent 2025 2026",
  "limit": 10
}
```

### 🤖 Assistant — 2026-07-08T07:19:10Z

<details><summary>Reasoning</summary>

The Nous Portal search failed. Let me try again.

</details>

**Tool call: web_search**

```json
{
  "limit": 8,
  "query": "Nous Research Portal pricing subscription plans AI inference 2026"
}
```

**Tool call: web_search**

```json
{
  "limit": 8,
  "query": "\"nous portal\" OR \"nousresearch portal\" features models pricing hermes agent"
}
```

### 🤖 Assistant — 2026-07-08T07:19:10Z

<details><summary>Reasoning</summary>

Good, I have some info on both. Let me get more detailed pricing from the actual pages.


</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://kilo.ai/pricing",
    "https://portal.nousresearch.com/info",
    "https://hermes-agent.nousresearch.com/docs/integrations/nous-portal"
  ]
}
```

### 🤖 Assistant — 2026-07-08T07:19:10Z

<details><summary>Reasoning</summary>

Let me try the browser or search for more specific pricing details.

</details>

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Nous Portal subscription pricing tiers monthly credits plans 2026"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Kilocode KiloClaw pricing credit packs free tier BYOK 2026"
}
```

### 🤖 Assistant — 2026-07-08T07:19:10Z

<details><summary>Reasoning</summary>

Let me get more details from the Nous Portal guide and pricing page, plus the Hermes Agent docs on providers.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://www.nous.co/pricing",
    "https://openclawlaunch.com/guides/nous-portal"
  ]
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Nous Portal plans \"Pro\" \"Plus\" \"Starter\" pricing monthly credits hermes tools"
}
```

### 🤖 Assistant — 2026-07-08T07:19:10Z

<details><summary>Reasoning</summary>

Let me try to get the full pricing details from the Nous Portal and Kilocode via browser or more searches. Let me also check the Hermes Agent docs which are authoritative.


</details>

**Tool call: browser_navigate**

```json
{
  "url": "https://portal.nousresearch.com/manage-subscription"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Kilocode \"kilo\" kilo.ai pricing \"free\" \"KiloClaw\" credit packs monthly plans 2026"
}
```

### 🤖 Assistant — 2026-07-08T07:19:10Z

<details><summary>Reasoning</summary>

Good, I now have solid info on Nous Portal pricing from the actual page, and enough on Kilocode to compare. Let me also check what Kilocode's relationship to Hermes is — is Kilocode actually compatible with or a competing product to Hermes Agent?

</details>

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Hermes Agent vs Kilocode comparison OR \"kilo\" hermes compatibility 2026"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Kilocode features \"auto model\" \"orchestrator\" \"MCP\" \"code review\" capabilities 2026"
}
```

### 🤖 Assistant — 2026-07-08T07:19:10Z

<details><summary>Reasoning</summary>

Interesting — Kilocode is actually a *provider* 
