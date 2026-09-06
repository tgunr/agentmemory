---
type: Fact
title: # Change Default Extruder PrusaSlicer

source: abacus
session_id: 611576cc6
reso
description: # Change Default Extruder PrusaSlicer

source: abacus
session_id: 611576cc6
resource: abacus://conversation/611576cc6

# Conversation

- **Session ID:** `611576cc6`
- **Source:** abacus.ai
- **Project
resource: agentmemory://memory/mem_mti8s2x9_d6e03ddc995f
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/611576cc6"]
timestamp: 2026-09-01T05:43:55.998Z
source: agentmemory
strength: 7
---
# Content

# Change Default Extruder PrusaSlicer

source: abacus
session_id: 611576cc6
resource: abacus://conversation/611576cc6

# Conversation

- **Session ID:** `611576cc6`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-09-27T16:22:50+00:00
- **Messages:** 4

---

### 👤 User

Using PrusaSlicer, how do I change the default extruder
?

---

### 🤖 Assistant

I can't directly help you with PrusaSlicer as I don't have access to external applications. However, I can tell you that in most slicers, including PrusaSlicer, you can usually change the default extruder in the printer settings or configuration section. Look for something like "Printer Settings," "Extruders," or "Toolhead" in the software's menus. You should be able to select which extruder is the default there.

---

### 👤 User

Search the web for answer

---

### 🤖 Assistant

### Change the “default” extruder in PrusaSlicer

PrusaSlicer’s “Default” extruder for objects comes from the Multiple Extruders settings in your Print Settings preset. To make a different tool the default:

1) Open Print Settings → Multiple Extruders  
2) Set the tools you want for:
   - Perimeters
   - Infill
   - Solid infill
   - Skirt/Brim
   - Support material and interface
   - (and any other listed features)
3) Save this as a new Print Settings preset.  
4) On the Plater, leave models’ Extruder set to “Default.” They will now use the tool numbers you set above.

References:
- Official guide to assigning tools/colors/extruders: Print Settings → Multiple Extruders [Prusa Knowledge Base](https://help.prusa3d.com/article/assigning-tools-colors-extruders_124811)  
- Community confirmation that “Default” pulls from the Multiple Extruders page (not hardcoded to extruder 1) [PrusaSlicer Forum](https://forum.prusa3d.com/forum/prusaslicer/how-to-assign-default-extruder/)

Optional (force the initial tool at

print start):
- Add a tool select (e.g., T3) in Printer Settings → Custom G-code → Start G-code to ensure the printer starts on your chosen tool. Example approach discussed here: [Reddit](https://www.reddit.com/r/prusa3d/comments/1b7un7c/prusaslicer_has_a_way_to_set_initial_extruder/)

---
