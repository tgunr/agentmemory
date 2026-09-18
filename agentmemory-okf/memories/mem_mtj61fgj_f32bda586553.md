---
type: Fact
title: # Troubleshooting Under-Extrusion on Prusa XL with PET-G

source: hermes
session
description: # Troubleshooting Under-Extrusion on Prusa XL with PET-G

source: hermes
session_id: claude__1c4a45e1-e601-47e2-af08-6c4ab8580582
resource: hermes://session/claude__1c4a45e1-e601-47e2-af08-6c4ab858058
resource: agentmemory://memory/mem_mtj61fgj_f32bda586553
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:14:59.457Z
source: agentmemory
strength: 7
---
# Content

# Troubleshooting Under-Extrusion on Prusa XL with PET-G

source: hermes
session_id: claude__1c4a45e1-e601-47e2-af08-6c4ab8580582
resource: hermes://session/claude__1c4a45e1-e601-47e2-af08-6c4ab8580582

# Conversation

- **Session ID:** `claude__1c4a45e1-e601-47e2-af08-6c4ab8580582`
- **Source:** claude
- **Model:** None
- **Started:** 2025-05-14T15:36:33Z
- **Ended:** 2025-05-14T16:01:42Z
- **Messages:** 10
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-05-14T15:36:33Z

Research the causes of an under-extrusion on a Prusa XL printer using PET-G on an object that, when I load the filament, the purging is fine, but when it starts to print the extrusion gears start clicking and the appearance is that the nozzle is too close to the bed.
Are there any reports of this and how do you correct it?

### 🤖 Assistant — 2025-05-14T15:37:28Z

The user is asking me to research causes of under-extrusion on a Prusa XL 3D printer, specifically when using PET-G filament. The issue described has some specific characteristics:

1. The purging (initial extrusion to clear the nozzle) is fine
2. The extrusion gears start clicking when the actual print begins
3. The visual appearance suggests the nozzle might be too close to the bed

Let me use the web search tool to research this issue since it's a technical problem that may have recent troubleshooting information beyond my knowledge cutoff.

I'll start by searching for information about under-extrusion on Prusa XL printers when using PET-G filament.I'll research the under-extrusion issue you're experiencing with your Prusa XL printer when using PET-G. This sounds frustrating, especially since the purge line seems fine but problems begin when the actual print starts.

Let me search for the latest information on this issue.
```
This block is not supported on your current device yet.
```



Let me look into some specific solutions for your Prusa XL under-extrusion issue with PETG filament. I'll search for more detailed information about the clicking sound in the extruder gears.
```
This block is not supported on your current device yet.
```



Based on my research, I've identified several potential causes and solutions for your Prusa XL under-extrusion issue with PETG filament. Let me break this down:

## Common Causes of Clicking and Under-Extrusion with PETG on Prusa XL

1. **Temperature Issues**
   - PETG often requires higher temperatures than what might be set in default profiles. If the print temperature is too low, unmelted filament will start to clog the nozzle and prevent consistent feeding.
   - Some users have found that Prusament PETG requires temperatures 10°C higher than generic PETG profiles (240°C first layer, 250°C for subsequent layers versus 230°C/240°C).

2. **Nozzle Height Calibration**
   - If the nozzle is positioned too close to the print bed, the filament won't extrude properly because the nozzle is effectively squishing it. This matches your observation about the appearance suggesting the nozzle is too close to the bed.
   - The Prusa XL has a specific nozzle design where the printing forces are resisted by a grub screw tightened against the thin wall of the heat break section. If this shifts slightly, it can affect the nozzle height.

3. **Heat Creep Issues**
   - Some users report that PETG gets too warm in the feed tube, and when retracted repeatedly, it eventually buckles and causes a blockage.
   - This seems to be more common in warm ambient conditions or when printing large objects that use more of the heated bed.

4. **Firmware and Extrusion Rate Issues**
   - Some users suggest watching the temperature of the extruder during high extrusion rates, as the heater might not keep up with filament flow, causing back-up and jamming.
   - Increasing flow factor to 110% has helped some users overcome under-extrusion with certain PETG filaments.

## Solutions to Try

1. **Increase Nozzle Temperature**
   - Try increasing the temperature by 5-10°C for both the first layer and subsequent layers.
   - Start with a 5°C increase and test if extrusion improves.

2. **Adjust Z-Offset**
   - Re-calibrate your first layer height to ensure there's enough space for proper extrusion. 
