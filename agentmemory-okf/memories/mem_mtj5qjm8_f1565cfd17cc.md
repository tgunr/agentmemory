---
type: Fact
title: # Set Home Positions Codes

source: chatgpt
session_id: b5f92312-2bef-4dc3-8bea-
description: # Set Home Positions Codes

source: chatgpt
session_id: b5f92312-2bef-4dc3-8bea-9ad21d67e011
resource: chatgpt://conversation/b5f92312-2bef-4dc3-8bea-9ad21d67e011

# Conversation

- **Session ID:** `b
resource: agentmemory://memory/mem_mtj5qjm8_f1565cfd17cc
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/b5f92312-2bef-4dc3-8bea-9ad21d67e011"]
timestamp: 2026-09-01T21:06:31.647Z
source: agentmemory
strength: 7
---
# Content

# Set Home Positions Codes

source: chatgpt
session_id: b5f92312-2bef-4dc3-8bea-9ad21d67e011
resource: chatgpt://conversation/b5f92312-2bef-4dc3-8bea-9ad21d67e011

# Conversation

- **Session ID:** `b5f92312-2bef-4dc3-8bea-9ad21d67e011`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-11-08T09:34:59.513730+00:00
- **Messages:** 4

---

### 👤 User

In the buildbotics firmware what G and or M codes can be used in the MDI to set the home positions without clicking on the Home button.

---

### 🤖 Assistant

In CNC machines, including those that might use Buildbotics firmware, G-code and M-code are the languages used to instruct the machine on what operations to perform. However, the specific codes that are used to set home positions can vary depending on the firmware and the machine's configuration.

For many CNC systems, the following codes are typically used in the context of homing and setting home positions:

- `G28`: Return to home position. This command moves the machine to its home position, which is a predefined and fixed location on each axis. This is not setting a new home position but rather returning to the already defined home position.
- `G92`: Set Position. This command allows you to redefine the current position of the machine without moving it. For example, `G92 X0 Y0 Z0` would set the current position to be the new origin for all axes.

However, these are general codes, and the Buildbotics controller might use different codes or have additional specific instructions for setting the home position through the Manual Data Input (MDI). It's important to consult the Buildbotics firmware documentation or the manual for your specific machine to find the exact codes and procedures.

If you're looking for specific plugins or extensions that can help with this process or provide additional functionality for the Buildbotics firmware, I can assist with that as well. Would you like me to search for plugins related to Buildbotics firmware?

---

### 👤 User

yes

---

### 🤖 Assistant

It seems there was an issue accessing the plugin to search for information related to Buildbotics firmware and related plugins. Unfortunately, without access to the plugin, I'm unable to perform the search for you.

However, you can often find plugins or additional tools for CNC controllers like Buildbotics by:

1. Visiting the official Buildbotics website or GitHub repository, where they may list compatible plugins or extensions.
2. Searching in forums or communities dedicated to CNC machining, where users often share tools and tips.
3. Looking for third-party developers who specialize in creating plugins for CNC software.

If you have any other questions or need further assistance, feel free to ask!

---
