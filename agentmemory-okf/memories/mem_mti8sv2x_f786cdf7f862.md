---
type: Fact
title: # Density Comparison Purple Heart Birch

source: abacus
session_id: b0fe8118b
re
description: # Density Comparison Purple Heart Birch

source: abacus
session_id: b0fe8118b
resource: abacus://conversation/b0fe8118b

# Conversation

- **Session ID:** `b0fe8118b`
- **Source:** abacus.ai
- **Proje
resource: agentmemory://memory/mem_mti8sv2x_f786cdf7f862
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/b0fe8118b"]
timestamp: 2026-09-01T05:44:32.419Z
source: agentmemory
strength: 7
---
# Content

# Density Comparison Purple Heart Birch

source: abacus
session_id: b0fe8118b
resource: abacus://conversation/b0fe8118b

# Conversation

- **Session ID:** `b0fe8118b`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-12-23T16:14:15+00:00
- **Messages:** 10

---

### 👤 User

difference in density between purple heart and birch

---

### 🤖 Assistant

Purpleheart is significantly denser than birch.

Typical oven-dry densities (at ~12% moisture):

- **Purpleheart (Peltogyne spp.)**: about **0.80–0.90 g/cm³**  
  - In pounds per cubic foot: roughly **50–60 lb/ft³**
- **Birch (usually Yellow/White Birch, Betula spp.)**: about **0.60–0.65 g/cm³**  
  - In pounds per cubic foot: roughly **37–43 lb/ft³**

### Difference in density

Using representative midpoints:

- Purpleheart ≈ **0.85 g/cm³**
- Birch ≈ **0.62 g/cm³**

**Difference ≈ 0.23 g/cm³**, meaning purpleheart is roughly **35–40% denser** than birch.

In practical terms: for the same volume, a piece of purpleheart will weigh about **one‑third heavier** than a comparable piece of birch.

If you tell me what you’re building (e.g., guitar neck, cutting board, furniture), I can translate that difference into more concrete implications (weight, strength, tool wear, etc.).

---

### 👤 User

Using this bit https://idcwoodcraft.com/products/the-mama-hog-high-performance-pro-1-2-roughing-endmill-1-shank what is the optimum setting for cutting pockets in putple heart

---

### 🤖 Assistant

Here’s a good, **realistic starting point** for cutting pockets in purpleheart with that IDC “DEEP RIPPER” 1/2" roughing endmill, and how to push it if your machine can handle it.

IDC’s own description says this bit can run **up to 3/4" deep at ~500 ipm** in wood; purpleheart is much denser, so we scale that back and creep up.

---

### 1. If you’re on a hobby/small CNC (router, 1.5–2.5 HP, aluminum gantry)

**Goal:** Safe and fast roughing without chatter or burning.

**Starting settings (purpleheart pockets):**

- **Bit:** 1/2" IDC “DEEP RIPPER” rougher (assume 2‑flute)
- **Spindle/router speed:** **16,000–18,000 RPM**
- **Feed rate:** **160–190 ipm**  
  (≈0.0045–0.0055" chipload/tooth at 2 flutes)

  Example calculation at 17,000 RPM:  
  $$\text{Feed} = \text{Chipload} \times \text{Flutes} \times \text{RPM}$$  
  $$= 0.005 \times 2 \times 17{,}000 \approx 170\ \text{ipm}$$

- **Depth per pass (DOC):**  
  - **0.30–0.35"** per pass in purpleheart (about 60–70% of diameter)  
  - For a 0.75" deep pocket,

that’s **3 passes** (0.3" + 0.3" + 0.15")

- **Stepover (for pocketing):**
  - **40–50% of diameter** → **0.20–0.25" stepover**

- **Plunge / Ramping:**
  - **Avoid straight plunges** in purpleheart if you can.
  - Use a **ramp or helical entry**:
    - Ramp feed: **60–80 ipm**
    - Ramp angle: **3–5°**

- **Finishing:**
  - Leave **0.01–0.02" radial stock** on walls & floor in your toolpath.
  - Clean up with a **straight or compression bit** at lighter settings for a clean finish.

---

### 2. If you’re on a rigid/pro CNC (3+ HP spindle, heavy gantry, good hold‑down)

You can get closer to what IDC advertises for this bit, but still back off a bit for purpleheart.

**Moderately aggressive starting point:**

- **RPM:** **18,000**
- **Feed:** **250–300 ipm**  
  (≈0.007–0.008" chipload/tooth)

- **DOC:**
  - Start at **0.50"** in purpleheart
  - If the cut sounds happy (no bad chatter, spindle load OK), test **0.60–0.75"** DOC

- **Stepover:**
  - **50–60% of diameter** → **0.25–0.30"**

- **Plunge /

Ramping:**
  - Helical/ramp entry at **100–150 ipm**, **3–5°** ramp angle.

**More aggressive (only if everything is rock solid & chips look good):**

- **DOC:** up to **0.75"**
- **Stepover:** **0.30–0.35"** (60–70%)
- **Feed:** **320–380 ipm** @ 18k RPM (≈0.009–0.010" chipload)

Watch for:
- No screaming resonance
- No burning
- Chips, not dust (dust = chipload too low / RPM too high)

---

### 3. Purpleheart‑specific tips

- **Burning:**  
  - If you see burn marks, you’re likely rubbing:
    - Either **increase feed** slightly or **drop RPM** a bit (but keep chipload in
