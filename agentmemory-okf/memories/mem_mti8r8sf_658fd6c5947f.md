---
type: Fact
title: # Snapmaker Luban Print Settings

source: abacus
session_id: 15f8af24d5
resource
description: # Snapmaker Luban Print Settings

source: abacus
session_id: 15f8af24d5
resource: abacus://conversation/15f8af24d5

# Conversation

- **Session ID:** `15f8af24d5`
- **Source:** abacus.ai
- **Project:*
resource: agentmemory://memory/mem_mti8r8sf_658fd6c5947f
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/15f8af24d5"]
timestamp: 2026-09-01T05:43:16.920Z
source: agentmemory
strength: 7
---
# Content

# Snapmaker Luban Print Settings

source: abacus
session_id: 15f8af24d5
resource: abacus://conversation/15f8af24d5

# Conversation

- **Session ID:** `15f8af24d5`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-04-04T19:47:20+00:00
- **Messages:** 12

---

### 👤 User

in Snapmaker Luban what setting should I use to print this image?

---

### 🤖 Assistant

You’re in the right place (Greyscale mode), but for something this detailed (fine feathers + shading), the default settings won’t give the best result. Here’s what to change in Snapmaker Luban:

### ✅ Recommended Settings (for laser engraving)

#### Processing Mode
- **Greyscale ✅ (keep this)**
- Algorithm: **Jarvis** (better detail than Atkinson for images like this)
- Greyscale Conversion: **Luma (fine)** or keep Luma

#### Image Adjustments
- **Contrast:** ~60–75  
  (boosts feather definition)
- **Brightness:** ~45–55  
  (slightly darker helps detail pop)
- **White Clip:** ~240–250  
  (avoid washing out highlights)

#### Power & Speed (CRITICAL)
Depends on your material, but starting points:

**Wood (basswood / plywood):**
- Power: **70–90%**
- Speed: **800–1200 mm/min**

**Leather:**
- Power: **40–60%**
- Speed: **1000–1500 mm/min**

**Coated metal (laser marking spray):**
- Power: **100%**
- Speed: **300–600 mm/min**

#### Line Interval (Resolution)
- **0.08–0.12 mm**
  - 0.08 = higher detail

(slower)
  - 0.10 = good balance ✅

#### Passes
- **1 pass only**

---

### 🔧 Key Improvements for THIS image
- Switch **Atkinson → Jarvis** (biggest upgrade)
- Slightly **increase contrast**
- Use **tight line interval (0.08–0.10)** for feather detail

---

### ⚠️ Common Mistake
If it comes out:
- **Too dark / muddy** → lower power or increase speed  
- **Too faint** → increase power or decrease speed  
- **Loss of detail** → your line interval is too large OR contrast too low

---

If you tell me:
- your exact Snapmaker model (10W, 20W, etc.)
- material you’re engraving on

…I can dial in near-perfect settings for you 👍

---

### 👤 User

to be engraved on 1/8" colored plywood, black over white

---

### 🤖 Assistant

Nice — black-over-white ply is perfect for this kind of image. You’re basically trying to **remove just the black layer cleanly without burning into the white**, so control is everything.

Here’s a dialed-in setup specifically for that:

---

### ✅ Processing Settings (Luban)

- **Mode:** Greyscale ✅  
- **Algorithm:** **Jarvis** (switch from Atkinson)  
- **Contrast:** **65–75**  
- **Brightness:** **50**  
- **White Clip:** **245**

👉 This keeps feather detail but avoids blowing out highlights.

---

### ✅ Laser Settings (for black-coated plywood)

#### If you have a **10W module**
- **Power:** **35–50%**
- **Speed:** **1200–1800 mm/min**
- **Line Interval:** **0.08–0.10 mm**
- **Passes:** 1

#### If you have a **20W / 40W module**
- **Power:** **20–35%**
- **Speed:** **1500–2500 mm/min**
- **Line Interval:** **0.08–0.10 mm**
- **Passes:** 1

---

### 🎯 What you’re aiming for
- Black layer removed → white shows through  
- Minimal brown burn on the white layer  
- Fine feather detail preserved

---

### 🔧

Fine tuning (this matters a LOT)

Run a **small test square first**:
- If white looks **brown/yellow** → lower power OR increase speed  
- If black isn’t fully removed → increase power slightly  
- If details look “blobby” → lower power + tighten line interval

---

### 🔥 Pro tip (big difference)
Turn **Air Assist ON but low**:
- Helps keep the white layer clean
- Prevents soot from re-depositing

---

### ⚠️ Important
Greyscale works well, but for **super crisp logos/art like this**, sometimes:
- **Dither (Jarvis)** can give cleaner edges than true greyscale shading

If your result looks a bit “muddy,” try:
→ Switch to **B&W (Dither) + Jarvis**

---

If you want, I can tune it even tighter if you tell me:
- your exact Snapmaker (A250, Artisan, etc.)
- whether the plywood is glossy or matte coated

That changes things more than people expect.

---

### 👤 User

40W laser

---

### 🤖 Assistant

Perfect — 40W gives you a lot of hea
