---
type: Fact
title: # Strict Product Search

source: abacus
session_id: bdd824b93
resource: abacus:/
description: # Strict Product Search

source: abacus
session_id: bdd824b93
resource: abacus://conversation/bdd824b93

# Conversation

- **Session ID:** `bdd824b93`
- **Source:** abacus.ai
- **Project:** AI Vault
-
resource: agentmemory://memory/mem_mti8sxuf_d1352e993ac3
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/bdd824b93"]
timestamp: 2026-09-01T05:44:36.092Z
source: agentmemory
strength: 7
---
# Content

# Strict Product Search

source: abacus
session_id: bdd824b93
resource: abacus://conversation/bdd824b93

# Conversation

- **Session ID:** `bdd824b93`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** Team Chat (chatllm-teams)
- **Started:** 2026-01-26T13:34:54+00:00
- **Messages:** 4

---

### 👤 User

You are a strict shopping search-and-filter agent.

GOAL: Find products matching the Target Spec below. Filter out Amazon's broadened suggestions, wrong sizes, unrelated items, and substitutes.

RULES:
1. Do not broaden the query. Only exact matches.
2. Size must be exact (128 fl oz = 1 gallon, 32 fl oz = 1 quart, 16 oz = 1 pound, etc.)
3. Product type must match exactly (e.g., "mineral spirits" means mineral spirits, not "paint thinner" unless explicitly equivalent)
4. Reject multi-packs unless per-unit size matches Target Spec
5. When ambiguous, exclude it

PROCESS:
- Search Amazon and other retailers if needed
- Extract: Title, brand, size, price, shipping
- Calculate $/unit when possible
- Show two sections:
  A) Exact Matches (sorted by lowest delivered price)
  B) Near Matches (excluded, with reason)

OUTPUT: Table format with $/unit column

---
SHIP-TO ZIP: 77303
TARGET SPEC: 
 Mineral spirits 1 gallan

---

### 🤖 Assistant

Before I search for mineral spirits, I need to clarify one detail:

**Target Spec Confirmation:**
- Product: Mineral spirits
- Size: 1 gallon (128 fl oz)
- Ship-to ZIP: 77303

**Question:** Do you want me to search only Amazon, or should I also check other retailers (Home Depot, Lowe's, Walmart, etc.) for comparison?

---

### 👤 User

search all

---

### 🤖 Assistant

I'll search multiple major retailers for mineral spirits in exactly 1 gallon size, with strict filtering as specified. Let me gather this information for you.

Now let me scrape specific product pages to get exact pricing and shipping information for ZIP 77303:

The scraping didn't work well. Let me use browser automation to get the exact pricing and shipping information for these products to ZIP 77303:

Let me open a browser and start checking each retailer systematically:

Let me try a different approach and go directly to Home Depot's main page:

Good! Now let me search for mineral spirits. First, I need to set the ZIP code to 77303:

Good! ZIP code is set to 77303. Now let me search for mineral spirits:

Home Depot is having issues. Let me try Walmart instead:

Good! Let me set the ZIP code and search for mineral spirits:

I need to fill in the required fields. Let me close this and just search with the ZIP code in mind:

Great! I can see some results. Let me click on the products to get more details. I can see:
1. Sunnyside 1 Gallon Mineral Spirits - $32.71
2. Mineral Spirits (Regular) - 1 gallon (128 oz.) - $49.99
3. Excel Auto Body Products MINERAL SPIRITS GALLON - $48.33

Let me click on each to get shipping details:

Perfect! I can see:
- **Sunnyside 1 Gallon Mineral Spirits 803G1**
- Price: $32.71
- Shipping: Free (arrives Jan 29)
- Size: 1 Gal (confirmed in the image)

Let me scroll down to see more details and then go back to check other products:

Good! I can see similar items. Now let me go back and check the other products. Let me click the back button:

Good! Now let me click on the third product "Mineral Spirits (Regular) - 1 gallon (128 oz.)":

Perfect! I can see:
- **Quality Chemical - Mineral Spirits (Regular) - 1 gallon (128 oz.)**
- Price: $49.99
- Shipping: Free (arrives Jan 31)
- Size: 1 gallon (128 oz.) - confirmed

Let me go back and check more products. Let me scroll down on the search results to see if there are more:

Great! I can see more products:
1. Klean Strip GKSP94006 Odorless Mineral Spirits, 1gal Can, Light Yellow - $40.00
2. Klean Strip Mineral Spirits Paint Thinner 1 gal - $34.99
3. 1 gal Sunnyside 30301 Sunnyside Low Odor Mineral Spirits, Low VOC - $31.95 (was $35.60)
4. Mineral Spirits Paint Thinner - 1 gal - Pack of 4 - $54.33

Let me click on the Klean Strip Odorless one:

Perfect! I can see:
- **Klean-Strip GKSP94006 Odorless Mineral Spirits, 1 gal Can, Light Yellow**
- Price: $40.
