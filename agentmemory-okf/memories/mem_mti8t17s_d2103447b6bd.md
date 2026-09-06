---
type: Fact
title: # Feed and Speed Settings

source: abacus
session_id: c7169331b
resource: abacus
description: # Feed and Speed Settings

source: abacus
session_id: c7169331b
resource: abacus://conversation/c7169331b

# Conversation

- **Session ID:** `c7169331b`
- **Source:** abacus.ai
- **Project:** AI Vault
resource: agentmemory://memory/mem_mti8t17s_d2103447b6bd
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/c7169331b"]
timestamp: 2026-09-01T05:44:40.442Z
source: agentmemory
strength: 7
---
# Content

# Feed and Speed Settings

source: abacus
session_id: c7169331b
resource: abacus://conversation/c7169331b

# Conversation

- **Session ID:** `c7169331b`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-11T17:13:52+00:00
- **Messages:** 12

---

### 👤 User

Explain the Feed and Speed settings in this tool

---

### 🤖 Assistant

Based on the provided image of the **Tool Database** for the **Laser Cutter 64 (0.006") 0.25**, here is an explanation of the **Feeds and Speeds** settings:

#### Power (100%)
This setting determines the intensity of the laser beam during the operation. At 100%, the laser is firing at its maximum available strength (64 Watts, as noted in the Geometry section) to cut through the material.

#### Feed Units (mm/min)
This dropdown defines the measurement system for the movement speed. In this case, it is set to millimeters per minute, which is standard for laser operations to ensure precise control over how long the beam dwells on a specific spot.

#### Move Speed (800 mm/min)
This is the actual speed at which the laser head moves across the material while cutting. 
*   **Higher speeds** result in less heat being applied to the material, which can prevent charring but may not cut all the way through.
*   **Lower speeds** apply more heat, allowing for deeper cuts but increasing the risk of burning or wider

kerf.

#### Maximum Burn Rate (150 mm/min)
This setting is typically used to limit the speed during specific maneuvers, such as grayscale engraving or detailed work where the laser needs to modulate its intensity. It ensures the machine does not exceed a speed where the laser can no longer effectively "burn" or mark the material as intended.

#### Tool Number (1001)
While not a speed or power setting, this is the unique identifier for this specific laser configuration in your database. It helps the software (likely Vectric VCarve or Aspire) track which tool is being used for specific toolpaths.

---

### 👤 User

I'm not understanding Move Speed vs Max Burn Rate, explain it with examples and when and how to set it up. Is it need in all situations?

---

### 🤖 Assistant

In Vectric’s **Laser Cutter** tool definition, those two fields are meant to separate **how fast you travel when *not* firing** vs **how fast you move when you *are* firing**.

### Move Speed vs Maximum Burn Rate (plain meaning)

#### **Move Speed**
- The speed used for **positioning moves** between cuts/marks—i.e., **laser OFF** moves.
- Goal: **waste as little time as possible** moving around without affecting cut quality.

Think: “How fast can my machine safely *travel* from shape A to shape B?”

#### **Maximum Burn Rate**
- The speed used for **burning moves**—i.e., **laser ON** (cutting, scoring, vector engraving).
- Goal: match the material so you get the desired result (cut through / clean score / proper darkness) without excessive char.

Think: “How fast can I go while still getting the burn/cut I want at this power?”

In your screenshot you have:
- **Move Speed = 800 mm/min**
- **Maximum Burn Rate = 150 mm/min**

So it will *travel* much faster than it *cuts*.

### Examples (why they’re

different)

#### Example 1: Cutting multiple parts on one sheet
Say your job has:
- 2000 mm of actual cutting path
- 1500 mm of travel between shapes

If **Max Burn Rate = 150 mm/min**:
- Cutting time ≈ 2000 / 150 = **13.3 min**

If **Move Speed = 800 mm/min**:
- Travel time ≈ 1500 / 800 = **1.9 min**

If you accidentally set Move Speed also to 150:
- Travel time becomes **10 min**
- Same cut quality, but job takes much longer.

#### Example 2: Score lines + cut outline
You might want:
- **Score**: faster (lighter mark) or lower power
- **Cut**: slower (to go through)

You’d typically create **two laser tools**:
- “Plywood 3mm – Score” (higher burn rate and/or lower power)
- “Plywood 3mm – Cut” (lower burn rate and/or higher power / multiple passes)

Move Speed can stay the same for both.

### How to set them up (practical workflow)

#### 1) Set **Maximum Burn Rate** from a material test
This is the import
