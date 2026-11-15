---
type: Fact
title: # UV printed laser cut photo jigsaw

source: hermes
session_id: local-1cc0aa03e6
description: # UV printed laser cut photo jigsaw

source: hermes
session_id: local-1cc0aa03e649e11cac91156f46604dc7b555fd106009a10ab61d77c57a783d92
resource: hermes://session/local-1cc0aa03e649e11cac91156f46604dc7
resource: agentmemory://memory/mem_mwg6zsv0_37b0f241bf99
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/Ideas"]
timestamp: 2026-11-14T09:17:31.584Z
source: agentmemory
strength: 7
---
# Content

# UV printed laser cut photo jigsaw

source: hermes
session_id: local-1cc0aa03e649e11cac91156f46604dc7b555fd106009a10ab61d77c57a783d92
resource: hermes://session/local-1cc0aa03e649e11cac91156f46604dc7b555fd106009a10ab61d77c57a783d92

# Conversation

- **Session ID:** `local-1cc0aa03e649e11cac91156f46604dc7b555fd106009a10ab61d77c57a783d92`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-13T19:58:38Z
- **Ended:** 2026-11-14T06:16:48Z
- **Messages:** 41
- **CWD:** `/Volumes/projects/Ideas`
- **Tokens:** 157070 in / 24203 out
- **Est. cost:** $-122575.0000

---

### 👤 User — 2026-11-13T19:58:38Z

I have an idea for a possible product combining UV printing with laser cutting. I want to be able to take a photograph and UV print that onto a surface and then use the laser to cut it out in a jigsaw manner.

### 🤖 Assistant — 2026-11-13T19:58:52Z

Feasible, and the combination is more interesting than either process alone. The hard part is registration, not the printing or the cutting.

**Core workflow**
1. **Photo → print file:** crop, colour-correct, and add registration marks.
2. **UV print:** a flatbed UV printer (desktop A3 to large-format) lays down CMYK plus white underlay on clear acrylic, wood, or coated board.
3. **Camera-registered laser cut:** a camera finds the registration marks, and the laser follows the jigsaw path generated from the print's exact position. Without this, any offset between print and cut shows up as misaligned edges.

**Technical points to settle early**
- **Substrate:** Cast acrylic is the strongest candidate. It cuts cleanly with CO2, the UV ink adheres well, and the result looks premium. Wood and MDF work but char at the edges. Avoid PVC, which releases chlorine gas when lasered.
- **Order of operations:** Printing first and cutting second is simplest. Cutting first and printing the pieces is harder to align but avoids ink being exposed to laser heat.
- **Fumes and ink:** Check the UV ink's SDS for fumes when lasered. Ventilation and filtration are required either way.
- **Tolerances:** Laser kerf and tab fit need compensation in the jigsaw generator, or the pieces won't interlock.
- **Competition:** Custom photo puzzles already exist (cardboard, wood, some acrylic). The differentiator would be durability, finish, or an integrated machine rather than a service.

**Two possible products**
- **Consumer/keepsake puzzles** sold as a service or small appliance, with a web upload flow.
- **A maker or shop machine** that combines a UV printer and a laser with camera registration, sold to sign shops and gift makers.

Which direction are you leaning toward, and what's the target material? That determines whether the first prototype should be a desktop hybrid or a service run on existing equipment.

### 👤 User — 2026-11-13T20:01:45Z

what are some current services that offer this kind of custom puzzle? What prices do they charge? I would be using a Eufy Ankey UV 1 printer with a CO2 laser.

### 🤖 Assistant — 2026-11-13T20:01:55Z

<details><summary>Reasoning</summary>

The user asks for current services offering custom photo puzzles (printed + laser cut), and their prices. Also they mention EufyMake UV printer (Eufy Anker... "eufyMake E1 UV printer" — Anker's eufyMake E1, a desktop UV printer, launched 2025 via Kickstarter). And a CO2 laser.

I should search the web for actual pricing. Let me do web searches. Be careful about the name: "eufyMake E1" from Anker (eufyMake brand). The user wrote "Eufy Ankey UV 1" — likely the eufyMake E1 UV printer.

Let me run searches in parallel via execute_code or just web_search calls. I'll batch web_search calls.

Let me search: custom photo puzzle laser cut acrylic price, wooden photo puzzle custom price, Etsy custom photo puzzle prices, "laser cut wooden puzzle custom photo" pricing, acrylic photo puzzle, etc. Also services like Shutterfly (cardboard), Collage.com, Pinhole Press (wooden puzzle?), Uncommon Goods, Fracture? Also "Personalized Wooden Puzzle" by "Nervous System"? There is "Nervous System" which does custom jigsaw puzzles from photos via generative design — but that's cardboard/plywood? Actually Nervous System made custom laser-cut wooden puzzles. Also "Liberty Puz
