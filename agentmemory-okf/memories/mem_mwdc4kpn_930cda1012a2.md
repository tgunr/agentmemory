---
type: Fact
title: # Configure Kilo gateway for Better Touch Tool

source: hermes
session_id: local
description: # Configure Kilo gateway for Better Touch Tool

source: hermes
session_id: local-dd0218555f41343d159c312cfaa5b234baec2524d619034f5405e3290e928332
resource: hermes://session/local-dd0218555f41343d159c3
resource: agentmemory://memory/mem_mwdc4kpn_930cda1012a2
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-11-12T09:17:53.837Z
source: agentmemory
strength: 7
---
# Content

# Configure Kilo gateway for Better Touch Tool

source: hermes
session_id: local-dd0218555f41343d159c312cfaa5b234baec2524d619034f5405e3290e928332
resource: hermes://session/local-dd0218555f41343d159c312cfaa5b234baec2524d619034f5405e3290e928332

# Conversation

- **Session ID:** `local-dd0218555f41343d159c312cfaa5b234baec2524d619034f5405e3290e928332`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-11T21:03:53Z
- **Messages:** 162
- **CWD:** `/Users/davec`
- **Tokens:** 414068 in / 56128 out
- **Est. cost:** $-255056.0000

---

### 👤 User — 2026-11-11T21:03:54Z

how do I configure Kilo gateway for the Better Touch Tool

### 🤖 Assistant — 2026-11-11T21:04:01Z

<details><summary>Reasoning</summary>

The user asks: "how do I configure Kilo gateway for the Better Touch Tool" — likely they mean Kilo (Kilo Code?) gateway integration with BetterTouchTool (BTT, macOS automation tool). Hmm, "Kilo gateway" — there's kilocode provider in Hermes. But "configure Kilo gateway for the Better Touch Tool" is ambiguous. Maybe they want BTT triggers to call Hermes/Kilo gateway endpoints? Or they mean "BetterTouchTool" widget showing gateway status?

Let me check skills: there's `kilo-code-integration`, `hermes-gateway-control`, `telegram-bots`, etc. Loading `kilo-code-integration` might clarify what "Kilo gateway" means.

Let me first load skills that seem relevant: kilo-code-integration, hermes-gateway-control. Also could ask clarification. But before asking, gather context cheaply.

Actually maybe the intent: they have a BetterTouchTool setup and want a button/touchbar trigger to launch Kilo gateway or point BTT's HTTP request action at the Kilo gateway endpoint. Let's load skills.

Also `macos-integrations` might mention BetterTouchTool.

Let me batch: skill_view kilo-code-integration, skill_view macos-integrations, and grep local config for "bettertouch" in ~/.hermes and ~/Library/Application Support/BetterTouchTool maybe.

I'll do a few parallel calls.

</details>

**Tool call: skill_view**

```json
{
  "name": "kilo-code-integration"
}
```

**Tool call: skill_view**

```json
{
  "name": "macos-integrations"
}
```

**Tool call: search_files**

```json
{
  "pattern": "(?i)better.?touch",
  "path": "/Users/davec/.hermes",
  "output_mode": "files_only",
  "limit": 30
}
```

### 🤖 Assistant — 2026-11-11T21:04:06Z

<details><summary>Reasoning</summary>

The question is ambiguous. "Kilo gateway" — there is a Hermes gateway, and Kilo (kilocode provider) as a model provider. "Better Touch Tool" = BetterTouchTool. Possibly the user wants a BTT gesture/button that sends a prompt to the Hermes gateway (routed via kilocode model), i.e., configure the Kilo gateway (in Hermes gateway config?) for use from BetterTouchTool.

Let me check whether BTT is installed and whether there's an existing integration. Also check what "Kilo gateway" could be — maybe they mean kilo.ai's gateway? Hmm, Kilo Code has "Kilo Gateway"? Actually Kilo Code CLI has providers; there's "kilocode" provider in Hermes. There's also the Hermes gateway (which routes messages from Telegram etc.).

Let me check the hermes config for gateway settings and check if BTT is installed. And check machine: which machine am I on? pro or mini? Memory says viewer=pro.local GUI, agent on mini. Let's check hostname.

Better to ask clarification, but let me gather evidence first: does BTT exist in /Applications, is there a BTT preset with Kilo already?

Search for "kilo" in hermes config yaml and check BTT.

</details>

**Tool call: terminal**

```json
{
  "command": "hostname; ls -d /Applications/BetterTouchTool.app 2>/dev/null; ls -d ~/Library/Application\\ Support/BetterTouchTool 2>/dev/null && ls ~/Library/Application\\ Support/BetterTouchTool | head -20; ls ~/Library/Preferences | grep -i bettertouch"
}
```

**Tool call: terminal**

```json
{
  "command": "grep -rn -i \"kilo\" ~/.hermes/config.yaml | head -40; echo ---; grep -rn -i \"gateway\" ~/.hermes/config.yaml | head -40"
}
```

### 🤖 Assistant — 2026-11-11T21:04:12Z

<details><summary>Reasoning</summary>

So "Kilo gateway" = the kilocode provider configured at base_url https://api.kilo.ai/api/gateway. And BTT is installed on Mini (this machine). The user 
