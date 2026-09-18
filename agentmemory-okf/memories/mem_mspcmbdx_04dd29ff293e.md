---
type: Fact
title: # Hermes leveraging OKF vs AgentMemory integration

source: hermes
session_id: 2
description: # Hermes leveraging OKF vs AgentMemory integration

source: hermes
session_id: 20260720_094317_18534f
resource: hermes://session/20260720_094317_18534f

# Conversation

- **Session ID:** `20260720_094
resource: agentmemory://memory/mem_mspcmbdx_04dd29ff293e
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T00:26:06.485Z
source: agentmemory
strength: 7
---
# Content

# Hermes leveraging OKF vs AgentMemory integration

source: hermes
session_id: 20260720_094317_18534f
resource: hermes://session/20260720_094317_18534f

# Conversation

- **Session ID:** `20260720_094317_18534f`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-20T14:43:17Z
- **Messages:** 697
- **CWD:** `/Volumes/davec`
- **Tokens:** 521130 in / 243921 out

---

### 👤 User — 2026-07-20T14:43:18Z

Read https://pub.towardsai.net/googles-open-knowledge-format-okf-the-markdown-standard-every-ai-engineer-should-know-about-1d14b223f39e.
How can Hermes take advanage of this concept? Can it be integrated or replace agentmemory?

### 🤖 Assistant — 2026-07-20T14:43:24Z

<details><summary>Reasoning</summary>

The user wants me to read an article about Google's Open Knowledge Format (OKF) and discuss how Hermes could take advantage of this concept, and whether it could integrate with or replace AgentMemory.

Let me first read the article. I'll use web_extract to get the content.

Let me also think about whether I need to load any skills. The hermes-agent skill could be relevant since we're discussing Hermes architecture. And agentmemory-hermes-integration skill is directly referenced in my memory. Let me read the article first, then consider skills.

Let me start by extracting the article content

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://pub.towardsai.net/googles-open-knowledge-format-okf-the-markdown-standard-every-ai-engineer-should-know-about-1d14b223f39e"
  ],
  "char_limit": 30000
}
```

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

### 🤖 Assistant — 2026-07-20T14:43:36Z

<details><summary>Reasoning</summary>

The web_extract failed because the backend is Brave Search (a search-only backend). Let me use the browser to navigate to the article, or use web_search to find the content. Actually, the system says web extract backend can't extract. Let me try browser_navigate to read the article, or fetch via terminal with curl.

Let me try fetching the article via curl in terminal, since it's a plain web page. Actually it might be behind a paywall or JS-rendered. Let me try browser_navigate.

Actually, let me try curl first - towardsai.net articles are often accessible as plain HTML. But could be heavy with JS. Let me use browser_navigate to get a snapshot, which is the most reliable for reading content.

Let me do both: terminal curl (in background? no, foreground) and browser. Actually let me just use browser_navigate to read the article content. But browser returns a snapshot with interactive elements, not full text. For a Medium-style article I'd want the text. Let me try curl via terminal first to get raw text.

Let me try web_search to get a summary too, as a fallback. Actually let me just navigate with the browser and use browser_snapshot full=true. But these articles on towardsai.net (Medium publication) - Medium blocks scraping often. Let me try curl.

Let me do terminal curl and browser in

</details>

**Tool call: terminal**

```json
{
  "command": "curl -sL --max-time 60 \"https://pub.towardsai.net/googles-open-knowledge-format-okf-the-markdown-standard-every-ai-engineer-should-know-about-1d14b223f39e\" -o /tmp/okf_article.html -w \"HTTP %{http_code} size %{size_download}\\n\"; echo \"---\"; wc -c /tmp/okf_article.html"
}
```

**Tool call: browser_navigate**

```json
{
  "url": "https://pub.towardsai.net/googles-open-knowledge-format-okf-the-markdown-standard-every-ai-engineer-should-know-about-1d14b223f39e"
}
```

### 🤖 Assistant — 2026-07-20T14:43:51Z

<details><summary>Reasoning</summary>

Both the curl and browser are blocked — curl 429, browser Cloudflare challenge. Let me try a different approach to get the article content. Options:
1. Try web_search for the article title to get a summary/cached version.
2. Try a different fetch method — maybe via a textise dot iitty or textise dot iitty. Actually, let me try fetching from a different angle. 

Let me try web_search with the article title and key terms to reconstruct what OKF is. Also I could try fetching via textise dot iitty o
