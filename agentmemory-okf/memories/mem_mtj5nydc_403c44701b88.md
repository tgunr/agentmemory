---
type: Fact
title: # Wiring SN04-N sensor

source: chatgpt
session_id: 689b8783-bcd0-8328-957b-107c
description: # Wiring SN04-N sensor

source: chatgpt
session_id: 689b8783-bcd0-8328-957b-107cac148266
resource: chatgpt://conversation/689b8783-bcd0-8328-957b-107cac148266

# Conversation

- **Session ID:** `689b8
resource: agentmemory://memory/mem_mtj5nydc_403c44701b88
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/689b8783-bcd0-8328-957b-107cac148266"]
timestamp: 2026-09-01T21:04:30.825Z
source: agentmemory
strength: 7
---
# Content

# Wiring SN04-N sensor

source: chatgpt
session_id: 689b8783-bcd0-8328-957b-107cac148266
resource: chatgpt://conversation/689b8783-bcd0-8328-957b-107cac148266

# Conversation

- **Session ID:** `689b8783-bcd0-8328-957b-107cac148266`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-12T18:27:17.342898+00:00
- **Messages:** 2

---

### 👤 User

I need step by step instructions and wiring diagrams to install SN04-N NO Normal Open NPN Inductive Proximity Sensor Switch Detector 4mm 3 Wire DC 10~30V

---

### 🤖 Assistant

Got it. Here’s a clean, CNC‑focused guide for wiring and installing the **SN04‑N** (NPN, Normally‑Open, 3‑wire, 10–30 V) as a homing/limit sensor. I’ll cover both **Buildbotics/OneFinity (original controller)** and **OneFinity Elite (MASSO)** since the wiring differs.

# ⚠️ WARNING (read first)
- **Never feed 12–24 V into a 3.3 V/5 V input.** Confirm your controller’s input voltage before wiring.  
- **Power OFF** the controller and external supply before connecting anything.  
- **Common ground is mandatory** when sharing a sensor powered from an external supply with a low‑voltage controller input.  
- Mount the sensor so it **cannot be struck** by the gantry or Z if it mis-triggers; keep an **E‑stop** within reach during first tests.

---

# What you have (SN04‑N quick facts)
| Pin/Wire | Color | Function | Notes |
|---|---|---|---|
| V+ | Brown | +10–30 V DC | Typically from a 12 V or 24 V supply |
| 0 V (GND) | Blue | Ground | Must be tied to controller GND if you connect output directly |
| OUT | Black | NPN, Normally‑Open (sinks to GND when metal is present) | LED on sensor lights when triggered |

**Behavior:** With no target, **black** is “open” (not pulled to GND). With target, **black** is pulled **to GND** (through the sensor’s NPN transistor).

> Tip: Some budget sensors behave like open‑collector (floating when off). Others weakly pull up. We’ll wire in ways that keep the controller safe either way.

---

# A. Buildbotics / OneFinity (original Buildbotics‑based controller)
These inputs are **logic‑level (3.3 V)**. Do **not** let 12–24 V touch them.

## Recommended wiring (direct, using controller pull‑up)
Use this **only** if your controller input has an internal pull‑up (common on Buildbotics) and expects **active‑low**.

**Connections**
1. **Sensor power**: Brown → external **+12–24 V**; Blue → external **0 V**.  
2. **Common ground**: Tie the **sensor’s Blue (0 V)** to the controller **GND**.  
3. **Signal**: Black → desired input pin (e.g., **X‑home / X‑min**).  
4. Leave the controller’s pull‑up **enabled** (default on many Buildbotics inputs). Configure the input as **NO, active‑low**.

**ASCII wiring**
```
External 12–24V PSU           Buildbotics Controller (3.3V inputs)
   +V  ────── Brown (SN04-N)
   0V  ──┬─── Blue (SN04-N) ──────────────── GND
         └──────────────── Black (SN04-N) ── X home / X min input
```

**Why this works:** The controller keeps the input **high** via its pull‑up. When the sensor sees metal, black **sinks to GND**, pulling the input **low** = triggered.

### If you’re not 100% sure about the input’s pull‑up
Add a small **external pull‑up** to 3.3 V (do **not** use 5 V unless the input is 5 V‑tolerant):
- 10 kΩ from input pin to **+3.3 V** on the controller.

### Noise‑hardening (optional but helpful)
- Twist **black+blue** together; run separate from stepper/spindle cables.  
- Add a **0.1 µF** ceramic from input to GND at the controller side (debounce).  
- In software, enable **debounce** (e.g., 2–10 ms).

## SAFE interface alternatives (use these if you’re unsure)
### Option 1 — Optocoupler isolation (safest)
Keeps **24 V** entirely off the controller.

**Connections (sensor side)**
- Brown → +12–24 V  
- Blue → 0 V  
- Black → series resistor (e.g., **1 kΩ**) → optocoupler LED → **+12–24 V**  
  (So when the sensor sinks, current flows through the LED.)

**Connections (controller side)**
- Opto transistor **emitter** → controller **GND**  
- Opto transistor **collector** → controller **input**  
- 10 kΩ pull‑up from controller **input → +3.3 V**

### Option 2 — Resistor divider (only if your sensor output is sourcin
