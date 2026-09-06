---
type: Fact
title: # macOS MX Mouse Button 6

source: abacus
session_id: 10bcb57a00
resource: abacu
description: # macOS MX Mouse Button 6

source: abacus
session_id: 10bcb57a00
resource: abacus://conversation/10bcb57a00

# Conversation

- **Session ID:** `10bcb57a00`
- **Source:** abacus.ai
- **Project:** AI Va
resource: agentmemory://memory/mem_mti8qckx_7cd244789d47
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/10bcb57a00"]
timestamp: 2026-09-01T05:42:35.203Z
source: agentmemory
strength: 7
---
# Content

# macOS MX Mouse Button 6

source: abacus
session_id: 10bcb57a00
resource: abacus://conversation/10bcb57a00

# Conversation

- **Session ID:** `10bcb57a00`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-25T14:52:34+00:00
- **Messages:** 2

---

### 👤 User

In macOS how can I find out what is triggering an action when I press button 6 on my MXMouse. It is something in the system intercepting the button.

---

### 🤖 Assistant

To identify what is intercepting button 6 on your MX Master mouse in macOS, you can use a few different diagnostic tools and methods. Button 6 on the MX Master is typically the "Thumb" or "Gesture" button, which is often handled by Logitech's own software or mapped to system-level gestures like Mission Control.

### Diagnostic Tools

The most effective way to see exactly what event is being triggered and which process might be involved is to use an event viewer.

*   **Karabiner-EventViewer**: This is a standalone utility that comes with [Karabiner-Elements](https://karabiner-elements.pqrs.org/). It provides a real-time log of every keyboard and mouse event the system receives. When you press button 6, it will show you the button number (e.g., `button6` or `other mouse button`) and any associated keyboard modifiers or "fake" keys being sent.
*   **Hammerspoon**: If you are comfortable with a bit of scripting, [Hammerspoon](https://www.hammerspoon.org/) can be used to create a "tap" that logs mouse events.

You can use a script to print the button number to the Hammerspoon console whenever a mouse button is pressed, which helps confirm if the OS sees it as a standard button click or a gesture.

### Common Culprits

If you haven't explicitly mapped the button, it is likely being intercepted by one of the following:

*   **Logi Options+ / Logitech Options**: This is the most common interceptor. Even if you haven't set a specific action, the "Logi Options Daemon" often intercepts the thumb button to enable "Gesture" mode. You can try force-quitting the `Logi Options+ Daemon` in **Activity Monitor** to see if the button starts behaving like a standard "Button 6" again.
*   **macOS Mission Control**: By default, macOS sometimes maps extra mouse buttons to Mission Control or App Exposé. Check **System Settings > Desktop & Dock > Mission Control** (at the bottom) to see if any "Mouse Shortcuts" are assigned to extra buttons.
*   **SteerMouse or USB Overdrive**: If you have ever installed third-party mouse drivers,

they may have persistent background daemons that intercept button presses even if the main app isn't open.

### Technical Context

On the MX Master series, the thumb button is unique because it often doesn't send a standard "Button 6" HID signal. Instead, it frequently sends a combination of a "Command" key or a "Three-finger swipe" gesture to the OS. This is why standard mouse testers might not see it as a simple click. Tools like [SensibleSideButtons](https://sensible-side-buttons.archagon.net/) were specifically designed to handle how macOS treats these non-standard side buttons by converting them into proper navigation events.

---
