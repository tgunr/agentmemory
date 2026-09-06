---
type: Fact
title: # Resetting Schlage Lock Codes

source: abacus
session_id: 12f9c86fd6
resource: 
description: # Resetting Schlage Lock Codes

source: abacus
session_id: 12f9c86fd6
resource: abacus://conversation/12f9c86fd6

# Conversation

- **Session ID:** `12f9c86fd6`
- **Source:** abacus.ai
- **Project:** 
resource: agentmemory://memory/mem_mti8qpl3_374ac9ae56c0
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/12f9c86fd6"]
timestamp: 2026-09-01T05:42:52.059Z
source: agentmemory
strength: 7
---
# Content

# Resetting Schlage Lock Codes

source: abacus
session_id: 12f9c86fd6
resource: abacus://conversation/12f9c86fd6

# Conversation

- **Session ID:** `12f9c86fd6`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-05-16T17:47:20+00:00
- **Messages:** 4

---

### 👤 User

I need to find out what kind of lock this is and how to reset the codes I think it’s a Schlage

---

### 🤖 Assistant

### What kind of lock is this?
From your photos (especially the “ADDING USER CODES” card and the internal layout), this is a **Schlage keypad lock** (the common BE/FE keypad style, not a Wi‑Fi “Encode” touchscreen type).

Also: the small white sticker in your battery compartment shows a **6‑digit Programming Code** that looks like **`160620`**. That’s the “admin” code used to manage (add/delete) user codes.

### How to reset / clear the codes (keep the same Programming Code)
If you just want to wipe all user codes and start over (most Schlage keypad models):

1. Press the **Schlage** button on the keypad (outside).
2. Enter the **6‑digit Programming Code** (likely `160620` from your photo).
3. Press **`6`** (delete all user codes).
4. Press the **Schlage** button again to **confirm**.

After that, add a new code:

1. Schlage button
2. Programming Code (`160620`)
3. Press **`1`** (add code)
4. Enter new **4‑digit** user code
5. Re-enter the same **4‑digit** code to confirm

### Full factory reset (if things

are messed up)
This typically restores the lock to factory defaults and clears all user codes:

1. Remove the **battery pack/batteries**.
2. Press and **hold** the **Schlage** button on the outside keypad.
3. While holding it, **reconnect/insert** the batteries.
4. Release the Schlage button when it flashes/beeps.
5. Then press the Schlage button again and enter the **Programming Code** from the sticker (again, likely `160620`) to complete setup.

### Quick check so I give the exact steps for your model
Can you upload **one photo of the outside keypad/trim** (full view), and if possible a close-up of any model label (often starts with `BE...` or `FE...`) inside the cover or on the latch edge?  
Schlage procedures are very similar, but the exact confirm-beep/light pattern and a couple menu options vary by model.

---

### 👤 User

The keypad

---

### 🤖 Assistant

My mistake! Looking at the outside of the keypad, this is actually a **Kwikset SmartCode** deadbolt, likely the **909** or **910** series. 

Even though it’s a Kwikset, the "160620" sticker you found inside is very likely the **MasterCode**. Here is how to factory reset it to clear all existing codes and then add your own:

### Full Factory Reset
1. Remove the **battery pack** from the interior side.
2. Press and **HOLD the Program button** (the white button you see in your first photo, left of the switches).
3. While holding the button, **insert the battery pack** back in.
4. Keep holding the Program button for **30 seconds** until the lock beeps and the status LED (if visible) flashes red.
5. Press the **Program button** once more (quickly). The status LED will flash green and you should hear a beep.
6. **Important Part:** To teach the lock which way your door closes (the "Auto-Handing" process), the lock will move the bolt. If it doesn't move automatically, enter a code or press the Lock button.

### How

to Add User Codes
Since you have a MasterCode (160620), you should use it for security:

1. Keeping the door open, press and **HOLD the Program button** until the keypad flashes green (about 5 seconds).
2. Enter the **MasterCode** (`160620`).
3. Press the **Lock button** (on the top of the keypad).
4. Press **1**.
5. Press the **Lock button**.
6. Enter your new **4-8 digit user code**.
7. Press the **Lock button** to save it.

#### Note on the Switches
In your first photo, there is a bank of 4 small white switches. If you have trouble seeing lights or hearing beeps, check these:
*   **Switch 1:** Status LED (On/Off)
*   **Switch 2:** Auto-lock (re-locks door after 30 seconds)
*   **Switch 3:** Audio/Beeping (On/Off)

If the MasterCode `160620` doesn't
