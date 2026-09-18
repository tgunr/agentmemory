---
type: Fact
title: # Why Hermes Shows Zero MCP Servers

source: hermes
session_id: 20260715_055223_
description: # Why Hermes Shows Zero MCP Servers

source: hermes
session_id: 20260715_055223_a8f6c7
resource: hermes://session/20260715_055223_a8f6c7

# Conversation

- **Session ID:** `20260715_055223_a8f6c7`
- *
resource: agentmemory://memory/mem_mspcm6i2_4901c34be7fe
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260715_055223_a8f6c7"]
timestamp: 2026-08-12T00:26:00.153Z
source: agentmemory
strength: 7
---
# Content

# Why Hermes Shows Zero MCP Servers

source: hermes
session_id: 20260715_055223_a8f6c7
resource: hermes://session/20260715_055223_a8f6c7

# Conversation

- **Session ID:** `20260715_055223_a8f6c7`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-15T10:52:49Z
- **Ended:** 2026-07-16T19:38:57Z
- **Messages:** 24
- **Tokens:** 54182 in / 3828 out
- **Est. cost:** $0.0425

---

### 👤 User — 2026-07-15T10:52:49Z

When I start up Hermes, it is showing that there are zero MCP servers connected. Why is that? 

### 🤖 Assistant — 2026-07-15T10:52:58Z

<details><summary>Reasoning</summary>

The user is asking about why Hermes shows zero MCP servers connected at startup. Let me load the relevant skills and check the configuration to diagnose this.

I should:
1. Load the hermes-agent skill for guidance on MCP configuration
2. Check the user's config.yaml to see if MCP servers are configured

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
  "command": "cat ~/.hermes/config.yaml | grep -A 50 \"mcp\""
}
```

### 🤖 Assistant — 2026-07-15T10:53:09Z

<details><summary>Reasoning</summary>

Let me analyze the MCP configuration. I can see the `mcp_servers` section in the config:

```yaml
mcp_servers:
  BetterTouchTool:
    enabled: true
    url: http://127.0.0.1:64832/mcp
  agentmemory:
    command: /Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh
    enabled: true
    env:
      AGENTMEMORY_URL: http://localhost:3111
  comfyui:
    command: comfyui-mcp
    enabled: true
  mcp-router:
    args:
      - -y
      - '@mcp_router/cli@latest'
      - connect
    command: npx
    env:
      MCPR_TOKEN: mcpr_5X4MVkGX8AVTGv8VVij4yAmBXXvarWBN
```

So there are 4 MCP servers configured. But the user says they're showing zero connected. Let me check the MCP troubleshooting reference and the native MCP reference to understand why they might not be connecting.

Let me also check the `hermes mcp list` command and the native MCP reference.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes mcp list"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-agent",
  "file_path": "references/native-mcp.md"
}
```

**Tool call: skill_view**

```json
{
  "name": "mcp-troubleshooting"
}
```

### 🤖 Assistant — 2026-07-15T10:53:21Z

<details><summary>Reasoning</summary>

Let me analyze the situation. The user says "When I start up Hermes, it is showing that there are zero MCP servers connected." But when I run `hermes mcp list`, it shows 4 MCP servers all enabled:

1. BetterTouchTool (HTTP) - ✓ enabled
2. agentmemory (stdio) - ✓ enabled
3. comfyui (stdio) - ✓ enabled
4. mcp-router (stdio) - ✓ enabled

So the MCP servers are actually configured and enabled. The user might be seeing a startup message that says "0 MCP servers connected" or something similar. Let me check the Hermes logs for startup to see what's happening.

The user might be seeing a message during startup that says "0 MCP servers connected" or maybe they're seeing it in the status display. Let me check the logs and also check the `hermes status` command.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes status --all 2>&1 | grep -i -A 10 mcp"
}
```

**Tool call: terminal**

```json
{
  "command": "hermes mcp catalog 2>&1"
}
```

### 🤖 Assistant — 2026-07-15T10:53:34Z

<details><summary>Reasoning</summary>

Let me look at what the status output shows for MCP servers:

</details>

**Tool call: terminal**

```json
{
  "command": "hermes status --all 2>&1"
}
```

### 🤖 Assistant — 2026-07-15T10:53:49Z

<details><summary>Reasoning</summary>

The user says "When I start up Hermes, it is showing that there are zero MCP servers connected." But when I run `hermes mcp list`, all 4 MCP servers show as "✓ enabled." The `hermes status` output doesn't even mention MCP server status at all — it's not in the status output.

So the user might be seeing something different from what I see. Let me think about what could be happening:

1. The `hermes status` command doesn't show MCP server status at all (no MCP 
