---
type: Fact
title: # Serena MCP Server Endpoints

source: hermes
session_id: claude__9c9f4d46-bc4a-
description: # Serena MCP Server Endpoints

source: hermes
session_id: claude__9c9f4d46-bc4a-46f5-928e-ad7ef7082b91
resource: hermes://session/claude__9c9f4d46-bc4a-46f5-928e-ad7ef7082b91

# Conversation

- **Sess
resource: agentmemory://memory/mem_mtj62if1_c1bf89d47af2
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:49.924Z
source: agentmemory
strength: 7
---
# Content

# Serena MCP Server Endpoints

source: hermes
session_id: claude__9c9f4d46-bc4a-46f5-928e-ad7ef7082b91
resource: hermes://session/claude__9c9f4d46-bc4a-46f5-928e-ad7ef7082b91

# Conversation

- **Session ID:** `claude__9c9f4d46-bc4a-46f5-928e-ad7ef7082b91`
- **Source:** claude
- **Model:** None
- **Started:** 2025-07-07T18:58:17Z
- **Ended:** 2025-07-07T19:00:09Z
- **Messages:** 4
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-07-07T18:58:22Z

what are the endpoints in the serena-mcp-server

### 🤖 Assistant — 2025-07-07T18:59:11Z

The user is asking about endpoints in the "serena-mcp-server". This sounds like they're asking about a specific MCP (Model Context Protocol) server. I should search for information about this to understand what endpoints it provides.

Let me search for information about serena-mcp-server.I'll search for information about the serena-mcp-server to find details about its endpoints.
```
This block is not supported on your current device yet.
```

Let me search for more specific information about the actual endpoints or tools that the Serena MCP server provides.Let me search for more specific information about the actual tools and endpoints that Serena MCP server provides.
```
This block is not supported on your current device yet.
```

I found some good information about Serena MCP server, but I still need to find specific details about the actual endpoints/tools that it provides. Let me search for more specific information about the tool list or specific endpoints.Let me search for the specific tool list or API documentation for Serena MCP server.
```
This block is not supported on your current device yet.
```

Great! I found the complete list of tools (endpoints) in document 24 and 29. Let me search for the actual tool list to get a complete understanding of all the endpoints Serena provides.Let me get the actual GitHub repository to find the complete tool list.
```
This block is not supported on your current device yet.
```

Perfect! I now have the complete list of all the endpoints/tools that the Serena MCP server provides. I found the comprehensive tool list at the end of document 31. Let me organize this information clearly for the user.Based on my research, the Serena MCP server provides a comprehensive set of **endpoints (tools)** for semantic code analysis and manipulation. Here's the complete list of endpoints available in the Serena MCP server:

## Complete List of Serena MCP Server Endpoints

### Project Management
- **`activate_project`** - Activates a project by name
- **`get_active_project`** - Gets the name of the currently active project (if any) and lists existing projects

### Code Analysis & Search
- **`find_symbol`** - Performs a global (or local) search for symbols with/containing a given name/substring (optionally filtered by type)
- **`find_referencing_symbols`** - Finds symbols that reference the symbol at the given location (optionally filtered by type)
- **`find_referencing_code_snippets`** - Finds code snippets in which the symbol at the given location is referenced
- **`get_symbols_overview`** - Gets an overview of the top-level symbols defined in a given file or directory
- **`search_for_pattern`** - Performs a search for a pattern in the project

### File Operations
- **`read_file`** - Reads a file within the project directory
- **`create_text_file`** - Creates/overwrites a file in the project directory
- **`list_dir`** - Lists files and directories in the given directory (optionally with recursion)

### Code Editing
- **`insert_at_line`** - Inserts content at a given line in a file
- **`insert_before_symbol`** - Inserts content before the beginning of the definition of a given symbol
- **`insert_after_symbol`** - Inserts content after the end of the definition of a given symbol
- **`replace_symbol_body`** - Replaces the full definition of a symbol
- **`replace_lines`** - Replaces a range of lines within a file with new content
- **`delete_lines`** - Deletes a range of lines within a file

### Memory Management
- **`write_memory`** - Writes a named memory (for future reference) to Serena's project-specific memory store
- **`read_memory`** - Re
