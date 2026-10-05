---
type: Fact
title: # Top iOS/macOS apps for NTAG 215 inventory

source: hermes
session_id: 20261001
description: # Top iOS/macOS apps for NTAG 215 inventory

source: hermes
session_id: 20261001_170117_bb89aa
resource: hermes://session/20261001_170117_bb89aa

# Conversation

- **Session ID:** `20261001_170117_bb8
resource: agentmemory://memory/mem_mutjslmj_2527e9af255c
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-04T08:17:26.275Z
source: agentmemory
strength: 7
---
# Content

# Top iOS/macOS apps for NTAG 215 inventory

source: hermes
session_id: 20261001_170117_bb89aa
resource: hermes://session/20261001_170117_bb89aa

# Conversation

- **Session ID:** `20261001_170117_bb89aa`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-10-01T22:01:17Z
- **Ended:** 2026-10-03T12:42:45Z
- **Messages:** 45
- **CWD:** `/Volumes/davec`
- **Tokens:** 54911 in / 8700 out

---

### 👤 User — 2026-10-01T22:01:17Z

find highest rated ios/macos apps to use Ntag 215 for inventory tracking

### 🤖 Assistant — 2026-10-01T22:01:23Z

<details><summary>Reasoning</summary>

The user wants app recommendations for using NTAG 215 NFC tags for inventory tracking on iOS/macOS. Let me research this. I should do a web search.

Let me think about what's relevant: NFC tag management apps on iOS that support NDEF records well enough for inventory — Things 3, Notion, Airtable, Tana, Evernote, iA Writer, Noteful, Obsidian (NFC links), plus dedicated NFC tag apps like NFC Tagboard, TagWriter, Go2Tag, NXP TagWriter, and Mac apps like PastePal? Also "NFC Tools" app by Works Applications? And Mac: "Pasteboard"? For Mac reading NFC you need a reader (e.g., GoToTag desktop app is iOS/macOS). Also hardware readers: Mac needs USB NFC reader; iPhone has built-in NFC (read-only on iPhone, write on iPhone XS+).

Let me search for actual current info and ratings. Ratings are hard to get reliably via search but let's try.

I'll do parallelweb searches.

</details>

**Tool call: web_search**

```json
{
  "query": "best NFC tag apps iPhone NDEF inventory tracking 2026",
  "limit": 6
}
```

**Tool call: web_search**

```json
{
  "query": "GoToTag app rating App Store NFC",
  "limit": 6
}
```

**Tool call: web_search**

```json
{
  "query": "NTAG 215 inventory management NFC tags app review",
  "limit": 6
}
```

### 🤖 Assistant — 2026-10-01T22:01:28Z

<details><summary>Reasoning</summary>

The search backend is degraded. Let me get real ratings from the App Store pages directly. Let me fetch App Store pages for candidates. I need actual ratings. Let me use web_extract on App Store pages, and also the iTunes lookup API which is reliable.

Let me use the iTunes Search API via terminal/curl for severalapps.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /tmp && for t in \"nfc\" \"nfc tag\" \"nfc inventory\" \"nfc reader\" \"gototag\" \"nfc tools\" \"tag writer nfc\"; do\necho \"=== $t ===\"\ncurl -s -G \"https://itunes.apple.com/search\" --data-urlencode \"term=$t\" --data-urlencode \"country=us\" --data-urlencode \"entity=software\" --data-urlencode \"limit=12\" \\\n | python3 -c \"\nimport json,sys\nd=json.load(sys.stdin)\nfor r in d.get('results',[]):\n    if r.get('trackName') is None: continue\n    print(f\\\"{r.get('averageUserRating',0):.2f}\\t{r.get('userRatingCount',0):>7}\\t{r.get('trackName')[:45]:<45}\\t{r.get('formattedPrice','?'):<10}\\t{r.get('artistName','')[:22]}\\\")\n\"\ndone"
}
```

### 🤖 Assistant — 2026-10-01T22:01:44Z

<details><summary>Reasoning</summary>

Let me also check macOS-capable apps and asset-tracking-specific ones. Let me check the top candidates' details: whether they support Mac (macos apps). Let me lookup a few by ID to check supportedDevices / iTunes lookup for macOS.

Key candidates: NFC Tools (wakdev) 4.62/14271 — also has Mac version. NFC.cool Tools 4.48/6771 — iPhone only. Tagmiibo 4.76/2536 — Nintendo specific. NFC Tap by ST 4.19.

For inventory specifically, there's also Homebox (self-hosted, web) + NFC tags writing URLs. And "NFC.cool Tools" has inventory batch mode for barcodes. Let me check a few more searches for asset/inventory-specific iOS apps and macOS.

Let me do a lookup on key apps to see Mac support and last update.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /tmp && curl -s \"https://itunes.apple.com/lookup?id=1252827682,1249686798,1473560591&country=us\" | python3 -c \"\nimport json,sys\nfor r in json.load(sys.stdin).get('results',[]):\n    print(r['trackName'],'|',r.get('supportedDevices',[''])[0],'|Mac:', any('Mac' in d for d in r.get('supportedDevices',[])),'|ver',r.get('version'),'|
