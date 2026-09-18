---
type: Fact
title: # Retractable CNC Probe Cable

source: abacus
session_id: 35d675e75
resource: ab
description: # Retractable CNC Probe Cable

source: abacus
session_id: 35d675e75
resource: abacus://conversation/35d675e75

# Conversation

- **Session ID:** `35d675e75`
- **Source:** abacus.ai
- **Project:** AI V
resource: agentmemory://memory/mem_mti8roko_5df29b181ec6
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/35d675e75"]
timestamp: 2026-09-01T05:43:37.402Z
source: agentmemory
strength: 7
---
# Content

# Retractable CNC Probe Cable

source: abacus
session_id: 35d675e75
resource: abacus://conversation/35d675e75

# Conversation

- **Session ID:** `35d675e75`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-05-26T19:06:49+00:00
- **Messages:** 8

---

### 👤 User

Help me locate a small two-conductor retractable cable that can be used to connect to the probe block of a CNC controller, specifically the redline controller for Onefinity to prevent hanging to the floor and getting caught by feet

---

### 🤖 Assistant

Yes — for the **Onefinity Redline controller**, the probe connection is a **dedicated normally-open probe input**, and the system supports a **Z-height probe block** according to Onefinity’s Redline controller specs, so a **simple 2-conductor cable** is the right general type for this use case if you’re making or adapting your own lead: [Introducing the Redline CNC Controller](https://www.onefinitycnc.com/post/introducing-the-redline-cnc-controller).

### Best options I found

#### 1. Easiest / guaranteed-compatible starting point
- **Onefinity Replacement Touch Probe Wire**  
  This is the official replacement lead. It comes as a **6 ft, 16 gauge flexible wire** with the probe hardware already attached.  
  Link: [Replacement Touch Probe Wire | Onefinity CNC](https://www.onefinitycnc.com/product-page/replacement-touch-probe-wire)

**Why this matters:**  
If you want the least risk, this gives you the correct Onefinity probe-end hardware. If you later want retractability, you could:
- shorten it, or
- splice

in a coiled section, or
- use it as the connector donor for a custom retractable lead.

#### 2. Best match for a custom retractable lead
- **LAPP ÖLFLEX spiral cable, 18 AWG, 2 conductor**  
  This is a real **retractable coiled control cable**, not just a cheap curly cord.  
  Link: [LAPP ÖLFLEX 18 AWG 2-conductor retractable coiled cable](https://www.lapptannehill.com/70002647-lapp-ouml-lflex-reg-spiral-400-p-retractable-coiled-cable-79-236-length-unshielded-16-awg-2-conductor-gray)

**Why I like this one:**  
- 2-conductor
- retractable/spiral
- heavier-duty and more durable than very thin electronics cords
- better suited to a shop environment

**Downside:**  
You’d likely need to **terminate both ends yourself** or splice it into the official Onefinity probe lead.

#### 3. Lower-cost light-duty option
- **23 AWG 2-conductor retractable coil cord**  
  Retracted 4 ft, extended 20 ft.  
  Link: [Retractable Coil Cord, 23 AWG 2

Conductor](https://www.wireandcableyourway.com/retractable-coil-cord-23-awg-2-conductor-unshielded-pvc-jacket-4ft-retracted-20ft-extended)

**Good for:**  
- low-current probe signals
- if you want a lightweight cord with very little drag

**Possible downside:**  
- thinner and less rugged than the OEM 16 AWG lead
- may feel a bit delicate in a CNC shop

#### 4. Cheapest donor cord
- **24 AWG 2-conductor coiled cord**  
  Stretches to about 3 ft.  
  Link: [24 AWG 2-conductor coiled retractable cord](https://www.electronicsurplus.com/5-334-power-cord-24-2c-24awg-2-conductor-coiled)

**Good for:**  
- experimenting
- making a compact custom probe lead

**Downside:**  
- very light duty
- probably not my first choice for something getting tugged around near a machine

### My practical recommendation

If your goal is:

#### “I want it clean, off the floor, and not getting caught on feet”
I’d do one of these:

1. **Best overall:**  
   Buy the official [Onefinity probe

wire](https://www.onefinitycnc.com/product-page/replacement-touch-probe-wire) and combine it with a **small spiral cable section** or re-make it using an **18 AWG 2-conductor spiral cable** like the LAPP option.

2. **Simplest custom approach:**  
   Use an **18 AWG 2-conductor retractile/spiral cable** and transfer the Onefinity-compatible ends onto it.

3. **If you want minimal effort without rewiring much:**  
   Keep the official probe wire and add a **ceiling tether / retracting lanyard / magnetic parking clip** so the wire stays suspended instead of dragging.  
   Honestly, this may 
