---
type: Fact
title: # Fix state 8000 character limit error

source: hermes
session_id: 20261010_0956
description: # Fix state 8000 character limit error

source: hermes
session_id: 20261010_095645_2ba18c
resource: hermes://session/20261010_095645_2ba18c

# Conversation

- **Session ID:** `20261010_095645_2ba18c`

resource: agentmemory://memory/mem_mv3jyb27_aacd7708ba9b
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes/hermes-agent"]
timestamp: 2026-10-11T08:19:34.234Z
source: agentmemory
strength: 7
---
# Content

# Fix state 8000 character limit error

source: hermes
session_id: 20261010_095645_2ba18c
resource: hermes://session/20261010_095645_2ba18c

# Conversation

- **Session ID:** `20261010_095645_2ba18c`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-10T14:56:58Z
- **Ended:** 2026-10-10T15:07:45Z
- **Messages:** 187
- **CWD:** `/Users/davec/.hermes/hermes-agent`
- **Tokens:** 119438 in / 10484 out

---

### 👤 User — 2026-10-10T14:56:58Z

why ami getting this error:
Hermes hit an internal error while running this turn (kilocode). Your message was not answered.                                                                                                   ┃
    Details: Jev request failed (422): {"error":{"type":"invalid_request_error","message":"state must be at most 8000 characters."}}

### 🤖 Assistant — 2026-10-10T14:57:12Z

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import search_files, read_file\nr = search_files(\"kilocode\", target=\"content\", path=\"/Users/davec/.hermes/hermes-agent\", file_glob=\"*.py\", limit=30)\nfor m in r.get(\"matches\", []):\n    print(m.get(\"path\"), m.get(\"line\"), m.get(\"text\",\"\")[:120])\n"
}
```

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import search_files\nr = search_files(\"state\", target=\"content\", path=\"/Users/davec/.hermes/hermes-agent/agent\", file_glob=\"*.py\", limit=50)\nfor m in r.get(\"matches\", [])[:50]:\n    print(m.get(\"path\"), m.get(\"line\"), m.get(\"text\",\"\")[:120])\n"
}
```

### 🤖 Assistant — 2026-10-10T14:57:18Z

**Tool call: search_files**

```json
{
  "pattern": "kilocode|kilo-code|kilo_code",
  "path": "/Users/davec/.hermes/hermes-agent",
  "file_glob": "*.py",
  "limit": 40
}
```

**Tool call: search_files**

```json
{
  "pattern": "\"state\"|state=|state:|param state|state must be",
  "path": "/Users/davec/.hermes/hermes-agent",
  "file_glob": "*.py",
  "limit": 40
}
```

### 🤖 Assistant — 2026-10-10T14:57:24Z

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 40,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "at most 8000|8000 characters|invalid_request_error"
}
```

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 40,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "previous_response|response_id|store=true|store: true|\"store\""
}
```

### 🤖 Assistant — 2026-10-10T14:57:31Z

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 30,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "\\bstate\\b.*=.*\\{|\\[\"state\"\\]|body\\[.state.\\]|json\\[.state.\\]"
}
```

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 30,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "8000"
}
```

### 🤖 Assistant — 2026-10-10T14:57:38Z

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 40,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "\"state\""
}
```

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 40,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "applies_to|sidechain|agent.*state|thread.*state"
}
```

### 🤖 Assistant — 2026-10-10T14:57:42Z

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 40,
  "path": "/Users/davec/.hermes/hermes-agent/agent",
  "pattern": "state"
}
```

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 20,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "Jev request|jev request|Jev"
}
```

### 🤖 Assistant — 2026-10-10T14:57:52Z

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 40,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "Jev",
  "target": "content"
}
```

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 20,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "fit_state|max_state_tokens|jev"
}
```

### 🤖 Assistant — 2026-10-10T14:57:58Z

**Tool call: search_files**

```json
{
  "file_glob": "*.py",
  "limit": 40,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "j
