---
type: Fact
title: # Pandoc MCP Server Log Troubleshooting

source: claude
session_id: 9eda6f43-311
description: # Pandoc MCP Server Log Troubleshooting

source: claude
session_id: 9eda6f43-311f-4fb9-aead-6b5ebe0c899b
resource: claude://conversation/9eda6f43-311f-4fb9-aead-6b5ebe0c899b

# Conversation

- **Sessi
resource: agentmemory://memory/mem_mtj6ctuj_b7dc77daa138
tags: ["okf", "okf-claude", "claude", "claude://conversation/9eda6f43-311f-4fb9-aead-6b5ebe0c899b"]
timestamp: 2026-09-01T21:23:51.340Z
source: agentmemory
strength: 7
---
# Content

# Pandoc MCP Server Log Troubleshooting

source: claude
session_id: 9eda6f43-311f-4fb9-aead-6b5ebe0c899b
resource: claude://conversation/9eda6f43-311f-4fb9-aead-6b5ebe0c899b

# Conversation

- **Session ID:** `9eda6f43-311f-4fb9-aead-6b5ebe0c899b`
- **Source:** claude
- **Started:** 2025-07-08T15:59:01Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user requested help checking and fixing pandoc MCP server logs. Claude investigated multiple running mcp-pandoc processes that were repeatedly starting and terminating, indicating a systemic issue. Through systematic troubleshooting using desktop commander tools, Claude examined system processes, checked logs, and attempted to test server connectivity. The investigation revealed that the root cause was a missing dependency - Pandoc was not installed on the system, causing all mcp-pandoc server instances to fail when trying to execute pandoc commands. Claude resolved the issue by installing Pandoc via Homebrew, then verified the installation and tested the MCP server functionality with a custom Python script that sent proper MCP protocol initialization messages. The fix was successful, with the server now properly responding to MCP requests and ready to handle document conversion tasks.

**Tool Knowledge**

Desktop commander proved effective for systematic server troubleshooting. Using `ps aux | grep pandoc` combined with `log show --predicate 'process CONTAINS "pandoc"'` provided clear visibility into failing processes and their termination patterns. The `which pandoc` command was crucial for identifying missing dependencies that weren't immediately obvious from process logs alone. For MCP server testing, sending properly formatted JSON-RPC messages with the correct protocol version "2024-11-05" and required initialization parameters was essential - the server expects exact MCP protocol compliance rather than simple connectivity tests. When killing problematic MCP processes, `pkill -f "mcp-pandoc"` effectively terminated all instances by matching the full command line rather than just process names. Testing MCP servers requires proper JSON-RPC message structure with initialize method calls including protocolVersion, capabilities, and clientInfo parameters to get meaningful responses rather than timeouts.

---

### 👤 User — 2025-07-08T15:59:02Z

Check pandoc mcp server logs and fix

---

### 🤖 Assistant — 2025-07-08T16:02:00Z

I'll help you check the pandoc MCP server logs and identify any issues that need fixing. Let me start by examining the system to understand what's happening with the pandoc MCP server.
```
This block is not supported on your current device yet.
```

I can see several MCP-related processes running, including pandoc servers. Let me look for specific pandoc processes and check their logs. I notice there are multiple mcp-pandoc processes running.
```
This block is not supported on your current device yet.
```

Now let me check the logs for these pandoc processes. First, let me look at the system logs to see if there are any errors:
```
This block is not supported on your current device yet.
```

Let me check if there are any recent log entries related to mcp-pandoc or UV:
```
This block is not supported on your current device yet.
```

Now I can see some important information. The logs show that the `npm exec mcp-pandoc` processes have been terminating. Let me check if there are any specific error messages. Let me also check the stderr output of one of the running pandoc processes:
```
This block is not supported on your current device yet.
```

Let me check if we can connect to one of these pandoc servers to see if they're responding:
```
This block is not supported on your current device yet.
```

Let me check if there are any environment variables or configuration issues by testing the pandoc installation directly:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Ah! Here's the issue. The pandoc command is not found, which means Pandoc is not installed on the system. The mcp-pandoc server requires Pandoc to be installed separately. Let
