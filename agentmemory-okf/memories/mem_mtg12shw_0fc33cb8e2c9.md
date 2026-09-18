---
type: Fact
title: # Fix hermes unknown toolset warnings

source: hermes
session_id: 20260826_08212
description: # Fix hermes unknown toolset warnings

source: hermes
session_id: 20260826_082128_85b773
resource: hermes://session/20260826_082128_85b773

# Conversation

- **Session ID:** `20260826_082128_85b773`
-
resource: agentmemory://memory/mem_mtg12shw_0fc33cb8e2c9
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:46.414Z
source: agentmemory
strength: 7
---
# Content

# Fix hermes unknown toolset warnings

source: hermes
session_id: 20260826_082128_85b773
resource: hermes://session/20260826_082128_85b773

# Conversation

- **Session ID:** `20260826_082128_85b773`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-26T13:22:39Z
- **Ended:** 2026-08-27T12:29:47Z
- **Messages:** 19
- **CWD:** `/Users/davec`
- **Tokens:** 73428 in / 8728 out

---

### 👤 User — 2026-08-26T13:22:39Z

during hermes update i see: 
⚠️  platform 'cli' references unknown toolset 'messaging' — did you mean 'hermes-cli'?
  ⚠️  platform 'google_chat' references unknown toolset 'hermes-google_chat'
  ⚠️  platform 'teams' references unknown toolset 'hermes-teams'
  ⚠️  platform 'telegram' references unknown toolset 'messaging' — did you mean 'hermes-telegram'?

### 🤖 Assistant — 2026-08-26T13:24:37Z

<details><summary>Reasoning</summary>

The user is running `hermes update` and seeing warnings about platform references to unknown toolsets. This is about Hermes Agent configuration. Let me load the hermes-agent skill first since this is about configuring/troubleshooting Hermes Agent itself.

Actually, let me think. The warnings are about platform config referencing unknown toolsets. This is a config issue. Let me load the hermes-agent skill to get proper commands and context.

Let me also check the actual config to understand what's happening. Let me load the skill and look at the config.

Let me start by loading the hermes-agent skill and examining the config

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "hermes config get 2>/dev/null | head -100; echo \"---EXIT $?---\""
}
```

### 🤖 Assistant — 2026-08-26T13:24:58Z

<details><summary>Reasoning</summary>

The warnings are about platform references to unknown toolsets. Let me look at the gateway/platforms config in config.yaml. Let me read the config file directly

</details>

**Tool call: terminal**

```json
{
  "command": "hermes config path; echo \"---\"; cat \"$(hermes config path)\" 2>/dev/null | grep -n -i -A4 -E \"platform|toolset|gateway\" | head -120"
}
```

### 🤖 Assistant — 2026-08-26T13:25:12Z

The warnings come

### 👤 User — 2026-08-26T13:25:12Z

[System: The previous response was cut off by a network error mid-stream. Continue exactly where you left off. Do not restart or repeat prior text. Finish the answer directly.]

### 🤖 Assistant — 2026-08-26T13:25:16Z

<details><summary>Reasoning</summary>

The user got warnings during `hermes update` about unknown toolsets referenced by platforms. I was examining the config. The key sections are `platform_toolsets` (line 970) and `known_plugin_toolsets` (line 791). Let me look at the full `platform_toolsets` block to find the bad references: 'messaging' for cli and telegram, 'hermes-google_chat' for google_chat, 'hermes-teams' for teams.

Let me read that section of

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/config.yaml",
  "offset": 970,
  "limit": 75
}
```

### 🤖 Assistant — 2026-08-26T13:25:58Z

<details><summary>Reasoning</summary>

Now I understand the picture. The warnings are:

1. `platform 'cli' references unknown toolset 'messaging' — did you mean 'hermes-cli'?`
   - cli section has `messaging` in the list (line 983). But the suggestion `hermes-cli` is weird. Actually `messaging` is a valid toolset per the skill doc ("messaging | Cross-platform message sending"). But the warning says it's unknown. Hmm. Also note the global `toolsets:` at line 128 has `hermes-cli` and `web`. So `hermes-cli` is a real toolset. The warning "did you mean 'hermes-cli'?" — actually `messaging` should be valid... but maybe in this version `messaging` was renamed. Let me not over-think; the warning explicitly flags it.

2. `platform 'google_chat' references unknown toolset 'hermes-google_chat'`
   - google_chat section: `- hermes-google_chat` (line 997). This toolset doesn't exist.

3. `platform 'teams' references unknown toolset 'hermes-teams'`
   - teams section: `- hermes-teams` (line 1006). Doesn't exist.

4. `platform 'telegram' 
