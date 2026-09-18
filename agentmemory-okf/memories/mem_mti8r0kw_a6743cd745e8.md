---
type: Fact
title: # Z-Axis Probing Routine

source: abacus
session_id: 14ec2d4589
resource: abacus
description: # Z-Axis Probing Routine

source: abacus
session_id: 14ec2d4589
resource: abacus://conversation/14ec2d4589

# Conversation

- **Session ID:** `14ec2d4589`
- **Source:** abacus.ai
- **Project:** AI Vau
resource: agentmemory://memory/mem_mti8r0kw_a6743cd745e8
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/14ec2d4589"]
timestamp: 2026-09-01T05:43:06.275Z
source: agentmemory
strength: 7
---
# Content

# Z-Axis Probing Routine

source: abacus
session_id: 14ec2d4589
resource: abacus://conversation/14ec2d4589

# Conversation

- **Session ID:** `14ec2d4589`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-09-24T22:00:36+00:00
- **Messages:** 4

---

### 👤 User

Locate a Buildbotics controller compatible routine for probing the Z axis using a touch block.

---

### 🤖 Assistant

### Buildbotics-compatible Z-probe (touch plate) routines

Below are two ready-to-paste routines for the Buildbotics Controller using a conductive touch plate and clip. They follow the recommended G38.2 probe cycle pattern and use M70/M72 to preserve the machine state.

References:
- Buildbotics how-to with examples and tool-change block: [Probing to set CNC offsets](https://buildbotics.com/probing-to-set-cnc-offsets/)
- Forum write-up with details and cautions: [How does probing work?](https://forum.buildbotics.com/viewtopic.php?t=117)

#### 1) One-button macro for Z probing (metric example)
- What it does: does a fast down probe, backs off, does a slow “fine” probe, sets Z to plate height, retracts.
- Edit only the plate height and the retract/seek distances to suit your machine.

```
#<_plate_height_mm> = 19.05   (touch plate thickness in mm; 19.05 mm = 3/4")

M70                           (save state)
G21                           (metric units)
G90                           (absolute mode)

M0 (MSG,

Place touch plate and attach clip)

G91                           (incremental mode)
F150                          (fast seek feed, mm/min)
G38.2 Z-30                    (probe down up to 30 mm; stop on contact)
G0 Z2                         (back off 2 mm)
F40                           (slow seek feed, mm/min)
G38.2 Z-3                     (fine probe down up to 3 mm)

G92 Z#<_plate_height_mm>      (set current Z to plate thickness)
G90                           (absolute mode)
G0 Z10                        (safe retract)
M0 (MSG, Remove probe)

M72                           (restore state)
```

Imperial variant (inches):
```
#<_plate_height_in> = 0.750   (touch plate thickness in inches)

M70
G20
G90
M0 (MSG, Place touch plate and attach clip)

G91
F6.0                          (IPM)
G38.2 Z-1.2                   (fast probe ~1.2 in)
G0 Z0.08                      (back off 0.08 in)
F1.5
G38.2 Z-0.12                  (fine probe)

G92 Z#<_plate_height_in>
G90
G0 Z0.4
M0 (MSG, Remove probe)

M72
```

#### 2)

Tool-change block that probes Z each time (metric example)
Paste into Settings → General → tool-change if you want Z re-zeroing on every M6. Adjust XY to where you place the plate, and the heights to your machine.

```
#<_plate_height_mm> = 19.05   (touch plate thickness)

M70                            (save state)
G21
G90
G0 Z50                         (raise for safe tool change)
G0 X-50 Y-50                   (move above your probing spot)
M0 (MSG, Change tool and attach probe)

G91
F150
G38.2 Z-50                     (fast probe down up to 50 mm)
G0 Z2                          (back off)
F40
G38.2 Z-3                      (fine probe)
G92 Z#<_plate_height_mm>       (set Z to plate thickness)

G90
G0 Z50                         (retract to safe height)
M0 (MSG, Remove probe)
M72                            (restore prior state)
```

Notes
- Configure the probe input first (Settings → I/O): set pin 22 to input-probe and choose normally-open/closed to match your plate/clip wiring. You should see the state

change when you touch the plate with the tool. Details: [Buildbotics probing guide](https://buildbotics.com/probing-to-set-cnc-offsets/).
- G38.2 requires a feed rate (F) to be set or it will error. Use conservative speeds to protect bits and the plate.
- Keep the probe distance large enough to reach the plate, or G38.2 will fail and E-stop (as noted in the forum thread).

---

### 👤 User

What are there probe block dimensions for the onefinity X50 CNC machine as shipped.

---

### 🤖 Assistant

Short answer:
- Block footprint: about 63.5 mm x 63.5 mm (≈ 2.50 in x 2.50 in)
- Overall block height: about 19 mm
