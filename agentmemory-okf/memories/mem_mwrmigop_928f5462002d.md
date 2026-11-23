---
type: Fact
title: # XTool P3 curved surface red dot workflow

source: hermes
session_id: local-dc4
description: # XTool P3 curved surface red dot workflow

source: hermes
session_id: local-dc428438dd0e5290975e03b237348f85671d10e4f048d931665433bd4ac51e5f
resource: hermes://session/local-dc428438dd0e5290975e03b23
resource: agentmemory://memory/mem_mwrmigop_928f5462002d
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/Ideas"]
timestamp: 2026-11-22T09:17:24.331Z
source: agentmemory
strength: 7
---
# Content

# XTool P3 curved surface red dot workflow

source: hermes
session_id: local-dc428438dd0e5290975e03b237348f85671d10e4f048d931665433bd4ac51e5f
resource: hermes://session/local-dc428438dd0e5290975e03b237348f85671d10e4f048d931665433bd4ac51e5f

# Conversation

- **Session ID:** `local-dc428438dd0e5290975e03b237348f85671d10e4f048d931665433bd4ac51e5f`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-17T13:16:43Z
- **Ended:** 2026-11-21T16:27:59Z
- **Messages:** 9
- **CWD:** `/Volumes/projects/Ideas`
- **Tokens:** 34669 in / 5763 out

---

### 👤 User — 2026-11-17T13:16:45Z

on an XTool P3 Laser trying to use the curved surfacerequires me to walk back and forth from the computer to go see the red dot, surely there's a better way than thisor do they expect you to have the computer sitting at the X tool so you can watch the thing move as you click on the arrows? This is stupid

### 🤖 Assistant — 2026-11-17T13:16:55Z

<details><summary>Reasoning</summary>

The user is asking about xTool P3 laser cutter — the red dot positioning workflow for curved surfaces. They're frustrated about walking back and forth between computer and laser. They want to know if there's a better way.

Let me think about what I know. The xTool P3 is a 60W CO2 laser (new-ish, launched ~2025). It has a red dot pointer and a camera. Actually, the P3 has an "AI camera" and the red dot pointer. For curved surfaces (like a tumbler or cylinder), xTool has a rotary attachment. The red dot alignment process: in xTool Creative Space (XCS) or LightBurn, you jog the laser head with arrow keys and fire the red dot to see where it lands, then walk over to check.

Key answer points:
1. There IS a better way — the P3's built-in camera (or the physical red dot) can be viewed remotely. Options:
   - Use a phone/tablet running XCS remotely? Actually xTool P3 has Wi-Fi and works with XCS over network... Hmm, does it? The P3 supports Wi-Fi connectivity and xTool Creative Space desktop. There's also the xTool app for mobile for some machines.
   - LightBurn's "Camera" feature to overlay the workspace, plus "Print and Cut" alignment.
   - A cheap USB/IP camera mounted looking at the work area streaming to the computer (e.g., an old phone as webcam via Continuity Camera on macOS, or an IP camera). Then you watch the screen while jogging.
   - Screen sharing: run XCS on a laptop next to the laser, or use VNC/Screen Sharing from a laptop.
   - Directly: the P3's red dot follows the head, so instead of jogging with arrows and walking over, do the positioning in the software with the camera preview — the camera view shows the workpiece and you drag the frame; the red dot is only needed when there's no camera view.
   - Rotary: xTool's rotary attachment + the "curved surface" mode.

Actually, let me be careful about facts I'm not sure of. The P3: 60W CO2, 36"x24"? Let me recall. xTool P3 was announced 2025: 80W CO2? Hmm. xTool P2 is 55W CO2 with 600x308mm... P2S is 55W. P3 is... I believe xTool P3 is a 60W CO2 laser with a 700x460mm work area? Not sure. I should avoid specifics I can't verify. Or I could search the web.

Given the environment has web tools, and this is a factual product question, maybe a quick search to confirm capabilities (camera, Wi-Fi app control, LightBurn support) would be good. The user is frustrated and wants a practical answer. Let me do a quick web search for xTool P3 camera / red dot positioning curved surface / rotary.

Let me search.

Also consider: is there a skill relevant? "cnc-cam: print-cut-registration", "vectric-cam", "gcode-*". Hmm, the skills listed: cnc-cam: print-cut-registration — that's about registration/alignment for print-cut. Possibly relevant (alignment workflows). But this is a laser question. The skill-retrieval plugin injects top-6 skills per turn — nothing appeared after the user's message here. I'll not load skills; maybe quickly check print-cut-registration? It's about print-cut registration which involves camera alignment... Eh, marginal. The instructions say err on the side of loading. But that skill is about CNC/CAM print-cut registration — could contain alignment techniques. Let me peek at it cheaply? It costs a call. I'll do web searches first; 
