---
type: Fact
title: # Sharing Knowledge Bases Across Hermes Profiles

source: hermes
session_id: 202
description: # Sharing Knowledge Bases Across Hermes Profiles

source: hermes
session_id: 20260707_083724_ad6596
resource: hermes://session/20260707_083724_ad6596

# Conversation

- **Session ID:** `20260707_08372
resource: agentmemory://memory/mem_mspdvfbw_895d97eeb80c
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T01:01:11.097Z
source: agentmemory
strength: 7
---
# Content

# Sharing Knowledge Bases Across Hermes Profiles

source: hermes
session_id: 20260707_083724_ad6596
resource: hermes://session/20260707_083724_ad6596

# Conversation

- **Session ID:** `20260707_083724_ad6596`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-07T13:37:25Z
- **Messages:** 116
- **CWD:** `/Volumes/davec`
- **Tokens:** 127092 in / 31148 out
- **Est. cost:** $0.2751

---

### 👤 User — 2026-07-07T13:37:25Z

What is the best way to categorize submatter across profiles. E.G. I would like to have a knowledga base for Vectric Aspire that is available in default, cc, and cnc profiles.

### 🤖 Assistant — 2026-07-07T13:38:56Z

<details><summary>Reasoning</summary>

**Categorizing Hermes profiles**

I need to provide an answer regarding how to categorize subject matter across Hermes profiles. The user is asking about the skills relevant to the Hermes-agent and hermes-workspace-context. I should load the pertinent skills to ensure each profile meets the necessary requirements. It looks like Hermès will need to be configured properly based on the profiles and skills to be effective.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent",
  "file_path": ""
}
```

### 🤖 Assistant — 2026-07-07T13:38:56Z

<details><summary>Reasoning</summary>

**Exploring skill management**

I need to provide a conceptual answer regarding "submatter," which might refer to the subject matter. I should mention isolated profiles and the skills associated with each. Recommending a shared skill could involve using symlinks. I wonder if I could retrieve the latest documentation on profiles and skills through web extraction. Additionally, it’s vital to warn against cross-profile edits unless given explicit permission. Maybe I should categorize skills more broadly under an umbrella like `vectric-aspire`. I'll check the actual implementation.

</details>

**Tool call: web_search**

```json
{
  "query": "site:hermes-agent.nousresearch.com/docs Hermes Agent profiles skills directory symlink shared skills profiles",
  "limit": 5
}
```

### 🤖 Assistant — 2026-07-07T13:38:56Z

**Tool call: web_extract**

```json
{
  "urls": [
    "https://hermes-agent.nousresearch.com/docs/user-guide/features/skills/",
    "https://hermes-agent.nousresearch.com/docs/user-guide/profiles"
  ]
}
```

### 🤖 Assistant — 2026-07-07T13:38:56Z

**Tool call: web_search**

```json
{
  "query": "site:hermes-agent.nousresearch.com/docs/user-guide/features/skills external skill directory Hermes skills",
  "limit": 10
}
```

### 🤖 Assistant — 2026-07-07T13:38:56Z

<details><summary>Reasoning</summary>

**Searching for subject matter**

I think I need to focus on conceptual answers. There’s mention of "submatter," which might relate to subject matter. It seems important to have a strong knowledge base across different profiles. It could help to search relevant documents for configuration details to support this. I want to ensure I'm looking into the right areas to build a solid understanding, so I’ll definitely prioritize that!

</details>

**Tool call: web_search**

```json
{
  "query": "site:hermes-agent.nousresearch.com/docs/user-guide/features/skills \"external_skill\" OR \"skill_dirs\" OR \"external dirs\" Hermes config",
  "limit": 10
}
```

### 🤖 Assistant — 2026-07-07T13:38:56Z

**Tool call: web_search**

```json
{
  "query": "\"external_skill_dirs\" \"Hermes\" skills config.yaml",
  "limit": 10
}
```

### 🤖 Assistant — 2026-07-07T13:38:56Z

**Tool call: browser_navigate**

```json
{
  "url": "https://hermes-agent.nousresearch.com/docs/user-guide/features/skills/"
}
```

### 🤖 Assistant — 2026-07-07T13:38:56Z

**Tool call: browser_console**

```json
{
  "clear": false,
  "expression": "Array.from(document.querySelectorAll('h2,h3,pre,p,li')).map(e=>e.innerText).filter(t=>/External Skill Directories|external skill|skill_dir|skills:/i.test(t)).slice(0,80)"
}
```

### 🤖 Assistant — 2026-07-07T13:38:56Z

**Tool call: browser_console**

```json
{
  "clear": false,
  "expression": "(() => { const h=[...document.querySelectorAll('h2,h3')].find(e=>e.innerText.includes('External Skill Directories'
