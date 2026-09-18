---
type: Fact
title: # MCP Server Profile Management Script

source: hermes
session_id: claude__c70d1
description: # MCP Server Profile Management Script

source: hermes
session_id: claude__c70d1887-1872-4f8d-b934-49a9559248f5
resource: hermes://session/claude__c70d1887-1872-4f8d-b934-49a9559248f5

# Conversation

resource: agentmemory://memory/mem_mtj630p6_8bd056aada78
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:16:13.601Z
source: agentmemory
strength: 7
---
# Content

# MCP Server Profile Management Script

source: hermes
session_id: claude__c70d1887-1872-4f8d-b934-49a9559248f5
resource: hermes://session/claude__c70d1887-1872-4f8d-b934-49a9559248f5

# Conversation

- **Session ID:** `claude__c70d1887-1872-4f8d-b934-49a9559248f5`
- **Source:** claude
- **Model:** None
- **Started:** 2025-08-01T14:37:32Z
- **Ended:** 2025-08-01T14:45:23Z
- **Messages:** 4
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-08-01T14:37:33Z

Lets look at /Volumes/AI/Servers/MCP/mcpm.sh as a project and create a document of how the overall app is supposed to work. Given a a command like `mcpm profile run debugging` how does the app configure the MCP servers for the clients? How does Claude Desktop config file get modified for use of a given profile?

### 🤖 Assistant — 2025-08-01T14:40:52Z

I'll analyze the mcpm.sh script to understand how it works and document its functionality. Let me start by examining the main script file.
```
This block is not supported on your current device yet.
```

Let me check what's at that path first:
```
This block is not supported on your current device yet.
```

I see that mcpm.sh is actually a directory, not a file. Let me explore its contents:
```
This block is not supported on your current device yet.
```

This appears to be the MCPM (MCP Manager) project directory. Let me look for the main executable files and understand the structure:
```
This block is not supported on your current device yet.
```

Now let me examine the source code structure to understand how the application works:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Let me examine the main CLI entry point and core components:
```
This block is not supported on your current device yet.
```

Now let me examine the profile commands to understand how `mcpm profile run debugging` works:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Now let me examine the profile configuration manager and client integration:
```
This block is not supported on your current device yet.
```

Now let me examine the client configuration manager to understand how it integrates with different MCP clients:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Now let me examine the Claude Desktop manager specifically to understand how it handles configuration:
```
This block is not supported on your current device yet.
```

Now let me examine the global config manager to understand how servers and profiles are stored:
```
This block is not supported on your current device yet.
```

Now let me examine the FastMCP integration to understand how profiles get executed:
```
This block is not supported on your current device yet.
```

Now let me examine the client commands to understand how client configuration management works:
```
This block is not supported on your current device yet.
```

Now that I have a good understanding of the MCPM codebase, let me create a comprehensive document explaining how the app works.
```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```

I've created a comprehensive documentation of how MCPM works. Here's a summary of the key insights:

## How `mcpm profile run debugging` Works:

1. **Command Routing**: The CLI routes through `profile` command group to the `run` subcommand
2. **Profile Resolution**: Looks up all servers tagged with "debugging" in the global config
3. **FastMCP Proxy Creation**: Creates an aggregated proxy that combines multiple MCP servers into one interface
4. **Server Execution**: Runs the combined servers over STDIO (default), HTTP, or SSE

## How Claude Desktop Config Gets Modified:

1. **Interactive Selection**: `mcpm client e
