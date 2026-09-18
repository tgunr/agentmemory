---
type: Fact
title: # Last Pass Cleanup Technique

source: abacus
session_id: 748b6fcda
resource: ab
description: # Last Pass Cleanup Technique

source: abacus
session_id: 748b6fcda
resource: abacus://conversation/748b6fcda

# Conversation

- **Session ID:** `748b6fcda`
- **Source:** abacus.ai
- **Project:** AI V
resource: agentmemory://memory/mem_mti8sbif_af271bf64315
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/748b6fcda"]
timestamp: 2026-09-01T05:44:07.119Z
source: agentmemory
strength: 7
---
# Content

# Last Pass Cleanup Technique

source: abacus
session_id: 748b6fcda
resource: abacus://conversation/748b6fcda

# Conversation

- **Session ID:** `748b6fcda`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-12-27T16:37:17+00:00
- **Messages:** 4

---

### 👤 User

In these settings explain how to make a separate last pass to clean up any fuzzy from uncut bit.

---

### 🤖 Assistant

Here’s how to use those settings to get a clean‑up (finishing) pass in VCarve/Aspire with the toolpath you showed:

### 1. Turn on the separate last pass
In your **2D Profile Toolpath** form (second screenshot):

1. Tick **“Do Separate Last Pass”**.  
2. In **Allowance (A)**, enter a small value, for example:

   - `0.01"` for a light clean‑up in plywood/solid wood  
   - Up to `0.02"` if the material is a bit rough or the tool is slightly flexing

   Right now it’s `0.0`, which means the “last pass” does nothing different, so fuzz from the first passes stays.

### 2. What this actually does
- On the first **Passes** (set under **Edit Passes…**) the tool will:
  - Cut to full depth as normal  
  - Leave the **Allowance (A)** amount of material on the wall (radially)
- Then it will make **one final pass at full depth** that removes only that thin Allowance shell.  
  - Because the tool is just skimming off 0.01–0.02", it cleans up fuzz and tear‑out on the vertical wall of your profile.

### 3. Tips for best

results
- Keep your existing pass depths but make sure you have enough passes so the tool isn’t overloaded.
- You can lower the feed rate slightly for that toolpath if you still see fuzz.
- This feature only cleans the **side walls** of the cut. If you have fuzz at the bottom, you may need:
  - A slightly deeper **Cut Depth (C)**, or  
  - A sharper tool/different bit.

So in short: **check “Do Separate Last Pass” and give it a small Allowance (about 0.01")**—that’s the key setting that makes a dedicated clean‑up pass to remove the uncut/fuzzy material.

---

### 👤 User

What id the allowance offset is non zero?

---

### 🤖 Assistant

If the **Allowance offset** (located under the "Machine Vectors" section) is non-zero, it shifts the **entire toolpath** away from or into the vector for every single pass, including the separate last pass.

Here is how they interact if both are non-zero:

#### 1. The Allowance Offset (The "Global" Shift)
This setting tells the software to treat your vector as if it is larger or smaller than it actually is.
*   **Positive Value:** Leaves the part "fat" (oversized). The tool stays further away from the line.
*   **Negative Value:** Cuts "into" the part (undersized). The tool moves past the line.
*   **Effect:** This applies to **all passes** (Pass 1, Pass 2, and the Separate Last Pass).

#### 2. How they work together
If you have an **Allowance offset** of `0.05"` and a **Separate Last Pass Allowance (A)** of `0.01"`, the math works like this:
*   **Initial Passes:** The tool will stay `0.06"` away from the vector (`0.05` offset + `0.01` last pass allowance).
*   **Separate Last Pass:** The tool will move in

and stay `0.05"` away from the vector.

#### 3. When to use which
*   **Use Allowance Offset** if you want the final finished part to be a specific size that is different from your drawing (e.g., you want a piece to fit loosely into a pocket, so you give it a `-0.01` offset).
*   **Use Separate Last Pass Allowance (A)** strictly for surface finish. It is a temporary "buffer" that is removed at the very end to get rid of tool marks and fuzz.

**Summary for your "Fuzzy" problem:**
If your goal is just to clean up the edge and have the part come out to the **exact size** of your drawing, keep **Allowance offset at 0.0** and only use the **Separate Last Pass Allowance (A)**. If you have a value in the top offset box, your part will not be the size you drew it.

---
