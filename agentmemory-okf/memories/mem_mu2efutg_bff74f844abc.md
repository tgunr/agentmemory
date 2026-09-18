---
type: Fact
title: # Calculate shellac pound cut mixture

source: hermes
session_id: 121fa033b237
r
description: # Calculate shellac pound cut mixture

source: hermes
session_id: 121fa033b237
resource: hermes://session/121fa033b237

# Conversation

- **Session ID:** `121fa033b237`
- **Source:** webui
- **Model:*
resource: agentmemory://memory/mem_mu2efutg_bff74f844abc
tags: ["okf", "okf-hermes", "hermes", "hermes://session/121fa033b237"]
timestamp: 2026-09-15T08:17:46.712Z
source: agentmemory
strength: 7
---
# Content

# Calculate shellac pound cut mixture

source: hermes
session_id: 121fa033b237
resource: hermes://session/121fa033b237

# Conversation

- **Session ID:** `121fa033b237`
- **Source:** webui
- **Model:** kilo-auto/free
- **Started:** 2026-09-14T16:36:16Z
- **Messages:** 4
- **Tokens:** 86409 in / 1334 out

---

### 👤 User — 2026-09-14T16:36:05Z

If I mix 200 g of denatured alcohol with 66 g of shellac, what pound cut is that

### 🤖 Assistant — 2026-09-14T16:36:38Z

<details><summary>Reasoning</summary>

The user is asking about shellac mixing ratios. Let me work this out.

A "pound cut" is a measure of shellac concentration. It's defined as the number of pounds of shellac (by weight, in pounds) dissolved in one gallon of alcohol (by volume).

So a 1 lb cut = 1 pound of shellac per gallon of alcohol.
A 2 lb cut = 2 pounds of shellac per gallon of alcohol.
etc.

Let me convert the given amounts and calculate.

First, let me convert grams to pounds:
- 200 g alcohol = 200 / 453.592 g/lb = 0.4409 lb alcohol
- 66 g shellac = 66 / 453.592 g/lb = 0.1455 lb shellac

Now, the pound cut is defined per gallon of alcohol. So I need to figure out how many gallons 200g of alcohol is, and then calculate the pound cut.

Density of denatured alcohol (ethanol) ≈ 0.785 g/mL (but denatured alcohol varies; let's use ~0.786 g/cm³ as a reasonable approximation for ethanol-based denatured alcohol).

200 g / 0.786 g/mL = 254.5 mL
254.5 mL = 0.2545 L
1 gallon = 3.785 L
0.2545 L / 3.785 L/gal = 0.0672 gal

So 200g of alcohol ≈ 0.0672 gallons

Pound cut = (pounds of shellac) / (gallons of alcohol)
= 0.1455 lb / 0.0672 gal
= 2.16 lb cut

So approximately a 2 lb cut (2.16 lb cut).

Let me double check my calculations.

Actually, let me be careful about the density. Denatured alcohol density varies. Ethanol density is about 0.789 g/mL at 20°C. But denatured alcohol contains other things (like methanol, isopropanol) so the density varies, typically around 0.77-0.80 g/mL.

Let me recalculate with a few different densities to give a range.

Actually, let me just compute this properly. Let me use a script to be accurate.

Let me verify my math with the terminal.

Actually, I'm fairly confident in my calculation. Let me just verify with a quick computation.

200 g alcohol
66 g shellac

200g ethanol = 200 / 0.789 = 253.5 mL = 0.2535 L
0.2535 L / 3.785 L/gal = 0.06697 gal

66 g shellac = 66 / 453.592 = 0.1455 lb

Pound cut = 0.1455 / 0.06697 = 2.17 lb cut

So approximately 2.2 lb cut, which is roughly a "2 lb cut" in shellac terminology.

Let me verify this with a quick calculation to be sure.

</details>

**Tool call: terminal**

```json
{
  "command": "python3 -c \"\ngrams_per_lb = 453.59237\nml_per_gal = 3785.41\n\nalcohol_g = 200\nshellac_g = 66\n\n# Density of denatured alcohol ~0.789 g/mL (ethanol-based)\n# This can range 0.77-0.80; I'll compute a few\nfor density in [0.77, 0.789, 0.80]:\n    alcohol_ml = alcohol_g / density\n    alcohol_gal = alcohol_ml / ml_per_gal\n    shellac_lb = shellac_g / grams_per_lb\n    cut = shellac_lb / alcohol_gal\n    print(f'density={density}: alcohol={alcohol_ml:.1f}mL={alcohol_gal:.5f}gal, shellac={shellac_lb:.4f}lb, pound-cut={cut:.2f}')\n\"\n"
}
```

### 🤖 Assistant — 2026-09-14T16:37:00Z

<details><summary>Reasoning</summary>

The calculation is straightforward. The density of denatured alcohol doesn't vary much for this small amount, so the pound cut is about **2.2 lb/gal** (or simply a **2 lb cut**). The ratio is very stable regardless of whether density is 0.77, 0.789, or 0.80 g/mL — the answer is essentially the same.

Let me present this clearly.

</details>

It's a **2 lb cut** (≈2.2 lb/gal by weight).

The cut is the same regardless of alcohol density here — the only variable is how many US gallons 200 g of denatured alcohol occupies. Using standard ethanol-based denatured alcohol at ~0.789 g/mL, 200 g is about 253.5 mL, or ~0.067 US gal. 66 g of shellac is ~0.1455 lb. Divide and you get **≈2.2 lb/gal**, which finishers just call a **2 lb cut** (a 3 lb cut would be ~99 g shellac in the same amount of alcohol, so 66 g is distinctly clo
