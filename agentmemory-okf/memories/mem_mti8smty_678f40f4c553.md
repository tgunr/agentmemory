---
type: Fact
title: # Setting Origin in LightBurn

source: abacus
session_id: 9957ac030
resource: ab
description: # Setting Origin in LightBurn

source: abacus
session_id: 9957ac030
resource: abacus://conversation/9957ac030

# Conversation

- **Session ID:** `9957ac030`
- **Source:** abacus.ai
- **Project:** AI V
resource: agentmemory://memory/mem_mti8smty_678f40f4c553
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/9957ac030"]
timestamp: 2026-09-01T05:44:21.814Z
source: agentmemory
strength: 7
---
# Content

# Setting Origin in LightBurn

source: abacus
session_id: 9957ac030
resource: abacus://conversation/9957ac030

# Conversation

- **Session ID:** `9957ac030`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-10-08T19:49:38+00:00
- **Messages:** 10

---

### 👤 User

In lightburn v2 where do you set the origin for camera alignment wizard for burning the index markers?

---

### 🤖 Assistant

In LightBurn v2, the camera alignment “index markers” are burned relative to your current device origin and the machine’s homed coordinate system. You don’t set a special origin inside the Camera Alignment Wizard itself—the wizard assumes your normal workspace origin.

Here’s how to ensure the markers burn in the right spot:

1) Choose the correct device origin in Device Settings
- Go to Edit > Device Settings.
- Set the Origin (the colored corner buttons) to match your machine’s actual home corner (commonly front-left for many GRBL and back-right for many Ruida, but use whatever your controller homes to).
- Click OK.

2) Home the machine first
- Power on and home the laser so the controller knows absolute coordinates.
- Don’t jog after starting the wizard unless instructed; consistency matters.

3) Use the Camera Alignment Wizard
- Tools > Camera Alignment Wizard.
- Pick your material size and lens type.
- The wizard will place the index markers near the center area of your bed (within the camera view)

based on your current device origin/coordinates.

4) If markers are off your material
- Put a sacrificial sheet that covers the intended burn area.
- Ensure your camera is mounted, focused, and sees the bed.
- If needed, adjust the test pattern position by moving the job origin (Start From = Absolute Coords is recommended during calibration) or by temporarily jogging the head, then restart the wizard.

Key settings that affect where the markers burn:
- Start From: Use “Absolute Coords” during camera calibration so LightBurn sends the pattern to fixed bed coordinates.
- Device Origin: Must match your controller’s homing corner.
- Bed size: Must match your machine in Device Settings so the pattern lands within the camera view.

If you’re unsure of your controller’s true origin, do this quick check:
- Home the machine, set Start From = Absolute Coords, draw a small square at X=10, Y=10, and frame it. The head should move to the near-origin corner. If it goes to the wrong side, your Origin setting is flipped—

change it in Device Settings and try again.

---

### 👤 User

In Lightburn version 2, when I issue a move command or go to origin, the X and Y values are echoed back, but there is no G0 or G1 in front of it. What's going on here?

---

### 🤖 Assistant

Short answer: It’s normal. LightBurn v2 changed how it reports/jogs for some controllers. You’re seeing “bare” X/Y values because LightBurn is sending a controller‑specific move (or using a preselected modal move), so the console echoes only the coordinates without an explicit G0/G1 prefix.

Why you might see this:
- Modal G-code: On GRBL/Marlin-style firmware, once G0 (rapid) or G1 (linear) is set, it stays “modal.” Subsequent moves can be sent as just X/Y/F, and the controller applies the last active mode. Many senders (including newer LightBurn builds) rely on this and don’t repeat G0/G1 every line.
- Controller-native commands: Ruida/Trocen/TopWisdom and some DSPs don’t speak raw G-code; LightBurn talks to them with their own protocol. The console shows position/move echoes as coordinates rather than literal G0/G1 commands.
- UI jog/move vs. job G-code: The jog panel often uses streamlined commands for responsiveness. When you actually run a job to a G-code device and save/export the G-code, you’ll see

G0/G1 in the generated file.

How to verify everything’s fine:
- For G-code devices, try File > Save GCode for a small shape. Open the file—you should see proper G0/G1 and feeds there.
- In the Move panel, change Jog Mode or Speed, then jog again; behavior should be consistent.
- On GRBL, you can query modal state with $G in the Console. You’ll get someth
