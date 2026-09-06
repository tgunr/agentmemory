---
type: Fact
title: # Snapmaker 2 spindle commands.

source: chatgpt
session_id: bdedb1db-4a9e-48b8-
description: # Snapmaker 2 spindle commands.

source: chatgpt
session_id: bdedb1db-4a9e-48b8-8ea0-58cb46897391
resource: chatgpt://conversation/bdedb1db-4a9e-48b8-8ea0-58cb46897391

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mtj5pbby_e1ee193a878c
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/bdedb1db-4a9e-48b8-8ea0-58cb46897391"]
timestamp: 2026-09-01T21:05:34.266Z
source: agentmemory
strength: 7
---
# Content

# Snapmaker 2 spindle commands.

source: chatgpt
session_id: bdedb1db-4a9e-48b8-8ea0-58cb46897391
resource: chatgpt://conversation/bdedb1db-4a9e-48b8-8ea0-58cb46897391

# Conversation

- **Session ID:** `bdedb1db-4a9e-48b8-8ea0-58cb46897391`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-05-09T16:53:13.236787+00:00
- **Messages:** 4

---

### 👤 User

snapmaker 2 gcode m3 vs m4

---

### 🤖 Assistant

M3 and M4 are both G-code commands that control the spindle direction of the Snapmaker 2, but they have different functions.

The M3 command is used to turn the spindle on in a clockwise direction, also known as the "spindle forward" direction. This is typically used when cutting or machining materials such as wood, metal, or plastic.

The M4 command, on the other hand, is used to turn the spindle on in a counterclockwise direction, also known as the "spindle reverse" direction. This is typically used for tasks such as engraving or polishing, where the tool needs to rotate in the opposite direction.

It's important to note that not all machines or firmware support both M3 and M4 commands, so it's best to consult the Snapmaker 2 documentation to determine which command is appropriate for your specific task.

---

### 👤 User

snapmaker 2 laser gcode m3 vs m4

---

### 🤖 Assistant

In Snapmaker 2, M3 and M4 G-code commands are used to control the laser module's power. However, the specific functionality of M3 and M4 commands for the laser module can depend on the firmware and the laser module itself.

In general, M3 is used to turn on the laser at a specified power level, while M4 is used to modulate the laser's power level. When using M3, the laser will be on at a constant power level, while M4 allows the laser's power level to be adjusted during operation.

It's important to note that not all firmware versions for the Snapmaker 2 support the M4 command for the laser module. In such cases, M3 is used to control the laser's power level. Therefore, it's always a good idea to refer to the Snapmaker 2 documentation and firmware update notes for specific information on the G-code commands available for your particular setup.

---
