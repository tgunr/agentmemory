---
type: Fact
title: # Telegram Gateway Constantly Resetting Fix

source: hermes
session_id: 20260817
description: # Telegram Gateway Constantly Resetting Fix

source: hermes
session_id: 20260817_090918_49700a
resource: hermes://session/20260817_090918_49700a

# Conversation

- **Session ID:** `20260817_090918_497
resource: agentmemory://memory/mem_mt5jarwy_967a18a7d5c9
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-23T08:17:24.105Z
source: agentmemory
strength: 7
---
# Content

# Telegram Gateway Constantly Resetting Fix

source: hermes
session_id: 20260817_090918_49700a
resource: hermes://session/20260817_090918_49700a

# Conversation

- **Session ID:** `20260817_090918_49700a`
- **Source:** desktop
- **Model:** upstage/solar-pro4:free
- **Started:** 2026-08-17T14:09:18Z
- **Ended:** 2026-08-17T21:44:07Z
- **Messages:** 139
- **CWD:** `/Users/davec`
- **Tokens:** 2792145 in / 13570 out

---

### 👤 User — 2026-08-17T14:09:22Z

Telegram gateway constantly resetting

### 🤖 Assistant — 2026-08-17T14:09:31Z

<details><summary>Reasoning</summary>

The user is reporting that their Telegram gateway keeps resetting. Let me think about what this could mean and what information I need to help them.

"Telegram gateway" could refer to several things:
1. A Telegram bot integration
2. A Telegram MCP server
3. A custom Telegram gateway service they've built

Let me first check the skills available and see if there's anything related to Telegram. I also need to understand their setup better.

Let me look at what skills might be relevant, and also check their Hermes configuration for any Telegram-related MCP servers or integrations.

First, let me load the telegram-related skills and check their config.

</details>

**Tool call: skill_view**

```json
{
  "name": "telegram"
}
```

**Tool call: search_files**

```json
{
  "pattern": "telegram",
  "path": "/Users/davec/.hermes",
  "target": "files"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/.hermes/profiles/default/ 2>/dev/null || echo \"No default profile dir\""
}
```

### 🤖 Assistant — 2026-08-17T14:09:47Z

<details><summary>Reasoning</summary>

The user is asking about a "Telegram gateway constantly resetting." Let me look at their Hermes config and find any Telegram-related MCP servers or configurations.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/profiles/default/config.yaml"
}
```

**Tool call: skills_list**

```json
{
  "category": "integrations"
}
```

### 🤖 Assistant — 2026-08-17T14:10:25Z

<details><summary>Reasoning</summary>

The config.yaml doesn't show any Telegram MCP server defined. Let me search more broadly - maybe it's in a different profile or referenced elsewhere. Let me also look at what MCP servers are configured and if there's a Telegram-related setup anywhere.

</details>

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes",
  "pattern": "telegram",
  "target": "content"
}
```

**Tool call: search_files**

```json
{
  "path": "/Users/davec",
  "pattern": "telegram",
  "target": "files"
}
```

**Tool call: terminal**

```json
{
  "command": "grep -r \"telegram\" /Users/davec/.hermes/ --include=\"*.yaml\" --include=\"*.json\" --include=\"*.md\" --include=\"*.py\" -l 2>/dev/null | head -20"
}
```

### 🤖 Assistant — 2026-08-17T14:11:38Z

<details><summary>Reasoning</summary>

Let me look at the global config.yaml for the telegram section, and the gateway_state.json to understand the current state.

</details>

**Tool call: read_file**

```json
{
  "limit": 40,
  "offset": 410,
  "path": "/Users/davec/.hermes/config.yaml"
}
```

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/gateway_state.json"
}
```

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/channel_directory.json"
}
```

### 🤖 Assistant — 2026-08-17T14:11:59Z

<details><summary>Reasoning</summary>

The user's Telegram gateway is constantly resetting. Looking at the gateway_state.json, I can see:
- Telegram platform state: "connecting" with `needs_attention: false`
- It's been stuck in "connecting" state since 14:11:41
- The process (pid 2366) has been running

Let me look at the full Telegram config section in config.yaml and look for any Telegram-related setup.

</details>

**Tool call: read_file**

```json
{
  "limit": 30,
  "offset": 620,
  "path": "/Users/davec/.hermes/config.yaml"
}
```

**Tool call: read_file**

```json
{
  "limit": 30,
  "offset": 790,
  "path": "/Users/davec/.hermes/config.yaml"
}
```

**Tool call: read_file**

```json
{
  "limit": 30,
  "offset": 965,
  "path": "/Users/davec/.herme
