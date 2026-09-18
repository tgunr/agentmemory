---
type: Fact
title: # EXPUNGE: Privacy Removal App

source: grok
session_id: 6fc7af80-88bd-4a55-b79b
description: # EXPUNGE: Privacy Removal App

source: grok
session_id: 6fc7af80-88bd-4a55-b79b-a59803fcbf08
resource: grok://conversation/6fc7af80-88bd-4a55-b79b-a59803fcbf08

# Conversation

- **Session ID:** `6fc
resource: agentmemory://memory/mem_mtj6e8tx_fc3687f6d762
tags: ["okf", "okf-grok", "grok", "grok://conversation/6fc7af80-88bd-4a55-b79b-a59803fcbf08"]
timestamp: 2026-09-01T21:24:57.348Z
source: agentmemory
strength: 7
---
# Content

# EXPUNGE: Privacy Removal App

source: grok
session_id: 6fc7af80-88bd-4a55-b79b-a59803fcbf08
resource: grok://conversation/6fc7af80-88bd-4a55-b79b-a59803fcbf08

# Conversation

- **Session ID:** `6fc7af80-88bd-4a55-b79b-a59803fcbf08`
- **Source:** grok
- **Model:** build
- **Started:** 2026-08-22T16:02:49Z
- **Messages:** 12

---

### 👤 User — 2026-08-22T16:15:03Z

I want you to build an app that scours the internet for any information about me, dave c at mag dot com or dave c at polymicro dot net, to remove my information from online databases.

---

### 🤖 Assistant — 2026-08-22T16:15:03Z

I'll start by reading the workspace rules and then scaffold a data-broker opt-out app around those emails.This is a clear privacy-removal app. I’ll load the UI/scaffold skills and research data-broker opt-out flows so the product is actually usable.I have a clear product: a local-only removal command center with real broker opt-out links, not a public dossier. Next I’ll pull verified URLs and the rest of the scaffold.Settled on **EXPUNGE** — a local case-file for opting you out of data brokers. Brand art runs in parallel while I scaffold the app.Scaffold and core data next: tokens, broker catalog, vault store, and the shell.Brand assets landed. Next I’ll wire the vault, live scan, and screens.Typecheck and production build passed. Next I’ll verify it actually renders in the browser.**EXPUNGE** is your private removal desk. Identity is prefilled as Dave C with `davec@mag.com` and `davec@polymicro.net`. Everything stays in this browser — nothing is uploaded to a shared database.

**How to use it**

1. **Case file** — confirm name, aliases, and every mailbox you want hunted. Add city only if you want tighter search queries. Do not store a street address or phone unless a form demands it.
2. **Scan** — live web hunt for those emails and the name. It reports *where* you appear (people-search pages, old lists, directories), not a copy of the record.
3. **Searches** — one-click Google, Bing, TruePeopleSearch, Have I Been Pwned, GitHub, Groups, Wayback. Copy listing URLs from the results.
4. **Brokers** — 50 opt-out desks (Spokeo, Whitepages, TruePeopleSearch, PeopleConnect/Intelius, Acxiom, credit freezes, Do Not Call, and the rest). Find listing → opt out → mark status.
5. **Letters** — CCPA deletion, suppression, and webmaster redaction text filled from your case file.
6. **Playbook** — the order that actually works: high-visibility people-search first, then aggregators, then credit/prescreen, then a 90-day recheck (those sites re-scrape).

California’s DROP (one request to 600+ brokers) is in the list; it is **California residents only**. Texas does not have an equivalent, so the manual sweep is the path.

People-search sites re-list. Treat “removed” as a truce, not a funeral.

---

### 👤 User — 2026-08-22T16:16:51Z

davec@mac.com

---

### 🤖 Assistant — 2026-08-22T16:16:51Z

Adding `davec@mac.com` to the case file and merging it into any existing local identity.`davec@mac.com` is now in the case file, first in the list, alongside `davec@polymicro.net` and `davec@mag.com`.

Apple `mac.com` addresses show up a lot on people-search pages, so treat this one as a priority mailbox:

- **Searches** now has a separate Have I Been Pwned check for each address
- **Scan** will include it on the next run
- Existing saved case files pick it up automatically — you do not need to re-type it

Run **Scan** again, then hit the people-search brokers with this address in the letter.

---

### 👤 User — 2026-08-22T16:17:29Z

￼ Remove the davec@mag.com

---

### 🤖 Assistant — 2026-08-22T16:17:29Z

Removing `davec@mag.com` from the case file and seed list.The store file may have been overwritten — checking it now.The store file got truncated. Restoring the rest of it now.`davec@mag.com` is off the case file. Remaining mailboxes are `davec@mac.com` and `davec@polymicro.net`. If it was already saved in this browser, it drops on the next refresh.

---

### 👤 User — 2026-08-22T16:20:46Z

How do I expert this to my McIntosh?

---

### 🤖 Assistant — 2026-08-22T16:20:46Z

Two different things, depending what you want on the Mac.

*
