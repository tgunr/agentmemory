---
type: Fact
title: # Installing the MCP Inspector

source: claude
session_id: 2a76598c-ef40-4805-88
description: # Installing the MCP Inspector

source: claude
session_id: 2a76598c-ef40-4805-8894-aaf816845934
resource: claude://conversation/2a76598c-ef40-4805-8894-aaf816845934

# Conversation

- **Session ID:** 
resource: agentmemory://memory/mem_mti5zymq_94a47af2eef1
tags: ["okf", "okf-claude", "claude", "claude://conversation/2a76598c-ef40-4805-8894-aaf816845934"]
timestamp: 2026-09-01T04:26:04.861Z
source: agentmemory
strength: 7
---
# Content

# Installing the MCP Inspector

source: claude
session_id: 2a76598c-ef40-4805-8894-aaf816845934
resource: claude://conversation/2a76598c-ef40-4805-8894-aaf816845934

# Conversation

- **Session ID:** `2a76598c-ef40-4805-8894-aaf816845934`
- **Source:** claude
- **Started:** 2025-05-27T17:51:47Z
- **Messages:** 6

---

### 👤 User — 2025-05-27T17:51:48Z

How do I install the MCP Inspector?

---

### 🤖 Assistant — 2025-05-27T17:52:20Z

The user is asking about how to install the MCP Inspector. MCP typically stands for "Model Context Protocol" which is related to Anthropic's technology for connecting LLMs to external tools and data sources. The MCP Inspector would likely be a debugging or development tool for working with MCP servers and connections.

Let me search for current information about MCP Inspector installation since this is a specific technical tool that may have been released or updated after my knowledge cutoff.I'll help you understand how to install the MCP Inspector. Let me search for the most current installation instructions since this is a specific development tool that may have recent updates.
```
This block is not supported on your current device yet.
```

Based on the search results, I can see that the MCP Inspector is a developer tool for testing and debugging MCP (Model Context Protocol) servers. The key thing is that it doesn't require a traditional installation - it runs directly through npx, which is Node.js's package runner.

Let me provide a comprehensive answer that explains:
1. What the MCP Inspector is
2. Prerequisites needed
3. How to install/run it (which is actually just using npx)
4. Basic usage examples
5. Different ways to use it

I should explain this in a teaching manner as requested in the user style, breaking it down step by step.The MCP Inspector is a visual testing tool for Model Context Protocol (MCP) servers that helps developers debug and interact with their MCP implementations. The great news is that you don't need to install it in the traditional sense - it runs directly through Node.js's `npx` command, which means it downloads and runs on-demand.

Let me walk you through everything you need to know about getting started with the MCP Inspector.

## Prerequisites

Before you can use the MCP Inspector, you'll need Node.js installed on your system. The MCP Inspector requires Node.js version 20 or higher. You can download Node.js from [nodejs.org](https://nodejs.org) if you don't already have it installed.

To check if you have Node.js installed and what version you're running, open your terminal or command prompt and run:
```bash
node --version
npm --version
```

## Running the MCP Inspector

The MCP Inspector runs directly through `npx` without requiring a separate installation step. Here's how to use it:

### Basic Usage
The most common way to run the Inspector is:
```bash
npx @modelcontextprotocol/inspector node path/to/your/server.js
```

This command tells the Inspector to connect to your MCP server that's implemented in JavaScript/Node.js.

### Inspecting Published Packages
If you want to inspect an MCP server that's published to NPM, you can run:
```bash
npx -y @modelcontextprotocol/inspector npx <package-name> <args>
```

For example, if you wanted to inspect a PostgreSQL MCP server:
```bash
npx -y @modelcontextprotocol/inspector npx server-postgres postgres://127.0.0.1/testdb
```

### Python-based Servers
For Python-based MCP servers, you can use:
```bash
npx @modelcontextprotocol/inspector uvx mcp-server-git --repository ~/code/my-repo.git
```

## Understanding What the Inspector Does

Think of the MCP Inspector as a testing interface that sits between you and your MCP server. When you run it, it creates a web-based interface where you can:

- See all the tools (functions) your server exposes
- Test those tools by calling them with different parameters
- View resources that your server provides
- Examine prompts that are available
- Debug any issues with your server's responses

The Inspector essentially acts as a client that connects to your MCP server and provides a user-friendly way to interact with all its capabilities.

## Advanced Us
