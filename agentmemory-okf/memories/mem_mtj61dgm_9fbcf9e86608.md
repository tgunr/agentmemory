---
type: Fact
title: # MCP Token Overhead Analysis

source: hermes
session_id: claude__1542da4c-c2ce-
description: # MCP Token Overhead Analysis

source: hermes
session_id: claude__1542da4c-c2ce-4f68-b31d-f07c562199d1
resource: hermes://session/claude__1542da4c-c2ce-4f68-b31d-f07c562199d1

# Conversation

- **Sess
resource: agentmemory://memory/mem_mtj61dgm_9fbcf9e86608
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:14:56.873Z
source: agentmemory
strength: 7
---
# Content

# MCP Token Overhead Analysis

source: hermes
session_id: claude__1542da4c-c2ce-4f68-b31d-f07c562199d1
resource: hermes://session/claude__1542da4c-c2ce-4f68-b31d-f07c562199d1

# Conversation

- **Session ID:** `claude__1542da4c-c2ce-4f68-b31d-f07c562199d1`
- **Source:** claude
- **Model:** None
- **Started:** 2025-07-31T14:37:02Z
- **Ended:** 2025-07-31T14:51:23Z
- **Messages:** 6
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-07-31T14:37:04Z

How much overhead in tokens do the MCP add to a conversation?

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

The key point is that MCP tools only consume tokens when actively used, and the overhead depends entirely on what data they return. Simple operations have minimal overhead, while tools that fetch large amounts of external content can significantly impact your context window.

### 👤 User — 2025-07-31T14:38:40Z

So why not just have all MCP servers available on startup of Claude?

### 🤖 Assistant — 2025-07-31T14:38:58Z

That's a really logical question! There are several practical reasons why MCP servers aren't all available by default:

**Resource Management:**
- Each MCP server is a separate process that consumes system resources (memory, CPU, network connections)
- Running dozens of servers simultaneously would be resource-intensive
- Many servers maintain persistent connections to external services (databases, APIs, etc.)

**Security & Privacy:**
- MCP servers often need authentication credentials and access permissions
- Users shouldn't have tools accessing their Google Drive, Slack, or databases unless they explicitly want that
- Different users need different tools - a developer might want GitHub access while a researcher needs academic databases

**Performance:**
- Tool discovery and selection can become slower with too many options
- Network latency from inactive servers maintaining connections
- Some servers do initialization work on startup

**User Experience:**
- Overwhelming choice paralysis with 100+ available tools
- Easier to manage and understand a curated set of relevant tools
- Different contexts need different toolsets

**Cost & Rate Limits:**
- Many MCP servers connect to paid APIs with usage limits
- Running all servers would trigger unnecessary API calls and costs
- Some services have connection limits

**The Current Approach:**
Most MCP implementations let you configure which servers to run based on your needs. For example, a typical setup might include:
- File system tools (always useful)
- Web search (generally useful)  
- Specific integrations you actually use (GitHub, Slack, etc.)

This gives you the tools you need without the overhead of everything you don't.

### 👤 User — 2025-07-31T14:41:59Z

Using the unified registry manager on the project at /Volumes/Work/Buildbotics/bbctrl-firmware/Tools/gcode_debugger what would be the recommened MCP servers to enable for debugging the UI.

### 🤖 Assistant — 2025-07-31T14:51:23Z

I'll analyze your gcode debugger UI proj
