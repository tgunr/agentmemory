---
type: Fact
title: # Lightburn Z-Axis Movements

source: abacus
session_id: 4397946fd
resource: aba
description: # Lightburn Z-Axis Movements

source: abacus
session_id: 4397946fd
resource: abacus://conversation/4397946fd

# Conversation

- **Session ID:** `4397946fd`
- **Source:** abacus.ai
- **Project:** AI Va
resource: agentmemory://memory/mem_mti8rr8x_7248acf86993
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/4397946fd"]
timestamp: 2026-09-01T05:43:40.880Z
source: agentmemory
strength: 7
---
# Content

# Lightburn Z-Axis Movements

source: abacus
session_id: 4397946fd
resource: abacus://conversation/4397946fd

# Conversation

- **Session ID:** `4397946fd`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-10-12T15:12:35+00:00
- **Messages:** 2

---

### 👤 User

Research why Lightburn is using relative movements for the Z-axis when I do not have relative set in the settings.

---

### 🤖 Assistant

Here are the most common reasons LightBurn will “act” like it’s doing relative Z moves even when you think it’s set to absolute, plus how to verify and fix each one.

Likely causes
1) You’re starting the job from “Current Position”
- On GCode devices, LightBurn switches the program to relative mode (G91) for Current Position jobs. That makes Z relative too, regardless of your Z setting, because most controllers don’t allow XY absolute with Z relative (the modal applies to all axes). Save the GCode (File > Save GCode) and check the header: if you see G91, the whole job is in relative mode.
- On DSP (e.g., Ruida), LightBurn’s logic for Current Position also favors relative Z behavior. This is by design to keep Z safe when absolute zero isn’t known. See the docs on “Relative Z moves only” and how Current Position interacts with material height and offsets [Device Settings docs, Z Control](https://docs.lightburnsoftware.com/UI/DeviceSettings.html). Also see community discussions noting Z behaves relatively in

many Current Position scenarios [forum example](https://forum.lightburnsoftware.com/t/how-can-i-use-absolute-z-coordinates-when-starting-from-current-position/74027).

How to fix:
- If you need absolute Z, run from Absolute Coords (or User Origin) instead of Current Position.
- Or keep Current Position, but accept that Z will be relative and set Z Offset/Z Step per Pass to what you want.

2) Z axis is not homed (controller doesn’t know absolute Z=0)
- If Z hasn’t been homed or auto-focused, the controller may assume a huge default Z position (e.g., 3000 mm or 10000 mm). Then any “absolute” Z target produces unexpected motion, so LightBurn (and users) often switch to relative Z to avoid crashes. This can look like “LightBurn is forcing relative.”
- Several Ruida threads explain this: the controller shows a large Z value until homed; using relative Z avoids the problem, or you must home/auto-focus Z first and set the offsets correctly [discussion with screenshots and explanation](http

s://forum.lightburnsoftware.com/t/what-is-happening-with-my-z-axis/87648).

How to fix:
- Home/auto-focus the Z axis before jobs so the controller has a true Z=0, then use absolute Z via Material Height.
- In Ruida: verify Machine Settings (Home Offset, Focus Distance) are correct so Z=0 corresponds to your intended reference after homing [same thread as above](https://forum.lightburnsoftware.com/t/what-is-happening-with-my-z-axis/87648).

3) Running via “Start” vs “Send” on Ruida
- Older LightBurn behavior: when streaming (“Start”) with Material Height, some users saw the bed move by the material thickness every time the job was re-run, i.e., it behaved incrementally. When using “Send” and running from the panel, it moved to the absolute height each time. This looked like “relative Z” despite settings [discussion and dev acknowledgement](https://forum.lightburnsoftware.com/t/z-moves-not-as-expected/12145).
- This has been improved in later versions, but if you’re seeing it, confirm your version and try

“Send” to compare behavior.

How to fix:
- Update LightBurn to the latest version if you’re on an old build.
- Try “Send” and run from the controller; if that honors absolute Z while “Start” doesn’t, you’re hitting the streaming case.

4) Material height = 0 with Relative Z disabled
- Docs warn: if Z is enabled and Relative Z Moves Only is OFF, LightBurn expects a valid Material height; otherwise moves may be unsafe or appear wrong [docs](https://docs.lightburnsoftware.com/UI/DeviceSettings.html).
- If you’re expecting absolute behavior, you must set Material (Cuts/Layers) thickness and ensure the controller’s Z=0 i
