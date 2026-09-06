---
type: Fact
title: # Serena MCP Server Installation

source: claude
session_id: 687fb370-075a-435a-
description: # Serena MCP Server Installation

source: claude
session_id: 687fb370-075a-435a-85af-c9e90c58c444
resource: claude://conversation/687fb370-075a-435a-85af-c9e90c58c444

# Conversation

- **Session ID:*
resource: agentmemory://memory/mem_mti60gth_fbe55c5c871c
tags: ["okf", "okf-claude", "claude", "claude://conversation/687fb370-075a-435a-85af-c9e90c58c444"]
timestamp: 2026-09-01T04:26:28.433Z
source: agentmemory
strength: 7
---
# Content

# Serena MCP Server Installation

source: claude
session_id: 687fb370-075a-435a-85af-c9e90c58c444
resource: claude://conversation/687fb370-075a-435a-85af-c9e90c58c444

# Conversation

- **Session ID:** `687fb370-075a-435a-85af-c9e90c58c444`
- **Source:** claude
- **Started:** 2025-07-07T18:56:59Z
- **Messages:** 4
- **Summary:** **Conversation Overview**

The user requested installation of the serena-mcp-server, which Claude successfully completed using the MCP installer tool. Claude used the mcp-installer:install_repo_mcp_server function to install the server via uvx, and the installation completed successfully. Claude informed the user that they would need to restart the Claude app for the new MCP server to become available and functional, and offered to provide additional information about the server or help with other tasks after the restart.

**Tool Knowledge**

The mcp-installer:install_repo_mcp_server function successfully installed serena-mcp-server using just the server name as the parameter. The installation process completed via uvx without requiring additional configuration parameters. After successful installation of MCP servers through this tool, users must restart the Claude app for the new server capabilities to become available and functional.

---

### 👤 User — 2025-07-07T18:57:01Z

Install the serena-mcp-server

---

### 🤖 Assistant — 2025-07-07T18:57:14Z

The user wants to install the "serena-mcp-server". I can see from the available tools that I have an mcp-installer tool that can install MCP servers. Let me use the install_repo_mcp_server function to install this.

Looking at the function signature:
- install_repo_mcp_server: Install an MCP server via npx or uvx
- Required parameter: name (The package name of the MCP server)
- Optional parameters: args (arguments to pass along), env (environment variables)

The user wants to install "serena-mcp-server", so I'll use that as the package name.I'll install the serena-mcp-server for you using the MCP installer.
```
This block is not supported on your current device yet.
```

The installation was successful! The MCP installer used uvx to install the serena-mcp-server. The result message indicates that the user needs to restart the app for the server to become available.Great! The serena-mcp-server has been successfully installed via uvx. 

**Please restart the app** for the new MCP server to become available and functional. Once you restart, you should be able to use the capabilities provided by the serena-mcp-server.

`[tool_use: mcp-installer:install_repo_mcp_server]`
`[tool_result]` Installed MCP server via uvx successfully! Tell the user to restart the app

---

### 👤 User — 2025-07-08T19:25:38Z

Install the serena-mcp-server

---

### 🤖 Assistant — 2025-07-08T19:25:55Z

The user wants me to install the serena-mcp-server. I can see that I have access to an MCP installer tool that can install MCP servers. Let me use the mcp-installer:install_repo_mcp_server function to install this server.I'll help you install the serena-mcp-server. Let me use the MCP installer to set this up for you.
```
This block is not supported on your current device yet.
```

Great! The serena-mcp-server has been successfully installed via uvx. The installation was successful and I need to tell the user to restart the app for the changes to take effect.Perfect! The serena-mcp-server has been successfully installed via uvx. 

**Please restart the Claude app** for the new MCP server to be available and functional. Once you restart, you should be able to use the capabilities provided by the serena-mcp-server.

Is there anything specific you'd like to know about this MCP server or do you need help with anything else once you've restarted?

`[tool_use: mcp-installer:install_repo_mcp_server]`
`[tool_result]` Installed MCP server via uvx successfully! Tell the user to restart the app

---
