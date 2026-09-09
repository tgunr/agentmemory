---
type: Fact
title: # How much does it cost to file small claims in…

source: hermes
session_id: 202
description: # How much does it cost to file small claims in…

source: hermes
session_id: 20260907_052402_e13ced
resource: hermes://session/20260907_052402_e13ced

# Conversation

- **Session ID:** `20260907_05240
resource: agentmemory://memory/mem_mtsed1cf_c4b3a9da4d99
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-08T08:17:53.518Z
source: agentmemory
strength: 7
---
# Content

# How much does it cost to file small claims in…

source: hermes
session_id: 20260907_052402_e13ced
resource: hermes://session/20260907_052402_e13ced

# Conversation

- **Session ID:** `20260907_052402_e13ced`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-07T10:24:02Z
- **Messages:** 5
- **CWD:** `/Volumes/davec`
- **Tokens:** 21278 in / 720 out

---

### 👤 User — 2026-09-07T10:24:02Z

How much does it cost to file small claims in Montgomery county Texas? Employer is not paying wages.

### 🤖 Assistant — 2026-09-07T10:24:05Z

<details><summary>Reasoning</summary>

The user is asking about small claims court filing fees in Montgomery County, Texas, in the context of unpaid wages from an employer. This is a factual legal research question, not a coding or development task. Let me check my skills to see if any are relevant.

Looking at the available skills, none seem directly relevant to legal research or court fees. The closest might be `web-scraping` or `web` skills, but those are for handling blocked pages. I should just use web_search and web_extract to find the answer.

Let me search for the filing fees for small claims court in Montgomery County, Texas.

</details>

**Tool call: web_search**

```json
{
  "query": "Montgomery County Texas small claims court filing fee 2026"
}
```

**Tool call: web_search**

```json
{
  "query": "Texas Justice Court filing fee schedule small claims unpaid wages"
}
```

### 🤖 Assistant — 2026-09-07T10:24:20Z

## Filing a small claims suit in Montgomery County, TX

**Headline cost:** **$126 total** to file (under "Debt Claim Suit" — the bucket that covers wage claims).

Breakdown from Montgomery County's official JP Precinct 4 fee schedule:

| Component | Cost |
|---|---|
| Filing fee | $25 |
| Service fee (citation to defendant) | $75 |
| ADR fee | $5 |
| Indigency fee | $6 |
| eFile fee | $10 |
| JCPT fee | $5 |
| **Total** | **$126** |

If you need to **enforce** the judgment later, expect another **~$155** for a Writ of Execution, but that's only if they don't pay after you win.

---

## Before you file — a cheaper route worth trying first

Texas Workforce Commission wage claims are **free**, fully administrative, and you generally *cannot* pursue the same wages through both TWC and civil court at the same time. So:

1. **If your claim is ≤ 180 days old** (from the date wages were due), file a TWC wage claim at twc.texas.gov first — it costs nothing and the agency has collection teeth.
2. **If TWC can't help or you want a court judgment**, JP Court handles wage claims up to **$20,000** under a **4-year statute of limitations** (Texas Civ. Prac. & Remedies Code §16.004).
3. **Federal FLSA claims** (overtime, min wage violations) have a 2-year limit (3 for willful) and go through the U.S. Dept. of Labor or federal court — not JP.

## Practical notes for filing

- File in the **JP precinct where the employer is located or where you worked**. Use txcourts.gov to find the right precinct.
- Can't afford the $126? File a sworn **Affidavit of Inability to Pay Costs** and the fees are waived — forms are on the Texas Justice Court Training Center site.
- Pay with cash, money order, or company check (no personal checks).
- Petition must be made **under oath** (in person or sworn filing).

**Bottom line:** budget **~$126 to file**, plus your time for the hearing. If you haven't already, file a free TWC claim in parallel — it's usually the faster win for pure unpaid-wages cases.

Want me to pull the Montgomery County JP precinct map or the TWC claim form links?
