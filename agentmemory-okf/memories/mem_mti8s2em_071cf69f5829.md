---
type: Fact
title: # Fix Laser Power Issue

source: abacus
session_id: 5c6430b5e
resource: abacus:/
description: # Fix Laser Power Issue

source: abacus
session_id: 5c6430b5e
resource: abacus://conversation/5c6430b5e

# Conversation

- **Session ID:** `5c6430b5e`
- **Source:** abacus.ai
- **Project:** AI Vault
-
resource: agentmemory://memory/mem_mti8s2em_071cf69f5829
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/5c6430b5e"]
timestamp: 2026-09-01T05:43:55.348Z
source: agentmemory
strength: 7
---
# Content

# Fix Laser Power Issue

source: abacus
session_id: 5c6430b5e
resource: abacus://conversation/5c6430b5e

# Conversation

- **Session ID:** `5c6430b5e`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-01-27T14:13:37+00:00
- **Messages:** 6

---

### 👤 User

In LightBurn, I have two rectangles, one above the other aligned on the Y axis when the laser cuts the bottom rectangle and then moves to the top rectangle. It's not turning off the laser power between the rectangles. In other words a laser stays on during the move, which is not correct, how do I fix this?

---

### 🤖 Assistant

This is a common issue in LightBurn. The laser staying on during moves between shapes is typically caused by how the cut order or layer settings are configured. Here are the main fixes:

1. **Separate into different layers**: Put each rectangle on a different layer. LightBurn automatically turns off the laser between layers, so this is the most reliable solution.

2. **Use "Cut Selected Graphics" in the right order**: Make sure you're cutting them in the intended order. You can control cut order by:
   - Selecting shapes in the order you want them cut
   - Using the "Arrange" menu to set cut order priority
   - Checking the "Cut" panel on the right to see the cut sequence

3. **Check for grouped objects**: If the rectangles are grouped together, ungroup them first (`Ctrl+Shift+G` or `Cmd+Shift+G`). Grouped objects sometimes behave unexpectedly.

4. **Enable "Cut Selected Graphics"**: Instead of cutting all at once, select just the bottom rectangle, cut it, then select the top rectangle and cut it separately.

This forces a laser-off between cuts.

5. **Check your laser settings**: Verify that your laser has a proper "off" command in the device settings. Some laser configurations need explicit power-off commands between operations.

6. **Use "Optimize cut order"**: Go to **File > Cut Settings** and enable "Optimize cut order" if available—this can help manage laser on/off states better.

The **layer separation method** is usually the cleanest solution if you want them cut automatically in sequence without manual intervention.

---

### 👤 User

After doing suggestions the gcode looks like : ; LightBurn Core 2.0.05
; GRBL device profile, user origin
; Bounds: X0 Y0 to X190.5 Y469.9

;USER START SCRIPT
G90 G20
G0 X0 Y0
G1 Z0 F100
;USER START SCRIPT

G00 G17 G40 G21 G54
G90
G0 X0 Y0
G91
M4
; Cut @ 4800 mm/min, 100% power
M7
G0 X0Y0
; Layer Score
G1 Y190.5S1000F4800
G1 X190.5S1000
G1 Y-190.5S1000
G1 X-190.5S1000
G0 X0Y279.4
G1 Y190.5S1000
G1 X190.5S1000
G1 Y-190.5S1000
G1 X-190.5S1000
M9
G1 S0
M5
G90
; return to user-defined finish pos
G0 X610Y1220

;USER END SCRIPT
G90 G20
G0 Z5
M5
M9
;USER END SCRIPT
M2

---

### 🤖 Assistant

I can see the problem in your G-code! Between the two rectangles, there's only a `G0 X0Y279.4` (rapid move) command, but the laser power (`S1000`) remains active from the previous cut.

The issue is that **your GRBL controller is in M4 (dynamic laser mode)**, which keeps the laser at the set power level during G0 moves if the S value isn't explicitly set to 0.

Here's what's happening:
- `M4` enables dynamic laser mode (power varies with speed)
- The `G0 X0Y279.4` move happens while `S1000` is still in effect
- GRBL interprets this as "move with laser on"

## Solutions:

### Option 1: Switch to M3 mode (Constant Power)
In LightBurn, go to **Edit > Device Settings** and change from **M4 (dynamic)** to **M3 (constant power)** mode. M3 automatically turns off the laser during G0 rapid moves.

### Option 2: Force S0 between cuts in LightBurn
1. Go to **Edit > Device Settings**
2. Look for **"Enable laser fire control"** or similar option
3. Make sure **"S value on rapid moves"** is set to 0 or disabled

###

Option 3: Add custom G-code between layers
In each layer's settings, add to the **"End G-Code"** field:
```
G1 S0
```

This explicitly sets power to 0 after each layer completes.

**The easiest fix is Option 1** - switching to M3 mode. M4 is useful for engraving but can cause this exact iss
