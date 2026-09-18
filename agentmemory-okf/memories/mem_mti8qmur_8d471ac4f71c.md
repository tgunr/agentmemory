---
type: Fact
title: # Uniform Text Box Font Size

source: abacus
session_id: 123d9fb0c0
resource: ab
description: # Uniform Text Box Font Size

source: abacus
session_id: 123d9fb0c0
resource: abacus://conversation/123d9fb0c0

# Conversation

- **Session ID:** `123d9fb0c0`
- **Source:** abacus.ai
- **Project:** AI
resource: agentmemory://memory/mem_mti8qmur_8d471ac4f71c
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/123d9fb0c0"]
timestamp: 2026-09-01T05:42:48.533Z
source: agentmemory
strength: 7
---
# Content

# Uniform Text Box Font Size

source: abacus
session_id: 123d9fb0c0
resource: abacus://conversation/123d9fb0c0

# Conversation

- **Session ID:** `123d9fb0c0`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-08T20:54:17+00:00
- **Messages:** 2

---

### 👤 User

How do I make multiple text boxes all the same font size?

---

### 🤖 Assistant

To make multiple text boxes the same font size in Vectric software (like VCarve or Aspire), you can use the following methods:

#### Method 1: Using the "Draw Text Within a Vector Box" Tool
If you have specific areas (rectangles) where the text needs to go, this is the most efficient way to ensure consistency.

1.  Select all the text boxes you want to adjust.
2.  Open the **Draw Text Within a Vector Box** tool from the Drawing tab.
3.  Instead of choosing "Size Hub to Fit," select the **Fixed Font Size** option.
4.  Enter your desired font size. This will force all selected text objects to that exact height regardless of how much text is in each box.

#### Method 2: Using the "Edit Text" Tool (Manual Sync)
If you are using the standard "Draw Text" tool:

1.  Select one text box and open the **Draw Text** tool to see its current "Text Height."
2.  Note that value (e.g., 0.5 inches).
3.  Select all other text boxes you want to change (hold **Shift** while clicking them).
4.  With all of them selected, open

the **Draw Text** tool again.
5.  Type the desired height into the **Text Height** box and click **Apply**. All selected text will update to that specific size.

#### Method 3: The "Transform" Tool (Visual Scaling)
If you want to match them visually without knowing the exact point size:

1.  Select all the text objects.
2.  Press **T** on your keyboard to open the **Set Selected Object Size** tool.
3.  Ensure **Link XY** is checked so the text doesn't distort.
4.  Enter a specific **Height** value. This will make the bounding boxes of the text the same height, though keep in mind that words with descenders (like 'y' or 'g') might look slightly different than words without them.

For the most professional look in CNC projects, **Method 2** is usually preferred because it ensures the "Cap Height" (the height of capital letters) is mathematically identical across all your labels or text blocks.

---
