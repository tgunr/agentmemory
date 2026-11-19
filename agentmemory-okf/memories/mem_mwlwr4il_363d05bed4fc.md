---
type: Fact
title: # Determine PETCG clearance for Prusa XL fit

source: hermes
session_id: local-b
description: # Determine PETCG clearance for Prusa XL fit

source: hermes
session_id: local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085
resource: hermes://session/local-bdeff4a0d071d5405a3452a
resource: agentmemory://memory/mem_mwlwr4il_363d05bed4fc
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/Ideas"]
timestamp: 2026-11-18T09:17:27.686Z
source: agentmemory
strength: 7
---
# Content

# Determine PETCG clearance for Prusa XL fit

source: hermes
session_id: local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085
resource: hermes://session/local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085

# Conversation

- **Session ID:** `local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-16T14:54:34Z
- **Ended:** 2026-11-17T11:55:09Z
- **Messages:** 517
- **CWD:** `/Volumes/projects/Ideas`
- **Tokens:** 330704 in / 102364 out

---

### 👤 User — 2026-11-16T14:54:35Z

I have a two part 3d object in which one part fits inside the other printed on Prusa XL with PETCG filiment. The fit is very tight, what amount should I expand/contract to make the fit better?

### 👤 User — 2026-11-16T14:54:35Z

I have a two part 3d object in which one part fits inside the other printed on Prusa XL with PETCG filiment. The fit is very tight, what amount should I expand/contract to make the fit better?

### 🤖 Assistant — 2026-11-16T14:54:40Z

<details><summary>Reasoning</summary>

The user asks about 3D printing clearance for PETG-CF on Prusa XL. This is a knowledge question but there's a skill "3d-printing" and "print-cut-registration" and "project-cnc"... Let me check the 3d-printing skill per instructions.

Let me load it.

</details>

**Tool call: skill_view**

```json
{
  "name": "3d-printing"
}
```

### 🤖 Assistant — 2026-11-16T14:54:55Z

<details><summary>Reasoning</summary>

Not relevant to fit clearance. There's also "print-cut-registration" (cnc-cam) and "project-cnc". Probably not relevant. Let me just answer with domain knowledge. Maybe check if user has a project dir with the model? The question is generic: "what amount should I expand/contract to make the fit better?"

Answer: For PETG-CF on Prusa XL (FDM), radial clearance ~0.2mm per side (0.4mm total on diameter) for a slip fit; 0.1-0.15mm per side for snug; 0.3-0.4mm for free fit. PETG-CF shrinks less than plain PETG (CF filler reduces shrinkage), so shrinkage isn't the issue — elephant's foot, extrusion width/over-extrusion, and horizontal expansion compensation are.

Key practical numbers:
- Snug/press fit: 0.10 mm per side (0.20 mm total)
- Slip fit (assembles, removable): 0.15–0.20 mm per side (0.30–0.40 mm dia)
- Free fit: 0.25–0.30 mm per side

Since currently "very tight", go to 0.20 mm per side (0.40 mm total diameter) for PETG-CF, which is more prone to oozing/blobbing and over-extrusion. Also recommend: XY size compensation in PrusaSlicer is per-object, applied to the whole outer/inner contour — PrusaSlicer has "XY Size Compensation" (per-object settings, applies to all contours) — that shrinks both hole and outer wall, so it changes the fit by twice the value when adjusting only one part. Better: use PrusaSlicer's "XY hole compensation" (hole expansion only) — in PrusaSlicer it exists as "XY hole compensation" per object, positive value enlarges holes.

Actually careful: PrusaSlicer has:
- "XY Size Compensation" (object-level, mm) — offsets all contours: positive shrinks the object overall (makes outer smaller and holes smaller). Actually positive XY size compensation shrinks the part. Yes: in PrusaSlicer, positive XY Size Compensation shrinks the object (contracts outward contours and contracts inward/hole contours → holes get smaller).
- "XY hole compensation" — positive enlarges holes only. Available in PrusaSlicer 2.6+/2.7 (and "Hole size compensation" under Print Settings? There's "XY hole compensation" in the object settings).

Recommendation: apply XY hole compensation +0.2 on the outer part, or design-side radial clearance 0.2 mm.

Also mention: 0.4mm nozzle → minimum reliable feature/gap. Gaps below ~0.15mm fuse. Also elephant's foot compensation for a press-on bottom edge, and check flow (over-extrusion of 2-3% is common with CF).

Also test coupon suggestion: print a small stepped clearance test (0.05 to 0.35 in 0.05 steps).

Also for a two-part nesting design: the other factor is taper/chamfer lead-in ~0.5mm x 45°.

And: if the fit needs to be tight in one axis but sliding, consider making one part's mating features offset only in CAD per-side.

The user asks "wha
