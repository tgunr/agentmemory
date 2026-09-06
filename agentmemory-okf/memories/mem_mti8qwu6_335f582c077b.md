---
type: Fact
title: # Laser Engraving Speed Comparison

source: abacus
session_id: 140162542
resourc
description: # Laser Engraving Speed Comparison

source: abacus
session_id: 140162542
resource: abacus://conversation/140162542

# Conversation

- **Session ID:** `140162542`
- **Source:** abacus.ai
- **Project:**
resource: agentmemory://memory/mem_mti8qwu6_335f582c077b
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/140162542"]
timestamp: 2026-09-01T05:43:01.467Z
source: agentmemory
strength: 7
---
# Content

# Laser Engraving Speed Comparison

source: abacus
session_id: 140162542
resource: abacus://conversation/140162542

# Conversation

- **Session ID:** `140162542`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-01-31T18:01:24+00:00
- **Messages:** 10

---

### 👤 User

If I make a laser engrave image using 64 watt laser running running at 9000 mm/min and make two passes what would the equivalent lower speed be for the same density.

---

### 🤖 Assistant

To match the *same total energy per unit length* (often called “burn density”) of:

• 64 W  
• 9000 mm/min  
• **2 passes**

…you just divide the speed by the number of passes.

Each pass delivers energy proportional to (power / speed).  
Two passes = 2× the energy of one pass at the same speed.  
So one pass must go **half as fast** to equal the energy of two passes.

### Result
Equivalent single‑pass speed:

**9000 mm/min ÷ 2 = 4500 mm/min**

### Final Answer
**≈ 4500 mm/min** is the lower speed that gives the same burn density as two passes at 9000 mm/min.

---

### 👤 User

so if I made the first pass at 9000 what speed would I need to make pass two equivalent to 7000?

---

### 🤖 Assistant

To find the speed for the second pass that makes the total energy equivalent to a single pass at 7000 mm/min, we need to look at the "total energy" (or time spent over the material) as a sum of the two passes.

The relationship is based on the inverse of the speeds (since $Time = \frac{Distance}{Speed}$):

$$\frac{1}{V_{total}} = \frac{1}{V_{pass1}} + \frac{1}{V_{pass2}}$$

#### The Calculation

1.  **Target Speed ($V_{total}$):** 7000 mm/min
2.  **First Pass Speed ($V_{pass1}$):** 9000 mm/min
3.  **Second Pass Speed ($V_{pass2}$):** $X$

We set up the equation:
$$\frac{1}{7000} = \frac{1}{9000} + \frac{1}{X}$$

Subtracting the first pass from the total:
$$\frac{1}{X} = \frac{1}{7000} - \frac{1}{9000}$$

To solve this:
$$\frac{1}{X} = \frac{9000 - 7000}{63,000,000}$$
$$\frac{1}{X} = \frac{2000}{63,000,000}$$
$$X = \frac{63,000,000}{2000}$$
**$X = 31,500$**

#### Final Answer
To make the combined result of two passes equal to a single pass at 7000 mm/min, your second pass would need to be:

**31,500

mm/min**

*Note: Most hobbyist or prosumer diode lasers have a maximum travel speed (often capped between 10,000 and 24,000 mm/min). If your machine cannot reach 31,500 mm/min, you would need to lower the power on the second pass or adjust your initial speed strategy.*

---

### 👤 User

My system can only go 12500 so what power reduction do I need for the 7000 speed?

---

### 🤖 Assistant

Since your machine is capped at **12,500 mm/min**, you cannot reach the 31,500 mm/min required at full power. To compensate, you must run the second pass at your maximum speed and significantly reduce the laser power.

To achieve the same total energy density as a single 7,000 mm/min pass:

#### The Calculation
1.  **Total Energy Needed:** Equivalent to $1/7000$.
2.  **Energy from Pass 1:** Already delivered at $1/9000$.
3.  **Energy Gap:** You still need to deliver approximately **22.2%** of the total required energy.
4.  **Pass 2 at Max Speed:** Running at 12,500 mm/min at 100% power would deliver more energy than you need for that "gap."

#### The Result
If you run your second pass at **12,500 mm/min**, you should set your power to:

**≈ 39.7% of your original power**

#### Summary for your settings:
*   **Pass 1:** 9,000 mm/min @ 100% Power (64W)
*   **Pass 2:** 12,500 mm/min @ **~40% Power** (approx. 25.4W)

This combination will result in a total burn density equivalent to a single pass at 7,000 mm/min

at full power.

---

### 👤 User

And what power for 9000?

---

### 🤖 Assistant

You want the *two passes at 9000 mm/min* to equal a **single pass at 7000 mm/min** (at 100% power).

We already did pass 1 at:

- Pass 1: **9000 mm/min @ 100% power**

Now you’re asking: if **Pass 2 is also at 9000 mm/min**, what power should it be?

Using the same energy‑per‑length logic, the required power for pass 2 is:

> **Pass 2 power ≈ 28.6%**

So your settings would be:

- **Pass 1:*
