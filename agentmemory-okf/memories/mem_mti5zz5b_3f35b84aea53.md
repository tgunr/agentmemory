---
type: Fact
title: # MCP Server Installer Setup

source: claude
session_id: 2f476139-f8c2-4dbb-ad54
description: # MCP Server Installer Setup

source: claude
session_id: 2f476139-f8c2-4dbb-ad54-b21d23e2417c
resource: claude://conversation/2f476139-f8c2-4dbb-ad54-b21d23e2417c

# Conversation

- **Session ID:** `2
resource: agentmemory://memory/mem_mti5zz5b_3f35b84aea53
tags: ["okf", "okf-claude", "claude", "claude://conversation/2f476139-f8c2-4dbb-ad54-b21d23e2417c"]
timestamp: 2026-09-01T04:26:05.531Z
source: agentmemory
strength: 7
---
# Content

# MCP Server Installer Setup

source: claude
session_id: 2f476139-f8c2-4dbb-ad54-b21d23e2417c
resource: claude://conversation/2f476139-f8c2-4dbb-ad54-b21d23e2417c

# Conversation

- **Session ID:** `2f476139-f8c2-4dbb-ad54-b21d23e2417c`
- **Source:** claude
- **Started:** 2025-07-12T20:13:13Z
- **Messages:** 4
- **Summary:** **Conversation Overview**

The user requested help adding an MCP server installer on macOS, specifically referencing the anaisbetts/mcp-installer GitHub repository. Claude provided comprehensive setup instructions for installing and configuring this MCP installer tool. The conversation focused on technical implementation details, including prerequisites like Node.js installation via Homebrew, configuration of the Claude Desktop config file located at ~/Library/Application Support/Claude/claude_desktop_config.json, and the specific JSON configuration needed to integrate the mcp-installer as an MCP server using npx and @anaisbetts/mcp-installer.

Claude documented the complete workflow from installation through usage, explaining how the installer enables natural language commands to install other MCP servers from npm packages, Python packages via PyPI, or local repositories. The instructions included additional setup requirements for Python-based servers using the uv package manager, and provided specific usage examples like "install the MCP server named mcp-server-fetch" or "install the @modelcontextprotocol/server-filesystem package as an MCP server." The conversation demonstrated the user's interest in expanding Claude's capabilities through MCP server integration and their preference for using established open-source tools rather than building custom solutions from scratch.

---

### 👤 User — 2025-07-12T20:13:14Z

Add mcp server installer

---

### 🤖 Assistant — 2025-07-12T20:13:21Z

I'd be happy to help you with adding an MCP (Model Context Protocol) server installer! However, I need a bit more context to provide the most useful assistance.

Could you clarify:

1. **What type of installer are you looking to create?**
   - A script to install MCP servers locally
   - Integration into an existing application
   - A package manager or CLI tool

2. **What platform(s) are you targeting?**
   - Windows, macOS, Linux, or cross-platform

3. **What MCP servers do you want to install?**
   - Specific servers (filesystem, database, etc.)
   - A registry of available servers
   - Custom servers

4. **What's your preferred technology stack?**
   - Python, Node.js, Rust, shell scripts, etc.

Once I understand your specific needs, I can help you create:
- Installation scripts
- Configuration management
- Server discovery and setup
- Integration with existing MCP implementations

What would be most helpful for your use case?

---

### 👤 User — 2025-07-12T20:15:05Z

On Macos use https://github.com/anaisbetts/mcp-installer

---

### 🤖 Assistant — 2025-07-12T20:15:24Z

I'll help you set up the MCP installer on macOS using the repository you mentioned. Let me search for the latest information about this installer.
```
This block is not supported on your current device yet.
```

Perfect! Here's how to set up the MCP installer on macOS using anaisbetts' mcp-installer:

## Installation Steps

### 1. Prerequisites
Make sure you have Node.js installed on your macOS system. You can install it via:
```bash
# Using Homebrew
brew install node

# Or download from nodejs.org
```

### 2. Configure Claude Desktop
```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```

Add this configuration to your Claude Desktop config file located at:
`~/Library/Application Support/Claude/claude_desktop_config.json`

### 3. Apply the Configuration

1. **Edit the config file:**
   ```bash
   nano "~/Library/Application Support/Claude/claude_desktop_config.json"
   ```

2. **Add the JSON configuration** from the artifact above (or merge it with your existing configuration if you already have other MCP servers)

3. **Restart Claude Desktop** for the changes to take effect

### 4. Usage Examples

Once installed, you can ask Claude to install other MCP servers usin
