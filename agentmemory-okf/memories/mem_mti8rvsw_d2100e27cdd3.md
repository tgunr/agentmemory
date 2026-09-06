---
type: Fact
title: # Circular Vacuum Nozzle

source: abacus
session_id: 4eb7b1570
resource: abacus:
description: # Circular Vacuum Nozzle

source: abacus
session_id: 4eb7b1570
resource: abacus://conversation/4eb7b1570

# Conversation

- **Session ID:** `4eb7b1570`
- **Source:** abacus.ai
- **Project:** AI Vault

resource: agentmemory://memory/mem_mti8rvsw_d2100e27cdd3
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/4eb7b1570"]
timestamp: 2026-09-01T05:43:46.774Z
source: agentmemory
strength: 7
---
# Content

# Circular Vacuum Nozzle

source: abacus
session_id: 4eb7b1570
resource: abacus://conversation/4eb7b1570

# Conversation

- **Session ID:** `4eb7b1570`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-10-07T21:39:29+00:00
- **Messages:** 4

---

### 👤 User

What is the name of an object that is circular to fit around a hose and then tapers down to a flattened horizontal shape such as a vacuum cleaner nozzle?

---

### 🤖 Assistant

That sounds like a **crevice tool** or a **hose adapter** for a vacuum cleaner. A crevice tool is typically long and narrow, tapering to a flattened end to reach tight spaces. A hose adapter would be used to connect a hose of one diameter to an attachment with a different diameter, and some might have a flattened end for specific cleaning tasks.

---

### 👤 User

In Snapmaker 2, how do I find the machine coordinates of the current location?

---

### 🤖 Assistant

On a Snapmaker 2.0 (A150/A250/A350), you can get the machine (absolute) coordinates a few different ways, depending on whether you’re using the touchscreen, Luban, or a serial console.

Here are the most reliable methods:

- From the Touchscreen (Console)
  1. Home the machine first (recommended) so machine coordinates are defined: Controls > Home.
  2. Go to Console on the touchscreen.
  3. Send the G-code command: M114
  4. The reply shows current positions. Look for the machine/absolute values (often reported as X:, Y:, Z: along with “WPos”/“MPos” depending on firmware build). If it shows only work coordinates, use G53 to force machine space moves, but M114 typically reports both.

- From Luban (via Serial Console)
  1. Connect to the machine in Luban.
  2. Open the Console (bottom panel).
  3. Type: M114 and press Enter.
  4. Read the returned X/Y/Z. Some firmware prints both Work Position (WPos) and Machine Position (MPos). Machine Position is what you want.

- Using Work vs Machine coordinates

explicitly
  - G53 selects machine coordinate space for a motion command, but it doesn’t print coordinates by itself.
  - G90/G91 set absolute/relative mode for work coordinates, not machine coordinates.
  - If you only get WPos (work coordinates) and you know your current work offset (G54…G59), you can compute MPos:
    MPos = WPos + Work Offset
  - To see the current active offsets, send: G54 (to select) and then M114 or query offsets with: M428 (set home offset) is different; for reporting, many Marlin builds support M503 to dump current settings including offsets (look for G54/G92 values). On Snapmaker, M503 often shows steps, max feedrates, etc., but not always work offsets—your mileage may vary.

- Quick tips
  - Always Home after power-up. Without homing, machine coordinates are undefined.
  - If M114 output is cluttered, run it twice after the machine is idle to get a clean read.
  - Some Snapmaker firmware variants report: “X: Y: Z: E:” and “Count X: Y: Z:” lines. The first line is typically the

logical position; the “Count” line reflects internal step counts. Use the main X/Y/Z readout as your machine coordinates when no work offset is active.

Example:
- Send M114
- Response might look like:
  X:120.00 Y:85.50 Z:35.00 E:0.00 Count X:9600 Y:6840 Z:2800
  Here, X/Y/Z are your current positions in mm (machine space if no work offset is applied).

If you tell me how you’re connected (touchscreen only vs. Luban/USB), I can give you the exact taps/clicks and what the output will look like on your firmware.

---
