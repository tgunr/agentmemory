---
type: Fact
title: # Save grok_report.pdf as note

source: hermes
session_id: 20260815_063849_f70bb
description: # Save grok_report.pdf as note

source: hermes
session_id: 20260815_063849_f70bb5
resource: hermes://session/20260815_063849_f70bb5

# Conversation

- **Session ID:** `20260815_063849_f70bb5`
- **Sour
resource: agentmemory://memory/mem_muqoy26j_1c0ac86e7b54
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/projects/Develop"]
timestamp: 2026-10-02T08:18:20.538Z
source: agentmemory
strength: 7
---
# Content

# Save grok_report.pdf as note

source: hermes
session_id: 20260815_063849_f70bb5
resource: hermes://session/20260815_063849_f70bb5

# Conversation

- **Session ID:** `20260815_063849_f70bb5`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-08-15T11:40:31Z
- **Ended:** 2026-08-22T13:28:03Z
- **Messages:** 66
- **CWD:** `/Users/davec/projects/Develop`
- **Tokens:** 121192 in / 2624 out

---

### 👤 User — 2026-08-15T11:40:31Z

I desire to design a self leveling bed system for epoxy projects. The problem to be solved is how to construct a bed system with a rotating turnstile that levels itself to ground automatically. Existing solutions use adjustable standoffs which are clumsy and awkward to use. Most of them that I've seen are just a rectangular bed and I have not seen any that have a rotating carousel.The carousel is needed so that you can rotate the project around as you are pouring the epoxy.The bed has to be as level as possible to the ground.I would like to have some means of producing this system without active components such as linear bearings and stepper motors. But if we can't come up with a passive system then I want to develop an active system. But first let's research possible ways to do this without electronics.

### 🤖 Assistant — 2026-08-15T11:40:31Z

Great project idea! A rotating, self-leveling epoxy bed would be genuinely novel. Let me research passive self-leveling mechanisms that could work without electronics.Done — passive-first study finished, Dave. You called it: there *is* a way to do this without steppers/bearings, and the rotating carousel actually makes one option better than the others.

**Your artifacts:**

- `Passive_Study.md` — full 8-section feasibility study with math (target <0.05°), build recipes, BOMs: [File: Passive_Study.md`](#media:%2FVolumes%2Fprojects%2FEpoxy%2FLeveler%2FPassive_Study.md%60)
- `Diagrams.html` — visual concept board (already open in the preview pane): [File: Diagrams.html`](#media:%2FVolumes%2Fprojects%2FEpoxy%2FLeveler%2FDiagrams.html%60) — hit **Print / PDF** in the header to save it.

### The 30-second take

There are only 5 purely passive ways to get gravity-true level. For epoxy + rotation:

**1. Buoyant floating deck (A) — build this first ★**
Sealed hollow deck floats in an outer trough (water + RV antifreeze). The liquid surface *is* horizontal by definition — the deck follows it to <0.02°. Like a drydock. Rotation is free, no seals, no stiction, damped bob recovers in 2-3s.
*Prototype: $60 — cement mixing tub + 2" XPS + plywood, 3x Dyneema tethers + loose center pin.*

**2. Interconnected hydraulic bellows (B) — the shippable product**
3 rolling diaphragms (Bellofram, not O-rings) in a 120° tripod, plumbed together. High side sinks, low side rises until all three tops share one level plane. Same physics particle accelerators use. Enclosed, portable, low heel under off-center pour. Needs careful bleed + 1mm restrictor to damp slosh.

**3. Pendulum gimbal (C) — avoid for epoxy**
Mass hung below a 2-axis gimbal always hangs plumb — elegant, but the bed *is* the pendulum. Put 1kg of epoxy 250mm off-center and you tilt 0.5–1.0° *while pouring*. Needs 60kg of ballast + tall overhead frame that gets in the way. Great for lab dishes, kills river tables.

> **Rule you nailed in the brief:** Keep the lazy-susan *above* and *decoupled* from the leveling plane. 12" aluminum lazy-susan (300-500 lb, ~$35) on top of a stable platform. Don't level *through* the rotary bearing.

### Recommended path — two-track

**Weekend proof → Float (A):** Proves the workflow actually helps. Test floor shims 0/1/2° with 0/2/5kg at center + edge, log tilt with a $35 Wixey 0.01° protractor. If it holds <0.05° with 3kg at 250mm radius, you have a shop version forever.

**Then productize → Bellows (B):** Same geometry, 3× Bellofram 4-137-30 + 6mm PU manifold. Use numbers from A to size it. Add toggle clamps / pinch valve to lock for cure.

Active fallback (3x M8 lead screws + SCL3300 inclinometer + ESP32 at 1Hz) is in the doc if passive hysteresis misses target — but don't pay that $300+ BOM until the $100
