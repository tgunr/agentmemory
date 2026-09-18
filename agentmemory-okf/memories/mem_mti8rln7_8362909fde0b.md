---
type: Fact
title: # MX Mouse Button Setup

source: abacus
session_id: 2a45eb20
resource: abacus://
description: # MX Mouse Button Setup

source: abacus
session_id: 2a45eb20
resource: abacus://conversation/2a45eb20

# Conversation

- **Session ID:** `2a45eb20`
- **Source:** abacus.ai
- **Project:** AI Vault
- **
resource: agentmemory://memory/mem_mti8rln7_8362909fde0b
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/2a45eb20"]
timestamp: 2026-09-01T05:43:33.630Z
source: agentmemory
strength: 7
---
# Content

# MX Mouse Button Setup

source: abacus
session_id: 2a45eb20
resource: abacus://conversation/2a45eb20

# Conversation

- **Session ID:** `2a45eb20`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-19T11:54:43+00:00
- **Messages:** 2

---

### 👤 User

Im using windows app on macos to access windows 11. I have a MX Mouse and want to program the buttons so they act the same way on windows, how do i do that?

---

### 🤖 Assistant

To program your Logitech MX mouse so that its buttons function correctly while using the Windows App (formerly Remote Desktop) on macOS to access Windows 11, you need to address how the mouse signals are passed from your Mac to the remote Windows environment.

### 1. Install Logi Options+ on macOS
The most reliable way to ensure your mouse buttons are recognized is to install the [Logi Options+ App](https://www.logitech.com/en-us/mx/mx-software.html) on your **macOS** host. 
*   **Why:** The Windows App on Mac often captures standard mouse clicks (Left, Right, Middle) but may not natively "pass through" specialized side buttons or thumb wheels unless they are mapped to keyboard shortcuts that the remote session understands.
*   **Configuration:** In Logi Options+ on your Mac, you can create an **App-specific profile** for the "Windows App" or "Remote Desktop." Instead of assigning buttons to "Back" or "Forward," assign them to **Keyboard Shortcuts**. For example:
    *   Map the "Back" button to `Alt + Left

Arrow`.
    *   Map the "Forward" button to `Alt + Right Arrow`.
    *   Map the "Gesture" button to `Windows Key + Tab` (to trigger Task View in Windows 11).

### 2. Enable Mouse Redirection in the Windows App
For Windows 11 to see the mouse as a "local" device rather than a generic pointer, you may need to ensure the connection settings are correct:
*   Open the **Windows App** on your Mac.
*   Right-click your PC connection and select **Edit**.
*   Go to the **Devices & Resources** tab.
*   Ensure that any relevant boxes for local hardware are checked. While standard mice don't always have a specific toggle here, ensuring the session is in "Full Screen" mode often helps the app capture and redirect extended mouse events more effectively.

### 3. Use Logi Options+ Inside the Windows 11 Session
If you want the exact same "Windows feel" and the ability to use features like **Smart Actions** or specific Windows app profiles (like for Excel or Chrome) *inside* the remote environment, you should also install

[Logi Options+](https://www.logitech.com/en-us/software/options.html) directly on the **Windows 11** guest machine.
*   **Note:** This works best if you are using the **Logi Bolt** or **Unifying Receiver** plugged directly into the Mac (and redirected via the app) rather than Bluetooth, as Bluetooth redirection can sometimes be limited in its ability to pass through complex driver data.

### 4. Alternative: Third-Party Mac Utilities
If Logi Options+ feels too heavy or isn't capturing the buttons correctly for the remote window, many Mac users use lightweight utilities to force the buttons to behave:
*   **[Mac Mouse Fix](https://superuser.com/questions/1140403/utilize-extra-mouse-buttons-in-mac-os-x):** A highly recommended open-source tool that can remap side buttons to standard Windows-friendly shortcuts.
*   **[Sensible Side Buttons](http://sensible-side-buttons.archagon.net/):** A tiny utility that makes side buttons work as "Back" and "Forward" across almost all applications, including remote sessions,

by mimicking the way Windows handles these inputs.

### Summary of Recommended Setup
1.  Install **Logi Options+** on your Mac.
2.  Create a profile for the **Windows App**.
3.  Map your side buttons to **Keyboard Shortcuts** (e.g., `Alt + Left` for back) so the remote Windows OS receives a command it recognizes immediately.
4.  If you use the **Thumb Wheel**, map it to `Ctrl + Tab` or `Shift + Scroll` depending on your preferred Windows behavior.

---
