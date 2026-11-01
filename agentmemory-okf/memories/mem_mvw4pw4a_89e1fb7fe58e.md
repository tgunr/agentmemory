---
type: Fact
title: # Find Confluence alternatives besides Docmost

source: hermes
session_id: 20261
description: # Find Confluence alternatives besides Docmost

source: hermes
session_id: 20261029_220539_dbece7
resource: hermes://session/20261029_220539_dbece7

# Conversation

- **Session ID:** `20261029_220539_
resource: agentmemory://memory/mem_mvw4pw4a_89e1fb7fe58e
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Desktop"]
timestamp: 2026-10-31T08:18:26.515Z
source: agentmemory
strength: 7
---
# Content

# Find Confluence alternatives besides Docmost

source: hermes
session_id: 20261029_220539_dbece7
resource: hermes://session/20261029_220539_dbece7

# Conversation

- **Session ID:** `20261029_220539_dbece7`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-30T03:05:40Z
- **Ended:** 2026-10-30T15:47:01Z
- **Messages:** 81
- **CWD:** `/Users/davec/Desktop`
- **Tokens:** 254982 in / 32854 out
- **Est. cost:** $-108686.0000

---

### 👤 User — 2026-10-30T03:05:40Z

besides docmost are there any other alternatives to atlassian confluence?

### 👤 User — 2026-10-30T03:05:40Z

besides docmost are there any other alternatives to atlassian confluence?

### 🤖 Assistant — 2026-10-30T03:05:47Z

<details><summary>Reasoning</summary>

The user asks about alternatives to Atlassian Confluence besides Docmost. This is a research/answer question. I should give a concise but useful list. Maybe do a quick web search to ensure current state? The knowledge is fairly stable. But being accurate about open-source self-hosted wiki/knowledge base alternatives is useful. Let me do a quick search to check current options/pricing.

Given the persona: concise. But this deserves a solid list. Let me do a couple of searches quickly.

Actually I know the landscape well: Notion, Outline, Wiki.js, BookStack, XWiki, MediaWiki, Confluence Data Center vs Cloud, Slite, Coda, Nuclino, Guru, Slab, ClickUp Docs, GitBook, Docusaurus (docs), HedgeDoc, Affine, AppFlowy, Obsidian Publish, Logseq, Notion-like: Anytype, Craft, Mem, Capacities, Tana, Roam. Also SharePoint/Wiki, Google Sites, Zoho Wiki, Freshdesk, Zendesk Guide, Document360, Helpjuice, KnowledgeOwl, ProProfs. Also Confluence alternatives for teams: Notion, Coda, Slite, Nuclino, Almanac (dead), Tettra, Guru, Slab.

I'll do one search to sanity-check pricing/news (e.g., Confluence price changes, Slite status).

Let me batch searches.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import web_search\nqs = [\n \"best Confluence alternatives 2026 self-hosted open source\",\n \"Outline wiki vs BookStack vs Wiki.js comparison 2025\",\n \"Notion Confluence alternative enterprise documentation pricing 2025\",\n]\nfor q in qs:\n    r = web_search(q, limit=6)\n    print(\"##\", q)\n    for x in r.get(\"data\",{}).get(\"web\",[]):\n        print(\"-\", x[\"title\"], \"|\", x[\"url\"])\n        print(\"  \", (x.get(\"description\") or \"\")[:220])\n"
}
```

### 🤖 Assistant — 2026-10-30T03:05:47Z

<details><summary>Reasoning</summary>

The user asks about alternatives to Atlassian Confluence besides Docmost. This is a research/answer question. I should give a concise but useful list. Maybe do a quick web search to ensure current state? The knowledge is fairly stable. But being accurate about open-source self-hosted wiki/knowledge base alternatives is useful. Let me do a quick search to check current options/pricing.

Given the persona: concise. But this deserves a solid list. Let me do a couple of searches quickly.

Actually I know the landscape well: Notion, Outline, Wiki.js, BookStack, XWiki, MediaWiki, Confluence Data Center vs Cloud, Slite, Coda, Nuclino, Guru, Slab, ClickUp Docs, GitBook, Docusaurus (docs), HedgeDoc, Affine, AppFlowy, Obsidian Publish, Logseq, Notion-like: Anytype, Craft, Mem, Capacities, Tana, Roam. Also SharePoint/Wiki, Google Sites, Zoho Wiki, Freshdesk, Zendesk Guide, Document360, Helpjuice, KnowledgeOwl, ProProfs. Also Confluence alternatives for teams: Notion, Coda, Slite, Nuclino, Almanac (dead), Tettra, Guru, Slab.

I'll do one search to sanity-check pricing/news (e.g., Confluence price changes, Slite status).

Let me batch searches.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import web_search\nqs = [\n \"best Confluence alternatives 2026 self-hosted open source\",\n \"Outline wiki vs BookStack vs Wiki.js comparison 2025\",\n \"Notion Confluence alternative enterprise documentation pricing 2025\",\n]\nfor q in qs:\n    r = web_search(q, limit=6)\n    print(\"##\", q)\n    for x in r.get(\"data\",{}).get(\"web\",[]):\n        print(\"-\", x[\"ti
