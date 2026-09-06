---
type: Fact
title: # Speed and Feed for Acrylic

source: abacus
session_id: 14b39c1f7b
resource: ab
description: # Speed and Feed for Acrylic

source: abacus
session_id: 14b39c1f7b
resource: abacus://conversation/14b39c1f7b

# Conversation

- **Session ID:** `14b39c1f7b`
- **Source:** abacus.ai
- **Project:** AI
resource: agentmemory://memory/mem_mti8qzsp_97adea3d40bd
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/14b39c1f7b"]
timestamp: 2026-09-01T05:43:05.308Z
source: agentmemory
strength: 7
---
# Content

# Speed and Feed for Acrylic

source: abacus
session_id: 14b39c1f7b
resource: abacus://conversation/14b39c1f7b

# Conversation

- **Session ID:** `14b39c1f7b`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-05-18T20:25:48+00:00
- **Messages:** 2

---

### 👤 User

Approximate speed and feed of 1/8" 0 flute cutting 1/8" acrylic

---

### 🤖 Assistant

For cutting **1/8" (3mm) acrylic** with an **1/8" O-flute** bit, the goal is to create large, clean chips to carry heat away, preventing the plastic from melting and "rewelding" behind the bit. 

The following are standard starting parameters for a hobbyist or semi-pro CNC (like a Shapeoko, X-Carve, or localized spindle):

### Recommended Starting Specs
*   **Spindle Speed (RPM):** 16,000 – 18,000 RPM
*   **Feed Rate:** 60 – 75 inches per minute (IPM)
*   **Target Chip Load:** 0.003" – 0.005" per tooth
*   **Pass Depth (Depth of Cut):** 0.0625" (1/16") per pass 
    *   *Note: Using two passes for 1/8" material provides a cleaner finish; however, many rigid machines can do a "single pass" at 40-50 IPM if the workholding is very secure.*
*   **Plunge Rate:** 20 – 30 IPM (Use a **ramp** if possible to avoid melting at the entry point).

### Pro Tips for Acrylic
*   **Cast vs. Extruded:** Professional consensus is that **Cast Acrylic** machines much better than Extruded. Extruded acrylic has a lower melting

point and is prone to "gumming" up the bit.
*   **Direction:** **Climb milling** is generally preferred for plastics as it yields a better edge finish and reduces the chance of the material chipping.
*   **Ramping:** Do not plunge straight down into acrylic. Use a 2–3 inch "Smooth Ramp" so the bit enters the material while moving laterally.
*   **Air Blast:** If you have an air hose, aim it directly at the cut. This clears the chips instantly so they aren't "re-cut" and melted.
*   **Onion Skin:** If you are cutting all the way through, leave an "onion skin" (approx. 0.01") on the first pass and do a final full-depth cleanup pass to prevent the part from shifting or vibrating.

If you see **dust** instead of **chips**, your feed rate is too slow or your RPM is too high. If the material is **melting**, increase your feed rate immediately.

Consult manufacturers like [Amana Tool](https://www.amanatool.com/pub/media/productattachments/Plastic-O-Flute-Speed-Chart-v2.pdf) or community resources like [Reddit

r/CNC](https://www.reddit.com/r/CNC/comments/ygpmws/your_thoughts_on_feeds_speeds_etc_for_acrylic/) for specific bit-series charts.

---
