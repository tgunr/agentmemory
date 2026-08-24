---
type: Fact
title: # Switching Hermes Desktop Project Folder

source: hermes
session_id: 20260611_1
description: # Switching Hermes Desktop Project Folder

source: hermes
session_id: 20260611_154753_97c5c9
resource: hermes://session/20260611_154753_97c5c9

# Conversation

- **Session ID:** `20260611_154753_97c5c
resource: agentmemory://memory/mem_mspdyvo0_e1e911d71e63
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:03:52.227Z
source: agentmemory
strength: 7
---
# Content

# Switching Hermes Desktop Project Folder

source: hermes
session_id: 20260611_154753_97c5c9
resource: hermes://session/20260611_154753_97c5c9

# Conversation

- **Session ID:** `20260611_154753_97c5c9`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-06-11T20:47:53Z
- **Messages:** 20
- **CWD:** `/Users/davec`
- **Tokens:** 335681 in / 2098 out

---

### 👤 User — 2026-06-11T20:47:54Z

how do switch hermes desktop to a different folder?

### 🤖 Assistant — 2026-06-11T20:48:43Z

<details><summary>Reasoning</summary>


We need answer user asks "how do switch hermes desktop to a different folder?" Need likely means change working directory / project folder in Hermes desktop GUI. Need maybe load hermes-agent skill because configuring/using Hermes itself. Need answer based on docs/skill. We need inspect skill/docs maybe.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-11T20:48:43Z

<details><summary>Reasoning</summary>


Need answer. Need maybe desktop GUI specifics not in skill. User asks "switch hermes desktop to a different folder" maybe means change project working directory. In current system says running inside Hermes desktop GUI app. There is current working directory /Users/davec. We can tell: easiest start Hermes with cwd set or config terminal.cwd? Need verify docs. Search web/docs for "cwd" "desktop".


</details>

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "site:hermes-agent.nousresearch.com/docs Hermes desktop change working directory folder cwd"
}
```

### 🤖 Assistant — 2026-06-11T20:48:43Z

<details><summary>Reasoning</summary>


Need maybe use web_extract desktop doc.


</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://hermes-agent.nousresearch.com/docs/user-guide/desktop"
  ]
}
```

### 🤖 Assistant — 2026-06-11T20:48:43Z

<details><summary>Reasoning</summary>


Search result enough but need answer. Could use browser_navigate to docs.


</details>

**Tool call: browser_navigate**

```json
{
  "url": "https://hermes-agent.nousresearch.com/docs/user-guide/desktop"
}
```

### 🤖 Assistant — 2026-06-11T20:48:43Z

<details><summary>Reasoning</summary>


Need relevant section in desktop doc. Use browser_snapshot full maybe.


</details>

**Tool call: browser_snapshot**

```json
{
  "full": true
}
```

### 🤖 Assistant — 2026-06-11T20:48:43Z

<details><summary>Reasoning</summary>


Snapshot truncated. Need specific text maybe use browser_console eval querySelector all text search.


</details>

**Tool call: browser_console**

```json
{
  "expression": "[...document.querySelectorAll('p,li,code,strong,td,th')].map(e=>e.innerText).filter(t=>/cwd|folder|directory|project|Desktop App|hermes desktop/.test(t)).join('\\n---\\n')"
}
```

### 🤖 Assistant — 2026-06-11T20:48:43Z

<details><summary>Reasoning</summary>


Need answer. Need maybe mention Desktop UI project sidebar has open folder? Search maybe docs. Use query "folder".


</details>

**Tool call: browser_console**

```json
{
  "expression": "[...document.querySelectorAll('p,li,h1,h2,h3,td,th,code')].map(e=>e.innerText).join('\\n').split('\\n').filter((l,i,arr)=>l.toLowerCase().includes('folder')||l.toLowerCase().includes('directory')||l.toLowerCase().includes('cwd')||l.toLowerCase().includes('project')).map(l=>l.trim()).join('\\n')"
}
```

### 🤖 Assistant — 2026-06-11T20:48:43Z

<details><summary>Reasoning</summary>


Need answer concise. Maybe include commands:
- Quit desktop app
- Terminal: cd /path/to/project; hermes desktop
- Or hermes desktop --cwd /path/to/project
- Or env HERMES_DESKTOP_CWD=/path/to/project hermes desktop
- For persistent default: set terminal.cwd in config: hermes config set terminal.cwd /absolute/path? Need verify if desktop uses env variable. It says initial project directory with --cwd or env. Also terminal.cwd for gateway/cron working dir, but desktop doc says --cwd sets HERMES_DESKTOP_CWD. User says "switch hermes desktop to a different folder" likely initial project directory. Need maybe mention "folder switch" maybe in desktop app UI? Search docs maybe there is proj
