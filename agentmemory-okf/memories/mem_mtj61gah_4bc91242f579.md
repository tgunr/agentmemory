---
type: Fact
title: # LinuxCNC Parameter #5203 Y-Coordinate

source: hermes
session_id: claude__20de
description: # LinuxCNC Parameter #5203 Y-Coordinate

source: hermes
session_id: claude__20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e
resource: hermes://session/claude__20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e

# Conversation
resource: agentmemory://memory/mem_mtj61gah_4bc91242f579
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:00.537Z
source: agentmemory
strength: 7
---
# Content

# LinuxCNC Parameter #5203 Y-Coordinate

source: hermes
session_id: claude__20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e
resource: hermes://session/claude__20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e

# Conversation

- **Session ID:** `claude__20de7ab5-9ece-4cbd-9fd9-6f693bf9c87e`
- **Source:** claude
- **Model:** None
- **Started:** 2025-09-14T14:30:06Z
- **Ended:** 2025-09-14T14:36:50Z
- **Messages:** 6
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-09-14T14:30:07Z

In Linux CNC, what is the numbered parameter, 5203?

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

### 👤 User — 2025-09-14T14:31:49Z

Explain this linuxcnc gcode #<zworkoffset> = [#[5203 + #5220 * 20] + #5213 * #5210]

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

This is typically used in probing routines or tool length compensation calculations where you need to establish or adjust work coordinate offsets based on measured positions.

### 👤 User — 2025-09-14T14:36:41Z

#<probe_len> = #<_z_machine> + #<zworkoffset>

### 🤖 Assistant — 2025-09-14T14:36:50Z

This line is calculating the **probe length** by adding two Z-axis values:

**`#<probe_len> = #<_z_machine> + #<zworkoffset>`**

**Breaking it down:**

- **`#<probe_len>`** - Named parameter storing the calculated probe length result
- **`#<_z_machine>`** - Current Z position in **machine coordinates** (absolute position from machine home/reference)
- **`#<zworkoffset>`** - The Z work offset value (calculated from your previous line)

**What this accomplishes:**

This is typically used in **tool length measurement** or **probing routines** where you need to determine how far a probe or tool extends. 

**Common scenario:**
1. A probe touches a reference surface or tool setter
2. At the moment of contact, `#<_z_machine>` gives the machine position where contact occurred
3. `#<zworkoffset>` provides the offset from machine coordinates to work coordinates
4. Adding them together gives the total probe length from the spindle reference point to the contact point

**Example use:**
- Tool length compensation setup
- Automatic tool measurement
- Workpiece height detection
- Reference point establishment

The result `#<probe_len>` woul
