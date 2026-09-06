---
type: Fact
title: # Testing MCP Server via CLI

source: hermes
session_id: claude__8fdd6614-03a7-4
description: # Testing MCP Server via CLI

source: hermes
session_id: claude__8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b
resource: hermes://session/claude__8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b

# Conversation

- **Sessi
resource: agentmemory://memory/mem_mtj62efo_417386c3b2f2
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:44.745Z
source: agentmemory
strength: 7
---
# Content

# Testing MCP Server via CLI

source: hermes
session_id: claude__8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b
resource: hermes://session/claude__8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b

# Conversation

- **Session ID:** `claude__8fdd6614-03a7-44b3-a4f8-caf6dacc3c2b`
- **Source:** claude
- **Model:** None
- **Started:** 2025-08-01T18:03:17Z
- **Ended:** 2025-08-01T18:03:34Z
- **Messages:** 2
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-08-01T18:03:18Z

How to test stdio mcp server from CLI

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
4. **Test Tool**: Call `tools/call` with a specific tool
5. **Test Resource**: Call `resources/read` for a specific resource

The MCP Inspector is generally the easiest and most comprehensive way to test your stdio MCP server, as it handles the JSON-RPC protocol details and provides a user-friendly interface for testing all server capabilities.
