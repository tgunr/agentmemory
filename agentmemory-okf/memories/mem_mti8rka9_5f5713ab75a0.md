---
type: Fact
title: # Setting Font Size in Aspire

source: abacus
session_id: 22edc09f2
resource: ab
description: # Setting Font Size in Aspire

source: abacus
session_id: 22edc09f2
resource: abacus://conversation/22edc09f2

# Conversation

- **Session ID:** `22edc09f2`
- **Source:** abacus.ai
- **Project:** AI V
resource: agentmemory://memory/mem_mti8rka9_5f5713ab75a0
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/22edc09f2"]
timestamp: 2026-09-01T05:43:31.863Z
source: agentmemory
strength: 7
---
# Content

# Setting Font Size in Aspire

source: abacus
session_id: 22edc09f2
resource: abacus://conversation/22edc09f2

# Conversation

- **Session ID:** `22edc09f2`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-01-14T21:39:46+00:00
- **Messages:** 2

---

### 👤 User

In vectric aspire how do i set the font size of a text item, not the bounding box

---

### 🤖 Assistant

In Vectric Aspire, the way you set the font size depends on which text tool you are using. If you are seeing a bounding box that forces the text to scale, you are likely using the **Draw Text within a Box** (Auto Layout) tool rather than the standard **Create Text** tool.

To set a specific font height without the constraints of a bounding box, follow these steps:

### 1. Use the "Create Text" Tool
Instead of the "Draw Text within a Box" icon (which looks like a 'T' inside a square), use the standard **Create Text** icon (the plain 'T' icon).
*   **Height Field:** In the "Create Text" form, there is a specific **Height** input box. Entering a value here sets the actual height of the capital letters in your chosen font.
*   **Anchor Point:** You can click anywhere in the 2D view to set the anchor point, and the text will be created at that exact height regardless of the surrounding space.

### 2. If You Are Already Using "Text within a Box"
If you must use the bounding box tool (Auto Layout) but want the text

to be a specific size, you have to adjust the box to match the desired text height:
*   **Margin Size:** Set the **Margin Size** to **None**. This ensures the text scales to the exact limits of the box.
*   **Box Height:** Set the height of the **Bounding Box** itself to the exact height you want your text to be.
*   **Vertical Stretch:** Ensure **No Vertical Stretch** is selected so the characters aren't distorted to fill the box.

### 3. Editing Existing Text
If you have already created text and want to change its size:
*   Select the text in the 2D view.
*   Press **T** on your keyboard or click the **Create Text** icon to open the properties form.
*   Change the value in the **Height** box and click **Apply**.

For more detailed information on these tools, you can refer to the [Vectric Aspire V12 User Manual](https://docs.vectric.com/docs/V12.0/Aspire/ENU/Help/form/Create%20Text/index.html) or the [Auto Layout Text

documentation](https://docs.vectric.com/docs/V9.5/Aspire/ENU/Help/Reference%20Manual/Drawing/Auto%20Layout%20Text/Auto%20Layout%20Text.html).

---
