---
type: Fact
title: # MCP Server Options

source: claude
session_id: 3cd89692-7a0c-49ee-bf1f-677ab68
description: # MCP Server Options

source: claude
session_id: 3cd89692-7a0c-49ee-bf1f-677ab686c0d2
resource: claude://conversation/3cd89692-7a0c-49ee-bf1f-677ab686c0d2

# Conversation

- **Session ID:** `3cd89692-
resource: agentmemory://memory/mem_mti604hj_d7e198daa611
tags: ["okf", "okf-claude", "claude", "claude://conversation/3cd89692-7a0c-49ee-bf1f-677ab686c0d2"]
timestamp: 2026-09-01T04:26:12.459Z
source: agentmemory
strength: 7
---
# Content

# MCP Server Options

source: claude
session_id: 3cd89692-7a0c-49ee-bf1f-677ab686c0d2
resource: claude://conversation/3cd89692-7a0c-49ee-bf1f-677ab686c0d2

# Conversation

- **Session ID:** `3cd89692-7a0c-49ee-bf1f-677ab686c0d2`
- **Source:** claude
- **Started:** 2025-08-01T14:22:16Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user inquired about available MCP (Model Context Protocol) servers, seeking information about what servers exist in the ecosystem. Claude used the unified registry manager tool to retrieve and present a comprehensive list of available MCP servers, organizing them into logical categories including official Model Context Protocol servers, community and specialized servers, and development tools. The response covered a wide range of functionality from file system operations and database interactions to browser automation, web search capabilities, and specialized tools like CNC machine control. Claude concluded by offering to provide more detailed information about specific servers or recommendations based on the user's particular use case or project requirements, though the user did not specify their intended application or follow up with additional questions.

**Tool Knowledge**

The unified-registry-manager tool's list_servers function successfully retrieved a comprehensive catalog of available MCP servers without requiring any parameters. The tool returned servers organized across multiple categories, including both official Model Context Protocol servers and community-contributed options. The registry includes servers with diverse functionality ranging from basic file operations and database connectivity to specialized integrations like Atlassian products, document conversion via Pandoc, and even industrial applications like CNC machine control. The tool provides a reliable way to discover the current ecosystem of available MCP servers for users exploring integration options.

---

### 👤 User — 2025-08-01T14:22:17Z

what are the available mcp servers

---

### 🤖 Assistant — 2025-08-01T14:22:35Z

I'll help you find information about available MCP (Model Context Protocol) servers. Let me search the unified registry for you.
```
This block is not supported on your current device yet.
```

Here are the available MCP servers in the registry. The servers cover a wide range of functionality:

**Official Model Context Protocol Servers:**
- **filesystem** - File system operations
- **github/gitlab** - Git repository management
- **puppeteer** - Browser automation
- **postgres** - Database interactions
- **memory** - Knowledge graph and persistent memory
- **brave-search** - Web search capabilities
- **slack** - Team communication
- **google-maps/gdrive** - Google services integration
- **aws-kb-retrieval** - AWS knowledge base access
- **sequential-thinking** - Problem-solving workflows

**Community & Specialized Servers:**
- **desktop-commander** - Desktop application control
- **basic-memory** - Simple persistent storage
- **mcp-atlassian** - Jira and Confluence integration
- **mcp-pandoc** - Document format conversion
- **zen** - Focused conversation workflows
- **buildbotics-controller** - CNC machine control

**Development Tools:**
- **inspector** - MCP protocol debugging
- **create-server** - Server scaffolding tool
- **everything** - Full protocol feature testing

Would you like more details about any specific server, or would you like recommendations based on your particular use case or project requirements?

`[tool_use: unified-registry-manager:list_servers]`
`[tool_result]` Found 25 MCP servers:  **@modelcontextprotocol/server-filesystem** Description: MCP server for filesystem access Status: unknown Categories:  Tags:  Command: npx @modelcontextprotocol/server-filesystem  **@modelcontextprotocol/server-puppeteer** Description: MCP server for browser automation using Puppeteer Status: unknown Categories:  Tags:  Command: npx @modelcontextprotocol/server-puppeteer  **

---
