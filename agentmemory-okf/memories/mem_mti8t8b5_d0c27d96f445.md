---
type: Fact
title: # Starting Print at Layer

source: abacus
session_id: d90b02d4b
resource: abacus
description: # Starting Print at Layer

source: abacus
session_id: d90b02d4b
resource: abacus://conversation/d90b02d4b

# Conversation

- **Session ID:** `d90b02d4b`
- **Source:** abacus.ai
- **Project:** AI Vault
resource: agentmemory://memory/mem_mti8t8b5_d0c27d96f445
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/d90b02d4b"]
timestamp: 2026-09-01T05:44:49.634Z
source: agentmemory
strength: 7
---
# Content

# Starting Print at Layer

source: abacus
session_id: d90b02d4b
resource: abacus://conversation/d90b02d4b

# Conversation

- **Session ID:** `d90b02d4b`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-10-07T10:20:14+00:00
- **Messages:** 4

---

### 👤 User

In Prusa Slicer, how do I start a print at a certain layer or Z value?

---

### 🤖 Assistant

To resume/insert a print starting at a specific layer or Z height in PrusaSlicer, you have a few good options. Pick the one that fits your goal.

1) Use “Cut” to split the model and print only the upper part
- In the 3D view, select the model.
- Press C (or right‑click → Cut).
- Choose “Cut” and move the plane to the Z you want to start at (you can type an exact value).
- Keep the upper part only (delete or hide the lower part).
- Slice and print just that upper section.
Tip: This is ideal for reprinting top layers or starting from a known Z without modifying G-code.

2) Use “Layer range” modifiers to change settings above a Z
- Slice the model.
- In the Preview, note the Z height of the layer you want.
- Right‑click the model → Add modifier → Height range modifier.
- Set the From/To heights and apply different settings (e.g., infill, speeds, supports) only above that Z.
Note: This doesn’t skip printing lower layers; it changes settings starting at a Z.

3) Start a print at a Z by editing G-code

(advanced/resume scenarios)
If you’ve already printed the lower part (e.g., a failed print stopped halfway) and want to restart from a Z:
- Determine the restart height:
  - In Preview, find the exact Z of the last completed layer (e.g., 6.20 mm).
- Slice the whole object as normal to generate G-code.
- Open the G-code in a text editor.
- Find the layer comment PrusaSlicer inserts, like:
  ;LAYER:31
  ;Z:6.20
- Remove everything before the first move at or just below your target Z. Keep start-up code that re-heats and homes axes as needed, but remove prime lines and any bed-mesh if you can’t safely rerun them on the existing part.
- Insert a safe resume header:
  - Heat to your temps (M104/M109, M140/M190).
  - Home X and Y only (G28 X Y). Avoid homing Z onto your printed part.
  - Set Z safe height above the part (e.g., G1 Z15 F6000).
  - Move near the resume location, re-prime on a purge area if possible, then move to the first resume XY and set Z to the target layer Z.
- Save as a new file and print,

carefully babysitting the first moves.
Warnings:
- Disable skirt/brim/prime line near the part to avoid crashing into your print.
- If using ABL/mesh: Running a full mesh probe will hit the part. Either skip it or use a saved mesh (if your firmware supports it).
- Ensure the filament path is already primed; manually extrude from the printer menu before starting.

4) Use “Cut” + Registration to physically resume
- If the lower part is already printed on the bed, remove it and align carefully, or leave it on the bed and:
  - Disable Z homing or homing Z at center with a higher Z-safe, or only home X/Y.
  - Use “Cut” at the resume Z and print only the upper part. The printer will only print the remaining layers onto the existing part.

5) Start at a specific layer for multi-process workflows
- In Preview, note the layer number.
- Add a height range modifier starting at that layer’s Z to apply a different filament profile, cooling, or speeds from that point onward.

Quick recipe for the common “failed mid‑print,

want to resume” case:
- Note completed layer Z in Preview.
- Slice full model.
- Edit G-code:
  - Keep temperature commands.
  - Keep G28 X Y only; do not G28 Z.
  - Move Z to a safe height.
  - Seek the first layer at or above your Z (look for ;Z:…).
  - Remove prior G-code moves.
  - Optional: add a short purge off to the side.
- Start and monitor.

If you tell me your target Z (or layer number), your printer model/firmware (e.g., MK3S+, MK4, Mini+), and whether you’re resuming on an existing partial print, I can draft the exact G-code header for a safe resume.

---

### 👤 User

You failed to mention how to skip over the probing and other mo
