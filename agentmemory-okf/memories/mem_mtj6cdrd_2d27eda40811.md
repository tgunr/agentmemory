---
type: Fact
title: # MCP PDF Reader Server Log Troubleshooting

source: claude
session_id: 5e5f0c4c
description: # MCP PDF Reader Server Log Troubleshooting

source: claude
session_id: 5e5f0c4c-6225-4b16-a351-acd9717a93d8
resource: claude://conversation/5e5f0c4c-6225-4b16-a351-acd9717a93d8

# Conversation

- **S
resource: agentmemory://memory/mem_mtj6cdrd_2d27eda40811
tags: ["okf", "okf-claude", "claude", "claude://conversation/5e5f0c4c-6225-4b16-a351-acd9717a93d8"]
timestamp: 2026-09-01T21:23:30.488Z
source: agentmemory
strength: 7
---
# Content

# MCP PDF Reader Server Log Troubleshooting

source: claude
session_id: 5e5f0c4c-6225-4b16-a351-acd9717a93d8
resource: claude://conversation/5e5f0c4c-6225-4b16-a351-acd9717a93d8

# Conversation

- **Session ID:** `5e5f0c4c-6225-4b16-a351-acd9717a93d8`
- **Source:** claude
- **Started:** 2025-07-08T15:46:27Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user requested help diagnosing and fixing an issue with their MCP PDF reader server by asking Claude to read a specific log file at `/Users/davec/Library/Logs/Claude/mcp-server-mcp-pdf-reader.log`. Claude identified that the problem was a simple typo in the Claude Desktop configuration file where the server's main file was referenced as `index.jss` instead of the correct `index.js`. This typo was causing Node.js to fail with a "Cannot find module" error when trying to start the MCP server. Claude located the error in the user's Claude Desktop configuration at `~/Library/Application Support/Claude/claude_desktop_config.json` on line 67 and successfully corrected the filename extension. The user's MCP server setup includes a PDF reader server located at `/Volumes/AI/Servers/MCP/pdf-reader/` running on Node.js version 24.2.0 installed via Homebrew. Claude provided clear next steps for the user to restart Claude Desktop to apply the configuration change and test the PDF reader functionality.

**Tool Knowledge**

The desktop-commander tool proved effective for diagnosing MCP server configuration issues. Reading log files first provided the exact error message and file path, which revealed the typo. Using list_directory on `/Volumes/AI/Servers/MCP/pdf-reader` confirmed the correct filename existed as `index.js`. The Claude Desktop configuration file at `~/Library/Application Support/Claude/claude_desktop_config.json` contains MCP server definitions with command paths and arguments arrays. The edit_block function successfully modified the JSON configuration by matching the exact old_string including proper indentation and replacing it with the corrected version. For MCP troubleshooting, the pattern of checking logs first, then verifying actual file existence, then examining and correcting the configuration file proved highly effective.

---

### 👤 User — 2025-07-08T15:46:28Z

Read /Users/davec/Library/Logs/Claude/mcp-server-mcp-pdf-reader.log and help fix

---

### 🤖 Assistant — 2025-07-08T15:47:06Z

I'll read the log file to help diagnose and fix the issue with the MCP PDF reader server.
```
This block is not supported on your current device yet.
```

I can see the issue! The problem is in the file path - there's a typo in the filename. The log shows:

```
'/Volumes/AI/Servers/MCP/pdf-reader/index.jss'
```

Notice the file extension is `.jss` instead of `.js`. This is causing Node.js to fail with "Cannot find module" error.

Let me check what files actually exist in that directory:
```
This block is not supported on your current device yet.
```

Perfect! As expected, the correct file is `index.js`, not `index.jss`. 

**The Fix:**

You need to update your MCP server configuration to use the correct filename. The configuration is likely in one of these places:

1. **Claude Desktop configuration** (most likely): `~/Library/Application Support/Claude/claude_desktop_config.json`
2. **Environment variable or command line argument**

Let me check your Claude Desktop config:
```
This block is not supported on your current device yet.
```

Found it! In your Claude Desktop configuration, line 67 shows the typo:

```json
"mcp-pdf-reader": {
  "command": "/opt/homebrew/Cellar/node/24.2.0/bin/node",
  "args": [
    "/Volumes/AI/Servers/MCP/pdf-reader/index.jss",  // ← This should be index.js
    "run"
  ]
}
```

**Here's how to fix it:**
```
This block is not supported on your current device yet.
```

Perfect! I've fixed the typo by changing `index.jss` to `index.js`. 

**Next steps:**

1. **Restart Claude Desktop** - You'll need to quit and restart Claude Desktop for the configuration change to take effect.

2. **Test the PDF reader** - After restarting, the MCP PDF reader server should connect successfully.

The error was simply a typo in the filename e
