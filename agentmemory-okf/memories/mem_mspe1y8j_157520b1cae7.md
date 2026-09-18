---
type: Fact
title: # Explain the following code from file path reprint.gcode:41-42   ``` M104 T{ini
description: # Explain the following code from file path reprint.gcode:41-42   ``` M104 T{initi

source: kilo
session_id: 019c28ca-5d00-74a8-9b2d-3cc97e385e80
resource: kilo://task/019c28ca-5d00-74a8-9b2d-3cc97e38
resource: agentmemory://memory/mem_mspe1y8j_157520b1cae7
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:06:15.514Z
source: agentmemory
strength: 7
---
# Content

# Explain the following code from file path reprint.gcode:41-42   ``` M104 T{initi

source: kilo
session_id: 019c28ca-5d00-74a8-9b2d-3cc97e385e80
resource: kilo://task/019c28ca-5d00-74a8-9b2d-3cc97e385e80

# Conversation

- **Task ID:** `019c28ca-5d00-74a8-9b2d-3cc97e385e80`
- **Source:** kilo
- **Started:** 2026-02-04T13:14:37Z
- **Ended:** 2026-02-04T13:16:06Z
- **Message blocks:** 5
- **Tokens:** 75584 in / 1027 out

---

### 👤 User — 2026-02-04T13:14:37Z

Explain the following code from file path reprint.gcode:41-42


```
M104 T{initial_tool} S{first_layer_temperature[initial_tool]} ; wait for temp

```

Please provide a clear and concise explanation of what this code does, including:
1. The purpose and functionality
2. Key components and their interactions
3. Important patterns or techniques used

### 🤖 Assistant — 2026-02-04T13:14:44Z

<details><summary>Reasoning</summary>

The user is asking me to explain a specific line of G-code from a file called `reprint.gcode`. The line is:

```
M104 T{initial_tool} S{first_layer_temperature[initial_tool]} ; wait for temp
```

This is a G-code command used in 3D printing. Let me analyze what this does:

1. `M104` - This is a standard G-code command that sets the extruder temperature
2. `T{initial_tool}` - This is a placeholder/variable that gets replaced with the tool number (T0, T1, etc.)
3. `S{first_layer_temperature[initial_tool]}` - This sets the temperature, using another variable that looks up the first layer temperature for the specified tool
4. The semicolon starts a comment saying "wait for temp"

This is clearly a template variable syntax (like Jinja2 or similar) that gets processed by a slicer or pre-processor before being sent to the 3D printer.

I should provide a clear explanation of:
1. The purpose and functionality
2. Key components and their interactions
3. Important patterns or techniques used

Let me write a clear explanation.

</details>

### 👤 User — 2026-02-04T13:14:47Z

This G-code command sets the extruder temperature for a 3D printer.

## Explanation

**`M104 T{initial_tool} S{first_layer_temperature[initial_tool]} ; wait for temp`**

### 1. Purpose and Functionality

This command instructs the 3D printer to heat the extruder (hotend) to a specific temperature for the initial tool before printing begins. The `M104` command is a standard G-code instruction that sets the target temperature without waiting for it to be reached (unlike `M109` which waits).

### 2. Key Components

| Component | Description |
|-----------|-------------|
| `M104` | G-code command to set extruder temperature |
| `T{initial_tool}` | Placeholder for the initial tool/extruder number (e.g., T0, T1) |
| `S{first_layer_temperature[initial_tool]}` | Placeholder for the first layer temperature value specific to that tool |
| `; wait for temp` | Comment indicating the purpose |

### 3. Patterns and Techniques Used

- **Template Variables**: The `{variable}` syntax suggests this G-code is generated from a template (likely by a slicer like PrusaSlicer or Cura)
- **Array Lookup**: `first_layer_temperature[initial_tool]` demonstrates accessing a temperature value from an array/dictionary indexed by tool number
- **Tool-Based Configuration**: Supports multi-extruder setups where each tool can have different temperature settings
- **Comment Documentation**: The semicolon comment helps maintainers understand the code's intent

This is typically found at the start of a print job to ensure the extruder reaches the correct temperature before the print begins.

### 🤖 Assistant — 2026-02-04T13:16:00Z

<details><summary>Reasoning</summary>

The user asked me to explain code from reprint.gcode lines 41-42. I provided an explanation but didn't use a tool. Since I've already explained the code directly in my response (which answered their question completely), I should use the attempt_completion tool to present the result.

</details>

### 🤖 Assistant — 2026-02-04T13:16:01Z

## G-code Command Explanation

**`M104 T{initial_tool} S{first_layer_temperature[initial_tool]} ; wait for temp`**

### Purpose and Functionality
This G-code command sets the extruder (hotend) temperature for the initial tool before 3D p
