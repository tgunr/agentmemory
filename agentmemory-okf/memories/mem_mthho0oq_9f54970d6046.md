---
type: Fact
title: # SQL Query Assistant Skill

source: grok
session_id: 30880018-f615-47ca-9f97-b9
description: # SQL Query Assistant Skill

source: grok
session_id: 30880018-f615-47ca-9f97-b9a8a78b3a61
resource: grok://conversation/30880018-f615-47ca-9f97-b9a8a78b3a61

# Conversation

- **Session ID:** `308800
resource: agentmemory://memory/mem_mthho0oq_9f54970d6046
tags: ["okf", "okf-grok", "grok", "grok://conversation/30880018-f615-47ca-9f97-b9a8a78b3a61"]
timestamp: 2026-08-31T17:04:56.853Z
source: agentmemory
strength: 7
---
# Content

# SQL Query Assistant Skill

source: grok
session_id: 30880018-f615-47ca-9f97-b9a8a78b3a61
resource: grok://conversation/30880018-f615-47ca-9f97-b9a8a78b3a61

# Conversation

- **Session ID:** `30880018-f615-47ca-9f97-b9a8a78b3a61`
- **Source:** grok
- **Model:** build
- **Started:** 2026-08-18T20:03:27Z
- **Messages:** 4

---

### 👤 User — 2026-08-18T20:03:44Z

Create a skill that helps me write and review SQL queries for PostgreSQL. Then display the skill instructions.

---

### 🤖 Assistant — 2026-08-18T20:03:44Z

_(no text content — media only)_

---

### 👤 User — 2026-08-18T20:14:33Z

I want to build an Amazon search app that finds exactly what I am looking for without the extraneous listings a search on Amazon produces. E.G. if I ask for some "M5 hex head screws" I don't want to see M6, M8 or any other items unless I specify "look for M5 hex head screws, bundled ok". The format for a search string should be configured such that things within quotes are exact. Things that are specified with an asterisk should be wildcard. I have come up with suggestions for a string format for searching. The search results should also include the cost and price per item. With the lowest cost or lowest price per item listed at the top

---

### 🤖 Assistant — 2026-08-18T20:14:33Z

I'll start by reading the workspace project instructions, then plan a precise Amazon search app around your quoted-exact / asterisk-wildcard format.This is a product build. Next I’ll read the UI, auth, data, and API skills plus the current workspace so the app can ship with a real query language and ranked results.Building ExactFind: a precision query language, strict size filtering, unit-price ranking, and a live search UI. Scaffolding the app next.Length tokens like `16mm` were treated as competing sizes. Tightening size-lock to thread sizes only (M5, 1/4-20, #10).**ExactFind** is live in the preview: a precision Amazon search that keeps M6/M8 out of an M5 query unless you allow it.

**Query format**

| Token | Meaning |
| --- | --- |
| `"hex head"` | Exact phrase, in that order |
| `screw*` | Wildcard (`screw`, `screws`, …) |
| `-socket` | Exclude |
| `M5`, `1/4-20`, `#10` | Size lock — other sizes are dropped |
| `bundled:ok` | Allow assortment kits **that still include your size** |
| `sort:unit` / `sort:total` / `sort:fulfill` | Cheapest each, cheapest listing, or cheapest to fill a qty |
| `qty:100` `max:20` | Pieces you need, listing price ceiling |

Example: `"M5 hex head" screw*`  
Add `bundled:ok` only when mixed packs are acceptable.

**Results**

- Listing price and **price per piece** (pack size parsed from the title)
- Sorted cheapest-per-piece first by default
- “To fill qty” when you set `qty:`
- Amazon is queried when it answers; titles still go through the same strict filter. If Amazon is blocked here, the hardware catalog still demonstrates the rules (M6, socket-head, mixed kits are discarded).
- Sign in to save queries.

Try the example chips in the preview, especially `"M5 hex head" screw*` vs the same query with `bundled:ok`.

---
