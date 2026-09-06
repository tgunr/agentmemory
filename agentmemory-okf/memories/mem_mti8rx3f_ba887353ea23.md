---
type: Fact
title: # Snapmaker 2 Home Settings

source: abacus
session_id: 50e9d9b48
resource: abac
description: # Snapmaker 2 Home Settings

source: abacus
session_id: 50e9d9b48
resource: abacus://conversation/50e9d9b48

# Conversation

- **Session ID:** `50e9d9b48`
- **Source:** abacus.ai
- **Project:** AI Vau
resource: agentmemory://memory/mem_mti8rx3f_ba887353ea23
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/50e9d9b48"]
timestamp: 2026-09-01T05:43:48.447Z
source: agentmemory
strength: 7
---
# Content

# Snapmaker 2 Home Settings

source: abacus
session_id: 50e9d9b48
resource: abacus://conversation/50e9d9b48

# Conversation

- **Session ID:** `50e9d9b48`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-10-07T16:57:06+00:00
- **Messages:** 2

---

### 👤 User

ON SNAPMAKER 2 HOW TO FIND THE CURRENT HOME SETTINGS?

---

### 🤖 Assistant

### How to view current “home” (origin) offsets on Snapmaker 2.0

Use the printer’s G-code console (via Snapmaker Luban or any serial terminal) and run:

- M503 — prints a report of current settings, including home offsets
- Optional checks:
  - M206 with no args won’t print, but the M503 output includes the M206 X/Y/Z home offsets
  - M851 — shows probe/nozzle Z offset (related to Z home)
  - M1007 — Snapmaker-specific: reports homed state, active coordinate system, and origin offset

Typical flow:
1) Connect Luban to the machine (USB/Wi‑Fi), open the Console/Terminal.
2) Send:
   - M503  (look for lines showing “M206 X… Y… Z…” and other offsets)  
   - M851  (to see the probe Z offset)  
   - M1007 (to see origin/coordinate info on Snapmaker)
3) If you later change offsets (M206/M851), use M500 to save to memory.

References:
- Snapmaker G-code: M206 Set Home Offsets (view with M503) [Snapmaker Docs](https://snapmaker.github.io/Documentation/gcode/M206)
- M503 Report Settings [Snapmaker

Docs](https://snapmaker.github.io/Documentation/gcode/M503)
- Snapmaker 2.0 G-code commands overview (Marlin-based) [Snapmaker Wiki](https://wiki.snapmaker.com/en/Snapmaker_Luban/manual/2_supported_gcode_references)

---
