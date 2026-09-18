---
type: Fact
title: # Restart print at 0.87 in Prusa Slicer

source: hermes
session_id: 20260829_092
description: # Restart print at 0.87 in Prusa Slicer

source: hermes
session_id: 20260829_092151_09b410
resource: hermes://session/20260829_092151_09b410

# Conversation

- **Session ID:** `20260829_092151_09b410`
resource: agentmemory://memory/mem_mtg12yuc_7e573eb00593
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:54.646Z
source: agentmemory
strength: 7
---
# Content

# Restart print at 0.87 in Prusa Slicer

source: hermes
session_id: 20260829_092151_09b410
resource: hermes://session/20260829_092151_09b410

# Conversation

- **Session ID:** `20260829_092151_09b410`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-29T14:21:51Z
- **Messages:** 53
- **CWD:** `/Users/davec`
- **Tokens:** 81120 in / 66240 out

---

### 👤 User — 2026-08-29T14:21:51Z

In Prusa Slicer how do I start a print above the normal bed? I had a print failure and I need to restart it at 0.87 instead of zero.Obviously I don't want or need all the initial startup code, like bed leveling, probing, etc.

### 🤖 Assistant — 2026-08-29T14:23:23Z

<details><summary>Reasoning</summary>

The user is asking about PrusaSlicer — how to restart a print at a specific Z height (0.87mm instead of 0) without the initial startup code like bed leveling, probing, etc.

This is a practical PrusaSlicer question. Let me think about what I know about this.

The user wants to resume a failed print by starting at a specific Z height. This is "Z-offset resume" or "advanced pause / resume" type functionality. Actually what they want is to:

1. Take the G-code from the point where it failed
2. Start printing from a certain Z height (0.87) instead of Z=0
3. Strip out the startup code (bed leveling, probing, homing that would crash into existing print)

There are a few approaches in PrusaSlicer:

1. **Post-processing script** — PrusaSlicer supports post-processing scripts. There's a known approach of editing the G-code to remove the start G-code and add a homing/start at the right Z.

2. **The "Z offset" / starting at a layer approach**: Actually the cleanest way is to slice the model, then edit the G-code to remove everything before the layer you want, and replace the start code with a minimal set: heat the bed, heat the nozzle, move to the resume Z without homing the bed (or home X/Y only, then move Z to the safe height).

Let me think about the actual common methods:

**Method A: PrusaSlicer's built-in "Z" — no, there's no direct "start at layer N" in stock PrusaSlicer for resuming.**

Actually, there's a practical workflow:
- The G-code file contains layer sections with comments like `;LAYER:10` or `;LAYER:-1` (skirt/brim) then `;LAYER:0`, `;LAYER:1`, etc.
- You can cut the file at the layer where the failure happened, delete all the start-up G-code and earlier layers, and replace with custom start code that:
  - Sets absolute positioning
  - Optionally homes X and Y only (G28 X Y) — NOT Z, because homing Z would crash the nozzle into the existing print
  - Heats bed and hotend
  - Moves to the resume Z height (G1 Z0.87 or wherever the layer is)
  - Starts extruding

The key danger: you must NOT home Z. You should home X and Y, then manually raise Z to the resume height, or just move Z to the layer height directly if you know it's safe.

Actually, a cleaner method: 
- Use `G92 Z0.87` to tell the printer "wherever the nozzle currently is, treat it as Z=0.87" — but that requires you to physically position the nozzle at the right height first, which is awkward.

The standard approach people use for "resume my failed print at layer X":

**PrusaSlicer + G-code editing:**
1. Re-slice the object (or use the original G-code).
2. Find the layer comment where you want to restart (e.g., the layer that starts at Z=0.87). In PrusaSlicer, you can see per-layer Z in the preview, or look at the G-code `;LAYER:N` markers.
3. Delete everything from the top of the file down to (and including) the start of that layer's commands — but keep the header? No, delete the startup.
4. Replace the very beginning with new start code:
   ```
   M140 S[bed_temp]  ; heat bed
   M190 S[bed_temp]  ; wait for bed
   M104 S[nozzle_temp] ; heat nozzle
   M109 S[nozzle_temp] ; wait for nozzle
   G28 X Y          ; home X and Y only (do NOT home Z)
   G1 Z[resume_Z] F[some speed]  ; move to resume height
   G92 E0           ; reset extruder
   ```
   Then continue with the layer's actual G-code (which has its own G1 Z moves and extrusion).

Wait, but there's a subtlety: after G28 X Y, the nozzle Z is whe
