---
type: Fact
title: # OpenAPI Server Integration with MCP

source: claude
session_id: 3379592f-fb1d-
description: # OpenAPI Server Integration with MCP

source: claude
session_id: 3379592f-fb1d-487f-91b4-88e7ef157d75
resource: claude://conversation/3379592f-fb1d-487f-91b4-88e7ef157d75

# Conversation

- **Session
resource: agentmemory://memory/mem_mtj6c0zm_e5ecf9ce3d4f
tags: ["okf", "okf-claude", "claude", "claude://conversation/3379592f-fb1d-487f-91b4-88e7ef157d75"]
timestamp: 2026-09-01T21:23:13.933Z
source: agentmemory
strength: 7
---
# Content

# OpenAPI Server Integration with MCP

source: claude
session_id: 3379592f-fb1d-487f-91b4-88e7ef157d75
resource: claude://conversation/3379592f-fb1d-487f-91b4-88e7ef157d75

# Conversation

- **Session ID:** `3379592f-fb1d-487f-91b4-88e7ef157d75`
- **Source:** claude
- **Started:** 2025-06-17T20:35:27Z
- **Messages:** 2

---

### 👤 User — 2025-06-17T20:35:27Z

How do integrate openapi servers with mcp, I have openapi servers running on my mac, how do i get Warp, zed, others to use those servers

---

### 🤖 Assistant — 2025-06-17T20:36:09Z

The user is asking about integrating OpenAPI servers with MCP (Model Context Protocol). They have OpenAPI servers running on their Mac and want to know how to connect them to tools like Warp, Zed, and other applications.

Let me break this down:
1. MCP is Anthropic's Model Context Protocol for connecting AI assistants to external data sources and tools
2. They have OpenAPI servers running locally
3. They want to integrate these with MCP-compatible tools like Warp terminal and Zed editor

I should explain:
- What MCP is and how it works
- How to create MCP servers that can wrap OpenAPI endpoints
- How to configure MCP clients (like Warp, Zed) to use these servers
- Practical steps for implementation

Let me provide a comprehensive answer covering the integration process.To integrate your OpenAPI servers with MCP (Model Context Protocol) for use in Warp, Zed, and other MCP-compatible tools, you'll need to create MCP servers that wrap your OpenAPI endpoints. Here's how to do it:

## Understanding the Architecture

MCP acts as a bridge between AI tools (like Claude in Warp/Zed) and your data sources. You'll need:
1. **MCP Server** - Wraps your OpenAPI endpoints
2. **MCP Client** - Built into tools like Warp, Zed, Claude Desktop

## Step 1: Create an MCP Server for Your OpenAPI Endpoints

### Option A: Use the OpenAPI MCP Server Template

```typescript
// package.json
{
  "name": "my-openapi-mcp-server",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "@modelcontextprotocol/sdk": "latest",
    "axios": "^1.6.0",
    "swagger-parser": "^10.0.0"
  }
}
```

```typescript
// src/index.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import axios from 'axios';
import SwaggerParser from 'swagger-parser';

class OpenAPIMCPServer {
  private server: Server;
  private apiSpec: any;
  private baseUrl: string;

  constructor(baseUrl: string, openApiSpecUrl: string) {
    this.baseUrl = baseUrl;
    this.server = new Server(
      {
        name: "openapi-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
    this.loadApiSpec(openApiSpecUrl);
  }

  private async loadApiSpec(specUrl: string) {
    try {
      this.apiSpec = await SwaggerParser.validate(specUrl);
      this.registerToolsFromSpec();
    } catch (error) {
      console.error('Failed to load OpenAPI spec:', error);
    }
  }

  private registerToolsFromSpec() {
    if (!this.apiSpec?.paths) return;

    Object.entries(this.apiSpec.paths).forEach(([path, methods]: [string, any]) => {
      Object.entries(methods).forEach(([method, operation]: [string, any]) => {
        if (typeof operation === 'object' && operation.operationId) {
          this.server.setRequestHandler(
            { method: "tools/call", params: { name: operation.operationId } },
            async (request) => this.handleToolCall(request, path, method, operation)
          );
        }
      });
    });
  }

  private async handleToolCall(request: any, path: string, method: string, operation: any) {
    try {
      const { arguments: args } = request.params;
      
      // Build the URL with path parameters
      let url = this.baseUrl + path;
      if (args.pathParams) {
        Object.entries(args.pathParams).forEach(([key, value]) => {
          url = url.replace(`{${key}}`, encodeURIComponent(String(value)));
        });
      }

      // Make the API call
      const response = await axios({
        method: method.toUpperCase
