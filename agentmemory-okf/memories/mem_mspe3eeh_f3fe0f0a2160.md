---
type: Fact
title: # What is the MCP server config for basic-memory

source: kilo
session_id: fe397
description: # What is the MCP server config for basic-memory

source: kilo
session_id: fe397edb-bec9-44c4-aff2-a12287ef6d33
resource: kilo://task/fe397edb-bec9-44c4-aff2-a12287ef6d33

# Conversation

- **Task ID:
resource: agentmemory://memory/mem_mspe3eeh_f3fe0f0a2160
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:07:23.124Z
source: agentmemory
strength: 7
---
# Content

# What is the MCP server config for basic-memory

source: kilo
session_id: fe397edb-bec9-44c4-aff2-a12287ef6d33
resource: kilo://task/fe397edb-bec9-44c4-aff2-a12287ef6d33

# Conversation

- **Task ID:** `fe397edb-bec9-44c4-aff2-a12287ef6d33`
- **Source:** kilo
- **Started:** 2026-01-08T13:26:03Z
- **Ended:** 2026-01-08T14:36:35Z
- **Message blocks:** 25
- **Tokens:** 740941 in / 4352 out

---

### 👤 User — 2026-01-08T13:26:03Z

What is the MCP server config for basic-memory

### 🤖 Assistant — 2026-01-08T13:26:08Z

<details><summary>Reasoning</summary>

The user is asking about the MCP server config for "basic-memory". I can see from the environment details that there are some relevant files:

1. `Library/Application Support/Code/User/globalStorage/kilocode.kilo-code/settings/mcp_settings.json` - This is the MCP settings file that's visible
2. `.kilocode/mcp.json` - This is also visible

The user wants to know the MCP server config for basic-memory. I should read these configuration files to find the basic-memory configuration.

Let me read the MCP settings file first since it's most likely to contain the server configurations.

</details>

### 🤖 Assistant — 2026-01-08T13:26:10Z

**Tool call: readFile**

```json
{
  "path": "Library/Application Support/Code/User/globalStorage/kilocode.kilo-code/settings/mcp_settings.json",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/Library/Application Support/Code/User/globalStorage/kilocode.kilo-code/settings/mcp_settings.json",
  "reason": ""
}
```

### 🤖 Assistant — 2026-01-08T13:26:20Z

<details><summary>Reasoning</summary>

Looking at the mcp_settings.json file, I can see the configured MCP servers but there's no "basic-memory" server listed. However, I noticed in the visible files there's a directory called "basic-memory-ollama-cli" which suggests this might be a custom MCP server. Let me check the .kilocode/mcp.json file as well to see if there are more configurations there.

</details>

### 🤖 Assistant — 2026-01-08T13:26:24Z

**Tool call: readFile**

```json
{
  "path": ".kilocode/mcp.json",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/.kilocode/mcp.json",
  "reason": ""
}
```

### 🤖 Assistant — 2026-01-08T13:26:35Z

<details><summary>Reasoning</summary>

I can see there are two MCP configuration files:
1. `Library/Application Support/Code/User/globalStorage/kilocode.kilo-code/settings/mcp_settings.json` - The main MCP settings file for VS Code
2. `.kilocode/mcp.json` - Another MCP configuration file

Neither of these contains a "basic-memory" server configuration. However, I notice in the visible files there's a directory called `basic-memory-ollama-cli/` which suggests this is a custom project. Let me check the files in that directory to see if there's a configuration for a basic-memory MCP server there.

</details>

### 🤖 Assistant — 2026-01-08T13:26:38Z

**Tool call: listFilesRecursive**

```json
{
  "path": "basic-memory-ollama-cli",
  "isOutsideWorkspace": false,
  "content": "pyproject.toml\napp/\napp/config.py\napp/ollama_client.py"
}
```

### 🤖 Assistant — 2026-01-08T13:26:44Z

<details><summary>Reasoning</summary>

Let me read the files in the basic-memory-ollama-cli directory to see if there's a configuration for the MCP server there.

</details>

### 🤖 Assistant — 2026-01-08T13:26:45Z

**Tool call: readFile**

```json
{
  "batchFiles": [
    {
      "path": "basic-memory-ollama-cli/pyproject.toml",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "basic-memory-ollama-cli/pyproject.toml",
      "content": "/Users/davec/basic-memory-ollama-cli/pyproject.toml"
    },
    {
      "path": "basic-memory-ollama-cli/app/config.py",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "basic-memory-ollama-cli/app/config.py",
      "content": "/Users/davec/basic-memory-ollama-cli/app/config.py"
    },
    {
      "path": "basic-memory-ollama-cli/app/ollama_client.py",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "basic-memory-ollama-cli/app/ollama_client.py",
      "content": "/Users/davec/basic-memory-ollama-cli/app/ollama_client.py"
    }
  ]
}
```

###
