---
type: Fact
title: # Eliminate Intersections in Aspire

source: abacus
session_id: 5c00eee2c
resour
description: # Eliminate Intersections in Aspire

source: abacus
session_id: 5c00eee2c
resource: abacus://conversation/5c00eee2c

# Conversation

- **Session ID:** `5c00eee2c`
- **Source:** abacus.ai
- **Project:*
resource: agentmemory://memory/mem_mti8s25k_a8dcd7638855
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/5c00eee2c"]
timestamp: 2026-09-01T05:43:55.026Z
source: agentmemory
strength: 7
---
# Content

# Eliminate Intersections in Aspire

source: abacus
session_id: 5c00eee2c
resource: abacus://conversation/5c00eee2c

# Conversation

- **Session ID:** `5c00eee2c`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-13T23:09:53+00:00
- **Messages:** 6

---

### 👤 User

How eliminate intersections in Aspire text? I am using single line text, I thought they were free from problems.

---

### 🤖 Assistant

In Vectric Aspire, single-line fonts (often called stick fonts) can still cause issues if the vectors overlap or if the software interprets the "Inside/Left" or "Outside/Right" machine vector settings in a way that creates self-intersections during the toolpath calculation.

Based on your second image, you are currently using a **2D Profile Toolpath** with the **Machine Vectors** set to **Inside / Left**. This is likely the cause of your problem. Because single-line text is an "open vector" (it doesn't have an inside or an outside), the software has to guess which side to offset the tool. When it offsets to one side of a sharp corner or a tight curve, the toolpath often crosses over itself, creating an intersection error.

To eliminate these intersections and properly carve single-line text, you should follow these steps:

#### Change the Machine Vector Setting
In your **2D Profile Toolpath** menu (shown in `image.png`), change the **Machine Vectors** setting from **Inside / Left** to **On**. This tells

Aspire to run the center of the CNC bit directly down the line of the text. This is the standard way to handle single-line fonts and will eliminate offset-related intersections.

#### Use the Quick Engrave Toolpath
Alternatively, for single-line text, it is often better to use the **Quick Engrave** toolpath rather than a Profile toolpath.
*   Select your text.
*   Open the **Quick Engrave** toolpath (the icon looks like a small 'e' being engraved).
*   Select **Outline** as the strategy.
*   This toolpath is specifically designed for stick fonts and handles open vectors much more cleanly than the Profile toolpath.

#### Check for Overlapping Text
If you have manually moved letters and they are physically overlapping:
*   Select the text and right-click to select **Convert to Curves**.
*   Use the **Weld** tool (under Edit Objects) to join overlapping vectors into a single continuous line. Note that for true single-line fonts, welding might not be possible as they are not closed loops; in that case, simply

ensuring you are cutting **On** the line will solve the visual intersection.

#### Verify with the Toolpath Preview
After changing the setting to **On**, always use the **Preview Toolpath** feature. If the red "intersection" markers disappear and the text looks clean in the 3D view, the issue is resolved. If you still see issues, ensure that your **Cut Depth (C)** is not deeper than the material thickness, as you are currently using a variable `t` which usually represents the full material thickness.

---

### 👤 User

Im using Vcarve/Engraving tool path

---

### 🤖 Assistant

If you are using the **V-Carve / Engraving** toolpath with single-line text, the software is likely struggling because that specific toolpath is designed to carve *between* two lines (a closed vector) to create a 3D V-groove. Since single-line text has no "width," the V-carve engine doesn't know where to stop the bit.

To fix the intersections and get a clean carve with your V-bit (shown in `CleanShot 2025-12-23 at 12.09.19.png`), you should use one of the following methods:

#### Method 1: Use the "On" Profile Toolpath (Recommended)
Instead of the V-Carve toolpath, use the **2D Profile Toolpath** (the one shown in your `image.png`).
*   Select your single-line text.
*   Set **Machine Vectors** to **On**.
*   Set your **Cut Depth (C)** to a shallow fixed value (e.g., 0.02" or 0.04") rather than `t`.
*   This will trace the center of your 60-degree V-bit directly down the line, creating a perfect engraved look without any intersection errors.

#### Method 2: Use the "Quick Engrave" Toolpath
This toolpath is

specifically optim
