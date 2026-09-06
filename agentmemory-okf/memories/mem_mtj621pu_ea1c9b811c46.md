---
type: Fact
title: # MCP PDF Reader Server Log Troubleshooting

source: hermes
session_id: claude__
description: # MCP PDF Reader Server Log Troubleshooting

source: hermes
session_id: claude__5e5f0c4c-6225-4b16-a351-acd9717a93d8
resource: hermes://session/claude__5e5f0c4c-6225-4b16-a351-acd9717a93d8

# Conversa
resource: agentmemory://memory/mem_mtj621pu_ea1c9b811c46
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:28.299Z
source: agentmemory
strength: 7
---
# Content

# MCP PDF Reader Server Log Troubleshooting

source: hermes
session_id: claude__5e5f0c4c-6225-4b16-a351-acd9717a93d8
resource: hermes://session/claude__5e5f0c4c-6225-4b16-a351-acd9717a93d8

# Conversation

- **Session ID:** `claude__5e5f0c4c-6225-4b16-a351-acd9717a93d8`
- **Source:** claude
- **Model:** None
- **Started:** 2025-07-08T15:46:27Z
- **Ended:** 2025-07-08T15:47:06Z
- **Messages:** 2
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-07-08T15:46:28Z

Read /Users/davec/Library/Logs/Claude/mcp-server-mcp-pdf-reader.log and help fix

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

The error was simply a typo in the filename extension (`.jss` instead of `.js`), which prevented Node.js from finding the main server file. This fix should resolve the connection issue completely.

`[tool_use: desktop-commander:read_file]`
`[tool_result]` [Reading 48 lines from start]  2025-07-08T15:45:52.908Z [mcp-pdf-reader] [info] Initializing server... { metadata: undefined } 2025-07-08T15:45:52.963Z [mcp-pdf-reader] [info] Using MCP server command: /opt/homebrew/Cellar/node/24.2.0/bin/node with args and path: {   metadata: {     args: [       '/Volumes/AI/Servers/MCP/pdf-reader/index.jss',       'run',       [length]: 2     ],     paths: [    
`[tool_use: desktop-commander:list_directory]`
`[tool_result]` [FILE] README.md [FILE] index.js [DIR] node_modules [FILE] package-lock.json [FILE] package.json
`[tool_use: desktop-commander:read_file]`
`[tool_result]` [Reading 156 lines from start]  {   "mcpServers": {     "@mcp-get-community/server-macos": {       "command": "npx",       "args": [         "-y",         "@mcp-get-community/server-macos"       ]     },     "docker-mcp": {       "command": "npx",       "args": [         "-y",         "docker-mcp"       ]     },     "mcp-server-fetch": {       "command": "npx",       "args": [         "-y",       
`[tool_use: desktop-commander:edit_block]` /Users/davec/Library/Application Support/Claude/claude_desktop_config.json
`[tool_result]` Successfully applied 1 edit to /Users/davec/Library/Application Support/Claude/claude_desktop_config.json
