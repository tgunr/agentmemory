---
type: Fact
title: # Debunking a fake 120W laser pointer

source: hermes
session_id: 20260711_07282
description: # Debunking a fake 120W laser pointer

source: hermes
session_id: 20260711_072821_06c70c
resource: hermes://session/20260711_072821_06c70c

# Conversation

- **Session ID:** `20260711_072821_06c70c`
-
resource: agentmemory://memory/mem_mtg11kd7_5b2b8cc92549
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:31:49.287Z
source: agentmemory
strength: 7
---
# Content

# Debunking a fake 120W laser pointer

source: hermes
session_id: 20260711_072821_06c70c
resource: hermes://session/20260711_072821_06c70c

# Conversation

- **Session ID:** `20260711_072821_06c70c`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-07-11T12:28:21Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 16
- **CWD:** `/Users/davec`
- **Tokens:** 48 in / 3270 out
- **Est. cost:** $0.0319

---

### 👤 User — 2026-07-11T12:28:21Z

How can this be true? https://oceanpicked.com/products/laser-pointer?_pos=1&_sid=586c34e0a&_ss=r

### 🤖 Assistant — 2026-07-11T12:28:26Z

<details><summary>Reasoning</summary>

The user is asking about a product page and seems skeptical about something on it. Let me fetch the page to see what's there.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://oceanpicked.com/products/laser-pointer?_pos=1&_sid=586c34e0a&_ss=r"
  ]
}
```

### 🤖 Assistant — 2026-07-11T12:28:33Z

<details><summary>Reasoning</summary>

Let me check the console errors and get the actual page content by extracting from the snapshot what's visible.


</details>

**Tool call: browser_console**

```json
{
  "expression": "document.title + '\\n---\\n' + document.querySelector('.product__title')?.textContent + '\\n---PRICE---\\n' + document.querySelector('.price')?.textContent + '\\n---DESCRIPTION---\\n' + document.querySelector('.product__description')?.innerText?.substring(0, 3000) + '\\n---FULL PAGE TEXT (first 5000)---\\n' + document.body.innerText.substring(0, 5000)"
}
```

### 🤖 Assistant — 2026-07-11T12:28:39Z

<details><summary>Reasoning</summary>

The user is asking how something can be true about a product page at oceanpicked.com for a "laser pointer". I should take a screenshot to see what's actually displayed on the page.

</details>

**Tool call: browser_vision**

```json
{
  "question": "What is this laser pointer product page claiming? What specific claim seems unbelievable or \"how can this be true\"? Show me the product details, price, and any marketing claims."
}
```

### 🤖 Assistant — 2026-07-11T12:28:47Z

<details><summary>Reasoning</summary>

Looks like the page came back black. Let me try navigating directly again and waiting for it to load.


</details>

**Tool call: browser_navigate**

```json
{
  "url": "https://oceanpicked.com/products/laser-pointer"
}
```

### 🤖 Assistant — 2026-07-11T12:29:11Z

<details><summary>Reasoning</summary>

Now I can see the product page clearly. The question is "How can this be true?" Let me analyze the claims:

1. **120W infrared laser pointer** — This is absurdly powerful for a "pointer." A typical laser pointer is 1-5 milliwatts. 120W is an industrial cutting laser level.

2. **900-1100nm wavelength** — This is near-infrared, invisible to the human eye. But at 120W, this is not a "pointer" — this is a weapon or industrial tool.

3. **"Class IV" safety rating** — Class IV lasers are the most dangerous class (500mW+). They can cause instant eye damage, burn skin, and ignite materials. A true 120W IR laser could cut through materials and cause severe burns at distance.

4. **1280g weight / battery-powered** — 4x 21700 batteries cannot produce 120W of laser output for any meaningful time. The energy density doesn't work out.

5. **$54-$89 for a 120W laser** — A real 120W infrared laser system costs thousands of dollars minimum.

6. **"Legal & safe to purchase" / "No license required"** — In most countries, Class IV lasers are heavily regulated. In the US, FDA/CDRH regulates lasers. A 120W laser pointer being "fully legal for civilian purchase" with no restrictions is essentially false.

7. **"20 meters distance"** — At 120W, an IR laser would go much farther and be extremely dangerous far beyond 20m.

So essentially everything about this product is fabricated/bogus. It's likely just a scam selling a cheap weak laser (or nothing at all) with massively inflated specs.

Let me give a comprehensive answer.

</details>

Great question — because almost **nothing** on that page is true. Here's why every major claim is either wildly exaggerated or outright false:

## 🔴 The Power
