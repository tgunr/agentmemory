---
type: Fact
title: # Supermicro Server Won't Power On

source: abacus
session_id: afd82b168
resourc
description: # Supermicro Server Won't Power On

source: abacus
session_id: afd82b168
resource: abacus://conversation/afd82b168

# Conversation

- **Session ID:** `afd82b168`
- **Source:** abacus.ai
- **Project:**
resource: agentmemory://memory/mem_mti8sur1_a84bc85a969b
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/afd82b168"]
timestamp: 2026-09-01T05:44:32.044Z
source: agentmemory
strength: 7
---
# Content

# Supermicro Server Won't Power On

source: abacus
session_id: afd82b168
resource: abacus://conversation/afd82b168

# Conversation

- **Session ID:** `afd82b168`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-03-24T21:48:28+00:00
- **Messages:** 2

---

### 👤 User

Supermicro SuperStorage 6048R-E1CR36N I shut down this server to move it and now I have plugged back in the power supply. The power supply lights are both on on both power supplies, but pressing the power on button does nothing.

---

### 🤖 Assistant

It is common for Supermicro servers like the **SuperStorage 6048R-E1CR36N** to experience a "no-power" state after being moved, even if the power supply LEDs are green. This usually indicates that the standby power is present, but the system is failing to initiate the full power-on sequence.

Based on the [Supermicro 6048R-E1CR36N User Manual](https://www.manualslib.com/manual/2259435/Supermicro-6048r-E1cr36n.html), here are the troubleshooting steps to resolve this:

#### 1. Check the Control Panel Connection
During a move, the internal ribbon cable connecting the front control panel (where the power button is) to the motherboard can become loose.
*   Open the chassis cover.
*   Locate the **JF1** header on the motherboard (X10DRi-T4+).
*   Ensure the ribbon cable from the front panel is securely seated. If it looks connected, unplug and replug it to ensure a firm contact.

#### 2. Use the IPMI Web Interface
Since your power supply lights are on, the BMC (Baseboard Management Controller) should be active.
*

Connect a network cable to the dedicated **IPMI LAN port** on the back of the server.
*   Access the IPMI web interface from another computer using the server's IP address.
*   Navigate to **Remote Control > Power Control** and try to "Power On" the system from there. If this works, your physical power button or its cable is likely faulty.

#### 3. Reseat Components
Vibrations during a move can cause components to shift slightly, triggering a safety "no-start" condition.
*   **Power Supplies:** Pull both power supplies out slightly and slide them back in until they click firmly.
*   **Memory/Cards:** If the server still won't start, try reseating the RAM modules and any PCIe add-on cards. A slightly unseated card can prevent the motherboard from completing the power-up handshake.

#### 4. Clear the CMOS
If the BIOS has entered a hung state due to the power cycle:
*   Unplug both power cables.
*   Locate the CMOS battery on the motherboard and remove it for 30 seconds, or use the **JBT1** jumper (contacting

the two pads with a screwdriver) to reset the CMOS.
*   Plug the power back in and wait 1-2 minutes for the BMC to heartbeat (look for a blinking green LED on the motherboard) before pressing the power button.

#### 5. Check for "Power Fail" LED
Look at the front control panel. If the **Power Fail LED** (usually indicated by a lightning bolt or red icon) is lit or blinking, it indicates a power distribution issue within the chassis rather than a button failure.

If none of these steps work, you may want to try a "Minimum to POST" configuration by removing all but one CPU and one stick of RAM to see if the system will trigger.

---
