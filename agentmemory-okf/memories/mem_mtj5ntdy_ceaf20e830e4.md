---
type: Fact
title: # News aggregator system prompt

source: chatgpt
session_id: 68b45a2d-c85c-8331-
description: # News aggregator system prompt

source: chatgpt
session_id: 68b45a2d-c85c-8331-b08c-da09887ace9f
resource: chatgpt://conversation/68b45a2d-c85c-8331-b08c-da09887ace9f

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mtj5ntdy_ceaf20e830e4
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/68b45a2d-c85c-8331-b08c-da09887ace9f"]
timestamp: 2026-09-01T21:04:24.352Z
source: agentmemory
strength: 7
---
# Content

# News aggregator system prompt

source: chatgpt
session_id: 68b45a2d-c85c-8331-b08c-da09887ace9f
resource: chatgpt://conversation/68b45a2d-c85c-8331-b08c-da09887ace9f

# Conversation

- **Session ID:** `68b45a2d-c85c-8331-b08c-da09887ace9f`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-31T14:20:30.268155+00:00
- **Messages:** 22

---

### 👤 User

Create a system prompt for me that will gather up news items for the day that are the most unbiased, with ratings as to left or right if there is bias in the article.

---

### 🤖 Assistant

Here’s a **system prompt** you can use to guide an AI assistant to gather daily news in the way you described — unbiased when possible, but with bias ratings if present:  

---

## 📰 Daily News Aggregator System Prompt  

**Role:**  
You are an impartial news curator whose task is to gather and summarize the most important news items of the day.  

**Core Directives:**  
1. **Impartiality First**  
   - Prioritize sources and summaries that are neutral and fact-based.  
   - Where bias is unavoidable, clearly state it.  

2. **Bias Identification**  
   - For each article or summary, evaluate its political leaning (if detectable).  
   - Provide a **bias rating** such as:  
     - **Left-leaning**  
     - **Center-left**  
     - **Center/Neutral**  
     - **Center-right**  
     - **Right-leaning**  
   - If uncertain, mark as **Unknown/Not Apparent**.  

3. **Balanced Coverage**  
   - Include multiple perspectives when relevant (e.g., left, right, center).  
   - Ensure diversity of coverage across political and global viewpoints.  

4. **Presentation Format:**  
   For each news item:  
   ```
   🗞️ Headline: [Concise headline]  
   📄 Summary: [2–3 sentence factual summary]  
   🔎 Source(s): [List source(s) with links if available]  
   ⚖️ Bias Rating: [Left / Center-left / Neutral / Center-right / Right / Unknown]  
   ```  

5. **Filtering Rules:**  
   - Exclude sensationalism, unverified claims, or clickbait.  
   - Give preference to reputable outlets and wire services (AP, Reuters, BBC, etc.).  

**Daily Output Example:**  
```
🗞️ Headline: Hurricane strengthens off Atlantic coast  
📄 Summary: The National Hurricane Center reports that a Category 2 storm is moving toward the East Coast, with expected landfall by Friday evening. Evacuation advisories are underway in several coastal counties.  
🔎 Source(s): Associated Press, Reuters  
⚖️ Bias Rating: Neutral  

🗞️ Headline: Senate debates new healthcare bill  
📄 Summary: Lawmakers began discussions today on a proposed healthcare reform package. Supporters argue it will reduce costs, while critics claim it limits coverage options.  
🔎 Source(s): Politico, Fox News, NPR  
⚖️ Bias Rating: Left-leaning (Politico, NPR), Right-leaning (Fox News)  
```

---

Would you like me to **automate this for you daily** (e.g., pulling in a morning digest), or do you prefer to **use the prompt on-demand** when you want a news roundup?

---

### 👤 User

Yes. make this a daily morning digest

---

### 🤖 Assistant

✅ All set!  

I’ll now deliver a **Daily Morning News Digest** every day at **9:00 AM (your local time)**.  
Each digest will include:

- 🗞️ A concise headline  
- 📄 A neutral, fact-based summary (2–3 sentences)  
- 🔎 Sources (with links when available)  
- ⚖️ A clear bias rating (Left / Center-left / Neutral / Center-right / Right / Unknown)  

This will ensure you get **unbiased coverage first**, and where bias exists, you’ll see it clearly labeled.  

Would you also like me to **include international news highlights** alongside U.S. news, or keep it U.S.-focused?

---

### 👤 User

yes, internation al also

---

### 🤖 Assistant

✅ Done! Your **Daily Morning News Digest** is now updated to include **both U.S. and international news**.  

Every day at **9:00 AM (local time)** you’ll receive a digest with:  
- 🗞️ Concise headline  
- 📄 Neutral, factual 2–3 sentence summary  
- 🔎 Sources with links when available  
- ⚖️ Bias rating (Left / Center-left / Neutral / Center-right / Right / Unknown)  

This way you’ll get a **balanced view of global events**, not just U.S. news.  

Would you like me to also **se
