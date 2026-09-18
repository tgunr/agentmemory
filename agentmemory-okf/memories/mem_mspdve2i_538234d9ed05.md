---
type: Fact
title: # MCP Router

source: hermes
session_id: 20260705_080936_8dd6ed
resource: hermes
description: # MCP Router

source: hermes
session_id: 20260705_080936_8dd6ed
resource: hermes://session/20260705_080936_8dd6ed

# Conversation

- **Session ID:** `20260705_080936_8dd6ed`
- **Source:** tui
- **Mode
resource: agentmemory://memory/mem_mspdve2i_538234d9ed05
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260705_080936_8dd6ed"]
timestamp: 2026-08-12T01:01:09.468Z
source: agentmemory
strength: 7
---
# Content

# MCP Router

source: hermes
session_id: 20260705_080936_8dd6ed
resource: hermes://session/20260705_080936_8dd6ed

# Conversation

- **Session ID:** `20260705_080936_8dd6ed`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-05T13:09:36Z
- **Messages:** 148
- **Tokens:** 531826 in / 29809 out
- **Est. cost:** $0.4560

---

### 👤 User — 2026-07-05T13:10:49Z

When I start ../../Applications/MCP Router.app all my mcp servers i had previously are gone, investigate and try to recover from TimeMachine if needed.

### 🤖 Assistant — 2026-07-05T13:10:53Z

<details><summary>Reasoning</summary>

The user is asking me to investigate an issue with MCP Router.app - when they start it, their previously configured MCP servers are gone. They want me to investigate and potentially recover from TimeMachine backups.

Let me first understand the current state:
1. Check if MCP Router is currently running or installed
2. Look at the MCP Router documentation from the hermes-agent skill
3. Check for any configuration files or backups
4. Look into TimeMachine for recovery options

Let me start by loading the mcp-router-guide skill to understand how MCP Router works and where its configurations are stored.

</details>

**Tool call: skill_view**

```json
{
  "name": "mcp-router-guide"
}
```

### 🤖 Assistant — 2026-07-05T13:11:03Z

<details><summary>Reasoning</summary>

I need to understand where MCP server configurations are stored and check if there are backups in TimeMachine. Let me also check the current state of the MCP Router configuration.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import terminal, search_files, read_file\nimport os\nimport json\n\n# Check MCP Router configuration location\nprint(\"=== Checking MCP Router Configuration ===\")\n\n# MCP Router typically stores configs in ~/Library/Application Support/ or similar\nmcp_router_paths = [\n    \"~/Library/Application Support/MCP Router\",\n    \"~/Library/Preferences/com.mcp_router.plist\",\n    \"~/.mcp_router\",\n    \"~/Library/Preferences/com.nousresearch.mcp-router\",\n]\n\nfor path in mcp_router_paths:\n    expanded = os.path.expanduser(path)\n    if os.path.exists(expanded):\n        print(f\"\\nFound: {expanded}\")\n        try:\n            if os.path.isdir(expanded):\n                for root, dirs, files in os.walk(expanded):\n                    for f in files[:20]:  # Limit output\n                        print(f\"  {os.path.join(root, f)}\")\n            else:\n                with open(expanded, 'r') as file:\n                    content = file.read(5000)\n                    print(f\"  Content: {content[:2000]}...\")\n        except Exception as e:\n            print(f\"  Error reading: {e}\")\n\n# Check Hermes MCP config\nprint(\"\\n\\n=== Checking Hermes MCP Config ===\")\nhermes_config_paths = [\n    \"~/.hermes/config.yaml\",\n    \"~/.hermes/profiles/default/config.yaml\",\n    \"~/.mcp.json\",\n]\n\nfor path in hermes_config_paths:\n    expanded = os.path.expanduser(path)\n    if os.path.exists(expanded):\n        print(f\"\\nFound: {expanded}\")\n        try:\n            with open(expanded, 'r') as file:\n                content = file.read(5000)\n                print(f\"  Content: {content[:2000]}...\")\n        except Exception as e:\n            print(f\"  Error reading: {e}\")"
}
```

### 🤖 Assistant — 2026-07-05T13:11:06Z

<details><summary>Reasoning</summary>


Good, I found some configuration files. Let me read the full MCP configuration and check the shared-config.json in the MCP Router directory to understand what servers were previously configured.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Library/Application Support/MCP Router/shared-config.json"
}
```

### 🤖 Assistant — 2026-07-05T13:11:09Z

<details><summary>Reasoning</summary>


I see the shared-config.json has server access tokens but not the actual MCP server configurations. Let me check the Preferences file and look for other configuration locations. I should also check the database file and look for TimeMachine backups
