---
type: Fact
title: # Laser Power Settings Comparison

source: abacus
session_id: 15227ae9f1
resourc
description: # Laser Power Settings Comparison

source: abacus
session_id: 15227ae9f1
resource: abacus://conversation/15227ae9f1

# Conversation

- **Session ID:** `15227ae9f1`
- **Source:** abacus.ai
- **Project:
resource: agentmemory://memory/mem_mti8r1ol_ffc4defbd25b
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/15227ae9f1"]
timestamp: 2026-09-01T05:43:07.741Z
source: agentmemory
strength: 7
---
# Content

# Laser Power Settings Comparison

source: abacus
session_id: 15227ae9f1
resource: abacus://conversation/15227ae9f1

# Conversation

- **Session ID:** `15227ae9f1`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-12T22:19:07+00:00
- **Messages:** 4

---

### 👤 User

If I have a 44w laser running at 12000 mm/min 30% power what settings for at 24 w laser for same power output

---

### 🤖 Assistant

To achieve the same power output and material interaction with a 24W laser as you do with your 44W laser at 12,000 mm/min and 30% power, you have two primary options depending on whether you prefer to keep your speed or your power percentage constant.

#### Option 1: Keep the Speed (12,000 mm/min)
If you want to maintain the same production speed, you must increase the power percentage on the 24W machine to compensate for the lower wattage.
*   **New Power Setting:** 55%
*   **Speed:** 12,000 mm/min

#### Option 2: Keep the Power Percentage (30%)
If you prefer to keep the laser running at 30% power (perhaps to extend tube life or maintain a specific spot characteristic), you must slow down the machine.
*   **Power:** 30%
*   **New Speed Setting:** ~6,545 mm/min

#### The Math Behind the Adjustment
The goal is to maintain the same "Energy Density" delivered to the material. Your current setup (44W at 30%) results in an effective output of 13.2W. To get that same 13.2W from a 24W source, the calculation

is:
$$13.2 / 24 = 0.55 \text{ (or 55\%)}$$

If you choose to change the speed instead, you use the ratio of the laser strengths:
$$12,000 \times (24 / 44) \approx 6,545 \text{ mm/min}$$

**Note:** While these calculations provide the mathematical equivalent, different laser modules may have different focal spot sizes or beam profiles. It is always recommended to run a small power/speed test grid on a scrap piece of material when switching between machines to fine-tune the results.

---

### 👤 User

now I have 6000 mm/min at 20% I want to slow it to 3000 mm/min with 2 passes

---

### 🤖 Assistant

To achieve the same total energy delivery while slowing down to 3,000 mm/min and using 2 passes, you would need to drop your power significantly.

#### New Settings
*   **Speed:** 3,000 mm/min
*   **Power:** 5%
*   **Passes:** 2

#### Why the power drops so much
When you cut the speed in half (from 6,000 to 3,000), you are already doubling the amount of time the laser spends on any given spot, which effectively doubles the energy. By then adding a second pass, you are doubling that energy again. 

To keep the total energy the same as your original setting:
1.  Slowing to 3,000 mm/min would require 10% power for 1 pass.
2.  Adding a second pass means you must split that 10% across two runs, resulting in **5% power**.

**A Note on Laser Thresholds:** Many diode and CO2 lasers have a "firing threshold" (often between 3% and 8%). If 5% is too low for your specific laser to fire consistently, you may need to increase the speed or stick to a single pass at 10% power.

---
