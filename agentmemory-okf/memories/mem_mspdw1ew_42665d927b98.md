---
type: Fact
title: # Texas maximum late rent penalty

source: hermes
session_id: 20260805_122339_a8
description: # Texas maximum late rent penalty

source: hermes
session_id: 20260805_122339_a89c85
resource: hermes://session/20260805_122339_a89c85

# Conversation

- **Session ID:** `20260805_122339_a89c85`
- **S
resource: agentmemory://memory/mem_mspdw1ew_42665d927b98
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:39.721Z
source: agentmemory
strength: 7
---
# Content

# Texas maximum late rent penalty

source: hermes
session_id: 20260805_122339_a89c85
resource: hermes://session/20260805_122339_a89c85

# Conversation

- **Session ID:** `20260805_122339_a89c85`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-05T17:25:43Z
- **Ended:** 2026-08-05T17:35:43Z
- **Messages:** 6
- **CWD:** `/Users/davec`
- **Tokens:** 28961 in / 793 out

---

### 👤 User — 2026-08-05T17:25:44Z

In Texas, what is the maximum penalty I can charge someone for late rent?

### 🤖 Assistant — 2026-08-05T17:25:55Z

<details><summary>Reasoning</summary>

The user is asking about Texas law regarding late rent penalties. This is a legal question about Texas landlord-tenant law. Let me research this to give an accurate answer.

Let me search for the current Texas law on late fees for

</details>

**Tool call: web_search**

```json
{
  "query": "Texas law maximum late fee rent penalty landlord tenant 2026"
}
```

### 🤖 Assistant — 2026-08-05T17:26:00Z

<details><summary>Reasoning</summary>

Let me get the precise statutory text from Texas Property Code § 92.019 to give an accurate answer.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://codes.findlaw.com/tx/property-code/prop-sect-92-019/"
  ]
}
```

### 🤖 Assistant — 2026-08-05T17:26:11Z

<details><summary>Reasoning</summary>

The extract failed because the backend is search-only. Let me try the browser or search again. Actually, the search results already gave me good detail. Let me confirm with another approach — I have enough from the search results. The key statute is Texas Property Code § 92.019. Let me verify the details are consistent. The search results say:

- Texas Property Code § 92.019
- Late fee must be "reasonable" — capped at 12% of monthly rent for properties with 4 or fewer units, and 10% for properties with 5+ units
- There must be a grace period of at least 2 full days after the rent due date before a late fee can be charged
- Exception: a landlord may charge more than the cap if they can prove actual uncertain damages related to late payment exceed the cap

Let me give a clear answer. I have enough from the search snippets. The FindLaw result quotes the statute. I'm fairly confident. Let me present this clearly.

I don't strictly need another call — the data is consistent across multiple sources. Let me answer

</details>

In Texas, the maximum late fee you can charge is set by **Texas Property Code § 92.019**, and it's a percentage cap, not a flat dollar amount:

| Property size | Max late fee (capped) |
|---|---|
| **4 or fewer units** | **12% of monthly rent** |
| **5 or more units** | **10% of monthly rent** |

Key rules that apply:

- **Grace period required:** You can't charge a late fee until rent has been unpaid for **more than two full days** after the due date. So if rent is due on the 1st, the earliest a fee can kick in is the 4th (days 2 and 3 are the grace period).
- **"Reasonable" standard:** Even under the cap, the fee must be reasonable. A fee above the percentage cap is only enforceable if you can document that your **actual, uncertain damages** from the late payment (collection costs, overhead, etc.) exceeded the cap amount — the burden is on you to prove it.
- **Flat + daily fees combined:** If your lease has both an initial late fee and a per-day fee, the two are added together and treated as a **single late fee** against the cap. You can't stack them to get around the limit.
- **Lease must specify it:** The late fee has to be written into the lease to be enforceable.

A practical example: on a $1,500/month unit with 4 or fewer units, your max is $180 (12%). On a larger apartment complex, it'd be $150 (10%).

One caveat — I'm summarizing the statute, not giving legal advice. If you're drafting a lease or have a specific dispute, a Texas landlord-tenant attorney should confirm the exact wording for your situation. Want me to pull the full statutory text or look into the new 2026 changes that came up in the search?
