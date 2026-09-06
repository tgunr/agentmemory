---
type: Fact
title: # Lightburn Settings for CNC

source: abacus
session_id: 12ce276bf7
resource: ab
description: # Lightburn Settings for CNC

source: abacus
session_id: 12ce276bf7
resource: abacus://conversation/12ce276bf7

# Conversation

- **Session ID:** `12ce276bf7`
- **Source:** abacus.ai
- **Project:** AI
resource: agentmemory://memory/mem_mti8qos7_3338d84acaea
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/12ce276bf7"]
timestamp: 2026-09-01T05:42:51.045Z
source: agentmemory
strength: 7
---
# Content

# Lightburn Settings for CNC

source: abacus
session_id: 12ce276bf7
resource: abacus://conversation/12ce276bf7

# Conversation

- **Session ID:** `12ce276bf7`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-05T10:24:09+00:00
- **Messages:** 2

---

### 👤 User

In lightburn what should these settings be set to for a onefinity Foreman CNC machine?

---

### 🤖 Assistant

For a **Onefinity Foreman CNC** machine (both the Original/Pro and Elite series), the "Additional Settings" in LightBurn are primarily used to synchronize the software's internal simulation with your machine's actual physical capabilities. These settings do not change how your machine moves, but they ensure that the "Estimated Time" in the preview window is accurate.

Based on official Onefinity documentation and device profiles, here are the recommended values for your machine:

### Recommended Simulation Settings

| Setting | Recommended Value | Notes |
| :--- | :--- | :--- |
| **Maximum Speed X/Y** | **12000.0 mm/min** | This matches the standard rapid travel speed of the Foreman. |
| **Cut Acceleration X/Y** | **1000.0 mm/sec²** | CNC machines typically have lower acceleration than dedicated lasers to handle the weight of the spindle. |
| **Engrave Acceleration X/Y** | **1000.0 mm/sec²** | Keep this consistent with cut acceleration for accurate timing. |
| **Rapid Speed** | **8000.0 mm/min** | This is a

safe "travel" speed between cuts. |
| **Corner Accuracy** | **0.010 mm** | Standard default for GRBL-based controllers. |
| **Minimum Corner Speed** | **1.00 mm/sec** | Standard default. |

### Important Setup Steps
Instead of manually entering every value, it is highly recommended to use the official **.lbdev** device profiles provided by Onefinity. This ensures all tabs (not just Additional Settings) are configured correctly for your specific controller.

1.  **Download the Profile**: Go to the [Onefinity Forum Device Profiles](https://forum.onefinitycnc.com/t/lightburn-device-profiles-for-all-series/11585) and download the `Foreman | Onefinity Original-Pro Foreman.lbdev` (for Buildbotics) or `Foreman | Onefinity Elite Foreman.lbdev` (for Masso).
2.  **Import to LightBurn**: In LightBurn, go to the **Devices** window, click **Import**, and select the file you downloaded.
3.  **Read From Controller**: If your machine is currently connected via USB/Ethernet, you can click the **Read From Controller** button

shown in your screenshot. This will pull the actual acceleration and speed limits directly from your Onefinity's firmware into these fields automatically.

### Additional Configuration Tips
*   **Controller Type**: Ensure your device is set to **GRBL-M3** (for Classic/Pro machines) or the specific Masso profile if you have an Elite machine [J Tech Photonics](https://jtechphotonics.com/?page_id=20454).
*   **S-Value Max**: In the "Device Settings" tab (next to the one in your photo), ensure **S-Value Max** is set to **1000**. This must match the "Max-spin" setting on your Onefinity controller for power levels to be accurate.
*   **Scanning Offset**: Because CNC gantries are heavier than laser gantries, you may notice "ghosting" or jagged edges during high-speed engraving. If this happens, you will need to enable **Scanning Offset Adjustment** in the Device Settings to compensate for the mechanical lag.

---
