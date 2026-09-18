---
type: Fact
title: # Shutting Down Eufy UV Printer

source: abacus
session_id: 33f412d4e
resource: 
description: # Shutting Down Eufy UV Printer

source: abacus
session_id: 33f412d4e
resource: abacus://conversation/33f412d4e

# Conversation

- **Session ID:** `33f412d4e`
- **Source:** abacus.ai
- **Project:** AI
resource: agentmemory://memory/mem_mti8ro9z_51406f488eab
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/33f412d4e"]
timestamp: 2026-09-01T05:43:37.018Z
source: agentmemory
strength: 7
---
# Content

# Shutting Down Eufy UV Printer

source: abacus
session_id: 33f412d4e
resource: abacus://conversation/33f412d4e

# Conversation

- **Session ID:** `33f412d4e`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-03-07T21:44:15+00:00
- **Messages:** 6

---

### 👤 User

How do I shut down my Eufy UV printer to minimize in loss during overnight

---

### 🤖 Assistant

To minimize ink loss and protect your printhead overnight, the best approach depends on whether you plan to use the printer the next day or leave it idle for a longer period.

### **Option 1: Keep Standby Mode (Recommended for Daily Use)**
If you are printing daily, it is generally more ink-efficient to leave the printer powered **ON** and in standby mode.
* **Automatic Flash Clean:** While idle, the printer performs a "Flash Clean" every 10 minutes. This uses a negligible amount of ink (approximately 0.000004 ml per channel) to keep the nozzles from drying out.
* **Avoids Heavy Priming:** Keeping it on prevents the system from thinking it has been "abandoned," which might trigger a more intensive cleaning cycle when you next try to print.
* **Auto-Maintenance:** If left idle for a full 24 hours, it will automatically perform a moisturizing cycle at midnight to protect the printhead.

### **Option 2: Safe Shutdown (Recommended for 24+ Hours of Idleness)**
If you do not plan to use the printer for more than a

day, you should perform a **Safe Shutdown**. This process seals the printhead and uses moisturizing liquid to prevent clogs without the need for constant ink spitting.
* **How to do it:** Manually press and hold the power button for **5 seconds**.
* **What happens:** The printer will begin a "Safe Shutdown Moisturizing" process that takes about **7 minutes and 30 seconds**.
* **Ink Impact:** This uses about 0.33 ml of ink per channel once to prepare the head for storage. Once completed and in this "moisturized state," the machine consumes **no additional ink** or moisturizing fluid while it remains off.
* **Restarting:** Note that when you turn it back on to print, it will perform an "Ink Injection" to clear the moisturizing liquid, which consumes about 1.5 ml of ink per channel.

### **Summary of Ink Loss**
| State | Ink Loss (Per Channel) | Best For |
| :--- | :--- | :--- |
| **Standby (ON)** | < 1ml per day (total) | Overnight or same-day use. |
| **Safe Shutdown** | 0.33ml (shutdown) + 1.5ml (restart) |

Leaving the printer for 2+ days. |

**Important Note:** Never pull the power plug or turn off the main power switch abruptly. This prevents the printhead from docking properly in its "cap," which can lead to the ink drying and permanently clogging the nozzles, requiring a much more expensive deep clean or printhead replacement later.

For more detailed maintenance rules, you can refer to the [eufyMake Maintenance Guide](https://www.eufymake.com/blogs/maintenance-guides/why-uv-print-head-need-high-maintenance) and their [Official Maintenance Strategy](https://www.eufymake.com/blogs/news/current-maintenance-rules-future-improvements).

---

### 👤 User

In the app make studio how do I determine how much is used on a print

---

### 🤖 Assistant

Here’s how ink usage works in EufyMake Studio right now, and what you *can* and *can’t* see in the app.

### 1. What EufyMake Studio actually shows

Eufy’s own docs and user reports indicate:

- **Studio shows an *estimated ink usage* per print job** in the job details (usually after you slice/prepare the job, before you hit Print). This is a *theoretical* value based on coverage and layers, and it **does not include**:
  - pre-print priming ink
  - auto-cleaning / deep-clean / moisturizing cycles  
  That’s explicitly stated in Eufy’s maintenance docs: pre‑print priming ink “is not included in the ink usage estimation for each print project” [eufyMake maintenance rules](https://www.eufymake.com/blogs/news/current-maintenance-rules-future-improvements).

- Several testers note that **there is no true “per-print actual ml log” in the current software**, only estimates and cartridge percentag
