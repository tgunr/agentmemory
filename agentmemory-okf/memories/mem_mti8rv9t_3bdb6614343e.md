---
type: Fact
title: # Gridfinity Bin Design

source: abacus
session_id: 4e0df252
resource: abacus://
description: # Gridfinity Bin Design

source: abacus
session_id: 4e0df252
resource: abacus://conversation/4e0df252

# Conversation

- **Session ID:** `4e0df252`
- **Source:** abacus.ai
- **Project:** AI Vault
- **
resource: agentmemory://memory/mem_mti8rv9t_3bdb6614343e
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/4e0df252"]
timestamp: 2026-09-01T05:43:46.091Z
source: agentmemory
strength: 7
---
# Content

# Gridfinity Bin Design

source: abacus
session_id: 4e0df252
resource: abacus://conversation/4e0df252

# Conversation

- **Session ID:** `4e0df252`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-09-29T12:26:03+00:00
- **Messages:** 4

---

### 👤 User

I'm trying to use Gridfinity to create a base for my drawer which is 28 inches wide by 15 inches long. My 3D printer is only capable of printing 14 inch wide objects. So what parameters would I need to use to create a grid such that an gridfinity bin that would be able to span the middle?

---

### 🤖 Assistant

Got it — you’re trying to set up a **Gridfinity base** for a drawer that’s **28" wide × 15" deep**, but your printer has a **14" build width limit**. You also want to make sure you can align gridfinity bins across the **middle split**.

Here’s how you can approach it:

---

### 1. Gridfinity basics
- **Grid unit size:** 42 mm (≈ 1.65").
- Bases are built in multiples of these 42 mm units.
- Your dimensions won’t perfectly divide but we can maximize coverage.

---

### 2. Convert to grid units
- **28" wide / 42 mm ≈ 16.9 units** → fits **16 units wide** (26.5"), leaving a small side gap (≈1.5").
- **15" deep / 42 mm ≈ 9 units** (14.9") → perfect at 9 units deep.

So the best fit is a **16 × 9 grid base**.

---

### 3. Print bed limitation (14")
Your printer maxes out at 14", which in Gridfinity terms is:

- **14" / 42 mm ≈ 8.5 units** → max base length you can print is **8 units (13.2")** wide.

So you’ll need to split the base into **two halves**, each:
- **8 × 9 units**, which together become **16 × 9

units**.

---

### 4. Ensuring bins span the middle
If you split exactly at **8 units wide**, then the centerline is a **grid-aligned break**.  
This means:
- A **bin with width = 2 units** will straddle the split perfectly.  
- Any **even-number–sized bin** (2, 4, 6, etc.) can bridge the seam with no problem.  
- You can also screw/clip the baseplates together underneath if you want them locked.

---

### ✅ Final Parameters for Your Drawer
- **Total base:** 16 wide × 9 deep (≈28" × 15").  
- **Split into two prints:** 8 × 9 each.  
- **Seam aligned to the grid:** The split falls on a gridline, so bins can safely span the middle with no modification.  

---

⚡ Tip: If you want zero wasted space on the sides, you could model “half-grids” (21 mm strips) to fill in the extra ~1.5" leftover on each side — but most people just leave that as clearance.

---

Do you want me to quickly draft the **exact STL parameters** you’d put into the Gridfinity base generator (e.g., Zach Freedman’s OpenSCAD or Fusion parametric

file) so you can just punch it in?

---

### 👤 User

yes

---

### 🤖 Assistant

Perfect 👍 let’s set it up so you can just feed values into the Gridfinity base generator (most people use Zach Freedman’s **Gridfinity Base.scad** file, or the parametric Fusion 360 file).

---

### ✅ Parameters for Your Case

#### Overall Drawer Target:
- **Drawer usable area**: 28" × 15" (710 mm × 381 mm)
- **Gridfinity unit size**: 42 mm

#### Full baseplate grid:
- **16 × 9 units** (672 mm × 378 mm ≈ 26.5 × 14.9") → fits very nicely in your 28" × 15" drawer

#### Printer constraint:
- Max build width **14" = ~356 mm ≈ 8 units**
- So split into **two halves**

---

### STL Parameters to Enter (per half)
In **Gridfinity Base.scad** (`Gridfinity Base Plate.scad` → Customizer in OpenSCAD):

- `X Units` = **8**  
- `Y Units` = **9**  
- `Screw Holes` = optional (I’d do "corners", so you can align the two halves)  
- `Magnet Holes` = optional (only if you want to magnetize bases)  

➡️ This gives you **two plates of 8 × 9** — print two copies. Place them side-by-side in the drawer, seam down the middle.

Bins of **2 units width or larger** will span the seam perfectly.

---

### Optional: Side Fillers
Since 16 units = 672 mm (26.5"), you’ll have ~0.75" leftover on each side of the drawer.  
If you want zero gaps:
- Generate an extra “half-width strip” grid (`X Units = 1`, then cut down in CAD or slicer to ~21 mm width).  
- Or leave the gaps as c
