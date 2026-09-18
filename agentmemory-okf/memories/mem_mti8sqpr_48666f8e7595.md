---
type: Fact
title: # Removing Fuzzies from CNC Plaque

source: abacus
session_id: a3749095d
resourc
description: # Removing Fuzzies from CNC Plaque

source: abacus
session_id: a3749095d
resource: abacus://conversation/a3749095d

# Conversation

- **Session ID:** `a3749095d`
- **Source:** abacus.ai
- **Project:**
resource: agentmemory://memory/mem_mti8sqpr_48666f8e7595
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/a3749095d"]
timestamp: 2026-09-01T05:44:26.852Z
source: agentmemory
strength: 7
---
# Content

# Removing Fuzzies from CNC Plaque

source: abacus
session_id: a3749095d
resource: abacus://conversation/a3749095d

# Conversation

- **Session ID:** `a3749095d`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-05-06T21:09:19+00:00
- **Messages:** 10

---

### 👤 User

In this red plaque that I made using a 100 CNC with a 30° be bad there’s tiny little fuzzies inside some of the letters. I’ve tried using a metal brush and compressed air, but they still remain in some of the letters. What are some better ways to remove these little fuzzies?

---

### 🤖 Assistant

Ah yeah, those little “fuzzies” are super common with V-carving—especially in softer woods or MDF. They’re basically torn fibers that didn’t fully shear cleanly.

A metal brush + air usually isn’t enough because the fibers are still attached. Here are some better ways to deal with them:

### 🔧 Best cleanup methods

**1. Light sanding (most reliable)**
- Use **fine sandpaper (220–400 grit)**  
- Wrap it around something flat (or even your finger) and lightly go over the surface  
- For inside letters, try:
  - folded sandpaper
  - sanding sticks (like for model kits)
- This actually cuts the fibers instead of just bending them

**2. Stiff nylon brush (better than metal here)**
- A **stiff nylon or brass brush** works better than steel sometimes  
- Use it with a bit of pressure in different directions

**3. Seal + sand trick (very effective)**
- Lightly apply:
  - sanding sealer, or
  - diluted wood glue, or
  - clear coat (spray works well)
- Let it dry, then sand lightly  
👉 This stiffens the fuzz so it

snaps off clean

**4. Heat method (quick hack)**
- Carefully pass a **heat gun or small torch** quickly over the surface  
- It burns off the tiny fibers  
⚠️ Go very light—too much heat will scorch your plaque

**5. Dental picks / hobby tools**
- For stubborn spots inside letters  
- Tedious, but great for detailed work

---

### ⚙️ For next time (to prevent fuzzies)

- Use a **sharper V-bit** (huge difference)
- Reduce feed rate slightly
- Increase spindle speed
- Take a very light **final finishing pass**
- Use **downcut or compression bits** (if applicable)
- Pre-seal wood before carving (especially MDF)

---

If you want, tell me what material you used (MDF, pine, hardwood, etc.) and your CNC settings—I can help you dial it in so you get cleaner cuts next time 👍

---

### 👤 User

This is red Oak and I’m using 300 in./min. at spindle speed of 16,000

---

### 🤖 Assistant

Red oak is notoriously "stringy" because of its large open pores and tough grain, which explains why those fibers are putting up a fight.

At **300 in/min** with a **16,000 RPM** spindle speed, your chip load is likely a bit high for a 30° V-bit in red oak. Even though red oak is a hardwood, it tends to "splinter" or "tear" rather than shear cleanly if the bit is moving too fast for the RPM.

#### Why the fuzzies are staying put
Red oak fibers are very strong. When you use a metal brush or air, you're mostly just moving the "hinge" of the fiber back and forth rather than snapping it off.

#### Better removal techniques for Red Oak:
*   **The "Seal and Snap" (Highly Recommended):** Spray a light coat of shellac or sanding sealer into the letters. This makes those fuzzy fibers brittle. Once dry, a quick pass with a stiff nylon brush or fine sandpaper (220 grit) will cause the stiffened fibers to snap off cleanly rather than just bending.
*   **Flame Singeing:** Use a butane torch (like a kitchen torch) and

pass it very quickly over the carving. The tiny fuzzies have a high surface area and will incinerate almost instantly while the bulk wood remains unscorched. Just be ready to brush away the carbon dust.
*   **Detail Sanding Sticks:** Since it's a 30° V-groove, you can glue a small piece of 220 grit sandpaper to a thin wedge of wood or a popsicle stick to get right into the "V" and shear the fibers.

#### Adjustments for your next run:
To get a cleaner cut directly off the machine in red oak, try these tweaks:

*   **Reduce Feed Rate:** Drop your speed to about **15
