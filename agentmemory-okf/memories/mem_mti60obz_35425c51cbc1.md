---
type: Fact
title: # Testing MCP Server via CLI

source: claude
session_id: 8fdd6614-03a7-44b3-a4f8
description: # Testing MCP Server via CLI

source: claude
session_id: 8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b
resource: claude://conversation/8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b

# Conversation

- **Session ID:** `8
resource: agentmemory://memory/mem_mti60obz_35425c51cbc1
tags: ["okf", "okf-claude", "claude", "claude://conversation/8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b"]
timestamp: 2026-09-01T04:26:38.171Z
source: agentmemory
strength: 7
---
# Content

# Testing MCP Server via CLI

source: claude
session_id: 8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b
resource: claude://conversation/8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b

# Conversation

- **Session ID:** `8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b`
- **Source:** claude
- **Started:** 2025-08-01T18:03:17Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user asked for guidance on testing stdio MCP (Model Context Protocol) servers from the command line interface. Claude provided a comprehensive technical guide covering four main approaches: direct testing with JSON-RPC messages sent via echo commands, using the official MCP Inspector tool (recommended approach), creating Node.js test scripts, and writing Python test scripts. The response included specific code examples for each method, showing exact JSON-RPC message formats for initialization requests with proper protocol versions and client information. Claude outlined a standard testing sequence involving initialize requests, listing tools and resources, and testing specific tool calls and resource reads. The conversation focused on practical implementation details, including proper subprocess handling, stdin/stdout communication patterns, and error handling approaches. Claude emphasized that the MCP Inspector provides the most user-friendly interface for comprehensive server testing, as it handles JSON-RPC protocol details automatically and offers interactive capabilities for testing all server functions.

---

### 👤 User — 2025-08-01T18:03:18Z

How to test stdio mcp server from CLI

---

### 🤖 Assistant — 2025-08-01T18:03:34Z

To test an MCP (Model Context Protocol) server that uses stdio from the CLI, you can use several approaches:

## 1. Direct Testing with JSON-RPC Messages

You can send JSON-RPC messages directly to the server's stdin and read responses from stdout:

```bash
# Start your MCP server
./your-mcp-server

# Then send JSON-RPC messages like:
echo '{"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05", "capabilities": {"roots": {"listChanged": true}}, "clientInfo": {"name": "test-client", "version": "1.0.0"}}}' | ./your-mcp-server
```

## 2. Using the MCP Inspector

The official MCP Inspector is the recommended way to test MCP servers:

```bash
# Install the MCP Inspector
npm install -g @modelcontextprotocol/inspector

# Run it with your server
mcp-inspector ./your-mcp-server [args]
```

This provides a web interface where you can:
- See available tools and resources
- Test tool calls interactively
- View server logs and responses
- Inspect the server's capabilities

## 3. Using Node.js Script

Create a simple test script:

```javascript
const { spawn } = require('child_process');

const server = spawn('./your-mcp-server');

// Send initialize request
const initRequest = {
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "test", version: "1.0" }
  }
};

server.stdin.write(JSON.stringify(initRequest) + '\n');

server.stdout.on('data', (data) => {
  console.log('Response:', data.toString());
});

server.stderr.on('data', (data) => {
  console.error('Error:', data.toString());
});
```

## 4. Using Python Script

```python
import subprocess
import json

# Start the server
process = subprocess.Popen(
    ['./your-mcp-server'],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True
)

# Send initialize request
init_request = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "initialize",
    "params": {
        "protocolVersion": "2024-11-05",
        "capabilities": {},
        "clientInfo": {"name": "test", "version": "1.0"}
    }
}

process.stdin.write(json.dumps(init_request) + '\n')
process.stdin.flush()

# Read response
response = process.stdout.readline()
print("Response:", response)
```

## Common Test Sequence

1. **Initialize**: Send `initialize` request
2. **List Tools**: Call `tools/list` to see available tools
3. **List Resources**: Call `resources/list` to see available resources
4. **Test Tool**: Call `tools/call` with a specific too
