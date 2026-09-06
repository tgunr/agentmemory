---
type: Fact
title: # CNC and Laser Origin Alignment

source: abacus
session_id: 1b6985f9
resource: 
description: # CNC and Laser Origin Alignment

source: abacus
session_id: 1b6985f9
resource: abacus://conversation/1b6985f9

# Conversation

- **Session ID:** `1b6985f9`
- **Source:** abacus.ai
- **Project:** AI V
resource: agentmemory://memory/mem_mti8rhm4_61e9b329be05
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/1b6985f9"]
timestamp: 2026-09-01T05:43:28.172Z
source: agentmemory
strength: 7
---
# Content

# CNC and Laser Origin Alignment

source: abacus
session_id: 1b6985f9
resource: abacus://conversation/1b6985f9

# Conversation

- **Session ID:** `1b6985f9`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-01-30T15:06:48+00:00
- **Messages:** 2

---

### 👤 User

I have a hybrid project to perform using both the CNC using a 1/8 inch bit and a laser. The problem arises is finding the exact origin point for both uses. What I have done is created a set of targets in the lower left upper left upper right lower right in center and burnt a hole in the stock material. Those positions are one inch from each edge and in the exact center of the stock according to how I set the laser origin by setting the laser dot to the bottom left edge of the stock I then put in a V bit.set the home to bottom left of stock and used MDI to set X 1 Y 1. The bit is not in center of the burn mark so positioned it over the first hole, which should've been 1 inch in from the left and right from the bottom left instead the center of the bit is at 1.150 X and 1.041 Y so how do I organize or set up the system search that the laser will be exactly in the same place as the bit. When I setup the laser origin I use a Red Crosshair and and position it so it is halfway over bottom left and then use and offset of G0 X0.081 Y-1.528 and then set the X Y as zero.

---

### 🤖 Assistant

I can see you're dealing with a calibration issue between your laser and CNC bit origins. Let me first look at your NGC file to understand your setup better.

Now I understand your issue. You have a **calibration offset** between your laser and CNC bit. Here's the problem and solution:

### Your Current Situation:
- **Laser origin**: Set using red crosshair at bottom-left corner with offset `G0 X0.081 Y-1.528`
- **CNC bit origin**: Set at bottom-left corner (X0 Y0)
- **Discrepancy found**: When you positioned the bit at X1 Y1, it was actually at X1.150 Y1.041

### The Root Cause:
Your laser and CNC bit have **different mechanical offsets** from their respective reference points. The laser's red dot and the CNC bit's tip don't align with the same physical location on your machine.

### Solution - Create a Unified Offset System:

**Step 1: Document Your Calibration Offset**
- Laser offset from bottom-left: X+0.081, Y-1.528
- CNC bit offset from bottom-left: X+0.150, Y+0.041 (based on your measurement)
- **Difference**: X = 0.150 - 0.081 = 0.069", Y = 0.041 - (-1.528) = 1.569"

**Step 2: Choose Your Master Origin**
Use the **CNC bit as your master** since it's more

precise for actual cutting. Adjust your laser offset to match:
- New laser offset should be: X0.081 + 0.069 = **X0.150**, Y-1.528 + 1.569 = **Y0.041**

**Step 3: Update Your Laser Setup**
When setting laser origin next time:
1. Position red crosshair at bottom-left
2. Use offset: `G0 X0.150 Y0.041` (instead of your current offset)
3. Set X Y as zero

**Step 4: Verify with Your Target Holes**
Run a test: Move to X1 Y1 with both laser and bit—they should now align perfectly over your burn marks.

### Alternative: Use G54 Work Offset
If your controller supports it, create separate work offsets:
- **G54**: CNC bit origin (current setup)
- **G55**: Laser origin (with your calibration offset)

Then switch between them in your programs with `G54` or `G55` commands.

This way, you maintain one master coordinate system and switch tools without confusion.

---
