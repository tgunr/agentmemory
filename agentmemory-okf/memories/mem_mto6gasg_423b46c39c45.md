---
type: Fact
title: # Identify Arabic or Farsi in TikTok video

source: hermes
session_id: 20260902_
description: # Identify Arabic or Farsi in TikTok video

source: hermes
session_id: 20260902_123317_a79a91
resource: hermes://session/20260902_123317_a79a91

# Conversation

- **Session ID:** `20260902_123317_a79a
resource: agentmemory://memory/mem_mto6gasg_423b46c39c45
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-05T09:25:23.797Z
source: agentmemory
strength: 7
---
# Content

# Identify Arabic or Farsi in TikTok video

source: hermes
session_id: 20260902_123317_a79a91
resource: hermes://session/20260902_123317_a79a91

# Conversation

- **Session ID:** `20260902_123317_a79a91`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-02T17:33:17Z
- **Ended:** 2026-09-04T18:45:52Z
- **Messages:** 227
- **CWD:** `/Volumes/davec`
- **Tokens:** 409486 in / 37833 out
- **Est. cost:** $-18153.0000

---

### 👤 User — 2026-09-02T17:33:17Z

@url:`https://www.tiktok.com/t/ZP8cMCMKA/` analyze this video background and determine if the writing on the store fronts is Arabic or Farsi

--- Context Warnings ---
- @url:`https://www.tiktok.com/t/ZP8cMCMKA/`: no content extracted

### 👤 User — 2026-09-02T17:33:17Z

@url:`https://www.tiktok.com/t/ZP8cMCMKA/` analyze this video background and determine if the writing on the store fronts is Arabic or Farsi

--- Context Warnings ---
- @url:`https://www.tiktok.com/t/ZP8cMCMKA/`: no content extracted

### 🤖 Assistant — 2026-09-02T17:33:32Z

<details><summary>Reasoning</summary>

The user shared a TikTok link and wants me to analyze the video background to determine if writing on storefronts is Arabic or Farsi. The URL extraction failed. Let me try to fetch the TikTok URL to resolve it and get the video.

Let me try web_extract first, then maybe the browser tool. TikTok often blocks scraping. Let me try resolving the short URL.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import terminal\n# Resolve the short URL to see where it goes\nr = terminal(\"curl -sI -L -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' 'https://www.tiktok.com/t/ZP8cMCMKA/' 2>&1 | grep -iE '^(HTTP|location)' \")\nprint(r[\"output\"])"
}
```

### 🤖 Assistant — 2026-09-02T17:33:32Z

<details><summary>Reasoning</summary>

The user shared a TikTok link and wants me to analyze the video background to determine if writing on storefronts is Arabic or Farsi. The URL extraction failed. Let me try to fetch the TikTok URL to resolve it and get the video.

Let me try web_extract first, then maybe the browser tool. TikTok often blocks scraping. Let me try resolving the short URL.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import terminal\n# Resolve the short URL to see where it goes\nr = terminal(\"curl -sI -L -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' 'https://www.tiktok.com/t/ZP8cMCMKA/' 2>&1 | grep -iE '^(HTTP|location)' \")\nprint(r[\"output\"])"
}
```

### 🤖 Assistant — 2026-09-02T17:34:01Z

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import web_extract\nr = web_extract([\"https://www.tiktok.com/@mohs3njohari/video/7677615492986703122\"], char_limit=12000)\nfor res in r[\"results\"]:\n    print(\"URL:\", res[\"url\"])\n    print(\"TITLE:\", res.get(\"title\"))\n    print(\"ERR:\", res.get(\"error\"))\n    print(res.get(\"content\",\"\")[:6000])\n    print(\"=====\")"
}
```

### 🤖 Assistant — 2026-09-02T17:34:24Z

<details><summary>Reasoning</summary>

The web_extract failed. Let me check the raw dict.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import web_extract\nr = web_extract([\"https://www.tiktok.com/@mohs3njohari/video/7677615492986703122\"], char_limit=12000)\nprint(type(r), r.keys() if isinstance(r, dict) else len(r))\nprint(str(r)[:2000])"
}
```

### 🤖 Assistant — 2026-09-02T17:34:54Z

<details><summary>Reasoning</summary>

web_extract is search-only backend. I need to fetch the page directly. TikTok blocks most scrapers but let me try curl with proper headers, and look at the __UNIVERSAL_DATA__ JSON which includes video description, maybe subtitle/caption text, etc. That gives metadata but not frames.

For the actual visual analysis (Arabic vs Farsi on storefronts), I genuinely cannot see the video. Options:
1. Download video frames — but I can't view images (my model can't view images per browser_exec notes; vision_analyze tool exists? There's no visio
