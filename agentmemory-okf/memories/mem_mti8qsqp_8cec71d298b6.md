---
type: Fact
title: # Spoil Board Setup Advice

source: abacus
session_id: 135717077a
resource: abac
description: # Spoil Board Setup Advice

source: abacus
session_id: 135717077a
resource: abacus://conversation/135717077a

# Conversation

- **Session ID:** `135717077a`
- **Source:** abacus.ai
- **Project:** AI V
resource: agentmemory://memory/mem_mti8qsqp_8cec71d298b6
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/135717077a"]
timestamp: 2026-09-01T05:42:56.173Z
source: agentmemory
strength: 7
---
# Content

# Spoil Board Setup Advice

source: abacus
session_id: 135717077a
resource: abacus://conversation/135717077a

# Conversation

- **Session ID:** `135717077a`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-04-06T18:27:43+00:00
- **Messages:** 12

---

### 👤 User

Recommendations on setting the new Spoil Board on a 1F Foreman, such that the origin of the working position is the same as the machine 00. Is that recommended?

---

### 🤖 Assistant

Short answer: **No, it’s usually *not* recommended to make your working origin exactly the same as machine (0,0)** on a Onefinity Foreman.

Here’s why and what’s better:

### Why not use machine 0,0 as your work origin
- **Machine zero is fixed** (home switches define it). You don’t want to depend on it for every job.
- **Spoilboards get resurfaced/replaced**, which changes Z height → your zero shifts anyway.
- **Risk of crashes** if your CAM assumes a slightly different origin than the machine’s hard limits.
- **Less flexibility** when you want to run multiple setups or reposition material.

### Recommended approach
Use a **Work Coordinate System (WCS)** like G54 instead.

- Set a **repeatable reference point on your spoilboard**
  - Common choices:
    - Front-left corner of spoilboard
    - Center of machine
    - A fixed dowel pin or fixture point (best for repeatability)

- Then:
  - Home the machine (establish machine 0,0)
  - Jog to your chosen reference point
  - Set that as **G54 X0 Y0**
  - Set Z0

from the spoilboard surface (or top of material depending on workflow)

### Best practice for a spoilboard setup
- **Surface the spoilboard after installing**
- Then **set Z zero from that surfaced plane**
- Optionally:
  - Install **threaded inserts or dowel pins** for repeatable positioning
  - Mark or engrave your G54 origin location

### When matching machine 0,0 *can* make sense
Only in niche cases:
- Dedicated production jig that *never moves*
- Fully fixed fixture plate aligned to machine limits
- You’re comfortable working in machine coordinates (more advanced)

### Practical tip for your Foreman
Most users do:
- Machine home = back-right (Onefinity default)
- G54 origin = **front-left corner of spoilboard**

That gives:
- Easy material alignment
- Safe jogging
- Predictable CAM setups

---

If you want, I can look at your **Cut Line.ngc** and confirm how your current origin is defined (machine vs work coords).

---

### 👤 User

Onefinity defaults is NOT back right. If I position my spoilboard such that the bottom left corner is offset from the machine 0,0 then I will be losing working space, e.g. the work space will be less than 48"

---

### 🤖 Assistant

You are correct to be precise here: on the Onefinity Foreman, the **machine 0,0** is defined by the physical location where the machine triggers its homing sensors (typically front-left). If you offset your spoilboard significantly from that absolute physical limit, you do indeed lose the maximum 48" travel capacity.

To maximize your working area and align your spoilboard with the machine 0,0, here is the recommended approach for setting up a new board on a Foreman:

### 1. Align the Spoilboard to Machine Travel
Mount the spoilboard so that its edges are exactly at (or slightly beyond) the machine's maximum travel limits. 
*   **Step:** Home the machine first. 
*   **Step:** Jog the machine to X0 Y0 and ensure your bit/laser is positioned over the exact bottom-left corner of the board.
*   **Step:** If you want to use the full 48" by 48" area, your spoilboard should ideally be slightly larger than the travel area to allow for surfacing and edge-to-edge work.

### 2. Is it Recommended to Match Work 0,0 to

Machine 0,0?
For your specific goal of **maximizing space**, yes, it is common to align them, but with one major caveat: **The Machine Home (G28) is a hard physical limit.**

*   **The Risk:** If your file (like your `Cut Line.ngc`) starts exactly at `X0 Y0`, and your machine's physical limit is exactly at that same `X0 Y0`, any minor vibration or "over-travel" during a rapid move cou
