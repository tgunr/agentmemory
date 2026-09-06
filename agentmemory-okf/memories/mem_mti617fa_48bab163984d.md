---
type: Fact
title: # Buildbotics Y-Axis Homing Calibration Problem

source: claude
session_id: cbbf
description: # Buildbotics Y-Axis Homing Calibration Problem

source: claude
session_id: cbbf303d-d6a6-4994-a4c4-e8f0cb8d2472
resource: claude://conversation/cbbf303d-d6a6-4994-a4c4-e8f0cb8d2472

# Conversation

-
resource: agentmemory://memory/mem_mti617fa_48bab163984d
tags: ["okf", "okf-claude", "claude", "claude://conversation/cbbf303d-d6a6-4994-a4c4-e8f0cb8d2472"]
timestamp: 2026-09-01T04:27:02.915Z
source: agentmemory
strength: 7
---
# Content

# Buildbotics Y-Axis Homing Calibration Problem

source: claude
session_id: cbbf303d-d6a6-4994-a4c4-e8f0cb8d2472
resource: claude://conversation/cbbf303d-d6a6-4994-a4c4-e8f0cb8d2472

# Conversation

- **Session ID:** `cbbf303d-d6a6-4994-a4c4-e8f0cb8d2472`
- **Source:** claude
- **Started:** 2025-06-14T21:50:18Z
- **Messages:** 10

---

### 👤 User — 2025-06-14T21:50:18Z

Help me figure out why my buildbotics controller Y axis is only going half way during homing? The Y axis should be 32" and I have it set the same as the onefinity controller but at the max setting the screen reads 816mm (correct) but the actual location is 1/2 the Y axis.

---

### 🤖 Assistant — 2025-06-14T21:50:33Z

The user is having an issue with their buildbotics controller where the Y axis is only traveling half the expected distance during homing. They mention:

1. Y axis should be 32" (which is about 812.8mm, so 816mm seems correct)
2. They have it set the same as their Onefinity controller 
3. At max setting, screen reads 816mm (correct)
4. But actual physical location is only half the Y axis

This sounds like a steps per mm calibration issue. If the controller thinks it's moving 816mm but it's only actually moving ~408mm (half), then the steps per mm setting is likely set to half of what it should be.

Common causes for this:
1. Steps per mm setting is incorrect (most likely)
2. Microstepping settings don't match between controllers
3. Motor wiring differences
4. Gear ratio differences
5. Lead screw pitch differences

I should ask some diagnostic questions to help troubleshoot this systematically.This sounds like a classic steps-per-millimeter calibration issue. If your controller thinks it's moving 816mm but it's only physically moving about half that distance, the most likely culprit is that your steps/mm setting is roughly half of what it should be.

Here are the key things to check:

**1. Steps per mm setting:**
- Compare the Y-axis steps/mm value between your Onefinity and Buildbotics controllers
- If the Buildbotics is showing half the physical movement, you likely need to double the steps/mm value

**2. Microstepping configuration:**
- Check if both controllers have the same microstepping settings (1/8, 1/16, 1/32, etc.)
- Different microstepping between controllers would require different steps/mm values

**3. Motor specifications:**
- Verify you're using the same stepper motors (or at least same steps per revolution)
- Standard NEMA steppers are usually 200 steps/rev, but some are 400

**Quick diagnostic test:**
1. Command a small, precise movement (like 10mm) on the Y-axis
2. Measure the actual physical movement with a ruler
3. Calculate the correction factor: (Commanded distance) ÷ (Actual distance) = multiplier for your current steps/mm

**Where to find/change steps per mm:**
In your Buildbotics controller settings, look for motor configuration or axis settings. You'll want to find the Y-axis steps/mm parameter and adjust it based on your measurements.

What steps/mm values are currently set on both your Onefinity and Buildbotics controllers for the Y-axis? That would help pinpoint the exact issue.

---

### 👤 User — 2025-06-14T21:56:47Z

Here are the onefinity defaults for the x50 journeyman and the current buildbotics

_Attachments: onefinity_defaults.json, onefinity_foreman_pro_defaults.json, bbctrl-20250614-215555.json_

_Attachments: onefinity_defaults.json, onefinity_foreman_pro_defaults.json, bbctrl-20250614-215555.json_

---

### 🤖 Assistant — 2025-06-14T21:57:09Z

Now I have the configuration files for both controllers. Let me analyze the Y-axis motor settings to find the issue.

Looking at the Onefinity defaults (from onefinity_defaults.json):
- Y-axis motor: "travel-per-rev": 10
- microsteps: 16
- step-angle: 1.8

For the Foreman Pro (onefinity_foreman_pro_defaults.json):
- travel-per-rev: 16 (this overrides the default of 10)

Looking at the Buildbotics controller (bbctrl-20250614-215555.json):
- Y-axis motor: "travel-per-rev": 16
- microsteps: 16  
- step-angle: 1.8

So both systems have:
- microsteps: 16
- step-angle: 1.8
- travel-per-rev: 16

Wait, but let me double-check the Onefinity settings. The user 
