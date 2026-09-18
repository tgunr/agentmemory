---
type: Fact
title: # Rotary Axis Toolpath Issue

source: abacus
session_id: cb2f9df1e
resource: aba
description: # Rotary Axis Toolpath Issue

source: abacus
session_id: cb2f9df1e
resource: abacus://conversation/cb2f9df1e

# Conversation

- **Session ID:** `cb2f9df1e`
- **Source:** abacus.ai
- **Project:** AI Va
resource: agentmemory://memory/mem_mti8t3eo_adf1af7aaacb
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/cb2f9df1e"]
timestamp: 2026-09-01T05:44:43.267Z
source: agentmemory
strength: 7
---
# Content

# Rotary Axis Toolpath Issue

source: abacus
session_id: cb2f9df1e
resource: abacus://conversation/cb2f9df1e

# Conversation

- **Session ID:** `cb2f9df1e`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-04-22T14:40:50+00:00
- **Messages:** 80

---

### 👤 User

I have a piece of 2.75 in square stock in the rotary. I set the Z origin to the top of the highest corner of the stock. The toolpath, when it starts, goes to 38.433 on the A axis. I don't understand why this is happening.

---

### 🤖 Assistant

This is actually expected behavior from Aspire’s rotary “Wrap Y” strategy — it just looks weird the first time you see it.

### What’s going on
Right at the start of your file:
```
G0X0.0000A0.0000
...
G0X0.0000A38.4075
```

So the machine **does start at A = 0**, then immediately indexes to **A ≈ 38.4°** before cutting.

### Why 38.4° specifically
Aspire is **not starting at a corner** of your square stock. It is starting at the **first calculated toolpath slice** based on:

- your **wrapped model geometry**
- your **stepover / pass spacing**
- and how Aspire distributes passes around 360°

In your file you can see a pattern:
- 38.4°
- 128.4°
- 218.4°
- 308.4°

That’s **every 90° + an offset (~38.4°)**

So Aspire is:
- dividing the rotary into quadrants
- then offsetting the start so the passes are centered on the geometry, not aligned to A=0

### Key point (this is the important one)
👉 **A=0 in Aspire ≠ “corner of your square stock” unless you explicitly set it that way**

Aspire doesn’t know or care about

your “highest corner” when calculating A.
It only knows:
- the **unwrapped model position**
- and the **centerline of the rotary**

### Why this can feel wrong in your setup
You said:
> Z zero is top of the highest corner

That’s fine for Z, but:
- your **A zero is just wherever you indexed the rotary**
- Aspire is assuming A=0 corresponds to a specific angular position of the model

If those don’t match → the first move looks arbitrary (like 38°)

### When this becomes a problem
This only matters if:
- you need a **specific face or corner to align with A=0**
- or you’re doing **indexed multi-sided work**

If you’re just rounding → it will still cut correctly

### How to make it start where YOU expect

#### Option 1 (most common fix)
Rotate your model in Aspire so the “start” aligns with A=0

- In Aspire: use **Rotate 3D Model**
- Spin it around the Z axis until the seam lands where you want
- Recalculate toolpath

#### Option 2 (machine-side fix)
Manually rotate your stock so:
- the desired face aligns with

**A ≈ 38.4°**
- then zero A there

Not ideal, but works

#### Option 3 (best practice for square-to-round)
- Treat A=0 as **center of a face**, not a corner
- Design/model with that assumption

### One more subtle thing
You’re using:
```
(Onefinity Redline WrapY (inch))
```

That post:
- converts Y → A using circumference math
- which can introduce offsets depending on your **material diameter setting in Aspire**

If your **job setup diameter ≠ actual stock geometry**, you’ll see angular offsets like this

### Quick sanity check
In Aspire, check:
- **Job Setup → Wrapped Job**
- What is your **Diameter set to?**

For 2.75" square stock:
- If you're rounding → diameter should usually be **2.75"**
- If it's something else → that can shift angular mapping

---

### Bottom line
Nothing is wrong with your machine.

That 38.4° move is:
👉 Aspire choosing where the toolpath begins based on its math — not your physical stock corner.

---

If you want, I can show you exactly how to force Aspire to start at A=0

(cleanly, not hacked), which makes setups way more predictable on the Onefinity.

---

### 👤 User

show exactly how to force Aspire to start at A=0

---

### 🤖 Assistant

There's no single "force start at A=0" button in Aspire, but here's the cleanest method:

---

### The Real Fix: Align Your Model's Seam to A=0

The toolpath starts where Aspire places the **seam** of the wrapped job. You need to control where that seam lands.

#### Step 1 — Check Your Wrapped Job Setup
- **Job Setup 
