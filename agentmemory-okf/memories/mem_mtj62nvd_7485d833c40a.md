---
type: Fact
title: # Claude Desktop Config JSON Error

source: hermes
session_id: claude__a8f4e587-
description: # Claude Desktop Config JSON Error

source: hermes
session_id: claude__a8f4e587-b23b-4d94-abdb-765a55ab1676
resource: hermes://session/claude__a8f4e587-b23b-4d94-abdb-765a55ab1676

# Conversation

- *
resource: agentmemory://memory/mem_mtj62nvd_7485d833c40a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:56.996Z
source: agentmemory
strength: 7
---
# Content

# Claude Desktop Config JSON Error

source: hermes
session_id: claude__a8f4e587-b23b-4d94-abdb-765a55ab1676
resource: hermes://session/claude__a8f4e587-b23b-4d94-abdb-765a55ab1676

# Conversation

- **Session ID:** `claude__a8f4e587-b23b-4d94-abdb-765a55ab1676`
- **Source:** claude
- **Model:** None
- **Started:** 2025-07-23T21:55:01Z
- **Ended:** 2025-07-23T21:55:10Z
- **Messages:** 2
- **CWD:** `/Users/davec`

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
