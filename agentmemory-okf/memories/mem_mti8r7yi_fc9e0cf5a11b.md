---
type: Fact
title: # Acrylic Carving Tips

source: abacus
session_id: 15f38e77e3
resource: abacus:/
description: # Acrylic Carving Tips

source: abacus
session_id: 15f38e77e3
resource: abacus://conversation/15f38e77e3

# Conversation

- **Session ID:** `15f38e77e3`
- **Source:** abacus.ai
- **Project:** AI Vault
resource: agentmemory://memory/mem_mti8r7yi_fc9e0cf5a11b
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/15f38e77e3"]
timestamp: 2026-09-01T05:43:15.879Z
source: agentmemory
strength: 7
---
# Content

# Acrylic Carving Tips

source: abacus
session_id: 15f38e77e3
resource: abacus://conversation/15f38e77e3

# Conversation

- **Session ID:** `15f38e77e3`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-13T22:42:57+00:00
- **Messages:** 32

---

### 👤 User

Recommendations for carving acrylic with V bit. Stock is 1/8 clear 8X10" with text and an image.

---

### 🤖 Assistant

Carving 1/8" clear acrylic with a V-bit requires careful management of heat and chip clearance to prevent the material from melting or "welding" back to the bit. Based on your project files, here are specific recommendations for your setup:

### Tooling and Speeds
*   **Bit Selection**: Use a high-quality carbide V-bit (60° or 90° are standard). Ensure it is extremely sharp; a dull bit will generate friction and melt the acrylic immediately.
*   **Spindle Speed**: Keep your RPM relatively low, typically between **10,000 and 14,000 RPM**. High RPMs are the primary cause of melting in acrylic.
*   **Feed Rate**: Aim for a faster feed rate to ensure the bit is cutting new material rather than rubbing. Start around **40–60 inches per minute (IPM)**. If you see "snow" (small white chips), your settings are good. If you see "strings" or melted blobs, increase your feed rate or decrease RPM.

### Carving Strategy
*   **Pass Depth**: For 1/8" stock, do not attempt to carve the full depth in one pass if the design is

intricate. Set a maximum carving depth (flat depth) of about **0.02" to 0.04"** for text and fine details to maintain clarity.
*   **Direction**: Use **Climb Milling** if your software allows it. This helps produce a cleaner finish on the edges of the acrylic.
*   **Cooling**: If you don't have a mist coolant system, a simple air blast (compressed air) directed at the bit is highly effective for clearing chips and cooling the tool.

### Material Preparation
*   **Masking**: Keep the protective paper or plastic masking on the acrylic during the carve. This prevents the baseplate from scratching the surface and helps reduce "burring" at the top of the cut.
*   **Workholding**: Ensure the 8x10" sheet is perfectly flat and secured. Even a slight bow in 1/8" acrylic will cause inconsistent line widths with a V-bit, as the width of the cut is determined by the depth.

### Note on your G-code
I noticed your `Cut Line.ngc` file appears to be configured for a **laser** (using `S800` power commands and a `Redline J

Tech Laser` post-processor) rather than a CNC spindle. If you intend to use a physical V-bit:
1.  You must re-export your G-code using a standard CNC post-processor (like G-Code Arcs or Mach3/4).
2.  Ensure the Z-axis commands are included, as the current file is a "No Z" laser profile which will not move your spindle up and down for the carve.

---

### 👤 User

For small text on 8X10 plaque should I use 15, 30, 45, 60 V-bit.

---

### 🤖 Assistant

For small text on an 8x10" plaque, the best choice is typically a **30° or 15° V-bit**.

The choice depends on how "small" the text actually is and the level of detail in your image. Here is the breakdown of why you would choose one over the other:

#### 1. The 30° V-Bit (Best All-Rounder)
This is generally the "sweet spot" for small CNC text.
*   **Why:** It is narrow enough to get into tight corners of small fonts but strong enough that the tip won't snap easily.
*   **Result:** It produces crisp, legible text without having to go very deep. It is much better than a 60° bit for letters under 0.5 inches tall because a 60° bit often makes small letters look "fat" or causes them to merge together.

#### 2. The 15° V-Bit (For Micro-Detail)
Use this if your text is extremely small (e.g., less than 0.25 inches tall) or if you have a very intricate "line art" style image.
*   **Why:** It acts almost like an engraving needle. It allows for maximum detail with minimal depth.
*   **Risk:** The tips are very fragile.

In 1/8" acrylic, you must ensure your feed rate isn't too aggressive and your Z-zero is perfectly accurate, or the tip will snap on the first letter.

####
