---
type: Fact
title: # Laser Settings Advice

source: abacus
session_id: 15e4fc7316
resource: abacus:
description: # Laser Settings Advice

source: abacus
session_id: 15e4fc7316
resource: abacus://conversation/15e4fc7316

# Conversation

- **Session ID:** `15e4fc7316`
- **Source:** abacus.ai
- **Project:** AI Vaul
resource: agentmemory://memory/mem_mti8r7f9_b5ec4768a2a6
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/15e4fc7316"]
timestamp: 2026-09-01T05:43:15.196Z
source: agentmemory
strength: 7
---
# Content

# Laser Settings Advice

source: abacus
session_id: 15e4fc7316
resource: abacus://conversation/15e4fc7316

# Conversation

- **Session ID:** `15e4fc7316`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-05T11:12:22+00:00
- **Messages:** 16

---

### 👤 User

In lightburn these settings were used to make a test of a 40-60 watt laser but I have a 64 watt laser on a onefinity which can only go 12600 mm/m. What should the settings be for this setup?

---

### 🤖 Assistant

To adapt these settings for your Onefinity CNC with a 64W laser and a maximum speed of 12,600 mm/m, we need to scale the power levels to compensate for the slower travel speed. Since your laser is slightly more powerful (64W vs. the 40-60W range), but your speed is significantly capped, we will use the "Power Scaling" method to maintain similar energy density (Joules per mm).

The original "E Test 1" used 30,000 mm/m at 100% power. Since your machine can only reach 12,600 mm/m, running at that speed with 100% power would result in a much deeper/darker burn than intended.

#### Adjusted Fill Settings (Engraving)
For the Fill tests, we will cap the speed at your maximum (12,600 mm/m) and reduce the power proportionally.

*   **E Test 1:** 12,600 mm/m at 40% Power (Equivalent to the original high-speed pass).
*   **E Test 2:** 12,600 mm/m at 50% Power.
*   **E Test 3:** 12,600 mm/m at 65% Power.
*   **E Test 4:** 12,000 mm/m at 100% Power (This matches the original energy density closely).

#### Adjusted Line

Settings (Cutting/Vector)
Most of your Line tests (Test 1 through Test 8) are already within your speed range, but because your 64W laser is likely more efficient than the 40W baseline, you should adjust as follows:

*   **Test 1:** 12,000 mm/m at 90% Power.
*   **Test 2:** 9,000 mm/m at 90% Power.
*   **Test 3:** 6,000 mm/m at 90% Power.
*   **Test 4:** 4,800 mm/m at 90% Power.
*   **Test 5:** 3,600 mm/m at 90% Power.
*   **Test 6:** 1,800 mm/m at 90% Power.
*   **Test 7:** 1,200 mm/m at 90% Power.
*   **Test 8:** 600 mm/m at 90% Power.

#### General Utility Settings
*   **Score:** 4,800 mm/m at 25% Power (Reduced from 30% to account for the 64W strength).
*   **Cut:** 600 mm/m at 100% Power (Keep this as is to test maximum penetration).
*   **LPI Tests:** Keep these at 12,000 mm/m but reduce power to 15% instead of 20% to avoid over-burning the fine lines.

#### Important Considerations
Onefinity machines are heavier than dedicated laser gantry systems. Even though the firmware allows 12,600 mm/m, you may

experience "shaking" or rounded corners at that speed due to the inertia of the CNC Z-axis assembly. If you notice quality issues, drop your maximum test speed to 8,000 or 10,000 mm/m and reduce the power by another 15-20% to compensate.

---

### 👤 User

In the E Test the original changes speed on each group to determine engraving settings, you are using the same speed. Shouldn't the speed be varied for each group since the shape properties are scaling the power from min to max for the 9 squares?

---

### 🤖 Assistant

You are correct. In a standard LightBurn power scale test, the "Shape Properties" or "Power Scale" feature is typically used to vary the power across the grid (e.g., 10% to 100%) while the **Layer Speed** remains constant for that specific row.

The reason the original settings varied the speed for each "E Test" group (30,000, 24,000, 18,000, etc.) was to find the "sweet spot" for high-speed engraving. Since your Onefinity is physically capped at 12,600 mm/m, you cannot replicate the high-speed rows. Instead, you should vary the speeds **downward** from your maximum to see how the material reacts at different feed rates.

Here is the corrected logic for your setup:

#### Revised E-Test (Fill) Strategy
Instead of scaling power to match a speed you can't reach, you should use your 12,600 mm/m limit as your "Fast" baseline and move slower to see the effect on depth and charring.

*   **E Test 1:** 12,600 mm/m (Your machine's max speed).
*   **E Test 2:** 10,000 mm/m.
*   **E Test 3:** 8,000 mm/m.
*   
