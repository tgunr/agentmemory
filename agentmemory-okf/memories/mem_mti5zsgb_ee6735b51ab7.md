---
type: Fact
title: # The HRM MCP server doesn't seem to be working with Claude. I

source: claude
s
description: # The HRM MCP server doesn't seem to be working with Claude. I

source: claude
session_id: 17e052fe-d85b-4e21-9fc6-735c11efe393
resource: claude://conversation/17e052fe-d85b-4e21-9fc6-735c11efe393

# 
resource: agentmemory://memory/mem_mti5zsgb_ee6735b51ab7
tags: ["okf", "okf-claude", "claude", "claude://conversation/17e052fe-d85b-4e21-9fc6-735c11efe393"]
timestamp: 2026-09-01T04:25:56.849Z
source: agentmemory
strength: 7
---
# Content

# The HRM MCP server doesn't seem to be working with Claude. I

source: claude
session_id: 17e052fe-d85b-4e21-9fc6-735c11efe393
resource: claude://conversation/17e052fe-d85b-4e21-9fc6-735c11efe393

# Conversation

- **Session ID:** `17e052fe-d85b-4e21-9fc6-735c11efe393`
- **Source:** claude
- **Started:** 2025-05-27T16:50:45Z
- **Messages:** 19

---

### 👤 User — 2025-05-27T16:50:47Z

The HRM MCP server doesn't seem to be working with Claude. I need to disable it or uninstall it and find something that works in its place.

---

### 🤖 Assistant — 2025-05-27T16:50:53Z

The user is asking about the "HRM MCP server" which appears to be some kind of Model Control Protocol (MCP) server that they're trying to use with Claude, but it's not working properly. They want to disable/uninstall it and find an alternative.

However, I don't see any HRM-related tools in my available functions list, and I don't have specific knowledge about what "HRM MCP server" refers to or how to configure MCP servers with Claude. This seems like it would be a technical setup/configuration issue.

Since I don't have specific knowledge about this particular MCP server or how to configure MCP servers in general, I should be honest about this limitation and suggest they check the appropriate documentation or support resources.

I should avoid making assumptions about what specific steps they need to take since I don't have detailed knowledge about their setup or the specific HRM MCP server they're referring to.

---

### 👤 User — 2025-05-27T16:51:10Z

The iterm MCP server doesn't seem to be working with Claude. I need to disable it or uninstall it and find something that works in its place.

---

### 🤖 Assistant — 2025-05-27T16:51:21Z

The user is having issues with the iTerm MCP server not working properly with Claude. They want to disable/uninstall it and find an alternative that works. 

Let me think about this:

1. First, I should help them understand how to disable or uninstall the iTerm MCP server
2. Then I should suggest alternatives that might work better

For disabling/uninstalling MCP servers, this typically involves:
- Removing or commenting out the server configuration from their MCP settings
- The exact location depends on how they set it up (could be in Claude Desktop settings, or a separate MCP configuration file)

For alternatives, there are several options:
- Built-in terminal tools if available
- Other MCP servers that provide terminal functionality
- Direct command-line tools

Let me provide practical guidance on both removing the problematic server and finding alternatives.I can help you disable the iTerm MCP server and find alternatives. Here's how to handle this:

## Disabling the iTerm MCP Server

The MCP server configuration is typically stored in your Claude Desktop settings. To disable it:

1. **Find your Claude Desktop config file:**
   - On macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

2. **Edit the config file** and either:
   - Remove the iTerm MCP server entry entirely, or
   - Comment it out by adding `//` at the beginning of relevant lines

3. **Restart Claude Desktop** for changes to take effect

## Alternative Solutions

Here are some working alternatives for terminal/command-line functionality:

### 1. **Built-in Terminal Tools**
Some MCP servers provide cross-platform terminal functionality:
- **Computer Use MCP** - Often more reliable than iTerm-specific servers
- **Shell MCP servers** - Generic shell access that works across platforms

### 2. **Direct File System Access**
Instead of terminal commands, you might prefer:
- **File system MCP servers** for file operations
- **Process MCP servers** for running specific commands

### 3. **Platform-Specific Alternatives**
- **PowerShell MCP** (Windows)
- **Bash MCP servers** (Linux/macOS)
- **Cross-platform shell servers**

Would you like me to help you:
1. Locate and edit your specific config file?
2. Recommend specific alternative MCP servers based on what you're trying to accomplish?
3. Help you set up a replacement server?

What kind of terminal/command-line tasks were you hoping t
