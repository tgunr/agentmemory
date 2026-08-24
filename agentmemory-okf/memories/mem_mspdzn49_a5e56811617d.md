---
type: Fact
title: # Fixing BetterTouchTool MCP Server Port

source: hermes
session_id: 20260715_06
description: # Fixing BetterTouchTool MCP Server Port

source: hermes
session_id: 20260715_063533_a0c8d5
resource: hermes://session/20260715_063533_a0c8d5

# Conversation

- **Session ID:** `20260715_063533_a0c8d5
resource: agentmemory://memory/mem_mspdzn49_a5e56811617d
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:27.801Z
source: agentmemory
strength: 7
---
# Content

# Fixing BetterTouchTool MCP Server Port

source: hermes
session_id: 20260715_063533_a0c8d5
resource: hermes://session/20260715_063533_a0c8d5

# Conversation

- **Session ID:** `20260715_063533_a0c8d5`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-15T11:35:34Z
- **Messages:** 52
- **CWD:** `/Users/davec`
- **Tokens:** 46532 in / 5163 out
- **Est. cost:** $0.0630

---

### 👤 User — 2026-07-15T11:37:37Z

Fix the BetterTouchTool MCP server to run on port 64832

### 🤖 Assistant — 2026-07-15T11:37:45Z

<details><summary>Reasoning</summary>

The user wants to fix the BetterTouchTool MCP server to run on port 64832. Let me first load the relevant skill for BetterTouchTool.

</details>

**Tool call: skill_view**

```json
{
  "name": "bettertouchtool"
}
```

### 🤖 Assistant — 2026-07-15T11:37:57Z

<details><summary>Reasoning</summary>

The user wants to fix the BetterTouchTool MCP server to run on port 64832. Let me look at the current Hermes config to see how the MCP server is configured, and check if BTT is actually running on that port.

</details>

**Tool call: terminal**

```json
{
  "command": "curl -s -o /dev/null -w \"%{http_code}\" --max-time 3 -X POST -H \"Content-Type: application/json\" -d '{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"tools/list\"}' http://127.0.0.1:64832/mcp 2>&1; echo \"\""
}
```

**Tool call: terminal**

```json
{
  "command": "grep -A 20 -i \"bettertouchtool\\|btt\" ~/.hermes/config.yaml 2>/dev/null || echo \"No BTT config found in config.yaml\""
}
```

### 🤖 Assistant — 2026-07-15T11:38:08Z

**Tool call: terminal**

```json
{
  "command": "defaults read com.hegenberg.BetterTouchTool 2>/dev/null | grep -i \"mcp\\|server\\|port\\|64832\" | head -20 || echo \"No BTT MCP defaults found\""
}
```

**Tool call: terminal**

```json
{
  "command": "pgrep -fl \"BetterTouchTool\" || echo \"BTT not running\""
}
```

**Tool call: terminal**

```json
{
  "command": "find ~/Library/Containers -name \"com.hegenberg.BetterTouchTool\" -type d 2>/dev/null | head -5"
}
```

### 🤖 Assistant — 2026-07-15T11:38:32Z

<details><summary>Reasoning</summary>

...


</details>

**Tool call: terminal**

```json
{
  "command": "find ~/Library/Application\\ Support/BetterTouchTool -name \"*.plist\" -o -name \"*.json\" 2>/dev/null | xargs grep -l \"64832\\|mcp\\|MCP\" 2>/dev/null | head -5"
}
```

**Tool call: terminal**

```json
{
  "command": "defaults read com.hegenberg.BetterTouchTool 2>/dev/null | head -50"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/Library/Application\\ Support/BetterTouchTool/ | head -20"
}
```

### 🤖 Assistant — 2026-07-15T11:38:40Z

**Tool call: terminal**

```json
{
  "command": "sqlite3 ~/Library/Application\\ Support/BetterTouchTool/btt_data_store.version_6_506_build_2026050810 \".tables\" 2>/dev/null | head -10"
}
```

**Tool call: terminal**

```json
{
  "command": "sqlite3 ~/Library/Application\\ Support/BetterTouchTool/btt_data_store.version_6_506_build_2026050810 \".schema\" 2>/dev/null | grep -i -A2 \"mcp\\|server\\|port\\|64832\" | head -20"
}
```

### 🤖 Assistant — 2026-07-15T11:38:47Z

**Tool call: skill_view**

```json
{
  "name": "bettertouchtool",
  "file_path": "references/ai-assistant-config.md"
}
```

### 🤖 Assistant — 2026-07-15T11:38:54Z

<details><summary>Reasoning</summary>

The skill doesn't provide a direct way to enable the MCP server via command line. The MCP server is a BTT setting that needs to be toggled in the UI. I need to use macOS desktop automation to open BTT settings and enable the MCP server on port 64832.

Let me check the macos-computer-use skill or use the computer-use tool. Actually, I have a `computer-use` skill available. Let me check it.

Wait, the user wants me to "fix" the BTT MCP server to run on port 64832. This could mean:
1. The MCP server is not running at all and needs to be enabled
2. It's running on a different port and needs to be changed to 64832
3. The Hermes config is wrong and needs to point to 64832

Given the config already points to 64832 and curl gets 000, the issue is likely #1: MCP server is not enabled in BTT. I need to open BTT and enab
