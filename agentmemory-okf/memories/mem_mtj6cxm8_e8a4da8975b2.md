---
type: Fact
title: # Claude Desktop Config JSON Error

source: claude
session_id: a8f4e587-b23b-4d9
description: # Claude Desktop Config JSON Error

source: claude
session_id: a8f4e587-b23b-4d94-abdb-765a55ab1676
resource: claude://conversation/a8f4e587-b23b-4d94-abdb-765a55ab1676

# Conversation

- **Session ID
resource: agentmemory://memory/mem_mtj6cxm8_e8a4da8975b2
tags: ["okf", "okf-claude", "claude", "claude://conversation/a8f4e587-b23b-4d94-abdb-765a55ab1676"]
timestamp: 2026-09-01T21:23:56.230Z
source: agentmemory
strength: 7
---
# Content

# Claude Desktop Config JSON Error

source: claude
session_id: a8f4e587-b23b-4d94-abdb-765a55ab1676
resource: claude://conversation/a8f4e587-b23b-4d94-abdb-765a55ab1676

# Conversation

- **Session ID:** `a8f4e587-b23b-4d94-abdb-765a55ab1676`
- **Source:** claude
- **Started:** 2025-07-23T21:55:01Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user encountered a JSON parsing error in their `claude_desktop_config.json` file related to MCP (Model Context Protocol) server configuration. The specific error indicated that the "command" field was missing or undefined for the "unified-registry-manager" MCP server entry, when it should contain a string value. Claude provided comprehensive troubleshooting guidance, offering two main solutions: either fixing the existing configuration by properly formatting the JSON with the correct command structure using "npx" and appropriate arguments, or removing the problematic entry entirely if the unified-registry-manager wasn't needed. The response included the exact file paths for locating the configuration file on both macOS and Windows systems, identified common configuration mistakes like missing quotes or typos, and emphasized the need to restart Claude Desktop after making changes for the configuration to take effect.

---

### 👤 User — 2025-07-23T21:55:02Z

There was an error reading or parsing claude_desktop_config.json: [
{
"code": "invalid_type",
"expected": "string",
"received": "undefined",
"path": [
"mcpServers",
"unified-registry-manager",
"command"
],
"message": "Required"
}
]

---

### 🤖 Assistant — 2025-07-23T21:55:10Z

This error indicates that your `claude_desktop_config.json` file has a configuration issue with the "unified-registry-manager" MCP server. The error shows that the `command` field is missing or undefined when it should be a string.

Here's how to fix it:

**Option 1: Fix the existing configuration**
Open your `claude_desktop_config.json` file and make sure the unified-registry-manager entry looks like this:

```json
{
  "mcpServers": {
    "unified-registry-manager": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-unified-registry-manager"]
    }
  }
}
```

**Option 2: Remove the problematic entry**
If you're not using the unified-registry-manager, you can simply remove that entire section from your config file.

**Common issues:**
- Missing quotes around the command value
- Typo in the field name (e.g., "commands" instead of "command")
- Incomplete configuration copied from documentation

**To locate your config file:**
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

After making the changes, restart Claude Desktop for the configuration to take effect. The error should disappear once the JSON is properly formatted with all required fields.

---
