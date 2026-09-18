---
type: Fact
title: # Rounded Stock Calculator

source: abacus
session_id: 1199b292ca
resource: abac
description: # Rounded Stock Calculator

source: abacus
session_id: 1199b292ca
resource: abacus://conversation/1199b292ca

# Conversation

- **Session ID:** `1199b292ca`
- **Source:** abacus.ai
- **Project:** AI V
resource: agentmemory://memory/mem_mti8qh4c_d8daa062507e
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/1199b292ca"]
timestamp: 2026-09-01T05:42:41.098Z
source: agentmemory
strength: 7
---
# Content

# Rounded Stock Calculator

source: abacus
session_id: 1199b292ca
resource: abacus://conversation/1199b292ca

# Conversation

- **Session ID:** `1199b292ca`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-04-20T22:28:07+00:00
- **Messages:** 40

---

### 👤 User

If I have a piece of wood stock 2.75 in x and y, what would be the diameter of the circle inscribing that?

---

### 🤖 Assistant

For a square piece of wood stock measuring 2.75 inches in both the X and Y dimensions, there are two ways to interpret "a circle inscribing that" depending on whether you want the circle inside or outside the square:

*   **Inscribed Circle (Inside the square):** The diameter of the largest circle that can fit entirely inside the 2.75" square is equal to the side length, which is **2.75 inches**.
*   **Circumscribed Circle (Enclosing the square):** If you are looking for the diameter of a circle that completely encloses the square (the circle that "inscribes" the square's corners), the diameter is equal to the diagonal of the square. Using the Pythagorean theorem ($$d = \sqrt{2.75^2 + 2.75^2}$$), this diameter is approximately **3.89 inches**.

Given you are working with CNC files like the attached `Cut Line.ngc`, if you are trying to determine the minimum round stock size needed to cut this square, you would need at least a **3.89-inch** diameter circle.

---

### 👤 User

Look at this g-code that was created by Aspire. Notice how the Z goes to zero and then it goes up. It should be going down, shouldn't

---

### 🤖 Assistant

Yes, you're right to question it — but it's actually **correct for a rotary/wrap axis (4th axis) toolpath**, and here's why:

This is a **WrapY (rotary) toolpath** on the **Onefinity Redline**, where the **A axis is the rotational axis** (wrapping around a cylinder). In this context:

- **Z = 0** is the **surface of the cylinder** (the stock surface)
- **Z = 0.8** is the **safe/retract height** (above the stock)
- **Z = 0.3797 and 0.1898** are **intermediate depths** (cutting into the stock)

So the Z progression is:
1. `G0Z0.8000` → Safe height (retract)
2. `G0Z0.5000` → Approach height
3. `G1Z0.3797` → First cut depth
4. `G1Z0.1898` → Second cut depth
5. `G1Z0.0000` → **Final/deepest cut** (at the surface)

This is **stepping down in passes**, which is normal. The Z values are **decreasing** (0.5 → 0.3797 → 0.1898 → 0.0), meaning the tool **is going down** — it just doesn't go negative because Z=0 is the target surface.

**The only concern** would be if your **material origin (Z zero) is set incorrectly**

in Aspire. If Z=0 was set to the **center of the cylinder** instead of the **surface**, then the tool would never actually cut. But if Z=0 is the cylinder surface, the code is correct.

Where did you set your Z zero in Aspire — at the **surface** or the **center** of the stock?

---

### 👤 User

So you're saying Z zero should equal the 2.5 height?

---

### 🤖 Assistant

Yes, exactly! For this rotary/wrap toolpath:

- **Z = 0** = the **surface of your cylinder** (the top of your 2.75" stock, i.e., the radius = **1.375"** from center)
- The tool cuts **down from the surface**, so Z goes from 0.5 → 0.3797 → 0.1898 → 0.0

So when you set Z zero on your Onefinity, you should be touching off the **surface of the round stock**, not the center. The deepest cut (`G1Z0.0000`) just means the tool reaches the stock surface at full depth — it's a **rounding toolpath**, so it's essentially skimming/shaping the outside of the cylinder down to a finished round profile.

Does that match how you have your Z zero set up on the machine?

---

### 👤 User

So then I should be setting the Z off of the highest point on the stock, right?

---

### 🤖 Assistant

Exactly! You should set your **Z-zero at the highest point (the apex) of your stock cylinder**.

In a rotary setup like this, the software assumes a specific distance between the rotary center and the material surface. By touching off at the highest point of your 2.75" stock, you are telling the machine, "This is where the material starts."

###
