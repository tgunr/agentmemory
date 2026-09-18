---
type: Fact
title: # Nested Objects Explained

source: abacus
session_id: 7cd95000
resource: abacus
description: # Nested Objects Explained

source: abacus
session_id: 7cd95000
resource: abacus://conversation/7cd95000

# Conversation

- **Session ID:** `7cd95000`
- **Source:** abacus.ai
- **Project:** AI Vault
-
resource: agentmemory://memory/mem_mti8sd48_851be462ebdc
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/7cd95000"]
timestamp: 2026-09-01T05:44:09.202Z
source: agentmemory
strength: 7
---
# Content

# Nested Objects Explained

source: abacus
session_id: 7cd95000
resource: abacus://conversation/7cd95000

# Conversation

- **Session ID:** `7cd95000`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-12T16:14:26+00:00
- **Messages:** 2

---

### 👤 User

Explain use of nested objects and show examples of its use

---

### 🤖 Assistant

In the context of CNC software like Vectric VCarve or Aspire (shown in your images), "nested objects" typically refers to two distinct but related concepts: **Nesting** for material optimization and **Nested Vectors** for defining toolpath logic.

### 1. Nesting for Material Optimization
Nesting is the process of automatically arranging multiple parts (objects) onto a sheet of material to minimize waste. Instead of manually moving every letter or shape, the software calculates the best rotation and placement to fit as many items as possible into the smallest area.

**Examples of use:**
*   **Cabinet Making:** If you need to cut 20 different cabinet doors out of a single 4x8 sheet of plywood, you use nesting to ensure they are packed tightly together while maintaining enough space for the tool diameter.
*   **Signage:** When cutting out a long phrase like "HAPPY BIRTHDAY," nesting will take letters like 'L' and 'T' and tuck them into the empty spaces around 'O' or 'A' to save material.

### 2. Nested Vectors

for Toolpath Logic
This refers to placing one vector inside another to tell the software which areas are "islands" and which are "holes." This is critical for 2D Profile and Pocket toolpaths.

**Examples of use:**
*   **The Letter 'O':** To cut a letter 'O', you have an outer circle and an inner circle. By selecting both (nesting the inner inside the outer), the software knows to cut the inner hole first and then the outer perimeter.
*   **Pocketing with Islands:** If you want to carve a recessed square but leave a raised logo in the middle, you "nest" the logo vector inside the square vector. When you create a Pocket Toolpath, the software clears the area between the two lines but leaves the logo at the original material height.

### Examples from your Images
Looking at your provided screenshots, here is how these concepts apply:

*   **Image 2 (2D Profile Toolpath):** You can see the "Machine Vectors" section where "Inside / Left" is selected. If you had a nested object (like a hole inside a plate), you

would use "Inside" for the inner vector and "Outside" for the outer vector to ensure the final part is the correct size.
*   **Image 1 (Tool Database):** The "Final Pass Stepover" and "Clearance Pass Stepover" are settings often adjusted when dealing with complex nested pockets. For example, if you are clearing a large area around a small, delicate nested island, you might use a larger clearance tool and a smaller finish tool to ensure the nested detail isn't damaged.

### Summary of Benefits
*   **Efficiency:** Reduces the time spent manually arranging parts.
*   **Cost Savings:** Maximizes the number of parts you get per sheet of wood or metal.
*   **Accuracy:** Ensures that "holes" are treated as holes and "parts" are treated as parts based on their hierarchical position (which one is inside the other).

---
