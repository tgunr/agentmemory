---
type: Fact
title: # Prusa XXL reporting toolchange to tool that is disabled by tool mapping. The g
description: # Prusa XXL reporting toolchange to tool that is disabled by tool mapping. The gco

source: kilo
session_id: 019c1f76-59ef-77ee-956f-a5bbc863afc2
resource: kilo://task/019c1f76-59ef-77ee-956f-a5bbc863
resource: agentmemory://memory/mem_mspe1wet_8e2963172c43
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:06:13.154Z
source: agentmemory
strength: 7
---
# Content

# Prusa XXL reporting toolchange to tool that is disabled by tool mapping. The gco

source: kilo
session_id: 019c1f76-59ef-77ee-956f-a5bbc863afc2
resource: kilo://task/019c1f76-59ef-77ee-956f-a5bbc863afc2

# Conversation

- **Task ID:** `019c1f76-59ef-77ee-956f-a5bbc863afc2`
- **Source:** kilo
- **Started:** 2026-02-02T17:46:15Z
- **Ended:** 2026-02-03T17:13:56Z
- **Message blocks:** 26
- **Tokens:** 955391 in / 4323 out

---

### 👤 User — 2026-02-02T17:46:15Z

Prusa XXL reporting toolchange to tool that is disabled by tool mapping. The gcode should be using tool 1 PLA

### 🤖 Assistant — 2026-02-02T17:46:21Z

<details><summary>Reasoning</summary>

The user is reporting an issue with a Prusa XXL 3D printer where the gcode is reporting tool changes to a tool that is disabled by tool mapping. The gcode should be using tool 1 PLA.

The file path shown is `../../../Volumes/3cl-1/3d/Projects/Plenum Box/Plenum_box.gcode` which is visible in VS Code.

Let me first read the gcode file to understand what's happening with the tool changes. I need to look for:
1. Tool change commands (T0, T1, etc.)
2. Any tool mapping configuration
3. Where the issue might be occurring

Since this is a gcode file, I'll search for T commands (tool changes) to understand the issue.

</details>

### 👤 User — 2026-02-02T17:46:24Z

I'll analyze the gcode file to find the tool change issue. Let me search for tool-related commands in the file.


### 🤖 Assistant — 2026-02-02T17:46:25Z

**Tool call: searchFiles**

```json
{
  "path": "/Volumes/3cl-1/3d/Projects/Plenum Box",
  "regex": "T\\d+",
  "filePattern": "*.gcode",
  "isOutsideWorkspace": true,
  "content": "Found 0 results."
}
```

### 🤖 Assistant — 2026-02-02T17:46:33Z

<details><summary>Reasoning</summary>

The search didn't find any matches. Let me try a different approach - read the first part of the gcode file to see its structure and look for tool-related commands.

</details>

### 👤 User — 2026-02-02T17:46:33Z

Let me read the gcode file directly to examine the tool-related commands:


### 🤖 Assistant — 2026-02-02T17:46:34Z

**Tool call: readFile**

```json
{
  "path": "/Volumes/3cl-1/3d/Projects/Plenum Box/Plenum_box.gcode",
  "isOutsideWorkspace": true,
  "content": "/Volumes/3cl-1/3d/Projects/Plenum Box/Plenum_box.gcode",
  "reason": ""
}
```

### 🤖 Assistant — 2026-02-02T17:46:43Z

<details><summary>Reasoning</summary>

Looking at the gcode file, I can see the tool-related commands. Let me analyze what I found:

1. Line 37: `M862.1 T1 P0.6 A0 F0` - This appears to be a Prusa-specific command for tool configuration
2. Lines 40-43: `M104 T0 S0`, `M104 T1 S0`, `M104 T2 S0`, `M104 T3 S0` - Setting temperatures for all tools to 0 (off)
3. Line 61: `T1 S1 L0 D0` - Selecting tool 1 for MBL (Mesh Bed Leveling)
4. Line 67: `M104 T1 S70` - Setting idle temp for tool 1
5. Line 98: `M104 T1 S215` - Setting printing temp for tool 1
6. Line 126: `T1 S1 L0 D0` - Selecting tool 1 again
7. Line 132: `M109 S215 T1` - Waiting for tool 1 temperature

The gcode uses `T1` (tool 1) throughout, which is correct for PLA. However, the user is reporting that the printer is reporting a toolchange to a tool that is disabled by tool mapping.

The issue likely lies in the PrusaSlicer configuration, not in the gcode itself. The gcode appears to be correctly using tool 1 (T1) for PLA.

This is a PrusaSlicer configuration issue where the tool mapping in the slicer settings is incorrectly configured. The user needs to check:
1. Printer Settings > General > Tool mapping
2. Printer Settings > Extruders - ensure only the tools that should be enabled are configured
3. Print Settings > Filament - ensure the correct filament profile is assigned to the correct tool

The gcode itself looks correct - it's using T1 consistently. The issue is in how PrusaSlicer was configured when generating this gcode.

Let me provide the user with a clear explanation and solution.

</details>

### 👤 User — 2026-02-02T17:46:48Z

I've analyzed the gcode file. The gcode itself appears correct - it uses `T1` (tool 1) consistently throughout for PLA printing. The issue is in your PrusaSlicer configuration, not the generated gcode.

## Analysis

Looking at the fil
