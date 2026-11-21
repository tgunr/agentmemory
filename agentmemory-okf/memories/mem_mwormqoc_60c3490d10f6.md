---
type: Fact
title: # Creality colored plywood engraving settings Xtool P3

source: hermes
session_i
description: # Creality colored plywood engraving settings Xtool P3

source: hermes
session_id: local-20f32e1095a01700457c3b383b3be3526dee946541e438deb81cc4d6705af0dc
resource: hermes://session/local-20f32e1095a01
resource: agentmemory://memory/mem_mwormqoc_60c3490d10f6
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Library/CloudStorage/Nextcloud-cloud.polymicro.net-Dave/CTC"]
timestamp: 2026-11-20T09:17:23.345Z
source: agentmemory
strength: 7
---
# Content

# Creality colored plywood engraving settings Xtool P3

source: hermes
session_id: local-20f32e1095a01700457c3b383b3be3526dee946541e438deb81cc4d6705af0dc
resource: hermes://session/local-20f32e1095a01700457c3b383b3be3526dee946541e438deb81cc4d6705af0dc

# Conversation

- **Session ID:** `local-20f32e1095a01700457c3b383b3be3526dee946541e438deb81cc4d6705af0dc`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-19T21:18:09Z
- **Messages:** 10
- **CWD:** `/Users/davec/Library/CloudStorage/Nextcloud-cloud.polymicro.net-Dave/CTC`
- **Tokens:** 110196 in / 2068 out

---

### 👤 User — 2026-11-19T21:18:11Z

need recommended settings for engraving Creality colored plywood on the Xtool P3 80W laser

### 🤖 Assistant — 2026-11-19T21:18:14Z

**Tool call: skill_view**

```json
{
  "name": "laser-engraving"
}
```

### 🤖 Assistant — 2026-11-19T21:18:17Z

**Tool call: skill_view**

```json
{
  "file_path": "references/xtool-p3-ir.md",
  "name": "laser-engraving"
}
```

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "Creality colored plywood engraving settings xTool P2 P3 Creative Space"
}
```

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "xTool P3 80W 3mm plywood engraving power speed recommended settings"
}
```

### 🤖 Assistant — 2026-11-19T21:18:20Z

Found your library and the P3 baselines. Fetching the full detail tables now.

### 👤 User — 2026-11-19T21:20:50Z

ok, where is the info?

### 🤖 Assistant — 2026-11-19T21:20:57Z

<details><summary>Reasoning</summary>

Synthesizing recommended engraving settings for Creality colored plywood on an xTool P3 80W while noting material and power tradeoffs.

</details>

Here you go — sorry for the delay, I was pulling the Creatorally + xTool tables.

### Creality Colored Plywood (3mm) — xTool P3 80W CO2

Use the **CO2 head, not the 5W IR**. 10.6µm is what cuts/engraves wood.

Colored ply is a thin colored veneer over a light wood/MDF core. You don't want to *burn* it like basswood — you want to just strip the color to expose the core underneath. The P3 80W is a monster for this (almost 50% more power than the P2/P2S 55W most settings are published for), so **run lower % power, higher mm/s** than published 55W settings, or you'll blow through the veneer, char the core, and get smoke yellowing.

These are XCS numbers: Power % / Speed mm/s / Passes

#### 1. Score — text, logos, line art (the usual "engraving" look)
This is your main setting:
**15% / 300 mm/s / 1 pass**

Range to test by color:
- Light colors (white, yellow, light blue): **12-15% / 350-400 mm/s**
- Mid colors (red, orange, green): **15-18% / 300 mm/s**
- Dark colors (black, dark blue, dark green): **18-22% / 250-300 mm/s** — dark pigment absorbs more, needs a touch more to strip cleanly

Expect: clean light-wood line, no deep crater. If you see brown/black charring, you're 3-5% too hot — drop power first, don't speed up.

#### 2. Bitmap Fill / Photo engraving
**15% / 500 mm/s / 1 pass / 120 Lines per cm**

- Graphics / flat fills: Grayscale mode, 100-120 LPCM
- Photos: Jarvis mode, 140-160 LPCM. If granularity gets too dark, drop to **12% / 600 mm/s**
- If the fill looks washed out / not fully stripping color: 18% / 400 mm/s

Do NOT start at 100 LPCM + 25%+ — on P3 that will burn through to the core and look muddy.

#### 3. If you actually want a deep burn into the core
**25-30% / 300 mm/s / 1 pass / 100 LPCM**
Only if you want dark brown shading, not the white-core look. Slow it to 200 mm/s for near-cut depth.

#### 4. Cut (for reference only — you asked engraving)
3mm basswood plywood on P3 in xTool's library: **80% / 50 mm/s / 1 pass**. Colored ply with glue layers cuts slower:
**75-85% / 35-45 mm/s / 1 pass**, air assist ON. Test — MDF-core colored ply varies a lot batch to batch.

### Where these numbers come from
- Creatorally's own Colored Plywood Library for 40-55W CO2: Engrave 300-500 mm/s @ 10-20%, Cut 18-28 mm/s @ 55-75% (P2/P2S). Scaled down for 80W.
- xTool P3 Material Library (3mm Basswood Plywood, verified July 2026): Fill 20% / 600 mm/s, Score 15% / 200 mm/s, Engrave 6% / 300 mm/s

The P3-specific score/fill numbers bracket your colored-ply starting point nicely.

### Do this before a real job
1. **XCS > Material Tes
