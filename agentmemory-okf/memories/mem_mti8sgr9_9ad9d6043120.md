---
type: Fact
title: # Z-Axis Gcode Issue

source: abacus
session_id: 847e6ccbc
resource: abacus://co
description: # Z-Axis Gcode Issue

source: abacus
session_id: 847e6ccbc
resource: abacus://conversation/847e6ccbc

# Conversation

- **Session ID:** `847e6ccbc`
- **Source:** abacus.ai
- **Project:** AI Vault
- **
resource: agentmemory://memory/mem_mti8sgr9_9ad9d6043120
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/847e6ccbc"]
timestamp: 2026-09-01T05:44:13.942Z
source: agentmemory
strength: 7
---
# Content

# Z-Axis Gcode Issue

source: abacus
session_id: 847e6ccbc
resource: abacus://conversation/847e6ccbc

# Conversation

- **Session ID:** `847e6ccbc`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-09-25T11:09:28+00:00
- **Messages:** 10

---

### 👤 User

When I execute this gcode on the controller the machine probes down to the top of the block and sets the Z to the size _probe_block_z. I raise the Z and remove the probe block and then execute `G1 Z0 F100` and the Z lowers but is about 2-3mm above the stock. It should be touching the stock. What is happening?

---

### 🤖 Assistant

Got it — thanks for the context, I looked at your setup.  
From what you described:

1. You load the probing routine (`probe_z`).  
2. The probe touches the top of your calibration block.  
3. The controller then sets Z reference based on `_probe_block_z`.  
4. You jog up, remove the block, and run `G1 Z0`.  
5. Instead of the tool touching stock (top of workpiece), it's hovering ~2–3 mm above.

That tells me the machine is **consistently off by the block thickness offset math** — essentially your G-code logic is zeroing at the wrong value.

---

### What’s likely happening
- The probing routine sets the Z coordinate **to the block height** instead of **subtracting the block height**.  
- In many probe macros (LinuxCNC, GRBL, Buildbotics, etc.), the logic should be something like:

  \[
  Z_\text{work} = Z_\text{machine probe position} - \text{probe block thickness}
  \]

- If the probing code just sets Z to `_probe_block_z` directly (instead of subtracting), then you're defining the block top as Z0 instead

of stock top.  
- That would put your tool *above* the stock equal to the block height — and the discrepancy you see (2–3 mm) matches your block’s actual thickness error or mismatch.

---

### Why you’re off by 2–3 mm and not exactly block thickness
- The variable `_probe_block_z` in your `globals` might not **exactly** match the real physical block thickness.
- Small mismatch = floating above the stock. (E.g. if the block is 12.7 mm but you defined `_probe_block_z` = 15 mm → you’ll hover 2.3 mm high.)

---

### How to fix it
1. Measure your probe block with calipers.  
2. Check your `globals` file for `_probe_block_z`.  
3. Make sure `_probe_block_z` exactly equals the real block thickness.  
4. Verify the probe macro’s command: it should adjust the work coordinate by subtracting that block size, not just setting Z.

---

✅ In short:  
Your probing macro is **leaving Z at block top** instead of **stock top offset by block thickness**. Correct `_probe_block_z` or the logic in `probe_z` to fix it.

---

Do

you want me to open and walk through the actual `probe_z` file and show you the exact line where the offset is being applied wrong?

---

### 👤 User

Are your sure? When the probe is sitting on top of the block and setting the the Z to _probe_block_z (which is exactly the size of the block as measured with calipers) the Z will think it is _probe_block_z above the stock and executing `G1 Z0 F100` the Z should move down _probe_block_z no?

---

### 🤖 Assistant

Exactly — that’s the right intuition. Let’s walk through the logic carefully step by step:

---

### Step‑through
1. **Physical situation at probe hit**  
   - Tool tip is physically sitting on top of the probe block.  
   - That means the tool tip is *block thickness above the stock surface*.

   \[
   Z_\text{tool, real} = \text{block thickness above stock}
   \]

2. **What the macro does**  
   - The probe routine sets the machine’s current Z coordinate equal to `_probe_block_z`.  
   - If `_probe_block_z` = (the probe block’s measured height), then at that moment:

   \[
   Z_\text{controller} = Z_\text{tool, real} = \text{block thickness}
   \]

3. **Remove the block**  
   - You jog up, remove block, nothing changes in controller’s mind — it still thinks the tool is at Z = block thickness when sitting right at that same physical point.

4. **Command `G1 Z0`**  
   - Controller lowers from Z = block thickness down to Z = 0 → distance move
