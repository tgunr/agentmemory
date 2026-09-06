---
type: Fact
title: # MCP Server Log Error Fix

source: claude
session_id: 5e2b5b03-1737-409e-a7df-3
description: # MCP Server Log Error Fix

source: claude
session_id: 5e2b5b03-1737-409e-a7df-34ba7a097b74
resource: claude://conversation/5e2b5b03-1737-409e-a7df-34ba7a097b74

# Conversation

- **Session ID:** `5e2
resource: agentmemory://memory/mem_mti60czk_2a202c393a88
tags: ["okf", "okf-claude", "claude", "claude://conversation/5e2b5b03-1737-409e-a7df-34ba7a097b74"]
timestamp: 2026-09-01T04:26:23.444Z
source: agentmemory
strength: 7
---
# Content

# MCP Server Log Error Fix

source: claude
session_id: 5e2b5b03-1737-409e-a7df-34ba7a097b74
resource: claude://conversation/5e2b5b03-1737-409e-a7df-34ba7a097b74

# Conversation

- **Session ID:** `5e2b5b03-1737-409e-a7df-34ba7a097b74`
- **Source:** claude
- **Started:** 2025-07-31T17:00:26Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user encountered a BrokenPipeError in their unified-registry-manager MCP server and needed assistance fixing it. The error was occurring in the `/Volumes/AI/Servers/unified-registry-manager/externals/mcp-server-unified-registry-manager.log` file, specifically at line 513-514 in the `mcp_wrapper.py` file during stdio communication. Claude diagnosed multiple root causes: the `requirements.txt` file was missing the `mcp` dependency, the server lacked proper error handling for premature stdio disconnections, and there were signal handling issues. The user's system uses pyenv Python at `/Users/davec/.pyenv/shims/python3` rather than the system Python, which initially caused dependency installation problems.

Claude systematically fixed the issues by adding the missing MCP dependency to requirements.txt, enhancing error handling in `mcp_wrapper.py` to properly catch BrokenPipeError, ConnectionResetError, and OS errors, improving signal handling in `run_mcp_server.py` with SIGINT and SIGTERM handlers, and installing dependencies in the correct pyenv Python environment. The underlying unified-registry-manager HTTP server was confirmed to be running healthy on localhost:8000. After implementing the fixes, Claude created and ran a comprehensive test script that successfully demonstrated the server now handles protocol messages correctly, exposes all 6 tools properly (list_servers, recommend_servers, analyze_project, search_servers, get_server_details, get_health_status), and gracefully handles client disconnections without fatal errors.

**Tool Knowledge**

The desktop-commander tool proved essential for debugging and fixing this MCP server issue. When reading log files with `read_file`, using the `offset` parameter with negative values like `offset: -50` effectively retrieves the most recent entries, which was crucial for identifying the current error state. For examining specific error locations in code files, combining `length` and `offset` parameters allows precise targeting of problematic lines, such as `length: 20, offset: 505` to examine lines around the BrokenPipeError location.

The `start_process` command requires careful attention to Python environment paths. Using the full pyenv path `/Users/davec/.pyenv/shims/python3` rather than system `python3` was critical for ensuring dependencies were installed in the correct environment. When testing MCP servers that use stdio communication, piping JSON messages through echo works effectively: `echo '{"method":"initialize",...}' | python3 mcp_server.py`. For processes that might hang or run indefinitely, the `timeout_ms` parameter prevents commands from blocking, and using `timeout 5` in shell commands provides additional safety. The `edit_block` operation works reliably when the `old_string` parameter exactly matches the existing code, including whitespace and indentation.

---

### 👤 User — 2025-07-31T17:00:28Z

We have an error in /Volumes/AI/Servers/unified-registry-manager/externals/mcp-server-unified-registry-manager.log and need to fix it in /Volumes/AI/Servers/unified-registry-manager

---

### 🤖 Assistant — 2025-07-31T17:08:45Z

I'll help you investigate and fix the error in your unified-registry-manager. Let me start by examining the log file to understand what's going wrong.
```
This block is not supported on your current device yet.
```

I can see the main issue! The error is a **BrokenPipeError** occurring when the MCP server tries to flush stdout. This is happening because of a premature termination in the stdio communication channel. Let me examine the project structure to understand the codebase better.
```
This block is not supported on your current device yet.
```

Let me look at the main MCP server files to understand the issue:
```
This block is not supported on your current
