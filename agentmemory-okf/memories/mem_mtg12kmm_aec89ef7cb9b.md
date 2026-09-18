---
type: Fact
title: # Enable screen sharing for mini

source: hermes
session_id: 20260824_114925_332
description: # Enable screen sharing for mini

source: hermes
session_id: 20260824_114925_3323cb
resource: hermes://session/20260824_114925_3323cb

# Conversation

- **Session ID:** `20260824_114925_3323cb`
- **So
resource: agentmemory://memory/mem_mtg12kmm_aec89ef7cb9b
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:36.236Z
source: agentmemory
strength: 7
---
# Content

# Enable screen sharing for mini

source: hermes
session_id: 20260824_114925_3323cb
resource: hermes://session/20260824_114925_3323cb

# Conversation

- **Session ID:** `20260824_114925_3323cb`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-08-24T16:49:25Z
- **Ended:** 2026-08-26T20:08:41Z
- **Messages:** 162
- **CWD:** `/Users/davec`
- **Tokens:** 301578 in / 38748 out
- **Est. cost:** $-89066.0000

---

### 👤 User — 2026-08-24T16:49:25Z

Fix desktop-commander and computer-use

### 👤 User — 2026-08-24T16:49:25Z

Fix desktop-commander and computer-use

[System: The active model for this chat has changed to kilo-auto/free via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

Fix desktop-commander and computer-use

[System: The active model for this chat has changed to kilo-auto/efficient via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

Fix desktop-commander and computer-use

### 👤 User — 2026-08-24T16:50:29Z

[System: The active model for this chat has changed to kilo-auto/free via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-08-24T16:50:55Z

Fix desktop-commander and computer-use

### 👤 User — 2026-08-24T16:52:00Z

[System: The active model for this chat has changed to kilo-auto/free via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-08-24T16:52:20Z

[System: The active model for this chat has changed to kilo-auto/efficient via provider kilocode. From this point forward, use this runtime metadata when answering questions about what model/provider is active.]

### 👤 User — 2026-08-24T16:52:51Z

Fix desktop-commander and computer-use

### 🤖 Assistant — 2026-08-24T16:53:03Z

<details><summary>Reasoning</summary>

The user wants to fix desktop-commander and computer-use. Let me think about what might be wrong.

Looking at the memory, there are relevant skills:
- `computer-use`: Drive the user's desktop in the background
- `macos-computer-use`: Drive the macOS desktop in the background
- `mcp-troubleshooting`: MCP connectivity troubleshooting
- `hermes-agent`: Configure, extend, or contribute to Hermes Agent

The memory also mentions:
- "Hermes 2-Mac topology: viewer=pro.local, AGENT RUNTIME (models,~/.hermes,cua-driver,MCP servers)=mini.local"
- "computer_use/`hermes computer-use install` fixes MUST run on MINI"

Let me load the relevant skills first, then diagnose what's broken. I should check what the actual errors are. Let me start by loading the computer-use skill and checking the status of both tools.

Actually, I need to understand what "fix" means here. The user hasn't specified what's broken. Let me load the skills and then check the status.

</details>

**Tool call: skill_view**

```json
{
  "name": "computer-use"
}
```

**Tool call: skill_view**

```json
{
  "name": "macos-computer-use"
}
```

**Tool call: skill_view**

```json
{
  "name": "mcp-troubleshooting"
}
```

### 🤖 Assistant — 2026-08-24T16:53:03Z

<details><summary>Reasoning</summary>

The user wants to fix desktop-commander and computer-use. Let me think about what might be wrong.

Looking at the memory, there are relevant skills:
- `computer-use`: Drive the user's desktop in the background
- `macos-computer-use`: Drive the macOS desktop in the background
- `mcp-troubleshooting`: MCP connectivity troubleshooting
- `hermes-agent`: Configure, extend, or contribute to Hermes Agent

The memory also mentions:
- "Hermes 2-Mac topology: viewer=pro.local, AGENT RUNTIME (models,~/.hermes,cua-driver,MCP servers)=mini.local"
- "computer_use/`hermes computer-use install` fixes MUST run on MINI"

Let me load the relevant skills first, then diagnose what's broken. I should check what the actual errors are. Let me start by loading the computer-use skill and checking the status of both tools.

Actually,
