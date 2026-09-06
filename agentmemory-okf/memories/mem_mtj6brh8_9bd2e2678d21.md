---
type: Fact
title: # MCP Token Overhead Analysis

source: claude
session_id: 1542da4c-c2ce-4f68-b31
description: # MCP Token Overhead Analysis

source: claude
session_id: 1542da4c-c2ce-4f68-b31d-f07c562199d1
resource: claude://conversation/1542da4c-c2ce-4f68-b31d-f07c562199d1

# Conversation

- **Session ID:** `
resource: agentmemory://memory/mem_mtj6brh8_9bd2e2678d21
tags: ["okf", "okf-claude", "claude", "claude://conversation/1542da4c-c2ce-4f68-b31d-f07c562199d1"]
timestamp: 2026-09-01T21:23:01.617Z
source: agentmemory
strength: 7
---
# Content

# MCP Token Overhead Analysis

source: claude
session_id: 1542da4c-c2ce-4f68-b31d-f07c562199d1
resource: claude://conversation/1542da4c-c2ce-4f68-b31d-f07c562199d1

# Conversation

- **Session ID:** `1542da4c-c2ce-4f68-b31d-f07c562199d1`
- **Source:** claude
- **Started:** 2025-07-31T14:37:02Z
- **Messages:** 6
- **Summary:** **Conversation Overview**

The user inquired about MCP (Model Context Protocol) token overhead, seeking to understand how these tools impact conversation context. Claude explained that MCP tools don't consume tokens merely by existing, but only when actively used - tool calls typically add 10-50 tokens while responses vary widely from simple confirmations to thousands of tokens for large document fetches. The user then logically questioned why all MCP servers aren't available by default, leading to a discussion of practical constraints including resource management, security concerns, performance impacts, user experience considerations, and API costs.

The conversation shifted to a specific implementation question when the user asked for MCP server recommendations for debugging a UI project located at `/Volumes/Work/Buildbotics/bbctrl-firmware/Tools/gcode_debugger`. Claude analyzed the project structure, identifying it as a Python/Tkinter GUI application for debugging G-code files in CNC controllers, featuring WebSocket communications, file parsing, syntax highlighting, breakpoint debugging, and real-time machine monitoring. Based on this analysis, Claude recommended five specific MCP servers in priority order: filesystem server for file operations, desktop-commander for Python application debugging, GitHub server for version control, basic-memory for persistent debugging sessions, and sequential-thinking for complex debugging workflows. The recommendations included specific use cases for each server and setup commands for implementation.

**Tool Knowledge**

The unified-registry-manager MCP tool was used extensively for server recommendations. The `recommend_servers` function accepts categories, technologies, and project descriptions as parameters but encountered execution issues during the session. The `search_servers` function with query strings and `list_servers` function with category parameters also experienced difficulties. When these targeted approaches failed, calling `list_servers` without parameters successfully retrieved available servers. This suggests that the unified-registry-manager tool may have reliability issues with complex parameter combinations, and simpler function calls without extensive filtering work more consistently. For future debugging project recommendations, the tool responds better to broad queries followed by manual filtering rather than detailed parameter specifications.

---

### 👤 User — 2025-07-31T14:37:04Z

How much overhead in tokens do the MCP add to a conversation?

---

### 🤖 Assistant — 2025-07-31T14:37:23Z

MCP (Model Context Protocol) tools themselves don't add tokens to the conversation in the way you might expect. Here's how it works:

**What doesn't add tokens:**
- The tool definitions/schemas themselves aren't included in your conversation context
- Having MCP tools available doesn't consume tokens just by existing

**What does add tokens:**
- **Tool calls**: When you invoke an MCP tool, the function call (tool name + parameters) gets added to the conversation history
- **Tool responses**: The results returned by the tool are added to the conversation
- **Tool-generated content**: If tools fetch external content (like web pages, documents, etc.), that content becomes part of the context

**Typical token overhead:**
- A simple tool call might be 10-50 tokens
- Tool responses vary widely:
  - File operations: 0-10 tokens for confirmations
  - Web search results: 100-1000+ tokens depending on results
  - Document fetching: Could be thousands of tokens for large documents
  - Code execution: Varies based on output length

**Example:**
```
Tool call: ~20 tokens
web_search({"query": "MCP protocol"})

Tool response: ~300 tokens  
[Search results with titles, snippets, URLs]
```

The key point is that MCP tools only consume t
