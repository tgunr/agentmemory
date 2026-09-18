---
type: Fact
title: # Squaring Up CNC Machine Spoilboard

source: claude
session_id: 680c1e07-6450-4
description: # Squaring Up CNC Machine Spoilboard

source: claude
session_id: 680c1e07-6450-4570-a087-fb02a322c5f8
resource: claude://conversation/680c1e07-6450-4570-a087-fb02a322c5f8

# Conversation

- **Session 
resource: agentmemory://memory/mem_mtj6cgfn_f80bec615545
tags: ["okf", "okf-claude", "claude", "claude://conversation/680c1e07-6450-4570-a087-fb02a322c5f8"]
timestamp: 2026-09-01T21:23:33.956Z
source: agentmemory
strength: 7
---
# Content

# Squaring Up CNC Machine Spoilboard

source: claude
session_id: 680c1e07-6450-4570-a087-fb02a322c5f8
resource: claude://conversation/680c1e07-6450-4570-a087-fb02a322c5f8

# Conversation

- **Session ID:** `680c1e07-6450-4570-a087-fb02a322c5f8`
- **Source:** claude
- **Started:** 2025-05-07T20:15:35Z
- **Messages:** 14

---

### 👤 User — 2025-05-07T20:15:36Z

I'm trying to square up a CNC machine spoil board. The machines dimensions are 48 inches wide by 32 inches deep. I drew five 200 millimeter squares in each corner and I'm showing you the dimensions of each square. I need you to tell me how much of each of the legs of the machine on the y-axis need to be moved.

_Attachments: CleanShot 20250507 at 15.14.372x.png_

---

### 🤖 Assistant — 2025-05-07T20:16:04Z

I can help you analyze the measurements to square up your CNC machine's spoilboard. Looking at the image, you've drawn five 200mm squares (one in each corner and one in the center) and measured their actual dimensions.

For a properly squared machine, all sides of each square should measure exactly 200mm. The discrepancies in your measurements indicate adjustments needed to the Y-axis legs.

Let me analyze the measurements:

Top left square: 198mm (width) × 198mm (height)
Top right square: 199mm (width) × 197mm (height)
Center square: 199mm (width) × 200mm (height)
Bottom left square: 196mm (width) × 200mm (height)
Bottom right square: 199mm (width) × 197mm (height)

Looking at the Y-axis measurements (vertical sides):
- The top portion shows measurements of 198mm (left) and 197mm (right)
- The center shows 200mm
- The bottom shows 200mm (left) and 197mm (right)

Based on these measurements, the Y-axis requires adjustment:
1. The right leg of the Y-axis appears consistently short (197mm in both top and bottom right corners), suggesting it needs to be extended by about 3mm to reach the target 200mm.
2. The top left leg is slightly short (198mm) and may need to be extended by approximately 2mm.
3. The bottom left leg appears to be correctly calibrated at 200mm.

To square up the machine, I recommend:
- Extend the right side Y-axis leg by 3mm to correct the consistent 197mm measurements
- Extend the top left Y-axis leg by 2mm to bring it to 200mm

These adjustments should help make your spoilboard more square, giving you more accurate cuts across the entire work surface.

---

### 👤 User — 2025-05-07T20:18:00Z

I'm not understanding your nomenclature. There are two y-axis legs. When you say right side y-axis, what do you mean by top left y-axis? Is the right side y-axis the bottom or the top?

---

### 🤖 Assistant — 2025-05-07T20:18:08Z

I apologize for the confusion in my terminology. Let me clarify:

The Y-axis on a CNC machine typically refers to the front-to-back motion, and there are two legs that support this axis:

1. The left Y-axis leg - this is the support on the left side of the machine
2. The right Y-axis leg - this is the support on the right side of the machine

Looking at your measurements again:

- The left Y-axis leg shows measurements of 198mm (top left square) and 200mm (bottom left square)
- The right Y-axis leg shows measurements of 197mm (top right square) and 197mm (bottom right square)

Based on these measurements:

- The right Y-axis leg is consistently short at 197mm and needs to be extended by approximately 3mm to reach the target 200mm.
- The left Y-axis leg varies from 198mm at the top to 200mm at the bottom, suggesting it might be slightly angled and may need adjustment to be more parallel.

Does this make more sense? If you need me to further clarify or if I'm still misunderstanding your machine configuration, please let me know.

---

### 👤 User — 2025-05-07T20:19:22Z

Okay, so I make the right y-axis leg three millimeters longer. Then on the left leg, what angle should be set in reference to the bottom left corner.

---

### 🤖 Assistant — 2025-05-07T20:19:30Z

I understand now. Let me provide specific adjustment instructions:

1. For the right Y-axis leg: Extend it by 3mm to correct the consistent 197mm measurements.

2. For the left Y-axis leg: Since your bottom left corner measures at 200mm (which is corre
