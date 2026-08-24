---
type: Fact
title: # Edge relative point offset setup

source: hermes
session_id: 20260724_100623_9
description: # Edge relative point offset setup

source: hermes
session_id: 20260724_100623_9ac330
resource: hermes://session/20260724_100623_9ac330

# Conversation

- **Session ID:** `20260724_100623_9ac330`
- **
resource: agentmemory://memory/mem_mspdvwig_b67a187736e2
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:33.367Z
source: agentmemory
strength: 7
---
# Content

# Edge relative point offset setup

source: hermes
session_id: 20260724_100623_9ac330
resource: hermes://session/20260724_100623_9ac330

# Conversation

- **Session ID:** `20260724_100623_9ac330`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-24T15:06:26Z
- **Messages:** 96
- **CWD:** `/Users/davec`
- **Tokens:** 90542 in / 70914 out

---

### 👤 User — 2026-07-24T15:06:26Z

The setup needs to know the surface size for X and Y, The points location needs x and y offsets for each point. For four points the origin for each point should be relative to the nearest edge. E.G. stock is 12in sqaure, the top right point is 1 in in from right and 1 in from top, internally you would convert the point location relative from center to determine your needed lengths. For 3 points, assume one point is in the center of nearest edge and the other two like the 4 point. E.G. 12 in square surface top point is 1 in in from center of top, the other 2 are 1 in from nearest edge. Does this make sense?

### 🤖 Assistant — 2026-07-24T15:07:10Z

<details><summary>Reasoning</summary>

The user is describing a requirement for something — it sounds like they're setting up some kind of fixture, jig, or workpiece-holding system, possibly for CNC/CAM (Vectric), or a probing/fixturing system with points and offsets.

Let me parse what they're saying:

- "The setup needs to know the surface size for X and Y" — so a surface (stock) with X and Y dimensions, e.g., 12 inch square.
- "The points location needs x and y offsets for each point" — there are "points" (probably mounting/clamping/probe points or registration points) and each has x and y offsets.
- "For four points the origin for each point should be relative to the nearest edge." — For four points (one per corner presumably), each point's coordinates are measured from the nearest edge. E.g., top-right point is 1 inch in from right edge and 1 inch from top edge.
- "internally you would convert the point location relative from center to determine your needed lengths." — So internally, convert the edge-relative offsets to center-relative coordinates to compute needed lengths (e.g., distances/spacing).
- "For 3 points, assume one point is in the center of nearest edge and the other two like the 4 point." — For 3 points, one point is centered on its nearest edge (e.g., top point at center of top edge, 1 inch from top), and the other two behave like the 4-point case.

This sounds like the user is describing a spec — maybe for a CNC work-holding jig, a probing routine, a doghole/hold-down pattern, or registration points in a CAM tool. They're asking "Does this make sense?" — they want me to confirm understanding, maybe sanity-check the geometry/logic, and possibly they want me to implement something.

This is somewhat ambiguous context. The user hasn't told me what they're building. They might be designing a piece of software, a config schema, or just describing a physical setup they want to confirm is geometrically sound.

Given the persona instructions: I should respond like a friendly coworker who knows everything. I should engage, confirm understanding, and probably point out considerations. But I should not just blindly say "yes." Let me actually think about the geometry to verify it makes sense and surface any gaps.

Let me reason through the conversion logic:

For a surface of size X × Y (e.g., 12 × 12), with center at (X/2, Y/2) if we put origin at center.

Four points (corners):
- Top-right: 1" from right edge, 1" from top edge.
  - In a coordinate system with origin at center, X-right positive: the right edge is at +X/2, top edge is at +Y/2 (assuming Y up).
  - Top-right point x = +X/2 − 1, y = +Y/2 − 1.
- Similarly other corners.
- "Determine your needed lengths" — perhaps the distance between points, or the lengths of struts/brackets between points.

For three points: one point centered on nearest edge (e.g., top center: 1" from top edge, centered horizontally → x = 0, y = +Y/2 − 1), other two like 4-point (e.g., bottom-left and bottom-right corners).

This makes sense as a description. The key design decision is t
