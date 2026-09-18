---
type: Fact
title: # Model cost ranking

source: chatgpt
session_id: 68a4799b-194c-8323-ab93-c7cc24
description: # Model cost ranking

source: chatgpt
session_id: 68a4799b-194c-8323-ab93-c7cc24e5e895
resource: chatgpt://conversation/68a4799b-194c-8323-ab93-c7cc24e5e895

# Conversation

- **Session ID:** `68a4799
resource: agentmemory://memory/mem_mtj5onte_90c39f199b1c
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/68a4799b-194c-8323-ab93-c7cc24e5e895"]
timestamp: 2026-09-01T21:05:03.771Z
source: agentmemory
strength: 7
---
# Content

# Model cost ranking

source: chatgpt
session_id: 68a4799b-194c-8323-ab93-c7cc24e5e895
resource: chatgpt://conversation/68a4799b-194c-8323-ab93-c7cc24e5e895

# Conversation

- **Session ID:** `68a4799b-194c-8323-ab93-c7cc24e5e895`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-19T13:18:21.067277+00:00
- **Messages:** 4

---

### 👤 User

[MEDIA: image_asset_pointer file-service://file-XQx9cr2iqQhvehkn7tqMQW]

Rank these models in terms of cost when used for coding

---

### 🤖 Assistant

Here’s how those models stack up in terms of **API cost for coding tasks**, based on official per-million-token pricing:

---

###  Model Cost Rankings (from **cheapest** to **most expensive**)

1. **GPT-5 (OpenAI)** – *Cheapest flagship*
   - **Input**: **$1.25 per 1M tokens**
   - **Output**: **$10 per 1M tokens**  
     citeturn0search8turn0search17

2. **Gemini 2.5 Pro (Google)** – *Next most affordable*
   - **For prompts ≤ 200K tokens**:
     - Input: **$1.25 per 1M tokens**
     - Output: **$10 per 1M tokens**
   - **For prompts > 200K tokens**:
     - Input: **$2.50 per 1M tokens**
     - Output: **$15 per 1M tokens**  
     citeturn0search4turn0search25turn0search19

3. **Claude Sonnet 4 (Anthropic)** – *Balanced cost/performance*
   - Input: **$3 per 1M tokens**
   - Output: **$15 per 1M tokens**  
     citeturn0search0turn0search3turn0search6turn0search18turn0search21turn0search11

---

###  Quick Comparison Table

| Model              | Input Cost (per 1M tokens) | Output Cost (per 1M tokens) | Notes |
|-------------------|-----------------------------|------------------------------|-------|
| **GPT-5**         | **$1.25**                   | **$10**                      | Lowest cost for both input and output |
| **Gemini 2.5 Pro** | $1.25 → $2.50 (if >200K tokens) | $10 → $15 (if >200K tokens) | Same as GPT-5 for short prompts; becomes pricier if context is very large |
| **Claude Sonnet 4** | **$3**                     | **$15**                     | Most expensive of the three, though still framed as cost-effective for production use |

---

###  Summary Ranking (by cost effectiveness for coding workloads)

1. **GPT-5** (most cost-efficient overall)  
2. **Gemini 2.5 Pro** (competitive for smaller tasks; mid-range if large token usage)  
3. **Claude Sonnet 4** (still efficient, but higher per-token cost)

---

### Notes & Nuances

- **Caching & Batch Savings**: Claude Sonnet 4 offers discounts via **prompt caching** (up to 90%) and **batch processing** (up to 50%), which can meaningfully reduce effective costs in repetitive or high-volume workflows. citeturn0search11turn0search13turn0search21

- **Context Window Size**: Gemini 2.5 Pro supports a **1 million-token context**, which can be highly efficient for handling whole codebases or documentation in a single prompt—but that greater span may cost more if exceeding the 200K token threshold. citeturn0search16turn0search25  
  Meanwhile, Claude Sonnet 4 offers a **200K-token context** (with extended 1M support via higher pricing). GPT-5 supports large context as well, though pricing stays consistent. citeturn0news37turn0search21turn0news38

---

###  Final Thoughts

- If **pure cost targeting** (input + output tokens) is your top criterion—especially for coding—**GPT-5** gives you the cheapest rates across the board.
- **Gemini 2.5 Pro** holds strong on price for typical-sized prompts; for very large inputs/outputs, costs may rise.
- **Claude Sonnet 4** is pricier per token, but its *pricing discounts for caching and batch usage* could offset costs for efficient, repetitive tasks at scale.

Let me know if you'd like help estimating total cost for your specific usage patterns—or want to compare accuracy or coding prowess among these models!

---

### 👤 User

Save this as a global  memory

---

### 🤖 Assistant

Got it — I’ve saved the global memory of how these models rank in terms of cost for coding.

---
