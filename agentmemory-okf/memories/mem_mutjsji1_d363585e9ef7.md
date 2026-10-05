---
type: Fact
title: # Automate spaced top-layer duplication in G-code

source: hermes
session_id: 20
description: # Automate spaced top-layer duplication in G-code

source: hermes
session_id: 20260930_101929_95321f
resource: hermes://session/20260930_101929_95321f

# Conversation

- **Session ID:** `20260930_1019
resource: agentmemory://memory/mem_mutjsji1_d363585e9ef7
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260930_101929_95321f"]
timestamp: 2026-10-04T08:17:23.491Z
source: agentmemory
strength: 7
---
# Content

# Automate spaced top-layer duplication in G-code

source: hermes
session_id: 20260930_101929_95321f
resource: hermes://session/20260930_101929_95321f

# Conversation

- **Session ID:** `20260930_101929_95321f`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-30T17:08:51Z
- **Ended:** 2026-10-03T16:44:21Z
- **Messages:** 813
- **Tokens:** 6537075 in / 545153 out
- **Est. cost:** $-773770.0000

---

### 👤 User — 2026-10-01T12:25:23Z

[System: The active model for this chat has changed to kilo-auto/efficient via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-10-01T12:25:23Z

[System: The active model for this chat has changed to kilo-auto/efficient via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

In the folder /Volumes/projects/3D/Multiboard there is a gcode file Multiboard_0.6n_0.2mm_PETG_XLIS_18m.gcode. This is a stacked print and that the same object is stacked one on top of another to permit building multiple objects vertically. Between each object there is a 0.2 mm space. The current Prusa slicer does not permit me to fill that space with a different material. What we need to do is create a script skill that can look for this space and duplicate the previous layer, which is a top layer, inside the space, but with a different material, a different extruder. Examine the file and see if you can find this 0.2 mm space between objects. If not I will have to tell you where it's at. Then locate the previous top layer of the previous object and duplicate that layer with a different material inside the space.

### 👤 User — 2026-10-01T12:25:23Z

[System: The active model for this chat has changed to kilo-auto/efficient via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

In the folder /Volumes/projects/3D/Multiboard there is a gcode file Multiboard_0.6n_0.2mm_PETG_XLIS_18m.gcode. This is a stacked print and that the same object is stacked one on top of another to permit building multiple objects vertically. Between each object there is a 0.2 mm space. The current Prusa slicer does not permit me to fill that space with a different material. What we need to do is create a script skill that can look for this space and duplicate the previous layer, which is a top layer, inside the space, but with a different material, a different extruder. Examine the file and see if you can find this 0.2 mm space between objects. If not I will have to tell you where it's at. Then locate the previous top layer of the previous object and duplicate that layer with a different material inside the space.

### 👤 User — 2026-10-01T12:27:43Z

In the folder /Volumes/projects/3D/Multiboard there is a gcode file Multiboard_0.6n_0.2mm_PETG_XLIS_18m.gcode. This is a stacked print and that the same object is stacked one on top of another to permit building multiple objects vertically. Between each object there is a 0.2 mm space. The current Prusa slicer does not permit me to fill that space with a different material. What we need to do is create a script skill that can look for this space and duplicate the previous layer, which is a top layer, inside the space, but with a different material, a different extruder. Examine the file and see if you can find this 0.2 mm space between objects. If not I will have to tell you where it's at. Then locate the previous top layer of the previous object and duplicate that layer with a different material inside the space.

### 🤖 Assistant — 2026-10-01T12:30:11Z

<details><summary>Reasoning</summary>

Let me understand the task:

1. There's a G-code file at /Volumes/projects/3D/Multiboard/Multiboard_0.6n_0.2mm_PETG_XLIS_18m.gcode
2. It's a stacked print - same object stacked vertically multiple times
3. Between each object there's a 0.2mm space
4. The user wants a script skill that:
   - Finds this 0.2mm space between objects
   - Locates the previous top layer of the previous ob
