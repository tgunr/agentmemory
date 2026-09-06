---
type: Fact
title: # GitHub MCP JSON-RPC Error

source: claude
session_id: 59f85e8d-c95a-45d9-9b57-
description: # GitHub MCP JSON-RPC Error

source: claude
session_id: 59f85e8d-c95a-45d9-9b57-989f8f078e76
resource: claude://conversation/59f85e8d-c95a-45d9-9b57-989f8f078e76

# Conversation

- **Session ID:** `59
resource: agentmemory://memory/mem_mti60by9_74ca437c51ab
tags: ["okf", "okf-claude", "claude", "claude://conversation/59f85e8d-c95a-45d9-9b57-989f8f078e76"]
timestamp: 2026-09-01T04:26:22.096Z
source: agentmemory
strength: 7
---
# Content

# GitHub MCP JSON-RPC Error

source: claude
session_id: 59f85e8d-c95a-45d9-9b57-989f8f078e76
resource: claude://conversation/59f85e8d-c95a-45d9-9b57-989f8f078e76

# Conversation

- **Session ID:** `59f85e8d-c95a-45d9-9b57-989f8f078e76`
- **Source:** claude
- **Started:** 2025-04-05T17:42:12Z
- **Messages:** 26

---

### 👤 User — 2025-04-05T17:42:12Z

my github mcp is reporting ```2025-03-09T12:17:32.271Z [github] [info] Message from server: {"jsonrpc":"2.0","id":9808,"error":{"code":-32601,"message":"Method not found"}}
2025-03-09T12:17:37.265Z [github] [info] Message from client: {"method":"resources/list","params":{},"jsonrpc":"2.0","id":9809}```

---

### 🤖 Assistant — 2025-04-05T17:42:18Z

I see you're encountering an error with your GitHub MCP (presumably a Management Control Plane or similar component). The error message indicates there's a JSON-RPC communication issue between the client and server.

The error shows:
1. A "Method not found" error (code -32601)
2. The client is trying to call a method named "resources/list"

This suggests the client is attempting to use a method that the server doesn't recognize or support. Here are some potential causes and solutions:

1. **Version mismatch**: Your client might be using a newer protocol version than what the server supports.

2. **API changes**: GitHub might have changed their API, and the method "resources/list" is no longer available or has been renamed.

3. **Configuration issue**: Your MCP configuration might be pointing to the wrong endpoint.

To troubleshoot this:

1. Check if there are any updates available for your GitHub MCP client
2. Verify your configuration settings
3. Check GitHub's developer documentation or status page for any API changes or known issues
4. Look at the logs for additional context around when this started happening

Would you like me to help investigate any specific aspect of this issue further?

---

### 👤 User — 2025-04-05T17:42:46Z

* Check if there are any updates available for your GitHub MCP client
*

---

### 🤖 Assistant — 2025-04-05T17:43:54Z

I'll help you check for updates to your GitHub MCP client. Let's run a few commands to gather information about your current setup.

First, let's check for the GitHub CLI version:
```
This block is not supported on your current device yet.
```



Let's read the output to see the current version:
```
This block is not supported on your current device yet.
```



I see you're using a different terminal setup than I initially expected, and the GitHub CLI (`gh`) isn't installed. Let's try to get more information about your GitHub MCP configuration.

Let's look for any GitHub-related processes that might be running:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```



Great! I can see there are two GitHub-related processes running:
1. A Model Context Protocol (MCP) GitHub server process
2. The npm package `@modelcontextprotocol/server-github`

Let's check for updates to this package:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```





Now let's check the currently installed version:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```





I see that the package is not installed globally. Since you're using `npm exec` to run it directly, let's look at the specific version in your local directory:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```





Now I can see that you have version 2025.3.28 installed, which matches the latest version available. However, it appears that there might be an issue with the API or method being used.

Let's investigate the error in more detail. I notice you're running `minicom` with a USB serial device. This suggests you might be connecting to another device through a serial connection. Let's restart your MCP server to see if that resolves the issue:
```
This block is not supported on your current device yet.
```
