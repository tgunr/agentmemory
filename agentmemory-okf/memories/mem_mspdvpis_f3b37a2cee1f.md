---
type: Fact
title: # Hermes Gateway Status Overview

source: hermes
session_id: 20260719_032058_f6d
description: # Hermes Gateway Status Overview

source: hermes
session_id: 20260719_032058_f6d3a962
resource: hermes://session/20260719_032058_f6d3a962

# Conversation

- **Session ID:** `20260719_032058_f6d3a962`

resource: agentmemory://memory/mem_mspdvpis_f3b37a2cee1f
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260719_032058_f6d3a962"]
timestamp: 2026-08-12T01:01:24.309Z
source: agentmemory
strength: 7
---
# Content

# Hermes Gateway Status Overview

source: hermes
session_id: 20260719_032058_f6d3a962
resource: hermes://session/20260719_032058_f6d3a962

# Conversation

- **Session ID:** `20260719_032058_f6d3a962`
- **Source:** bluebubbles
- **Model:** tencent/hy3:free
- **Started:** 2026-07-19T08:20:58Z
- **Messages:** 9
- **Tokens:** 23738 in / 634 out

---

### 👤 User — 2026-07-19T08:20:58Z

📊 Hermes Gateway Status

### 🤖 Assistant — 2026-07-19T08:21:34Z

<details><summary>Reasoning</summary>

The user sent "📊 Hermes Gateway Status". This seems like they want me to report the status of the Hermes Gateway. Let me check the gateway status.

Let me use the terminal to check the gateway status, or I could use `hermes status`. Let me check.

Since the user is asking about Hermes Gateway Status, I should run a command to get that info. Let me use `hermes status` or check the gateway.

Let me think about what's available. There's a `hermes status` command. Let me run that. Also I recall memory says BlueBubbles gateway etc. Let me check the gateway status.

Let me run the command

</details>

**Tool call: terminal**

```json
{
  "command": "hermes status 2>&1 | head -60"
}
```

### 🤖 Assistant — 2026-07-19T08:21:49Z

<details><summary>Reasoning</summary>

The user sent "📊 Hermes Gateway Status". This looks like a command or a request to report the gateway status. Let me check the gateway status specifically. Let me get more info.

Actually, the user might have typed `/status` or something that got transformed. Let me check the gateway more specifically. Let me get the rest of the status output and also check if there's a gateway status command.

Let me run the full status and also check gateway specifically

</details>

**Tool call: terminal**

```json
{
  "command": "hermes status 2>&1 | tail -40; echo \"---GATEWAY---\"; hermes gateway --help 2>&1 | head -30"
}
```

### 🤖 Assistant — 2026-07-19T08:21:59Z

<details><summary>Reasoning</summary>

Let me get the gateway status more

</details>

**Tool call: terminal**

```json
{
  "command": "hermes gateway status 2>&1"
}
```

### 🤖 Assistant — 2026-07-19T08:22:07Z

<details><summary>Reasoning</summary>

The user asked for "Hermes Gateway Status". Let me give them a concise status report via iMessage. Let me summarize the key gateway points:

- Gateway Service: running (PID 30806), supervised by launchd, auto-start available
- Messaging Platforms: Telegram ✓, Email ✓, BlueBubbles ✓ configured
- Model: tencent/hy3:free via Nous Portal
- Scheduled Jobs: 0

Let me give a concise text-formatted status

</details>

📊 Hermes Gateway Status
(ran `hermes status` + `hermes gateway status`)

Gateway Service
• ✓ Running — PID 30806
• Supervised by launchd (auto-start at login + auto-restart on crash)
• Service def matches current install

Connected Platforms
• Telegram ✓ (home: 7451734548)
• BlueBubbles ✓ (+193****0811)
• Email ✓

Core
• Model: tencent/hy3:free
• Provider: Nous Portal ✓ logged in
• API keys present: OpenRouter, FAL
• Terminal backend: local

Scheduled Jobs: 0 active
Sessions: 8 active

Everything's healthy. Want me to dig into anything (logs, a specific platform, or the 504 on Qwen OAuth)?
