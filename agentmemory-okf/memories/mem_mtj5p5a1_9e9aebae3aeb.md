---
type: Fact
title: # Snapmaker 2 No Relative Extruder.

source: chatgpt
session_id: 756d5735-80ca-4
description: # Snapmaker 2 No Relative Extruder.

source: chatgpt
session_id: 756d5735-80ca-47ed-b0d4-d857a3fc3544
resource: chatgpt://conversation/756d5735-80ca-47ed-b0d4-d857a3fc3544

# Conversation

- **Session
resource: agentmemory://memory/mem_mtj5p5a1_9e9aebae3aeb
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/756d5735-80ca-47ed-b0d4-d857a3fc3544"]
timestamp: 2026-09-01T21:05:26.405Z
source: agentmemory
strength: 7
---
# Content

# Snapmaker 2 No Relative Extruder.

source: chatgpt
session_id: 756d5735-80ca-47ed-b0d4-d857a3fc3544
resource: chatgpt://conversation/756d5735-80ca-47ed-b0d4-d857a3fc3544

# Conversation

- **Session ID:** `756d5735-80ca-47ed-b0d4-d857a3fc3544`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-05-16T20:53:14.263079+00:00
- **Messages:** 42

---

### 👤 User

snapmaker 2 relative extruder addressing gcode

---

### 🤖 Assistant

The Snapmaker 2 3D printer uses a combination of G-code commands and custom firmware to control its operation, including the extruder. However, as of my knowledge cutoff in September 2021, the Snapmaker 2 does not natively support relative extruder addressing in its G-code commands. This means that you cannot directly specify relative movements for the extruder in the G-code.

Typically, G-code commands for the extruder in 3D printers are absolute, meaning they specify an exact position or a specific amount of filament to extrude. However, you may be able to achieve relative extrusion by manually calculating the relative positions or amounts and adjusting the extrusion commands accordingly in your G-code file.

It's worth noting that my information might be outdated, as the Snapmaker team might have introduced updates or new firmware versions since then. Therefore, I recommend referring to the official Snapmaker documentation or contacting their support for the most up-to-date information on relative extruder addressing in G-code for the Snapmaker 2.

---

### 👤 User

what are the gcode preamble needed for 3d printing on snampmaker 2

---

### 🤖 Assistant

When preparing a G-code file for 3D printing on the Snapmaker 2, it is essential to include a preamble at the beginning of the file. The preamble sets up the printer's initial conditions and parameters. Here's an example of a common G-code preamble for 3D printing on the Snapmaker 2:

```
; G-code preamble for Snapmaker 2 3D printing
G90 ; Set to absolute positioning mode
M82 ; Set extruder to absolute mode
G28 ; Home all axes
G92 E0 ; Reset extruder position to zero
G21 ; Set units to millimeters
G92 E0 ; Reset extruder position to zero
G92 E0 ; Reset extruder position to zero (repeated for redundancy)
```

Let's go through each line and see what it does:

1. `G90` - Sets the positioning mode to absolute. This ensures that all subsequent movements are interpreted as absolute coordinates.
2. `M82` - Sets the extruder to absolute mode. This specifies that extruder movements are interpreted as absolute distances.
3. `G28` - Homes all axes. This command instructs the printer to move all axes to their respective homing positions.
4. `G92 E0` - Resets the extruder position to zero. This ensures that the initial extruder position is set to zero.
5. `G21` - Sets the units to millimeters. This specifies that all subsequent measurements and movements will be in millimeters.
6. `G92 E0` - Resets the extruder position to zero. This line is included for redundancy and ensures the extruder position is set to zero.
7. `G92 E0` - Resets the extruder position to zero. This line is also included for redundancy and further ensures the extruder position is set to zero.

Including this preamble in your G-code file helps establish the initial conditions and ensures consistent behavior during printing on the Snapmaker 2.

---

### 👤 User

in windows 11 using emacs it thinks my home folder is in C:/Users/davec/AppData/Roaming how do I change it to be C:/Users/davec

---

### 🤖 Assistant

In Emacs, the default home directory is determined by the `HOME` environment variable. If the `HOME` variable is not set or is set incorrectly, Emacs may default to a different directory.

To change the home directory in Emacs on Windows 11, you can follow these steps:

1. Open the "System Properties" window by pressing the Windows key + Pause/Break or by right-clicking on the "This PC" icon and selecting "Properties."

2. In the "System Properties" window, click on the "Advanced system settings" link on the left-hand side.

3. In the "System Properties" dialog, click on the "Environment Variables" button.

4. In the "Environment Variables" dialog, under the "
