---
type: Fact
title: # Z-Axis Probing Calibration Problem

source: hermes
session_id: claude__ac6e8fe
description: # Z-Axis Probing Calibration Problem

source: hermes
session_id: claude__ac6e8fe2-808f-4c1e-a95e-4b0b4c9b1a16
resource: hermes://session/claude__ac6e8fe2-808f-4c1e-a95e-4b0b4c9b1a16

# Conversation

-
resource: agentmemory://memory/mem_mtj62pqp_e70058d3fd16
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:59.398Z
source: agentmemory
strength: 7
---
# Content

# Z-Axis Probing Calibration Problem

source: hermes
session_id: claude__ac6e8fe2-808f-4c1e-a95e-4b0b4c9b1a16
resource: hermes://session/claude__ac6e8fe2-808f-4c1e-a95e-4b0b4c9b1a16

# Conversation

- **Session ID:** `claude__ac6e8fe2-808f-4c1e-a95e-4b0b4c9b1a16`
- **Source:** claude
- **Model:** None
- **Started:** 2025-06-13T16:31:07Z
- **Ended:** 2025-06-13T22:33:10Z
- **Messages:** 26
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-06-13T16:31:08Z

After executing the ProbeZ code the Z axis is not set to 0 as you can see from the image.

_Attachments: CleanShot 20250613 at 11.29.502x.png, Probe-Z.txt_

_Attachments: Probe-Z.txt_

### 🤖 Assistant — 2025-06-13T16:31:56Z

Looking at the image and the code, I can see that the user is working with a Buildbotics CNC controller and has executed a Z-axis probing routine. The image shows the Buildbotics web interface with the current position displayed:

- X: 73.484mm
- Y: 453.951mm  
- Z: -90.094mm

The Z-axis shows -90.094mm, which means the work coordinate system Z=0 was not properly set as expected. The code in the Probe-Z.txt file is a comprehensive Z-axis probing routine that should set the work coordinate system so that Z=0 is at the top of the probe block.

Let me analyze the code to see what might be going wrong:

1. The code uses G10 L20 P1 Z#<work_z> to set the work coordinate system
2. It calculates work_z as [#<final_probe_z> + #<probe_block_thickness>]
3. The probe_block_thickness is set to 15.4mm

The fact that Z is showing -90.094mm suggests that either:
1. The G10 L20 command didn't execute properly
2. The work coordinate system (G54) wasn't activated
3. There's an issue with the variable calculations
4. The display might be showing machine coordinates instead of work coordinates

Looking at the Buildbotics interface, I can see it shows "Offset" values and there are some offset values shown. The interface shows what appears to be work coordinates.

Common issues with probing routines:
1. Work coordinate system not properly activated (need G54)
2. G10 L20 command syntax issues
3. Variable scope problems
4. Machine vs work coordinate display

I should help the user troubleshoot this step by step.Looking at your Buildbotics interface, I can see the Z-axis is showing -90.094mm instead of being set to 0 as expected. There are a few potential issues with the probing routine. Let me help you troubleshoot this:

## Likely Issues:

1. **Work Coordinate System Not Activated**: The code sets G54 coordinates but may not have activated the work coordinate system
2. **Display Mode**: You might be viewing machine coordinates instead of work coordinates
3. **G10 Command Issue**: The work coordinate setting command may not have executed properly

## Quick Fixes to Try:

### 1. First, check your coordinate display mode:
Look for a button or setting in the Buildbotics interface to toggle between "Machine" and "Work" coordinates. You might be viewing machine coordinates.

### 2. Manually activate work coordinates:
In the MDI (Manual Data Input) section, try entering:
```gcode
G54
```
This should activate the work coordinate system that was set by the probe routine.

### 3. Try this simplified probe routine instead:
Here's a more reliable version for Buildbotics:
```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```

I've created a simplified version of the probe routine that should work better with Buildbotics. The key changes I made:

1. Added explicit G54 activation at the beginning and after setting coordinates
2. Simplified the variable handling
3. Removed some of the complex error checking that might be causing issues
4. Made sure the work coordinate system is activated after setting it

Now I should also give the user some additional troubleshooting steps they can try.### 4. Manual verification steps:

After running any probe routine, you can manually verify the setup:

1. **Check if probe worked**: In MDI, enter `G38.2 Z-5 F25` (this should probe down a small amount)
2. **Manually set Z=0**: Position your tool at the desired Z=0 location and enter: `G10 L20 P1 Z0`
3. **Activate work coordinates**: Enter
