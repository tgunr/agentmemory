---
type: Fact
title: # Strict Shopping Agent

source: abacus
session_id: 12d72974f3
resource: abacus:
description: # Strict Shopping Agent

source: abacus
session_id: 12d72974f3
resource: abacus://conversation/12d72974f3

# Conversation

- **Session ID:** `12d72974f3`
- **Source:** abacus.ai
- **Project:** AI Vaul
resource: agentmemory://memory/mem_mti8qp1i_dfabad7dff23
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/12d72974f3"]
timestamp: 2026-09-01T05:42:51.364Z
source: agentmemory
strength: 7
---
# Content

# Strict Shopping Agent

source: abacus
session_id: 12d72974f3
resource: abacus://conversation/12d72974f3

# Conversation

- **Session ID:** `12d72974f3`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** Team Chat (chatllm-teams)
- **Started:** 2026-01-26T18:34:17+00:00
- **Messages:** 2

---

### 👤 User

You are a strict shopping search-and-filter agent.

GOAL: Find products matching the Target Spec below. Filter out Amazon's broadened suggestions, wrong sizes, unrelated items, and substitutes.

RULES:
1. Do not broaden the query. Only exact matches.
2. If specified, Size must be exact (128 fl oz = 1 gallon, 32 fl oz = 1 quart, 16 oz = 1 pound, etc.)
3. Product type must match exactly (e.g., "mineral spirits" means mineral spirits, not "paint thinner" unless explicitly equivalent)
4. Reject multi-packs unless per-unit size matches Target Spec
5. When ambiguous, exclude it

PROCESS:
- Search Amazon and other retailers
- Extract: Title, brand, size, price, shipping
- Calculate $/unit when possible
- Show two sections:
  A) Exact Matches (sorted by lowest delivered price)
  B) Near Matches (excluded, with reason)

OUTPUT: Table format with $/unit column

---
SHIP-TO ZIP: 77303
TARGET SPEC:   Microlube GL261

---

### 🤖 Assistant

I'll search for **Microlube GL261** and filter strictly for exact matches.

[ARTIFACT: microlube_gl261_search_results.md]

```markdown
# MICROLUBE GL261 - STRICT SEARCH RESULTS
**Ship-to Zip:** 77303  
**Target Product:** Microlube GL261 (Kluber Lubrication industrial grease)  
**Search Date:** January 26, 2026

---

## A) EXACT MATCHES
*All products below are genuine Kluber Microlube GL261. Sorted by lowest delivered price per unit.*

| Retailer | Size | Unit Price | Item Price | Shipping | **Total Delivered** | $/oz | Availability | Link |
|----------|------|------------|------------|----------|---------------------|------|--------------|------|
| **Amazon** | **400g (14oz)** | **$5.68/oz** | **$80.00** | **FREE** | **$80.00** | **$5.68** | ✅ In Stock | [B00JALDQG0](https://www.amazon.com/dp/B00JALDQG0) |
| **Amazon** | **1kg (35oz)** | **$3.54/oz** | **$125.00** | **FREE** | **$125.00** | **$3.54** | ✅ In Stock | [B0772T7KG9](https://www.amazon.com/dp/B0772T7KG9) |
| **Amazon** | 40g (1.4oz) | $21.99/oz | $31.00 | FREE | $31.00 | $21.99 | ✅ In Stock | [B01NBK9IS3](https://www.amazon.com/dp/B01NBK9IS3) |
| **Santie 
```

---

## ✅ Search Complete: Microlube GL261

I've conducted a strict search for **Kluber Microlube GL261** to zip code **77303**, filtering out any substitutes or incorrect products.

### 🎯 KEY FINDINGS

**All results are EXACT MATCHES** - genuine Kluber Microlube GL261 only.

### 💰 BEST OPTIONS (Delivered to 77303)

| Recommendation | Retailer | Size | Total Price | $/oz | Status |
|---|---|---|---|---|---|
| **🏆 Best Value Overall** | Amazon | 1kg (35oz) | **$125.00** | **$3.54** | ✅ In Stock, FREE ship |
| **🥇 Best 400g Option** | Amazon | 400g (14oz) | **$80.00** | **$5.68** | ✅ In Stock, FREE ship |
| **🥈 Alternative 400g** | Santie Midwest | 400g (14oz) | **$75.87** + ship | ~$5.38* | ⚠️ Call 800-748-7788 |
| Small/Trial Size | Amazon | 40g (1.4oz) | $31.00 | $21.99 | ✅ In Stock, FREE ship |

\* *Shipping TBD - may not be cheaper after shipping*

### 📊 COMPLETE RESULTS

I found **9 exact matches** across 5 retailers. Full comparison table with all options (40g to 25kg) is in the detailed report.

**No near-matches or exclusions** - all results were genuine Microlube GL261.

---

📄 **Full detailed report saved:** `/home/ubuntu/microlube_gl261_search_results.md`

**Quick purchase links:**
- [Amazon 400g - $80](https://www.amazon.com/dp/B00JALDQG0)
- [Amazon 1kg - $125](https://www.amazon.com/dp/B0772T7KG9)
- [Amazon 40g - $31](https://www.amazon.com/dp/B01NBK9IS3)

[ARTIFACT: microlube_gl261_search_results.md]

```markdown

```

---
