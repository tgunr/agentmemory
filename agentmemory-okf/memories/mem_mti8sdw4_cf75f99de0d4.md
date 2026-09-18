---
type: Fact
title: # Onefinity Foreman Dust Boot

source: abacus
session_id: 7fedf1604
resource: ab
description: # Onefinity Foreman Dust Boot

source: abacus
session_id: 7fedf1604
resource: abacus://conversation/7fedf1604

# Conversation

- **Session ID:** `7fedf1604`
- **Source:** abacus.ai
- **Project:** AI V
resource: agentmemory://memory/mem_mti8sdw4_cf75f99de0d4
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/7fedf1604"]
timestamp: 2026-09-01T05:44:10.240Z
source: agentmemory
strength: 7
---
# Content

# Onefinity Foreman Dust Boot

source: abacus
session_id: 7fedf1604
resource: abacus://conversation/7fedf1604

# Conversation

- **Session ID:** `7fedf1604`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-05-17T14:50:10+00:00
- **Messages:** 8

---

### 👤 User

I need to find a dust boot that is compatible with the  Onefinity Foreman automatic tool changer withan 80mm spindle

---

### 🤖 Assistant

### The dust boot that’s explicitly compatible (official)

**Onefinity “Suck It – SM (Gen 2) Dust Shoe (80MM Only) (EASY ATC Compatible)”**  
This is the one Onefinity labels as **EASY ATC compatible** and **80mm spindle only**:  
- Product page: [Suck It - SM (Gen 2) Dust Shoe (80MM Only) (EASY ATC Compatible)](https://www.onefinitycnc.com/product-page/suckit-sm-dust-boot-atc-compatible)

Onefinity also states the Easy ATC was designed to be used with the **Suckit SM dust shoe**, and that the **original Suckit dust boot does not work with the Easy ATC**:  
- Easy ATC announcement/details: [Onefinity CNC Easy ATC by RapidChange ATC](https://www.onefinitycnc.com/post/onefinity-eazy-atc-by-rapidchange-atc)

If you want a different hose size than the included port, Onefinity notes they provide **free 3D-printable hose adapter files**:  
- Linked from the product page to: [Suckit SM Dust Boot 3D file hose adapters FAQ](https://forum.onefinitycnc.com/t/suckit-sm-dust-boot-3d-file-hose-adapters-faq/32327)

###

Other 80mm options (not explicitly stated as Easy ATC compatible on their pages)
If you’re trying to avoid Onefinity’s boot or want a different style, these are 80mm-focused alternatives you can evaluate for clearance—but you’ll want to confirm they don’t block the ATC’s tool-change motions:

- PwnCNC: [Dust Boot v10 – PwnCNC](https://pwncnc.com/products/dust-boot-v10)  
- SolaFide Designs KC: [Nighthawk for 80mm spindle with 4 inch dust collection](https://www.solafidedesignskc.com/product-page/80mm-spindle-with-4-inch-dust-collection)

### Quick clarifying question (so I don’t point you to the wrong variant)
Are you on an **Elite Foreman** (MASSO) or a **Buildbotics/Pro** controller setup—and do you want **2.5"** hose or **4"** dust collection? This mostly affects which boot/adapter setup is easiest.

---

### 👤 User

Foreman Redline 80mm with 4" hose. Are there any open-source or 3D models for such a desk bot?

---

### 🤖 Assistant

For the **Foreman Redline + 80mm spindle + 4" hose**, there *are* some “open” / printable options, but they fall into two buckets:

### 1) Official free 3D files (adapter, not a whole boot)
The **Onefinity Suckit SM (Gen 2) ATC-compatible** dust shoe ships with a ~2.5" port, and Onefinity published **free 3D-print hose adapter files** so you can adapt it to other hose sizes (including 4" if they provide that adapter, or you can modify one).

- Adapter files thread: [Suckit SM Dust Boot 3D file hose adapters FAQ](https://forum.onefinitycnc.com/t/suckit-sm-dust-boot-3d-file-hose-adapters-faq/32327)  
- The dust shoe it’s for: [Suck It - SM (Gen 2) Dust Shoe (80MM Only) (EASY ATC Compatible)](https://www.onefinitycnc.com/product-page/suckit-sm-dust-boot-atc-compatible)

If your main goal is “**ATC-compatible + 4" hose**,” this is usually the cleanest route: use the Suckit SM and either (a) print their adapter, or (b) use a 2.5"→4" reducer.

### 2) Fully 3D-printed dust boots (community/open-source)
These exist,

but compatibility with the **Easy ATC tool-change motion** varies a lot (clearance around the spindle/nut area is the usual failure point).

Quick clarification so I can point you to the *right* models and not ones that will collide during tool changes:

- Did you mean **“dust boot”** (typo as “desk bot”)?
- Do you need it to be **Easy ATC-compatible** (i.e., able to tool-change without removing the boot), or are you OK with a boot you remove/park manually?

If you answer those two, I’ll pull a short list of printable models that match **80mm + 4" hose** and your ATC requirement.

---

### 👤 User

Rapidchange ATC compatible boot with 4" hose

---

### 🤖 Assi
