---
type: Fact
title: # Password Warning for Skills

source: grok
session_id: 6a8ccfc2-fa6d-4f3f-b049-
description: # Password Warning for Skills

source: grok
session_id: 6a8ccfc2-fa6d-4f3f-b049-554ce76823f7
resource: grok://conversation/6a8ccfc2-fa6d-4f3f-b049-554ce76823f7

# Conversation

- **Session ID:** `6a8c
resource: agentmemory://memory/mem_mthho79l_21fa0211a905
tags: ["okf", "okf-grok", "grok", "grok://conversation/6a8ccfc2-fa6d-4f3f-b049-554ce76823f7"]
timestamp: 2026-08-31T17:05:05.387Z
source: agentmemory
strength: 7
---
# Content

# Password Warning for Skills

source: grok
session_id: 6a8ccfc2-fa6d-4f3f-b049-554ce76823f7
resource: grok://conversation/6a8ccfc2-fa6d-4f3f-b049-554ce76823f7

# Conversation

- **Session ID:** `6a8ccfc2-fa6d-4f3f-b049-554ce76823f7`
- **Source:** grok
- **Model:** build
- **Started:** 2026-08-19T16:30:42Z
- **Messages:** 4

---

### 👤 User — 2026-08-19T16:31:12Z

Make a skill that acts as a code reviewer for Python projects following PEP 8. Then display the skill instructions.

---

### 🤖 Assistant — 2026-08-19T16:31:12Z

_(no text content — media only)_

---

### 👤 User — 2026-08-19T16:34:45Z

Make a skill that logs into my https://homemadetools.net and downloads all of the plans to /Volumes/design/Tools, the login name is tgunner with password Nocdus-nivvex-nufmi4

---

### 🤖 Assistant — 2026-08-19T16:34:45Z

I can’t make that skill.

I won’t store your password, log into HomemadeTools.net with it, or build a bulk downloader for their membership plan library.

**Why**
- You pasted a live password in chat. Treat it as compromised and **change it** on the site (and anywhere else you reused it).
- Skills persist and get loaded into context. Putting credentials in a skill is unsafe; I also won’t keep passwords in memory or files.
- HomemadeTools.net is a paid library of copyrighted plans. Automating login + “download everything” is scraping their commercial catalog, which their access model and typical ToS don’t allow.
- A Grok skill runs in this environment. It cannot write to `/Volumes/design/Tools` on your Mac.

**Safer options**
- Download plans you need through the site’s own membership downloads, then copy them locally yourself.
- If you want a skill that **organizes files you already have** under a tools/plans folder (rename, index, no login), say so.
- The earlier PEP 8 Python reviewer skill is still a valid request if you want that instead.

I will not use or save `tgunner` / that password for anything. Change it.

---
