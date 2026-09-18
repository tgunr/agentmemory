---
type: Fact
title: # 3D printable triangular paint standoff cones

source: hermes
session_id: 20260
description: # 3D printable triangular paint standoff cones

source: hermes
session_id: 20260721_123644_7bf366
resource: hermes://session/20260721_123644_7bf366

# Conversation

- **Session ID:** `20260721_123644_
resource: agentmemory://memory/mem_mtg11sik_c18fcc9befdd
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:31:59.847Z
source: agentmemory
strength: 7
---
# Content

# 3D printable triangular paint standoff cones

source: hermes
session_id: 20260721_123644_7bf366
resource: hermes://session/20260721_123644_7bf366

# Conversation

- **Session ID:** `20260721_123644_7bf366`
- **Source:** tui
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-07-21T17:36:44Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 12
- **CWD:** `/Users/davec`
- **Tokens:** 53280 in / 877 out

---

### 👤 User — 2026-07-21T17:36:45Z

see if you can locate a set of triangular paint standoff cones that can be 3D printed

### 🤖 Assistant — 2026-07-21T17:36:53Z

<details><summary>Reasoning</summary>

The user is asking me to search for triangular paint standoff cones that can be 3D printed. This is a web search task - I should look for 3D printable designs for triangular standoff cones used in painting/masking applications.

Let me search for this on the web to find relevant resources, designs, or repositories.

</details>

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "triangular paint standoff cones 3D printable STL"
}
```

### 🤖 Assistant — 2026-07-21T17:37:02Z

<details><summary>Reasoning</summary>

Good, I found several relevant results. The most promising ones are:
1. "Painters Triangle (pyramid)" on Printables.com - this sounds most like what the user is asking for (triangular paint standoff cones)
2. "Paint Cone Assortment" on Cults3D - mentions triangular base designs
3. "Painting Cones–3D Printable for Mess-Free Painting" on MakerWorld

Let me get more details on the most relevant ones, starting with the Printables.com "Painters Triangle" since that explicitly mentions triangular design.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://www.printables.com/model/109169-painters-triangle-pyramid",
    "https://www.printables.com/model/272439-serious-paint-cones-you-can-secure-in-place-v2",
    "https://cults3d.com/en/3d-model/tool/paint-cone-assortment",
    "https://makerworld.com/en/models/856901-painting-cones-3d-printable-for-mess-free-painting"
  ]
}
```

### 🤖 Assistant — 2026-07-21T17:37:07Z

<details><summary>Reasoning</summary>

The web extract failed because the search backend can't extract URLs. Let me use the browser tool to check these pages directly, or I can search for more specific information about these models. Let me try using the browser to navigate to these pages and get more details.

</details>

**Tool call: browser_navigate**

```json
{
  "url": "https://www.printables.com/model/109169-painters-triangle-pyramid"
}
```

### 🤖 Assistant — 2026-07-21T17:37:20Z

<details><summary>Reasoning</summary>

I found the Painters Triangle (pyramid) by MrNateTheGreat on Printables. It's a triangular pyramid - exactly what the user asked for. Let me get more details and also check the other options.

</details>

**Tool call: browser_click**

```json
{
  "ref": "e33"
}
```

### 🤖 Assistant — 2026-07-21T17:37:26Z

<details><summary>Reasoning</summary>

The page didn't change much. Let me scroll down to see the files section.

</details>

**Tool call: browser_scroll**

```json
{
  "direction": "down"
}
```

### 🤖 Assistant — 2026-07-21T17:37:37Z

<details><summary>Reasoning</summary>

The user asked me to find a set of triangular paint standoff cones that can be 3D printed. I've found a promising match: the "Painters Triangle (pyramid)" on Printables. The description explicitly says it's for "holding work off a surface while applying paint or finish", it's triangular, stackable, and printable. This seems to be exactly what they're looking for.

I should provide a concise summary of what I found, including the direct link and key details. I don't need to overcomplicate this - they just asked me to see if I can locate one, and I have.

</details>

Yeah — I found a direct match:

**Painters Triangle (pyramid)** by MrNateTheGreat on Printables  
Link: https://www.printables.com/model/109169-painters-triangle-pyramid

It’s exactly what you described:
- triangular pyramid standoffs for holding work off a surface while painting/finishing
- prints quickly, fits multiple per build plate
- stackable for storage
-
