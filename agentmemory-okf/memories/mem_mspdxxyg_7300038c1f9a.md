---
type: Fact
title: # Can openclaw use mcp servers?

source: kilo
session_id: 019c7956-e31d-7268-963
description: # Can openclaw use mcp servers?

source: kilo
session_id: 019c7956-e31d-7268-9635-c541f9d79570
resource: kilo://task/019c7956-e31d-7268-9635-c541f9d79570

# Conversation

- **Task ID:** `019c7956-e31d
resource: agentmemory://memory/mem_mspdxxyg_7300038c1f9a
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:03:08.545Z
source: agentmemory
strength: 7
---
# Content

# Can openclaw use mcp servers?

source: kilo
session_id: 019c7956-e31d-7268-9635-c541f9d79570
resource: kilo://task/019c7956-e31d-7268-9635-c541f9d79570

# Conversation

- **Task ID:** `019c7956-e31d-7268-9635-c541f9d79570`
- **Source:** kilo
- **Started:** 2026-02-20T04:37:43Z
- **Ended:** 2026-02-21T16:40:17Z
- **Message blocks:** 71
- **Tokens:** 2535622 in / 7332 out

---

### 👤 User — 2026-02-20T04:37:43Z

Can openclaw use mcp servers?

### 🤖 Assistant — 2026-02-20T04:37:53Z

<details><summary>Reasoning</summary>

The user is asking about whether OpenClaw can use MCP servers. Let me first understand what OpenClaw is by looking at the configuration file that was mentioned in the environment details - `.openclaw/openclaw.json`.

Let me read that file to understand what OpenClaw is and whether it supports MCP servers.

</details>

### 🤖 Assistant — 2026-02-20T04:37:54Z

**Tool call: readFile**

```json
{
  "path": ".openclaw/openclaw.json",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/.openclaw/openclaw.json",
  "reason": ""
}
```

### 🤖 Assistant — 2026-02-20T04:38:28Z

<details><summary>Reasoning</summary>

Now I understand what OpenClaw is based on the configuration file. It's an AI agent system with:
- Model management via LiteLLM
- Multiple model providers (Ollama, LiteLLM)
- Telegram and Discord plugin integrations
- Skills system
- Gateway for remote connections

The user is asking whether OpenClaw can use MCP servers. Let me search for information about OpenClaw and MCP to give an accurate answer.

</details>

### 🤖 Assistant — 2026-02-20T04:38:30Z

**Tool call: searchFiles**

```json
{
  "path": ".openclaw",
  "regex": "mcp|MCP",
  "filePattern": "*",
  "isOutsideWorkspace": false,
  "content": "Found 4 results.\n\n# .openclaw/agents/main/sessions/sessions.json\n 25 |     \"skillsSnapshot\": {\n 26 |       \"prompt\": \"\\n\\nThe following skills provide specialized instructions for specific tasks.\\nUse the read tool to load a skill's file when the task matches its description.\\nWhen a skill file references a relative path, resolve it against the skill directory (parent of SKILL.md / dirname of the path) and use that absolute path in tool commands.\\n\\n<available_skills>\\n  <skill>\\n    <name>apple-notes</name>\\n    <description>Manage Apple Notes via the `memo` CLI on macOS (create, view, edit, d [truncated...]\n 27 |       \"skills\": [\n----\n 61 |         {\n 62 |           \"name\": \"mcporter\"\n 63 |         },\n----\n175 |         {\n176 |           \"name\": \"mcporter\",\n177 |           \"description\": \"Use the mcporter CLI to list, configure, auth, and call MCP servers/tools directly (HTTP or stdio), including ad-hoc servers, config edits, and CLI/type generation.\",\n178 |           \"filePath\": \"/opt/homebrew/lib/node_modules/openclaw/skills/mcporter/SKILL.md\",\n179 |           \"baseDir\": \"/opt/homebrew/lib/node_modules/openclaw/skills/mcporter\",\n180 |           \"source\": \"openclaw-bundled\",\n----\n372 |           {\n373 |             \"name\": \"mcporter\",\n374 |             \"blockChars\": 330\n----"
}
```

### 🤖 Assistant — 2026-02-20T04:38:38Z

<details><summary>Reasoning</summary>

I found evidence that OpenClaw can indeed use MCP servers. There's a skill called "mcporter" which is described as: "Use the mcporter CLI to list, configure, auth, and call MCP servers/tools directly (HTTP or stdio), including ad-hoc servers, config edits, and CLI/type generation."

Let me get more details about this mcporter skill to provide a complete answer.

</details>

### 🤖 Assistant — 2026-02-20T04:38:39Z

**Tool call: readFile**

```json
{
  "path": ".openclaw/agents/main/sessions/sessions.json",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/.openclaw/agents/main/sessions/sessions.json",
  "reason": ""
}
```

### 🤖 Assistant — 2026-02-20T04:38:45Z

<details><summary>Reasoning</summary>

The user is asking about whether OpenClaw can use MCP servers. Based on my research of the OpenClaw configuration files, I can now provide a comprehensive answer.

From the session file, I found:
1. OpenClaw has a built-in skill called
