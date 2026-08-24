---
type: Fact
title: # Defining stock size in setup mode

source: hermes
session_id: 20260724_122430_
description: # Defining stock size in setup mode

source: hermes
session_id: 20260724_122430_f6ce48
resource: hermes://session/20260724_122430_f6ce48

# Conversation

- **Session ID:** `20260724_122430_f6ce48`
- *
resource: agentmemory://memory/mem_mspdzzxe_3e07c9c54ae0
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:44.396Z
source: agentmemory
strength: 7
---
# Content

# Defining stock size in setup mode

source: hermes
session_id: 20260724_122430_f6ce48
resource: hermes://session/20260724_122430_f6ce48

# Conversation

- **Session ID:** `20260724_122430_f6ce48`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-24T17:24:30Z
- **Messages:** 198
- **CWD:** `/Users/davec`
- **Tokens:** 116967 in / 83613 out

---

### 👤 User — 2026-07-24T17:24:31Z

Here is the setup guide for the user, the UX will have to be modified accordingly. When the user enters the setup modeyou will first be asked to define the stock size or the surface size.I envision this two ways:
1. Manual entry by unitsor even better would be a method where the user places the iPhone first in the middle of the stock.At which point the app will take note of the current position.And then the iPhone is moved to each corner of the stock.Assuming the size of the iPhone, each corner can be determined from the location, offset by the width and height of the iPhone divided by two. The iPhone should be placed such that it is in a portrait layout, the user would then enter the top left, possibly press a button to get the top left coordinate, then move it to the top right, press the button again, then down to the bottom right, press the button, and then over to the bottom left. At this point you know the size of the surface.Then the user will be instructed to place the target over the approximate location where the points are located.Again pressing the button over top of each pointI don't think that the accuracy is going to be that critical.Correct me if I'm wrong.

### 🤖 Assistant — 2026-07-24T17:25:30Z

<details><summary>Reasoning</summary>

The user is describing a setup guide for an app — this seems related to the TiltPal / leveling-rig project I have in memory. Let me think about what they're actually asking.

They're describing a setup flow for what sounds like a CNC/leveling app where:
1. User defines stock/surface size — either manual entry OR a clever method using an iPhone placed in the middle, then moved to each corner to determine surface dimensions (using iPhone's known dimensions as a measuring reference).
2. Then user places a "target" over approximate point locations, pressing a button at each point.

They end with: "I don't think that the accuracy is going to be that critical. Correct me if I'm wrong."

So they want my feedback on whether accuracy matters, and presumably they want me to help design/modify the UX for this setup guide.

Let me think about the domain. This is the leveling-rig / TiltPal context. The leveling rig is a 3/4-point adjustable screw leveling system with a circular bullseye level. The "points" are screw points. The user is describing a setup where you define the stock surface size and the location of the leveling points (screws) on that surface.

Wait, let me reconsider. The memory says: "Leveling-rig = the TiltPal app (Xcode proj: /Volumes/davec/Work/tiltpal/ios/TiltPalApp.xcodeproj). Variable model in skill `leveling-rig-vars`; HTML/SVG preview in that skill's references/preview.html. 3/4 screw points leveled by circular bullseye level (±2°, rings ±1/±2°, DIV=5/1000, bubble seeks HIGH). Legs=lever arms for tilt→screw correction. Extend skill for tilt→turn math + overlay."

So this is about a leveling rig where you have screw points (legs) at certain positions on a surface, and you level the surface by adjusting screws. The app needs to know:
- The size of the surface (stock)
- The location of each screw point (leg) on that surface

The setup flow described:
1. Define stock/surface size (manual or iPhone-corner method)
2. Place target over each point location, press button

The user is asking whether accuracy is critical. Let me think about the physics here.

The leveling math: tilt → screw correction. The legs are lever arms. The correction needed at each screw depends on the geometry — specifically the position of each screw relative to the center of rotation / the tilt axis. 

For a 3-point or 4-point leveling system, the key relationship is: the height change needed at each leg to correct a tilt is proportional to 
