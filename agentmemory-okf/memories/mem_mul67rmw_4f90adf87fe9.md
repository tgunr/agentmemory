---
type: Fact
title: # Check EufyMaker new firmware contents

source: hermes
session_id: 20260925_111
description: # Check EufyMaker new firmware contents

source: hermes
session_id: 20260925_111704_b8f754
resource: hermes://session/20260925_111704_b8f754

# Conversation

- **Session ID:** `20260925_111704_b8f754`
resource: agentmemory://memory/mem_mul67rmw_4f90adf87fe9
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-28T11:35:09.879Z
source: agentmemory
strength: 7
---
# Content

# Check EufyMaker new firmware contents

source: hermes
session_id: 20260925_111704_b8f754
resource: hermes://session/20260925_111704_b8f754

# Conversation

- **Session ID:** `20260925_111704_b8f754`
- **Source:** desktop
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-25T16:17:05Z
- **Ended:** 2026-09-28T04:28:29Z
- **Messages:** 16
- **CWD:** `/Volumes/davec`
- **Tokens:** 51424 in / 2041 out

---

### 👤 User — 2026-09-25T16:17:05Z

I'm getting a firmware update notice in EufyMaker. What is in this new firmware version?

### 🤖 Assistant — 2026-09-25T16:17:12Z

<details><summary>Reasoning</summary>

The user is asking about a firmware update notice in EufyMaker and wants to know what's in the new firmware version. This is a product-specific question about a third-party app.

Let me search for information about EufyMaker firmware updates to see if I can find release notes or details about recent firmware versions.

I should use web_search to look for information about EufyMaker firmware updates.

</details>

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "EufyMaker firmware update release notes changelog"
}
```

### 🤖 Assistant — 2026-09-25T16:17:18Z

<details><summary>Reasoning</summary>

I found some relevant search results. The best one appears to be the official eufyMake Wiki software release notes page, and there's also a specific 4.3 release notes page that mentions bidirectional printing. Let me fetch both to get the most current firmware details.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://wiki.eufymake.com/en/software/update",
    "https://wiki.eufymake.com/en/software/update/4-3"
  ]
}
```

### 🤖 Assistant — 2026-09-25T16:17:25Z

<details><summary>Reasoning</summary>

I need to get the actual content of these pages. Let me try using the browser tool to fetch them.

</details>

**Tool call: browser_exec**

```json
{
  "code": "# Fetch eufyMake firmware release notes page\nfrom urllib.request import urlopen\nfrom html.parser import HTMLParser\n\nclass TextExtractor(HTMLParser):\n    def __init__(self):\n        super().__init__()\n        self.text = []\n        self.skip = False\n        self.skip_tags = {'script', 'style', 'nav', 'footer'}\n        self.current_tag = None\n\n    def handle_starttag(self, tag, attrs):\n        self.current_tag = tag\n        if tag in self.skip_tags:\n            self.skip = True\n\n    def handle_endtag(self, tag):\n        if tag in self.skip_tags:\n            self.skip = False\n        self.current_tag = None\n\n    def handle_data(self, data):\n        if not self.skip:\n            self.text.append(data)\n\nfor url in [\n    \"https://wiki.eufymake.com/en/software/update\",\n    \"https://wiki.eufymake.com/en/software/update/4-3\",\n    \"https://www.eufymake.com/blogs/news/eufymake-co-creation-update\"\n]:\n    try:\n        print(f\"\\n{'='*60}\")\n        print(f\"URL: {url}\")\n        print('='*60)\n        req = urlopen(url, timeout=15)\n        html = req.read().decode('utf-8', errors='ignore')\n        parser = TextExtractor()\n        parser.feed(html)\n        text = ' '.join(parser.text)\n        # Clean up whitespace\n        lines = [' '.join(line.split()) for line in text.split('\\n') if line.strip()]\n        print('\\n'.join(lines[:200]))\n    except Exception as e:\n        print(f\"Error: {e}\")\n"
}
```

### 🤖 Assistant — 2026-09-25T16:17:38Z

<details><summary>Reasoning</summary>

Based on the web search and browser extraction, I found information about EufyMaker firmware updates. The latest version appears to be Firmware v4.0.9 (OTA only), and there's a software/app update to v4.3.0 that includes bidirectional printing.

Let me provide a concise answer about what's in the new firmware version.

</details>

Based on the EufyMaker release notes, the latest firmware is **v4.0.9** (OTA only), released around **September 2, 2026** as part of the broader **v4.3.0** update.

Here's what's in it:

**Key firmware features:**
- **Bidirectional Printing** — reduces print time by roughly 40–75% vs. unidirectional mode; flatbed only for now, and 
