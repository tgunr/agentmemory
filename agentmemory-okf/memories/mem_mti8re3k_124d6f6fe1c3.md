---
type: Fact
title: # Pocket Depth in Metric Aspire

source: abacus
session_id: 16d4ec290d
resource:
description: # Pocket Depth in Metric Aspire

source: abacus
session_id: 16d4ec290d
resource: abacus://conversation/16d4ec290d

# Conversation

- **Session ID:** `16d4ec290d`
- **Source:** abacus.ai
- **Project:**
resource: agentmemory://memory/mem_mti8re3k_124d6f6fe1c3
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/16d4ec290d"]
timestamp: 2026-09-01T05:43:23.847Z
source: agentmemory
strength: 7
---
# Content

# Pocket Depth in Metric Aspire

source: abacus
session_id: 16d4ec290d
resource: abacus://conversation/16d4ec290d

# Conversation

- **Session ID:** `16d4ec290d`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-09-24T19:45:38+00:00
- **Messages:** 12

---

### 👤 User

How to compute the correct pocket depth in metric aspire?

---

### 🤖 Assistant

Good question 👍 — let’s break this down clearly.  

The error you're seeing in **Aspire** ("Insufficient Glue Gap") happens when the **pocket depth** you set is too deep relative to the material thickness or when the toolpath doesn’t leave enough clearance for glue.

### What’s Happening
- The **glue gap** is the intentional space Aspire leaves between two parts for adhesive.
- Aspire warns you when the toolpath does not cut deep enough to provide that clearance.
- In your screenshot, the shallowest area only reaches **0.053 inches (≈ 1.35 mm)** with a glue gap of **0.000 inches** — which means your parts might fit too tightly (no room for glue).

---

### Converting to Metric
Aspire can work directly in **mm** (metric). If your file is in inches, convert values:

\[
\text{Depth (mm)} = \text{Depth (in)} \times 25.4
\]

So in your case:
\[
0.053 \, \text{in} \approx 1.35 \, \text{mm}
\]

---

### How to Calculate Correct Pocket Depth
1. **Decide on Glue Gap Needed:**  
   - For wood projects, a **glue gap of

0.1–0.2 mm** is usually enough.  
   - For looser fits (like plywood inlays), you might want 0.2–0.3 mm.

2. **Measure Material Thickness (mm):**  
   - Example: If your tab thickness is **12 mm**, and you want a **0.2 mm glue gap**, your **pocket depth should be 12.2 mm**.

   Formula:
   \[
   \text{Pocket Depth} = \text{Material Thickness} + \text{Glue Gap}
   \]

3. **Check Toolpath Preview in Aspire:**  
   - After setting pocket depth, run the **Preview Toolpaths** to confirm Aspire recognizes the glue gap.

---

### Quick Example
- Tab thickness: 12 mm  
- Desired glue gap: 0.15 mm  
- Pocket Depth = 12 + 0.15 = **12.15 mm**

Aspire will then cut slightly deeper into the pocket so the tab fits snugly with adhesive room.

---

✅ Practical Tip: If Aspire still shows "Insufficient Glue Gap," *reduce the defined glue gap in the joint settings* OR *shallow the pocket depth slightly until the preview confirms clearance*.

---

Do you want me to **give you a quick step-by-step in Aspire’s metric settings**

(like where to enter depth + glue gap), or just the formula reference is enough?

---

### 👤 User

What do you mean by tab thickness?

---

### 🤖 Assistant

Great question 👌 — let’s clear that up, because **“tab thickness”** might not be the best wording when talking about Aspire.  

In Aspire (especially when making **pockets and inlays or interlocking joints**), what we really mean is:

- **Material / component thickness** = the *actual thickness of the piece you want to fit inside the pocket*.  
- This could be:  
  - A **tenon** (for mortise-and-tenon type joints)  
  - A **male inlay piece** that fits into a pocket  
  - Or the **project board thickness** if you’re cutting something flush.

So, when I said "tab thickness," I meant:  
👉 the thickness of the **inserted part** (the part that will go into that pocket).  

---

### Example
Let’s say you’re doing an **inlay**:
- Your inlay piece (male part) is **6 mm thick**.  
- You want a **glue gap of 0.15 mm**.  
- Correct **pocket depth** = 6 + 0.15 = **6.15 mm**.

Or if you’re doing a **box joint / finger joint**:
- Finger (male part) = your board thickness, say **12 mm**.  
- With glue gap = 0.2 mm →

pocket depth = **12.2 mm**.

---

### In Summary
- *Tab thickness* = thickness of the **insert piece / join part / inlay piece**.  
- *Pocket depth* = *that thickness* + *extra glue gap* you want to allow.  

---

⚡ Question for you: In your project, are you making **inlays**, **box-style joints**, or just **flat pockets** in material? That way I can give you the exact formula you need in **Aspire (metric)** instead of the generic rule.

---

### 👤 User

If my female part is 12.5mm thick an
