---
type: Fact
title: # Restarting PrusaSlicer Print

source: abacus
session_id: 2ce8e513c
resource: a
description: # Restarting PrusaSlicer Print

source: abacus
session_id: 2ce8e513c
resource: abacus://conversation/2ce8e513c

# Conversation

- **Session ID:** `2ce8e513c`
- **Source:** abacus.ai
- **Project:** AI 
resource: agentmemory://memory/mem_mti8rmg3_114960b267da
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/2ce8e513c"]
timestamp: 2026-09-01T05:43:34.639Z
source: agentmemory
strength: 7
---
# Content

# Restarting PrusaSlicer Print

source: abacus
session_id: 2ce8e513c
resource: abacus://conversation/2ce8e513c

# Conversation

- **Session ID:** `2ce8e513c`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-01-31T18:35:25+00:00
- **Messages:** 18

---

### 👤 User

In prusaslicer I have an item 250mm tall. The printer failed to detect filament was out and kept air printing. I need to restart the print at layer 83.6mm

---

### 🤖 Assistant

To resume a print that failed at a specific height, you can use the **Cut** tool in PrusaSlicer to remove the portion that has already been printed and then generate a new G-code file for the remaining section.

#### Step 1: Cut the Model
Select your object on the platter and press the `C` key or select the **Cut** tool from the left-hand toolbar. In the settings window that appears, enter `83.6` in the **Cut height** field. Ensure that the **Keep upper part** option is selected and **Keep lower part** is deselected. Click **Perform cut** to remove the bottom section of the model.

#### Step 2: Prepare the Remaining Print
The remaining part of the model will now be sitting directly on the heatbed in the 3D view. You should check your slice preview to ensure that the first layer of this new print has enough surface area to adhere to the existing printed part. If the geometry at 83.6mm is very thin or complex, you might consider adding a brim or adjusting the cut height slightly to a more solid layer.

####

Step 3: Adjust Printer Settings
Before you start the new print, you must ensure the printer does not attempt to home the Z-axis in a way that crashes into the existing part. If your printer homes in the center of the bed, you may need to manually move the print head or modify the start G-code to home X and Y only. Additionally, ensure the bed remains heated so the original part does not lose adhesion and pop off while the new layers are being added.

#### Step 4: Glue and Alignment
Many users find it safer to print the remaining 166.4mm as a separate piece and then bond the two halves together using CA glue (super glue) or a 3D printing pen. This avoids the risk of the print head colliding with the already printed object. If you choose to print directly on top of the old part, you must be extremely precise with your Z-offset and ensure the part is perfectly aligned on the bed.

---

### 👤 User

How do I prevent it from homing, nozzle cleaning, probing, etc. I just want to bring nozzle and bed up to top and start printing at the cut layer.

---

### 🤖 Assistant

To achieve a "seamless" resume directly on top of the existing part, you need to modify the **Start G-code** in PrusaSlicer. This is a high-risk maneuver because if the printer homes $Z$ or probes the bed, it will likely collide with your 250mm-tall object.

#### 1. Modify Start G-code
Go to **Printer Settings** > **Custom G-code** > **Start G-code**. You should copy your current code to a text file as a backup, then replace it with a "stripped" version. 

A typical "Resume" Start G-code looks like this:
```gcode
M140 S[first_layer_bed_temperature] ; Set bed temp
M104 S[first_layer_temperature]     ; Set nozzle temp
G90 ; Use absolute coordinates
G28 X Y ; Home ONLY X and Y (DO NOT HOME Z)
M190 S[first_layer_bed_temperature] ; Wait for bed temp
M109 S[first_layer_temperature]     ; Wait for nozzle temp
G1 Z100 F3000 ; Move nozzle up to a safe height (e.g., 100mm) to clear the part
```

#### 2. Critical Manual Steps
Since you are skipping $G28$ (Homing) for the $Z$ axis, the printer has no idea where the

nozzle is in relation to the bed. You must "fake" the $Z$ position manually before starting the print:

1.  **Heat the printer:** Manually preheat the bed and nozzle to printing temperature.
2.  **Manually Home X and Y:** Use the printer's screen to home only $X$ and $Y$.
3.  **Set the Z-Height:** Manually move the $Z$ axis until the nozzle is just barely touching the top of the failed print (the 83.6mm mark).
4.  **Define Zero:** Send the command `G92 Z83.6` via a terminal (like OctoPrint or Pront
