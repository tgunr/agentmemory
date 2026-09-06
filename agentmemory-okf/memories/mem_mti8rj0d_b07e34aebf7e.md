---
type: Fact
title: # Specifying Gridfinity Baseplate Magnets

source: abacus
session_id: 1d5c55597

description: # Specifying Gridfinity Baseplate Magnets

source: abacus
session_id: 1d5c55597
resource: abacus://conversation/1d5c55597

# Conversation

- **Session ID:** `1d5c55597`
- **Source:** abacus.ai
- **Pro
resource: agentmemory://memory/mem_mti8rj0d_b07e34aebf7e
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/1d5c55597"]
timestamp: 2026-09-01T05:43:30.206Z
source: agentmemory
strength: 7
---
# Content

# Specifying Gridfinity Baseplate Magnets

source: abacus
session_id: 1d5c55597
resource: abacus://conversation/1d5c55597

# Conversation

- **Session ID:** `1d5c55597`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-10-02T18:54:19+00:00
- **Messages:** 4

---

### 👤 User

gridfinity opens cad baseplate magnets on bottom, how to specify?

---

### 🤖 Assistant

Ah, you’re working with **Gridfinity OpensCAD baseplates** and want to add **magnet pockets on the bottom**? I can help you sort that out!  

In the official Gridfinity OpenSCAD system (Zack Freedman’s repo + community forks), baseplates support options for screws and magnets. These are usually controlled with **module parameters** in the `.scad` files.

Here’s the general idea:

### 1. Look for the baseplate module
In the repo, it’s typically something like:
```scad
gridfinityBaseplate(
    x_blocks,
    y_blocks,
    thickness,
    screw=true,
    magnet=false,
    ...
);
```

### 2. Magnet pockets
- The parameter is often `magnet=true` or `magnet_diameter` and `magnet_depth`.  
- For example, some forks have:

```scad
gridfinityBaseplate(
    6, 4, 7,
    magnet=true,
    magnet_diameter=6,
    magnet_depth=2
);
```

That carves recesses in the underside of the baseplate.

### 3. Location
- By default, Gridfinity specs put **magnet wells on the bottom corners of each 42 mm block**.  
- These recesses

won’t break through; they’ll leave a floor so you can glue in magnets.  

### 4. Screws *and* magnets
Most OpenSCAD versions let you toggle both. Example:

```scad
gridfinityBaseplate(
    6, 4, 7,
    screw=true,
    screw_clearance=3.5,
    magnet=true,
    magnet_diameter=6,
    magnet_depth=2
);
```

### ✅ What you should check
- Which **OpenSCAD repo** you’re using (Zack Freedman’s, GridfinityReMix, or GridfinityPySCAD) — parameter names differ slightly.  
- If your variant doesn’t have a `magnet` option, you might need to swap in a fork that supports it (many community versions have “screw + magnet combo” baseplates).  

---

👉 Do you want me to pull up the **exact OpenSCAD snippet** from the official Gridfinity GitHub repo that shows how to set `magnet=true` on a baseplate?

---

### 👤 User

The ones I see have magnet holes on top, not the bottom. I want them on bottom

---

### 🤖 Assistant

Got it! You want **magnet holes on the underside** of the baseplate (so magnets stick the baseplate to a metal surface), not on top where bins would sit.

Here's how to specify that:

### Standard Gridfinity OpenSCAD approach:

Most Gridfinity baseplate scripts have a parameter like:
```scad
style_hole = 0;  // or magnet_holes = 0;
```

The `style_hole` parameter typically controls hole placement:
- **`0`** = no holes
- **`1`** = screw holes only (top, for mounting bins)
- **`2`** = magnet holes on top (for bins with magnets)
- **`3`** = magnet holes on **bottom** (for sticking baseplate to metal surface)

### Example:
```scad
gridfinityBaseplate(
    gridx = 6,
    gridy = 4,
    length = 42,
    style_hole = 3,  // ← magnet holes on BOTTOM
    magnet_diameter = 6.5,
    screw_depth = 6
);
```

### If your version doesn't have `style_hole = 3`:

Some forks use different naming. Look for:
- `enable_magnet = true` + `magnet_bottom = true`
- `magnetHoles = true` with a separate `magnetSide = "bottom"`

Or you

might need to **flip the logic** — some scripts assume top-side magnets by default, so you'd need to modify the code to subtract cylinders from the bottom face instead of the top.

---

**Which OpenSCAD file/repo are you using?** If you share the filename or link, I can give you the exact parameter names or help you modify the code if it doesn't support bottom magnets yet.

---
