---
type: Fact
title: # Cutting Circle Grids In Affinity 2

source: hermes
session_id: 20260706_175108
description: # Cutting Circle Grids In Affinity 2

source: hermes
session_id: 20260706_175108_cf5f08
resource: hermes://session/20260706_175108_cf5f08

# Conversation

- **Session ID:** `20260706_175108_cf5f08`
- 
resource: agentmemory://memory/mem_mspdvf44_b09dec801c1a
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T01:01:10.819Z
source: agentmemory
strength: 7
---
# Content

# Cutting Circle Grids In Affinity 2

source: hermes
session_id: 20260706_175108_cf5f08
resource: hermes://session/20260706_175108_cf5f08

# Conversation

- **Session ID:** `20260706_175108_cf5f08`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-06T22:51:10Z
- **Ended:** 2026-07-07T16:28:03Z
- **Messages:** 210
- **CWD:** `/Volumes/davec`
- **Tokens:** 364909 in / 25635 out
- **Est. cost:** $0.5024

---

### 👤 User — 2026-07-06T22:51:11Z

In Affinity 2 I have an image that I need to make a cut out of a grid of circles such that the circles are cut out of the image and show the transparent background. How do I accomplish that?

### 🤖 Assistant — 2026-07-06T22:51:26Z

<details><summary>Reasoning</summary>

The user wants to create a cutout effect in Affinity Photo/Designer 2 where a grid of circles is punched out of an image, revealing the transparent background beneath.


</details>

Here's a clean way to do it in Affinity Photo or Designer 2:

---

## Option 1: Affinity Designer 2 (recommended for vectors)

1. **Create your grid of circles** — Use the **Ellipse Tool** to draw a circle. Duplicate it in a row, then group and duplicate the row vertically to form a grid. Or use **Power Duplicate** (Cmd+J then drag) for precise spacing.

2. **Combine the circles into a single path** — Select all the circles, then go to **Layer → Combine → Union** (or the Combine button in the toolbar). This merges them into one compound shape.

3. **Place your image** — Import your image and position it where you want it.

4. **Cut the circles out of the image** — Select both the image and the compound circle shape, then go to **Layer → Geometry → Subtract** (or use the **Boolean Subtract** button). The circles become transparent holes in the image.

5. **Make sure the background layer is transparent** — If you're on a pixel layer, ensure any background fill is removed (delete or hide the background layer). The holes will now show through as transparency.

---

## Option 2: Using a Mask (non-destructive)

1. Create your grid of circles as a **vector layer** (shapes).
2. Combine them (Union).
3. Select your image layer, then add a **Mask** to it (Layer → Mask → Add Mask).
4. Place the circle shape **inside the mask** — drag the vector shape to be a child of the mask, or use the mask's own geometry.
5. With the mask selected, apply **Subtract** between the mask and the circles. Black areas in the mask hide the image, so subtracting the circles from white fills in the mask punches transparent holes.

---

## Quick tips

- If your image is already a pixel layer and you want the holes, use a **Raster Mask** with the circles filled in black on white. Black = transparent.
- For a perfectly even grid, use **View → Grid** snapping or manually space them with the Align/Distribute tools.
- Export as **PNG** to preserve transparency.

The **Geometry → Subtract** method (Option 1, step 4) is usually the fastest — one operation and the holes are done.

### 👤 User — 2026-07-06T22:53:16Z

on option one nothing happens when I do that

### 🤖 Assistant — 2026-07-06T22:53:54Z

<details><summary>Reasoning</summary>

The user is having trouble with Option 1 — specifically the "Subtract" operation. The issue is likely that they're trying to use a geometry/boolean operation between a pixel layer (the image) and a vector shape, which Affinity doesn't allow directly in the Geometry menu. The Geometry → Subtract command only works between two vector shapes on the same layer, or requires specific layer types.

Let me think about what actually works in Affinity Photo 2 (since they likely have Photo, not Designer, for working with images):

1. **Pixel layer + vector shape = can't do Geometry → Subtract** — that's the core issue. Geometry operations in Affinity Designer only work between two vector curves on the same layer.

2. In Affinity Photo 2, this would need to be done differently:
   - Use a **Mask**: Create the circle grid as a selection, then use it as a mask with inverted/negative result
   - Or use the **Erase** tool with the circles as a selection
   - Or convert to curves and 
