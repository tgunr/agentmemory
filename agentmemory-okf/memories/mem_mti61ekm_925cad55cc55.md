---
type: Fact
title: # MCP Server Registry Listing

source: claude
session_id: e4c74f41-7f09-4186-939
description: # MCP Server Registry Listing

source: claude
session_id: e4c74f41-7f09-4186-939c-273aade22bb3
resource: claude://conversation/e4c74f41-7f09-4186-939c-273aade22bb3

# Conversation

- **Session ID:** `
resource: agentmemory://memory/mem_mti61ekm_925cad55cc55
tags: ["okf", "okf-claude", "claude", "claude://conversation/e4c74f41-7f09-4186-939c-273aade22bb3"]
timestamp: 2026-09-01T04:27:12.157Z
source: agentmemory
strength: 7
---
# Content

# MCP Server Registry Listing

source: claude
session_id: e4c74f41-7f09-4186-939c-273aade22bb3
resource: claude://conversation/e4c74f41-7f09-4186-939c-273aade22bb3

# Conversation

- **Session ID:** `e4c74f41-7f09-4186-939c-273aade22bb3`
- **Source:** claude
- **Started:** 2025-07-31T12:20:48Z
- **Messages:** 10
- **Summary:** **Conversation Overview**

The user requested a comprehensive list of available MCP servers and then specifically asked for detailed guidance on setting up the mcp-controller for Claude Desktop profile management. After discovering that the standard mcp-controller wasn't available in their system, Claude helped create a complete custom profile management solution. The conversation involved extensive technical troubleshooting, including attempts to install MCPM (MCP Package Manager) which encountered permission issues, leading to the development of a manual but robust alternative.

Claude successfully implemented a full profile management system by creating four distinct server configuration profiles: "full" (all servers enabled), "development" (code-focused servers including codemcp, desktop-commander, zen, and server-sequential-thinking), "minimal" (essential servers only with desktop-commander and zen), and "research" (analysis-focused servers with basic-memory, unified-registry-manager, zen, server-sequential-thinking, and desktop-commander). The solution included a comprehensive bash script for profile switching, automatic backup functionality, and detailed documentation.

The user's current MCP setup includes codemcp, basic-memory, unified-registry-manager, zen, desktop-commander, and server-sequential-thinking servers. The final implementation provides a professional-grade profile management system with a global `claude-profile` command, automatic configuration backups, color-coded terminal output, and complete documentation including setup guides and troubleshooting instructions.

**Tool Knowledge**

The desktop-commander tool proved essential for file system operations throughout the setup process. File path handling required careful escaping, particularly for paths containing spaces like `~/Library/Application Support/Claude/claude_desktop_config.json` which needed to be written as `~/Library/Application\ Support/Claude/claude_desktop_config.json` in command execution. The tool's `write_file` function with `mode: rewrite` parameter worked reliably for creating new configuration files, while `mode: append` successfully added content to existing files like `.zshrc`.

Directory operations using `create_directory` functioned smoothly for establishing the profiles folder structure. The `start_process` command required careful timeout management, with 30000ms timeouts for installation operations and 5000-10000ms for simple commands. Permission modifications using `chmod +x` through `start_process` worked effectively for making scripts executable. When creating executable scripts in `/usr/local/bin/`, the approach of creating a simple wrapper script that executes the main script with `exec` and `"$@"` parameter passing proved more reliable than complex alias configurations.

The unified-registry-manager tool effectively listed all 25 available MCP servers and provided detailed server information using `get_server_details` with the server_id parameter. File reading operations with the `read_file` function worked consistently for examining existing configurations, and the `get_file_info` function helped verify file existence before attempting operations. The combination of these tools enabled a complete end-to-end solution for profile management system implementation.

---

### 👤 User — 2025-07-31T12:20:49Z

List all available MCP servers.

---

### 🤖 Assistant — 2025-07-31T12:21:14Z

I'll list all available MCP servers for you using the unified registry manager.
```
This block is not supported on your current device yet.
```

Here are all 25 available MCP servers in the registry:

## Official Model Context Protocol Servers (@modelcontextprotocol)
- **server-filesystem** - Filesystem access
- **server-puppeteer** - Browser automation using Puppeteer
- **server-githu
