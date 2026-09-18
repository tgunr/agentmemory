---
type: Fact
title: # Buildbotics Controller Probing Technique

source: claude
session_id: 32ac560b-
description: # Buildbotics Controller Probing Technique

source: claude
session_id: 32ac560b-a0fe-412d-8a28-c72c36027290
resource: claude://conversation/32ac560b-a0fe-412d-8a28-c72c36027290

# Conversation

- **Se
resource: agentmemory://memory/mem_mtj6c05d_8e76287bf3e6
tags: ["okf", "okf-claude", "claude", "claude://conversation/32ac560b-a0fe-412d-8a28-c72c36027290"]
timestamp: 2026-09-01T21:23:12.845Z
source: agentmemory
strength: 7
---
# Content

# Buildbotics Controller Probing Technique

source: claude
session_id: 32ac560b-a0fe-412d-8a28-c72c36027290
resource: claude://conversation/32ac560b-a0fe-412d-8a28-c72c36027290

# Conversation

- **Session ID:** `32ac560b-a0fe-412d-8a28-c72c36027290`
- **Source:** claude
- **Started:** 2025-06-30T23:35:21Z
- **Messages:** 2

---

### 👤 User — 2025-06-30T23:35:21Z

Locate probing code used in the buildbotics controller to find stock position with a prob block at the lower left corner.

---

### 🤖 Assistant — 2025-06-30T23:36:31Z

The user is asking about "probing code" in the "buildbotics controller" to find stock position with a "prob block" (likely meant "probe block") at the lower left corner. This seems to be related to CNC machining or 3D printing where probing is used to determine the position of workpieces.

Buildbotics is a company that makes CNC controllers. The user is looking for specific code that handles probing functionality to locate the position of stock material using a probe block positioned at the lower left corner.

This appears to be a technical query about CNC/machining software. I should search for information about Buildbotics controller probing code or documentation.

Let me search for this information.I'll help you find information about probing code in the Buildbotics controller. Let me search for documentation and code related to this functionality.
```
This block is not supported on your current device yet.
```

Good! I found some relevant information about probing in the Buildbotics controller. Let me search for more specific information about finding stock position and probe blocks, particularly for lower left corner positioning.
```
This block is not supported on your current device yet.
```

Great! I found some really useful information. Let me search for more specific information about the complete XY probing code for finding lower left corner position.
```
This block is not supported on your current device yet.
```

The web_fetch failed, but I already have good information from the search results. Let me try to get the buildbotics official probing documentation to provide a complete answer.
```
This block is not supported on your current device yet.
```

Perfect! Now I have comprehensive information about probing code for the Buildbotics controller. From the search results, I found several key pieces of information:

1. The official Buildbotics documentation on probing
2. A user-shared macro for finding the lower left corner of a workpiece
3. The 3D probing code that finds the front, top, left corner

Let me compile this information to provide a complete answer to the user's request.Based on my search of Buildbotics controller documentation and community forums, I found several examples of probing code used to find stock position with a probe block at the lower left corner. Here are the key implementations:

## Basic XY Probing Code for Lower Left Corner

From the Buildbotics forum, here's a user-shared macro for finding the bottom left corner of a workpiece using a probe block with a 1/4" end mill:

```gcode
; XYZ-1/4" Dia Endmill
G20                           ; Set to imperial units
M0 (MSG, Click 'continue' bit in position top right of block and ground on.)
M70                           ; Save modal mode
G92 X0                        ; Set current X position to 0
G92 Y0                        ; Set current Y position to 0
G92 Z0                        ; Set current Z position to 0

; Probe X axis (left side of block)
G38.2 X-1 F2                  ; Probe x axis toward the left side of the block
G91                           ; Switch to incremental mode
G1 X0.125 F10                 ; Move x axis right 0.125" at 10 in/min
G1 Y1 F10                     ; Move y axis 1" toward back of machine
G1 X-0.625 F10                ; Move x axis 0.625" toward the left

; Probe Y axis (front side of block)
G38.2 Y-1 F2                  ; Probe y axis toward the front side of block
G1 Y0.125 F10                 ; Move y axis away from block 0.125"
G1 X0.625 F10                 ; Move x axis 0.625" toward the right
G1 Y-0.625 F10                ; Move y axis -0.625" toward the fro
