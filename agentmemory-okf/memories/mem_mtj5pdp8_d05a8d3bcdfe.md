---
type: Fact
title: # PLA Temp Test - GCode

source: chatgpt
session_id: 59347387-1c9b-4ad1-8c97-844
description: # PLA Temp Test - GCode

source: chatgpt
session_id: 59347387-1c9b-4ad1-8c97-844f0076ae51
resource: chatgpt://conversation/59347387-1c9b-4ad1-8c97-844f0076ae51

# Conversation

- **Session ID:** `5934
resource: agentmemory://memory/mem_mtj5pdp8_d05a8d3bcdfe
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/59347387-1c9b-4ad1-8c97-844f0076ae51"]
timestamp: 2026-09-01T21:05:37.319Z
source: agentmemory
strength: 7
---
# Content

# PLA Temp Test - GCode

source: chatgpt
session_id: 59347387-1c9b-4ad1-8c97-844f0076ae51
resource: chatgpt://conversation/59347387-1c9b-4ad1-8c97-844f0076ae51

# Conversation

- **Session ID:** `59347387-1c9b-4ad1-8c97-844f0076ae51`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-06-11T20:57:36.161014+00:00
- **Messages:** 2

---

### 👤 User

create a gcode file for the prusa mk4 that tests the temperature range for a PLA filament

---

### 🤖 Assistant

Certainly! Below is an example of a G-code file that can be used to test the temperature range for a PLA filament on the Prusa MK4 3D printer:

```
; G-code for PLA temperature range test
; Adjust the values below according to your specific needs

M107 ; Turn off fan

; Preheat the nozzle to the starting temperature
M104 S160 ; Set nozzle temperature to 160°C
M140 S60 ; Set bed temperature to 60°C
M109 S160 ; Wait for nozzle temperature to reach 160°C
M190 S60 ; Wait for bed temperature to reach 60°C

G92 E0 ; Zero the extruder

; Test temperature range in increments of 10°C
M104 S160 ; Set nozzle temperature to starting temperature
M109 S160 ; Wait for nozzle temperature to reach starting temperature

; Test lower temperature range
M106 S255 ; Turn on fan at maximum speed
G1 E10 ; Extrude 10mm of filament
G92 E0 ; Zero the extruder
G1 E-100 F300 ; Retract 100mm of filament at 300mm/min
G92 E0 ; Zero the extruder
M106 S0 ; Turn off fan

; Test higher temperature range
M104 S250 ; Set nozzle temperature to higher temperature
M109 S250 ; Wait for nozzle temperature to reach higher temperature

M106 S255 ; Turn on fan at maximum speed
G1 E10 ; Extrude 10mm of filament
G92 E0 ; Zero the extruder
G1 E-100 F300 ; Retract 100mm of filament at 300mm/min
G92 E0 ; Zero the extruder
M106 S0 ; Turn off fan

; Test maximum temperature
M104 S260 ; Set nozzle temperature to maximum temperature
M109 S260 ; Wait for nozzle temperature to reach maximum temperature

M106 S255 ; Turn on fan at maximum speed
G1 E10 ; Extrude 10mm of filament
G92 E0 ; Zero the extruder
G1 E-100 F300 ; Retract 100mm of filament at 300mm/min
G92 E0 ; Zero the extruder
M106 S0 ; Turn off fan

M104 S0 ; Turn off nozzle heater
M140 S0 ; Turn off bed heater
G92 E0 ; Zero the extruder
G28 ; Home all axes
```

Please note that the temperatures used in this example are just placeholders. You should adjust the temperature settings to match the temperature range you want to test. Additionally, make sure to follow safety guidelines and manufacturer recommendations while performing any temperature-related tests.

---
