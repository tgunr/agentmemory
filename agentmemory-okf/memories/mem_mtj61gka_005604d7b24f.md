---
type: Fact
title: # Basic-Memory MCP Server Installation

source: hermes
session_id: claude__21efd
description: # Basic-Memory MCP Server Installation

source: hermes
session_id: claude__21efd7d8-7e11-4b39-909e-915fc5422937
resource: hermes://session/claude__21efd7d8-7e11-4b39-909e-915fc5422937

# Conversation

resource: agentmemory://memory/mem_mtj61gka_005604d7b24f
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:00.908Z
source: agentmemory
strength: 7
---
# Content

# Basic-Memory MCP Server Installation

source: hermes
session_id: claude__21efd7d8-7e11-4b39-909e-915fc5422937
resource: hermes://session/claude__21efd7d8-7e11-4b39-909e-915fc5422937

# Conversation

- **Session ID:** `claude__21efd7d8-7e11-4b39-909e-915fc5422937`
- **Source:** claude
- **Model:** None
- **Started:** 2025-07-06T16:00:08Z
- **Ended:** 2025-07-06T16:00:59Z
- **Messages:** 4
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-07-06T16:00:08Z

Add basic-memory mcp server

### 🤖 Assistant — 2025-07-06T16:00:22Z

I'll help you install the basic-memory MCP server. This server provides memory capabilities for storing and retrieving information across conversations.
```
This block is not supported on your current device yet.
```

Great! I've successfully installed the basic-memory MCP server (`@modelcontextprotocol/server-memory`). 

**Please restart the Claude app** for the memory server to become active. Once you restart, you'll have access to memory tools that allow me to:

- Store and retrieve information across our conversations
- Remember important facts, preferences, and context
- Build a persistent knowledge base of our interactions

After restarting, the memory functionality will be available and I'll be able to help you store and recall information more effectively!

`[tool_use: mcp-installer:install_repo_mcp_server]`
`[tool_result]` Installed MCP server via npx successfully! Tell the user to restart the app

### 👤 User — 2025-07-06T16:00:51Z

That should be     "basic-memory": {
      "command": "uvx",
      "args": [
        "basic-memory",
        "mcp"
      ]
    }

### 🤖 Assistant — 2025-07-06T16:00:59Z

You're absolutely right! Let me install the correct basic-memory MCP server using uvx:
```
This block is not supported on your current device yet.
```

Perfect! I've now installed the correct basic-memory MCP server using uvx with the proper configuration:
- Command: uvx
- Package: basic-memory  
- Args: ["mcp"]

**Please restart the Claude app** for the basic-memory server to become active. Once you restart, you'll have access to the memory functionality that allows me to store and retrieve information persistently across our conversations.

`[tool_use: mcp-installer:install_repo_mcp_server]`
`[tool_result]` Installed MCP server via uvx successfully! Tell the user to restart the app
