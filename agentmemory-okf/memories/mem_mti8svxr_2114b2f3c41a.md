---
type: Fact
title: # Fix Inverted Camera Overlay

source: abacus
session_id: b72ed76ce
resource: ab
description: # Fix Inverted Camera Overlay

source: abacus
session_id: b72ed76ce
resource: abacus://conversation/b72ed76ce

# Conversation

- **Session ID:** `b72ed76ce`
- **Source:** abacus.ai
- **Project:** AI V
resource: agentmemory://memory/mem_mti8svxr_2114b2f3c41a
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/b72ed76ce"]
timestamp: 2026-09-01T05:44:33.607Z
source: agentmemory
strength: 7
---
# Content

# Fix Inverted Camera Overlay

source: abacus
session_id: b72ed76ce
resource: abacus://conversation/b72ed76ce

# Conversation

- **Session ID:** `b72ed76ce`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-10-11T21:31:12+00:00
- **Messages:** 2

---

### 👤 User

In Lightburn, my camera overlay is inverted. How do I correct that?

---

### 🤖 Assistant

Here are the quickest ways to fix an inverted LightBurn camera overlay:

1) Use the built‑in Flip controls
- Open LightBurn and go to Window > Camera Control to show the Camera panel.
- In the Camera panel, look for the “Flip Horizontally” and “Flip Vertically” toggles.
- Toggle the one that corrects your specific inversion:
  - Mirror image left/right? Turn on Flip Horizontally.
  - Upside‑down image? Turn on Flip Vertically.
  - Both wrong? Enable both.

2) Re-run camera alignment if needed
- If the overlay still doesn’t line up after flipping, redo the alignment/calibration:
  - Tools > Calibrate Camera Lens (only if you changed lens/camera or never did this).
  - Tools > Calibrate Camera Alignment to re-map the bed to the camera view.
- Follow the prompts and use the printed target. Make sure your material is flat and lighting is even.

3) Check the physical camera orientation
- Ensure the camera is mounted in the intended orientation (not rotated 180°).
- If you rotate the camera physically, revisit the

flip toggles and alignment to match.

4) Windows/Mac camera settings (rare)
- If you’re using a virtual camera driver or system-level camera app that’s applying a mirror, disable mirroring there. LightBurn’s flip settings should normally handle this, though.

Tips:
- Do flips first, then alignment. Changing flips after calibration invalidates the mapping.
- Save your alignment once it’s correct so you don’t have to redo it.

---
