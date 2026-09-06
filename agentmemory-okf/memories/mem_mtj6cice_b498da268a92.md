---
type: Fact
title: # Adding MCP Servers to Claude

source: claude
session_id: 6a0d99fd-dfec-4406-be
description: # Adding MCP Servers to Claude

source: claude
session_id: 6a0d99fd-dfec-4406-be9f-190e6d50a060
resource: claude://conversation/6a0d99fd-dfec-4406-be9f-190e6d50a060

# Conversation

- **Session ID:** 
resource: agentmemory://memory/mem_mtj6cice_b498da268a92
tags: ["okf", "okf-claude", "claude", "claude://conversation/6a0d99fd-dfec-4406-be9f-190e6d50a060"]
timestamp: 2026-09-01T21:23:36.425Z
source: agentmemory
strength: 7
---
# Content

# Adding MCP Servers to Claude

source: claude
session_id: 6a0d99fd-dfec-4406-be9f-190e6d50a060
resource: claude://conversation/6a0d99fd-dfec-4406-be9f-190e6d50a060

# Conversation

- **Session ID:** `6a0d99fd-dfec-4406-be9f-190e6d50a060`
- **Source:** claude
- **Started:** 2025-07-06T20:43:01Z
- **Messages:** 12
- **Summary:** **Conversation Overview**

The user sought technical guidance on configuring MCP (Model Context Protocol) servers with Claude, progressing through several specific implementation challenges. They initially asked how to add MCP servers to Claude, then inquired about where to find existing MCP servers, with particular interest in running servers on remote LAN computers. The conversation revealed they were working with mcp-bridge integration and encountering a specific authorization error when connecting to a server at http://10.1.1.7:8100, receiving the error message "Invalid authorization". Claude provided troubleshooting steps including checking authentication headers, API keys, and server configuration, suggesting debugging approaches like testing with curl commands and verifying CORS settings. The user then asked about the location of MCP configuration files on Windows 11, followed by questions about finding and adding MCP servers through the Claude desktop app. Throughout the conversation, Claude consistently directed the user to official Anthropic documentation at docs.anthropic.com and support.anthropic.com for the most current technical details, while providing general guidance about common configuration patterns, typical file locations on Windows systems, and sources for community-built MCP servers including GitHub repositories and package managers like npm and PyPI.

---

### 👤 User — 2025-07-06T20:43:01Z

How do i add mcp servers to claude?

---

### 🤖 Assistant — 2025-07-06T20:43:10Z

The user is asking about adding MCP (Model Context Protocol) servers to Claude. This is a technical question about how to integrate MCP servers with Claude.

However, I need to be careful here because my knowledge about MCP and how to configure it with Claude may be limited or outdated since my knowledge cutoff is January 2025. The user is asking about a specific technical implementation detail that may have changed or may require current documentation.

MCP (Model Context Protocol) is a protocol developed by Anthropic that allows Claude to connect to external data sources and tools. But the specific instructions for how to set up and configure MCP servers would be something that would be covered in Anthropic's documentation.

Since this is a technical question about how to use Claude/Anthropic's products and services, and I don't have detailed current information about the setup process, I should direct them to the appropriate documentation resources.I don't have detailed instructions on how to add MCP servers to Claude, as this involves specific configuration steps that may have been updated since my knowledge cutoff.

For the most current and accurate information on setting up MCP (Model Context Protocol) servers with Claude, I'd recommend checking:

- **Anthropic's API documentation**: https://docs.anthropic.com
- **Anthropic's support page**: https://support.anthropic.com

The documentation should have step-by-step instructions for configuring MCP servers, including any required setup, authentication, and integration steps.

Is there a particular use case or type of data source you're trying to connect to Claude through MCP? I might be able to provide some general context about what MCP enables, even if I can't give you the specific setup instructions.

---

### 👤 User — 2025-07-06T20:47:27Z

where to find mcp servers

---

### 🤖 Assistant — 2025-07-06T20:47:37Z

The user is asking about where to find MCP (Model Context Protocol) servers. MCP is a protocol developed by Anthropic for connecting external data sources and tools to AI assistants like Claude. Since this is a relatively new technology and my knowledge cutoff is January 2025, I should provide what general information I can while directing them to current resources.

MCP servers are typically found in a few plac
