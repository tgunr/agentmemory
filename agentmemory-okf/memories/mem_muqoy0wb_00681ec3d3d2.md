---
type: Fact
title: # Self-Leveling Rotating Epoxy Bed System

source: hermes
session_id: 20260808_0
description: # Self-Leveling Rotating Epoxy Bed System

source: hermes
session_id: 20260808_080310_ff5913
resource: hermes://session/20260808_080310_ff5913

# Conversation

- **Session ID:** `20260808_080310_ff591
resource: agentmemory://memory/mem_muqoy0wb_00681ec3d3d2
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/projects/Develop"]
timestamp: 2026-10-02T08:18:18.855Z
source: agentmemory
strength: 7
---
# Content

# Self-Leveling Rotating Epoxy Bed System

source: hermes
session_id: 20260808_080310_ff5913
resource: hermes://session/20260808_080310_ff5913

# Conversation

- **Session ID:** `20260808_080310_ff5913`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-08-08T13:03:10Z
- **Ended:** 2026-08-27T19:47:44Z
- **Messages:** 192
- **CWD:** `/Users/davec/projects/Develop`
- **Tokens:** 3058385 in / 160194 out
- **Est. cost:** $-229137.2909

---

### 👤 User — 2026-08-08T13:03:10Z

I desire to design a self leveling bed system for epoxy projects. The problem to be solved is how to construct a bed system with a rotating turnstile that levels itself to ground automatically. Existing solutions use adjustable standoffs which are clumsy and awkward to use. Most of them that I've seen are just a rectangular bed and I have not seen any that have a rotating carousel.The carousel is needed so that you can rotate the project around as you are pouring the epoxy.The bed has to be as level as possible to the ground.I would like to have some means of producing this system without active components such as linear bearings and stepper motors. But if we can't come up with a passive system then I want to develop an active system. But first let's research possible ways to do this without electronics.

### 🤖 Assistant — 2026-08-08T13:03:39Z

<details><summary>Reasoning</summary>

The user wants to design a self-leveling bed system for epoxy projects with a rotating carousel/turnstile. Key requirements:

1. Self-leveling to ground automatically (no manual adjustable standoffs)
2. Rotating carousel so you can spin the project while pouring epoxy
3. Preferably passive (no electronics, stepper motors, linear bearings)
4. If passive isn't feasible, then active system

Let me research passive self-leveling mechanisms. This is a mechanical engineering problem. Let me think about what approaches exist:

**Passive self-leveling concepts:**

1. **Liquid-based leveling** - Using a liquid (water) in a ring channel around the bed. The liquid finds its own level. But this doesn't directly level the bed surface...

2. **Gimbaled/freely pivoting platform** - Like a gimbal that always stays level due to gravity. But this would be unstable for a flat bed.

3. **Air bearing / air cushion** - Float the bed on a thin film of air. This would self-level but requires compressed air.

4. **Mercury bath** - A heavy liquid bath that the bed floats in. Mercury finds level. But mercury is toxic and impractical.

5. **Water displacement / hydrostatic leveling** - Connected water columns that equalize. Could use water-filled tubes connected to feet that adjust height.

6. **Pendulum/gravitational leveling** - A weighted mechanism that always seeks level.

7. **Ball-and-socket with locking** - A central pivot point with the bed resting on it, then you level it somehow.

8. **Float on water** - The bed literally floats on a shallow pool of water. Water is always level. The bed can rotate on the water surface. This is actually elegant!

9. **Three-point suspension with self-centering** - Three legs with a mechanism that equalizes their height.

10. **Inverted pendulum with damping** - Not really self-leveling.

Let me think more carefully about what would actually work for an epoxy pouring table:

**The "float on water" concept** is actually brilliant:
- A shallow pool/tray of water
- A rigid platform that floats on the water surface
- Water is always perfectly level (gravity)
- The platform can rotate freely on the water
- The platform's weight distributes evenly across the water surface
- No electronics needed at all

But there are challenges:
- Water evaporation
- Splashing
- The platform needs to be buoyant and rigid
- Weight capacity
- Water contamination from epoxy drips

**Hydrostatic foot leveling:**
- Three or four feet connected by tubes filled with liquid
- Liquid equalizes across all feet
- As one foot goes down, liquid flows to others, pushing them down
- This creates a self-leveling effect

Actually, let me think about this differently. The problem is:
- You have a flat bed/platform
- It needs
