---
type: Fact
title: # Apple Music is missing a feature to add all…

source: hermes
session_id: 20260
description: # Apple Music is missing a feature to add all…

source: hermes
session_id: 20260907_044454_454df7
resource: hermes://session/20260907_044454_454df7

# Conversation

- **Session ID:** `20260907_044454_
resource: agentmemory://memory/mem_mtsed0vj_82ddbf417c9d
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-08T08:17:52.853Z
source: agentmemory
strength: 7
---
# Content

# Apple Music is missing a feature to add all…

source: hermes
session_id: 20260907_044454_454df7
resource: hermes://session/20260907_044454_454df7

# Conversation

- **Session ID:** `20260907_044454_454df7`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-07T09:44:54Z
- **Messages:** 698
- **CWD:** `/Volumes/davec`
- **Tokens:** 706344 in / 86855 out
- **Est. cost:** $-280098.0000

---

### 👤 User — 2026-09-07T09:44:54Z

Apple Music is missing a feature to add all songs found by a searech. E.G. I search for "Voltage Vault"  and see artist "Voltage Vault rock 'n' roll music" and select it which brings up "Top Songs" and "Singles & Eps". If I click on "Top Songs" I get a list of songs but can only select one at a time to add to a playlist. I want to add all the songs in the list to a playlist but not one at a time. Investigate building an app/skill that can do this function. The same problem exists if I select "Singles & Eps", only can select one by one.

### 👤 User — 2026-09-07T09:44:54Z

Apple Music is missing a feature to add all songs found by a searech. E.G. I search for "Voltage Vault"  and see artist "Voltage Vault rock 'n' roll music" and select it which brings up "Top Songs" and "Singles & Eps". If I click on "Top Songs" I get a list of songs but can only select one at a time to add to a playlist. I want to add all the songs in the list to a playlist but not one at a time. Investigate building an app/skill that can do this function. The same problem exists if I select "Singles & Eps", only can select one by one.

### 🤖 Assistant — 2026-09-07T09:45:03Z

<details><summary>Reasoning</summary>

The user wants to add all songs from an Apple Music search result/artist page to a playlist at once, rather than one-by-one in the Apple Music app. They want me to investigate building an app/skill that can do this.

Let me think about what's feasible:
1. Apple Music has an API (MusicKit JS / Apple Music API)
2. We could potentially build a web app or script that uses the MusicKit JS SDK to search for artists, get their songs, and add them to a playlist
3. Alternatively, we could use AppleScript to automate the Apple Music desktop app

Let me first check what Apple Music APIs are available and what skills/tools we have for Apple integrations. I should look at the `apple` and `apple-mail` skills, and also check if there's anything for MusicKit or Apple Music automation.

Let me also check the Hermes docs for any relevant skills, and do some web research on Apple Music API / MusicKit JS capabilities.

Actually, let me start by loading relevant skills and doing web research in parallel.

</details>

**Tool call: skill_view**

```json
{
  "name": "apple"
}
```

**Tool call: web_search**

```json
{
  "query": "Apple Music API add all songs to playlist programmatically MusicKit JS 2024 2025",
  "limit": 10
}
```

**Tool call: web_search**

```json
{
  "query": "MusicKit JS search artist get catalog songs add to playlist developer",
  "limit": 10
}
```

### 🤖 Assistant — 2026-09-07T09:45:03Z

<details><summary>Reasoning</summary>

The user wants to add all songs from an Apple Music search result/artist page to a playlist at once, rather than one-by-one in the Apple Music app. They want me to investigate building an app/skill that can do this.

Let me think about what's feasible:
1. Apple Music has an API (MusicKit JS / Apple Music API)
2. We could potentially build a web app or script that uses the MusicKit JS SDK to search for artists, get their songs, and add them to a playlist
3. Alternatively, we could use AppleScript to automate the Apple Music desktop app

Let me first check what Apple Music APIs are available and what skills/tools we have for Apple integrations. I should look at the `apple` and `apple-mail` skills, and also check if there's anything for MusicKit or Apple Music automation.

Let me also check the Hermes docs for any relevant skills, and do some web research on Apple Music API / MusicKit JS capabilities.

Actually, let me start by loading relevant skills and doing web research in parallel.

</details>

**Tool call: skill_view**

```json
{
  
