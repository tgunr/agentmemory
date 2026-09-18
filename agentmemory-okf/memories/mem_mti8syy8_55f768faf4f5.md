---
type: Fact
title: # M3 M4 with J-Tech Laser

source: abacus
session_id: bf8b19eee
resource: abacus
description: # M3 M4 with J-Tech Laser

source: abacus
session_id: bf8b19eee
resource: abacus://conversation/bf8b19eee

# Conversation

- **Session ID:** `bf8b19eee`
- **Source:** abacus.ai
- **Project:** AI Vault
resource: agentmemory://memory/mem_mti8syy8_55f768faf4f5
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/bf8b19eee"]
timestamp: 2026-09-01T05:44:37.491Z
source: agentmemory
strength: 7
---
# Content

# M3 M4 with J-Tech Laser

source: abacus
session_id: bf8b19eee
resource: abacus://conversation/bf8b19eee

# Conversation

- **Session ID:** `bf8b19eee`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-05T19:07:06+00:00
- **Messages:** 2

---

### 👤 User

How does M3 and M4 work with the J-Tech 64 watt laser and Redline controller?

---

### 🤖 Assistant

With a J-Tech 64W module and a Redline-style controller, `M3` and `M4` determine **how the laser power is applied in relation to motion**. The exact behavior depends on firmware (Grbl, GrblHAL, etc.), but in most hobby CNC/laser stacks the meaning is:

- `M3` – Laser on, **constant power mode** (spindle-mode behavior)  
- `M4` – Laser on, **dynamic power mode** (laser-mode behavior; power scales with speed/direction)  
- `M5` – Laser off  

Below is how that plays out in practice for your setup.

---

### 1. What `M3` does (constant power)

With most Redline/J-Tech + Grbl(-based) controllers:

- `M3` turns the laser on at a fixed power based on `S`:
  - e.g. `S1000` with `$30=1000` ⇒ 100% power
  - e.g. `S500` ⇒ ~50% power
- Once enabled, **laser power does not change when the machine slows down or speeds up** (except when you explicitly send a new `S` value).
- If your controller is in *spindle mode* (not laser mode), this is literally “run spindle clockwise at this speed,” just mapped to laser PWM.

**Im

plications:**

- Fine for:
  - Simple tests (e.g. “does it fire?”)
  - Manual dwell burns (`G4 P0.5` to burn a dot)
  - Cutting at a steady feed when motion never slows on corners
- Risky for:
  - Raster engraving
  - Small details and corners  
  Because if the machine slows for tight corners but power stays the same, you get **over-burn**.

**Typical G-code pattern with `M3`:**

```gcode
M3 S800        ; laser on at ~80% (assuming $30=1000)
G1 X100 F2000  ; move while burning at constant power
M5             ; laser off
```

---

### 2. What `M4` does (dynamic / “laser mode” behavior)

In laser-oriented Grbl/Redline firmware, `M4` is *adaptive*. The firmware treats it as:

> “Laser on, but automatically scale power based on actual motion so energy per unit distance stays more constant.”

Key points:

- Power still comes from the `S` value, but:
  - If the head slows down in a corner, firmware reduces PWM so you don’t burn too deep/dark.
  - If the head accelerates back to full speed, PWM rises back toward

the requested value.
- Some firmware also reduces or cuts power when the axis reverses direction (to prevent double-burn at direction changes).

**Implications with a 64W diode:**

- Much better for:
  - Photo/raster engraving
  - Fine line art
  - Vector engravings with lots of sharp corners
- Usually the mode you want if your CAM/post-processor supports `M4` and your controller is truly in *laser mode* (`$32=1` on classic Grbl or equivalent on Redline).

**Typical G-code pattern with `M4`:**

```gcode
M4 S800        ; dynamic laser on, 80% requested power
G1 X100 F2000  ; firmware scales power as speed changes
M5             ; laser off
```

---

### 3. How this specifically relates to J-Tech 64W + Redline

The J-Tech 64W itself doesn’t “know” about `M3` vs `M4`. It just sees a PWM input. The **controller + firmware** interpret `M3`/`M4` and generate the PWM signal.

Typical stack:

1. **Redline controller** runs Grbl/GrblHAL/variant.
2. G-code from your CAM (LightBurn, LaserGRBL, VCarve, etc.) uses:
   -

`M4` for engraving (recommended)
   - `M3` sometimes for cutting.
3. Redline directs a PWM signal to the J-Tech module:
   - `S` value ⇢ PWM duty cycle.
   - `M3` = fixed duty.
   - `M4` = duty scaled with motion.

As long as:

- Your **max spindle speed** (or laser max) is set correctly (e.g. `$30=1000` or `$30=255` etc.), and  
- Your CAM’s device profile is set up correctly (e.g. LightBurn “GRBL-M3” vs “GRBL” vs “GRBL-LPC” / “GRBL HAL”),

then:

- `M3` will run J-Tech at **constant** power
- `M4` will run J-Tech at **motion-aware** power.

---

### 4. Which should you use?

**Engraving (especially photos, grayscale, or 
