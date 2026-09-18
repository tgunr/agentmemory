---
type: Fact
title: # LinuxCNC Parameter #5203 Y-Coordinate

source: claude
session_id: 20de7ab5-9ec
description: # LinuxCNC Parameter #5203 Y-Coordinate

source: claude
session_id: 20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e
resource: claude://conversation/20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e

# Conversation

- **Sessi
resource: agentmemory://memory/mem_mti5zuk8_faa6b5c274a5
tags: ["okf", "okf-claude", "claude", "claude://conversation/20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e"]
timestamp: 2026-09-01T04:25:59.584Z
source: agentmemory
strength: 7
---
# Content

# LinuxCNC Parameter #5203 Y-Coordinate

source: claude
session_id: 20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e
resource: claude://conversation/20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e

# Conversation

- **Session ID:** `20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e`
- **Source:** claude
- **Started:** 2025-09-14T14:30:06Z
- **Messages:** 6
- **Summary:** **Conversation Overview**

The user asked Claude to explain specific LinuxCNC G-code parameters and expressions, demonstrating expertise in CNC machining and programming. The conversation focused on three technical elements: parameter #5203 (Y-axis coordinate in the current coordinate system), a complex G-code expression calculating a Z work offset, and a probe length calculation. Claude provided detailed explanations of LinuxCNC's numbered parameter system, breaking down how parameters #5201-#5206 store current position coordinates and explaining the coordinate system numbering convention where #5220 represents the active work coordinate system.

The user presented increasingly complex G-code expressions, starting with a sophisticated calculation that used indirect parameter references to access work offsets for different coordinate systems (G54, G55, G56, etc.) by multiplying the coordinate system number by 20 and adding it to base parameter numbers. The final expression involved calculating probe length by combining machine coordinates with work offsets, which Claude identified as typical for tool length measurement and probing routines. Throughout the discussion, Claude preserved exact G-code syntax and parameter numbers, explained the mathematical operations step-by-step, and provided practical context for when these calculations would be used in CNC machining operations like tool length compensation setup and automatic tool measurement.

---

### 👤 User — 2025-09-14T14:30:07Z

In Linux CNC, what is the numbered parameter, 5203?

---

### 🤖 Assistant — 2025-09-14T14:30:15Z

In LinuxCNC, parameter #5203 represents the **Y-axis coordinate of the current position in the currently active coordinate system**.

This is part of LinuxCNC's numbered parameter system where coordinates are stored as follows:

- #5201 = X coordinate
- #5202 = Y coordinate  
- #5203 = Z coordinate
- #5204 = A coordinate (if applicable)
- #5205 = B coordinate (if applicable)
- #5206 = C coordinate (if applicable)

These parameters are automatically updated by LinuxCNC and reflect the current machine position in the active work coordinate system (G54, G55, G56, etc.). You can read these values in G-code programs to make decisions based on current position, use them in calculations, or display them for debugging purposes.

For example, you might use `#5203` in a G-code program like:
```
(Check if Y position is greater than 5.0)
O100 IF [#5203 GT 5.0]
  (Do something)
O100 ENDIF
```

---

### 👤 User — 2025-09-14T14:31:49Z

Explain this linuxcnc gcode #<zworkoffset> = [#[5203 + #5220 * 20] + #5213 * #5210]

---

### 🤖 Assistant — 2025-09-14T14:31:59Z

This LinuxCNC G-code line is calculating a Z-axis work offset by combining several coordinate system values. Let me break it down:

**`#<zworkoffset> = [#[5203 + #5220 * 20] + #5213 * #5210]`**

**Left side:**
- `#<zworkoffset>` - A named parameter that will store the calculated result

**Right side breakdown:**

1. **`#5203`** - Current Z coordinate position
2. **`#5220`** - Current work coordinate system number (1-9, where 1=G54, 2=G55, etc.)
3. **`#5220 * 20`** - Multiplies the coordinate system number by 20
4. **`#[5203 + #5220 * 20]`** - This is an indirect parameter reference that accesses the Z-axis work offset for the current coordinate system:
   - G54 (system 1): #5223 (5203 + 1*20 = 5223)
   - G55 (system 2): #5243 (5203 + 2*20 = 5243)
   - G56 (system 3): #5263 (5203 + 3*20 = 5263)
   - And so on...

5. **`#5213`** - Current Z coordinate in machine coordinates
6. **`#5210`** - Scale factor for length units (1.0 for mm, 25.4 for inches)

**What it does:**
This calculates a Z work offset by adding:
- The Z work offset of the current coordinate system
- The current machine Z position scaled by the unit factor

This is typically used in prob
