---
type: Fact
title: # Website Collection in Markdown

source: abacus
session_id: 1c19b7cb3
resource:
description: # Website Collection in Markdown

source: abacus
session_id: 1c19b7cb3
resource: abacus://conversation/1c19b7cb3

# Conversation

- **Session ID:** `1c19b7cb3`
- **Source:** abacus.ai
- **Project:** A
resource: agentmemory://memory/mem_mti8riqg_c81947ee8d5a
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/1c19b7cb3"]
timestamp: 2026-09-01T05:43:29.702Z
source: agentmemory
strength: 7
---
# Content

# Website Collection in Markdown

source: abacus
session_id: 1c19b7cb3
resource: abacus://conversation/1c19b7cb3

# Conversation

- **Session ID:** `1c19b7cb3`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-12-24T16:02:33+00:00
- **Messages:** 16

---

### 👤 User

Look at the web page and gather up all the websitrs and organize into a nice markdown reference. https://www.youtube.com/watch?v=chTP5yDJETU&list=WL

---

### 🤖 Assistant

I’m not able to see the actual page contents (description, links, etc.) for that specific YouTube URL through the tools I have, so I **can’t reliably extract “all the websites” directly from that video page**.

I can still help in two ways—pick whichever you prefer:

---

### Option 1 – You get *exactly* what’s on that page

1. On the YouTube page, copy:
   - The video description, and/or  
   - Any list of links/websites shown there (you can just paste the whole thing).
2. Paste that text here.
3. I’ll:
   - Detect all URLs
   - Normalize them (remove tracking params, duplicates)
   - Group them into a **clean Markdown reference**, e.g.:

   ```markdown
   ## 3D Model Repositories

   - [Printables](https://www.printables.com) – Short description...
   - [Thingiverse](https://www.thingiverse.com) – Short description...

   ## Commercial / Premium Model Sites

   - [Cults3D](https://cults3d.com) – Short description...
   ```

This way the list is guaranteed to match what’s actually on that video

page.

---

### Option 2 – Curated Markdown reference of major 3D-printing websites (not tied to that video)

If you’re okay with a **general “best 3D printing sites” cheat sheet** (instead of exactly what’s in that video), I can put together a Markdown reference like:

```markdown
## Free & Community 3D Model Repositories

- [Printables](https://www.printables.com) – Strong focus on functional prints and contests.
- [Thingiverse](https://www.thingiverse.com) – One of the oldest, huge legacy library.
- [MakerWorld](https://makerworld.com) – Bambu Lab’s ecosystem with tuned profiles.

## Mixed Free / Paid Model Marketplaces

- [Cults3D](https://cults3d.com) – Lots of paid high-quality designs and some free.
- [MyMiniFactory](https://www.myminifactory.com) – Big on minis, tabletop, creators.
- [CGTrader](https://www.cgtrader.com) – General 3D assets, many printable.

## Specialty / Niche Sites

- [3DLabPrint](https://3dlabprint.com) – High-quality printable RC airplanes.
- [Printables-based Collections] –

(e.g., specific designers or tags, if you tell me your interests)
```

If you want this, tell me:
- Just “general 3D printing stuff”, **or**
- Your focus (e.g. “tabletop minis”, “RC planes”, “practical prints”, “props & cosplay”).

---

Reply with either:

- “I’ll paste the description/links” → then paste it, and I’ll turn it into a polished markdown reference, or  
- “Give me the generic curated reference for X type of models” → and I’ll generate that.

---

### 👤 User

Npot the video the sites listed into the MORE section

---

### 🤖 Assistant

I don’t have a way to directly read the “More” section of that specific YouTube page through the tools I’m given, so I can’t safely scrape those links myself.

If you want **exactly** the sites from that section, the most reliable workflow is:

1. On the YouTube page:
   - Click **“More”** under the description.
   - Select and copy **everything** in the description (don’t worry about the formatting).
2. Paste that text here (just raw text is fine).

I’ll then:

1. **Extract all URLs** (including ones like `printables.com`, `cults3d.com` even if they’re missing `https://`).
2. **Normalize / dedupe** them.
3. **Organize them into a clean Markdown reference**, grouped by type. For example:

```markdown
### 3D Model Repositories

- [Printables](https://www.printables.com) – Community-driven repository for free 3D models.
- [Thingiverse](https://www.thingiverse.com) – Large legacy library of printable designs.
- [MakerWorld](https://makerworld.com) – Bambu Lab’s model sharing and profiles platform.

### Paid /

Premium Models

- [My
