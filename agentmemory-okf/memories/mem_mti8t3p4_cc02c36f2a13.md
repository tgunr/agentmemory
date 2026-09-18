---
type: Fact
title: # Engraving Grayscale Images

source: abacus
session_id: cb4978f8b
resource: aba
description: # Engraving Grayscale Images

source: abacus
session_id: cb4978f8b
resource: abacus://conversation/cb4978f8b

# Conversation

- **Session ID:** `cb4978f8b`
- **Source:** abacus.ai
- **Project:** AI Va
resource: agentmemory://memory/mem_mti8t3p4_cc02c36f2a13
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/cb4978f8b"]
timestamp: 2026-09-01T05:44:43.651Z
source: agentmemory
strength: 7
---
# Content

# Engraving Grayscale Images

source: abacus
session_id: cb4978f8b
resource: abacus://conversation/cb4978f8b

# Conversation

- **Session ID:** `cb4978f8b`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-06T17:50:11+00:00
- **Messages:** 2

---

### 👤 User

Tips on engraving image onto birch plywood using vectric Aspire to achieve nice grayscale image. using J-Tech 24/44/64 watt laser on a Onefinity Foreman CNC.

---

### 🤖 Assistant

Here are **practical, proven tips** specifically for **engraving grayscale images on birch plywood** using **Vectric Aspire** with a **J‑Tech 24/44/64 W laser** on a **Onefinity Foreman**. Birch ply is *doable*, but it’s one of the trickier woods for grayscale, so dialing this in matters.

---

## 1. Start With the Right Image (This Matters More Than Power)
Birch plywood has glue layers and uneven density, which exaggerates bad source images.

**Best image traits**
- High contrast, good lighting
- Minimal background noise
- Faces and objects with clear light/dark separation

**In Aspire**
1. Import image  
2. Use **Bitmap → Adjust Levels**
   - Increase contrast slightly
   - Pull black point up a bit (don’t crush blacks)
   - Pull white point down just enough to keep highlights visible

✅ **Avoid pure blacks** — plywood glue layers turn them blotchy.

---

## 2. Convert to Grayscale Properly (Don’t Let Aspire Guess)
Before toolpaths:

- Convert to **Grayscale**
- Apply **Gamma correction**:
  - Start around

**1.2–1.4**
  - This lifts midtones so plywood doesn’t lose detail

👉 If you skip this, you’ll get flat or muddy engravings.

---

## 3. Use the Right Toolpath: *PhotoVCarve* vs *Laser Toolpath*
For lasers, **DO NOT use PhotoVCarve**.

### ✅ Use:
- **Laser Engraving Toolpath**
- Mode: **Grayscale (Power Modulation)**

### Settings to start with:
- **DPI:** 254–300
- **Scan Direction:** Along X (usually smoother on Onefinity)
- **Bidirectional:** ON (faster, fine for photos)

---

## 4. Power & Speed (Critical for Birch Ply)

Below are **starting ranges**, not absolutes.

### 24 W J‑Tech
- Speed: **120–160 ipm**
- Max Power: **85–90%**
- Min Power: **8–12%**

### 44 W J‑Tech
- Speed: **180–240 ipm**
- Max Power: **70–80%**
- Min Power: **6–10%**

### 64 W J‑Tech
- Speed: **240–300 ipm**
- Max Power: **60–70%**
- Min Power: **5–8%**

✅ Lower max power gives **smoother grayscale**  
❌ Full power causes glue-layer scorching and banding

---

## 5. Use “Minimum Power” — This Is Huge
In Aspire’s laser toolpath:
-

Set **Minimum Power** (very important)

Why:
- Prevents the laser from turning fully off
- Keeps light areas smooth instead of speckled

**Rule of thumb:**
- Light woods like birch: **5–10% min power**

---

## 6. Defocus Slightly for Smoother Grayscale
Sharp focus = harsh contrast on plywood.

Try:
- **Defocus +0.5 mm to +1.0 mm**

This:
- Softens dot edges
- Blends grayscale transitions
- Reduces glue-layer artifacts

✅ Especially helpful for portraits.

---

## 7. Masking = Cleaner Results
Before engraving:
- Apply **blue painter’s tape** or **laser masking tape**
- Engrave through it
- Peel afterward

Benefits:
- Cleaner whites
- Less smoke staining
- Better contrast on birch ply

---

## 8. Grain Direction & Ply Quality
Not all birch ply is equal.

**Best options**
- Baltic birch (uniform plies)
- Cabinet-grade plywood

**Orient image**
- Faces: grain running **vertical**
- Landscapes: grain **horizontal**

This minimizes visual distortion.

---

## 9. Run a Grayscale Test Strip (Strongly

Recommended)
Create a small test image:
- 0–100% grayscale gradient
- 1" × 4"

Engrave once per material batch.
Plywood varies a LOT.

---

## 10. Post-Processing (Optional but Powerful)
After engraving:
- Light **nylon brush**
- Optional **clear coat or danish oil**
  - Darkens engraved areas
  - Makes grayscale pop

⚠️ Test finish first — oils can reduce contrast if over-applied.

---

## 11. Common Problems & Fixes

| Problem | Fix |
|------|----|
| Muddy image | Lower max power, increase speed |
| Speckled highlights | Increase min power |
| Vertical b
