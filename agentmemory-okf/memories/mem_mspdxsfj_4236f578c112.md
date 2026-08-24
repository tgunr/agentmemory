---
type: Fact
title: # compare custom.gcode with reprint.gcode, the reprint is not setting bed temper
description: # compare custom.gcode with reprint.gcode, the reprint is not setting bed temperat

source: kilo
session_id: 019c252f-d779-71d9-b021-1c0d15376c28
resource: kilo://task/019c252f-d779-71d9-b021-1c0d1537
resource: agentmemory://memory/mem_mspdxsfj_4236f578c112
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:03:01.389Z
source: agentmemory
strength: 7
---
# Content

# compare custom.gcode with reprint.gcode, the reprint is not setting bed temperat

source: kilo
session_id: 019c252f-d779-71d9-b021-1c0d15376c28
resource: kilo://task/019c252f-d779-71d9-b021-1c0d15376c28

# Conversation

- **Task ID:** `019c252f-d779-71d9-b021-1c0d15376c28`
- **Source:** kilo
- **Started:** 2026-02-03T20:26:58Z
- **Ended:** 2026-02-03T21:21:23Z
- **Message blocks:** 8
- **Tokens:** 198942 in / 3345 out

---

### 👤 User — 2026-02-03T20:26:58Z

compare custom.gcode with reprint.gcode, the reprint is not setting bed temperature when in the aborbing heat phase

### 🤖 Assistant — 2026-02-03T20:27:03Z

<details><summary>Reasoning</summary>

The user wants to compare two gcode files to find why reprint.gcode isn't setting bed temperature during the "absorbing heat phase". I need to read both files to compare them.

The files are:
- custom.gcode (the working version)
- reprint.gcode (the problematic version)

Both are in the path: ../../../../3cl/3d/Projects/Plenum Box/

I should read both files to compare them and identify the difference in the absorbing heat phase.

</details>

### 🤖 Assistant — 2026-02-03T20:27:07Z

**Tool call: readFile**

```json
{
  "batchFiles": [
    {
      "path": "/Volumes/3cl/3d/Projects/Plenum Box/custom.gcode",
      "lineSnippet": "",
      "isOutsideWorkspace": true,
      "key": "/Volumes/3cl/3d/Projects/Plenum Box/custom.gcode",
      "content": "/Volumes/3cl/3d/Projects/Plenum Box/custom.gcode"
    },
    {
      "path": "/Volumes/3cl/3d/Projects/Plenum Box/reprint.gcode",
      "lineSnippet": "",
      "isOutsideWorkspace": true,
      "key": "/Volumes/3cl/3d/Projects/Plenum Box/reprint.gcode",
      "content": "/Volumes/3cl/3d/Projects/Plenum Box/reprint.gcode"
    }
  ]
}
```

### 🤖 Assistant — 2026-02-03T20:27:13Z

<details><summary>Reasoning</summary>

The user is asking me to compare two G-code files to find why `reprint.gcode` isn't setting bed temperature during the "absorbing heat phase".

Looking at the two files, I can see the key difference. Let me analyze the relevant sections:

**custom.gcode (working version):**
- Line 26: `M140 S[first_layer_bed_temperature] ; set bed temp`
- Line 28: `M109 T{initial_tool} S{...} ; wait for temp`
- Line 46: `M104 T{initial_tool} S{...} ; set idle temp`
- Line 47: `M190 S[first_layer_bed_temperature] ; wait for bed temp`
- Line 49: `G29 G ; absorb heat`

**reprint.gcode (problematic version):**
- Line 26: `M140 S[first_layer_bed_temperature] ; set bed temp`
- Line 28: `M109 T{initial_tool} S{first_layer_temperature[initial_tool]} ; wait for temp`
- Line 45: `M104 T{initial_tool} S{...} ; set idle temp`
- Line 46: `M190 S[first_layer_bed_temperature] ; wait for bed temp`
- Line 48: `G29 G ; absorb heat`

Wait, let me look more carefully at both files. The bed temp is set at line 26 with `M140 S[first_layer_bed_temperature]` in both files. Then at line 46/47, there's `M190 S[first_layer_bed_temperature] ; wait for bed temp` in both files.

The `M190` command waits for the bed to reach the target temperature. But then the issue is that during the `G29 G` command (absorb heat), the bed temperature might be lost or not maintained.


I'll investigate the subtle variations in temperature control between the two files. The Prusa MK4 and MK3.9S have nuanced heat management behaviors that could impact bed temperature maintenance. I need to trace how the bed temperature is set and preserved during different G-code operations.

The reprint.gcode seems to have an incomplete initial temperature setting. There's a potential issue with line 28 where the temperature command might be truncated. I'll examine the full command sequence carefully to understand any interruptions in temperature regulation.

The heat absorption phase appears to have a specific sequence: setting bed temperature, heating the tool, homing, setting idle temperature, waiting for bed heat, and then performing the absorb heat command. Something in this sequence might be disrupting the temperature stability.

The key observation is that the bed temperature wait command (M190) happens before the heat absorption (G29 G), which could create a timing or thermal equilibrium problem. When G
