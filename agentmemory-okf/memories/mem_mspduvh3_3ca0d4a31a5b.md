---
type: Fact
title: # Agentmemory

source: hermes
session_id: 20260611_155108_9f3fe5
resource: herme
description: # Agentmemory

source: hermes
session_id: 20260611_155108_9f3fe5
resource: hermes://session/20260611_155108_9f3fe5

# Conversation

- **Session ID:** `20260611_155108_9f3fe5`
- **Source:** tui
- **Mod
resource: agentmemory://memory/mem_mspduvh3_3ca0d4a31a5b
tags: ["okf", "okf-hermes", "hermes", "/Volumes"]
timestamp: 2026-08-12T01:00:45.370Z
source: agentmemory
strength: 7
---
# Content

# Agentmemory

source: hermes
session_id: 20260611_155108_9f3fe5
resource: hermes://session/20260611_155108_9f3fe5

# Conversation

- **Session ID:** `20260611_155108_9f3fe5`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-06-11T20:51:09Z
- **Messages:** 49
- **CWD:** `/Volumes`
- **Tokens:** 1027107 in / 2932 out

---

### 👤 User — 2026-06-11T20:51:10Z

pwd

### 🤖 Assistant — 2026-06-11T20:51:12Z

`/Users/davec`

### 👤 User — 2026-06-11T20:53:27Z

Tis is not changing the CWD `hermes desktop --cwd /Users/davec/AI/agentmemory` how do I switch p[rojects

### 🤖 Assistant — 2026-06-11T20:55:02Z

<details><summary>Reasoning</summary>


We need answer user asks "Tis is not changing the CWD `hermes desktop --cwd /Users/davec/AI/agentmemory` how do I switch p[rojects" They likely want switch current working directory/project in Hermes desktop GUI. Need maybe use terminal? Need answer from knowledge, maybe docs/skill? User asks configure Hermes itself, must load hermes-agent skill first. Also maybe docs. Need inspect skills.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-11T20:55:02Z

<details><summary>Reasoning</summary>


Need answer. User says command not changing CWD. Need maybe explain desktop app has current project context from system prompt loaded at session start: cwd is /Users/davec. To switch projects, either open new Hermes session from terminal with --workdir? Wait skill shows no --cwd in global flags. Config terminal.cwd? For desktop GUI? Need understand. The user typed "hermes desktop --cwd /Users/davec/AI/agentmemory" maybe command syntax invalid? Need maybe search docs? Since docs authoritative for Hermes itself. Need use web? Skill says docs. Could use web_search/extract. Need find "desktop --cwd" maybe "hermes desktop" is GUI app command? We need answer how switch projects. We can inspect docs maybe. Use web_search.


</details>

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "site:hermes-agent.nousresearch.com/docs hermes desktop cwd switch project working directory"
}
```

### 🤖 Assistant — 2026-06-11T20:55:02Z

<details><summary>Reasoning</summary>


Need maybe extract desktop doc.


</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://hermes-agent.nousresearch.com/docs/user-guide/desktop",
    "https://hermes-agent.nousresearch.com/docs/user-guide/configuration/",
    "https://hermes-agent.nousresearch.com/docs/user-guide/profiles"
  ]
}
```

### 🤖 Assistant — 2026-06-11T20:55:02Z

<details><summary>Reasoning</summary>


Could use browser_navigate.


</details>

**Tool call: browser_navigate**

```json
{
  "url": "https://hermes-agent.nousresearch.com/docs/user-guide/desktop"
}
```

### 🤖 Assistant — 2026-06-11T20:55:02Z

<details><summary>Reasoning</summary>


Snapshot truncated, need relevant lines. Use browser_snapshot full?


</details>

**Tool call: browser_snapshot**

```json
{
  "full": true
}
```

### 🤖 Assistant — 2026-06-11T20:55:02Z

<details><summary>Reasoning</summary>


Full still truncated due 8k? Need search within page? browser_snapshot no search. Could use browser_console to extract text around cwd maybe.


</details>

**Tool call: browser_console**

```json
{
  "expression": "Array.from(document.querySelectorAll('p, li, code, pre')).map(e=>e.innerText || e.textContent).filter(t=>/cwd|working directory|project|Desktop|switch/i.test(t)).slice(0,80).join('\\n---\\n')"
}
```

### 🤖 Assistant — 2026-06-11T20:55:02Z

<details><summary>Reasoning</summary>


Need answer. But perhaps need verify actual CLI help. Since user says command not changing CWD. Maybe desktop app launched from CLI has --cwd, but if already running app, launching another with --cwd may attach to existing instance or not affect existing sessions. Need know. Could inspect docs maybe CLI reference for desktop. Search.


</details>

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "site:hermes-agent.nousresearch.com/docs \"hermes desktop\" \"--cwd\" \"HERMES_DESKTOP_CWD\""
}
```

### 🤖 Assistant — 2026-06-11T20:55:02Z

