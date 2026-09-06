---
type: Fact
title: # MCP Server Installer Setup

source: hermes
session_id: claude__2f476139-f8c2-4
description: # MCP Server Installer Setup

source: hermes
session_id: claude__2f476139-f8c2-4dbb-ad54-b21d23e2417c
resource: hermes://session/claude__2f476139-f8c2-4dbb-ad54-b21d23e2417c

# Conversation

- **Sessi
resource: agentmemory://memory/mem_mtj61l2c_56b0bd4c96c4
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:06.698Z
source: agentmemory
strength: 7
---
# Content

# MCP Server Installer Setup

source: hermes
session_id: claude__2f476139-f8c2-4dbb-ad54-b21d23e2417c
resource: hermes://session/claude__2f476139-f8c2-4dbb-ad54-b21d23e2417c

# Conversation

- **Session ID:** `claude__2f476139-f8c2-4dbb-ad54-b21d23e2417c`
- **Source:** claude
- **Model:** None
- **Started:** 2025-07-12T20:13:13Z
- **Ended:** 2025-07-12T20:15:24Z
- **Messages:** 4
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-07-12T20:13:14Z

Add mcp server installer

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

### 👤 User — 2025-07-12T20:15:05Z

On Macos use https://github.com/anaisbetts/mcp-installer

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

Once installed, you can ask Claude to install other MCP servers using natural language:

- "Hey Claude, install the MCP server named mcp-server-fetch"
- "Hey Claude, install the @modelcontextprotocol/server-filesystem package as an MCP server. Use ['/Users/yourusername/Desktop'] for the arguments"
- "Hi Claude, please install the MCP server @modelcontextprotocol/server-github"

### 5. Additional Requirements for Python Servers

If you want to install Python-based MCP servers, you'll also need `uv` installed:

```bash
# Install uv (Python package manager)
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Features

The MCP installer allows you to install MCP servers from npm packages, Python packages (PyPI), or local repositories through simple natural language commands. It automatically handles:

- Package management
- Environment configuration  
- Automatic Claude Desktop setup
- Configuration file editing

The installer supports servers from npm (Node.js), PyPI (Python), and local file paths, making it easy to expand Claude's capabilities with additional MCP servers without manual configuration file editing.

`[tool_use: web_search]` anaisbetts mcp-installer github macOS
`[tool_result]` Put this into your claude_desktop_config.json (either at ~/Library/Application Support/Claude on macOS or C:\Users\NAME\AppData\Roaming\Claude on Windows): &quot;mcpServers&quot;: { &quot;mcp-insta
