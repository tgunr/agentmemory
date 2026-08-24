---
type: Fact
title: # Specifying an Available Ollama Model

source: hermes
session_id: 2af8a928-ef29
description: # Specifying an Available Ollama Model

source: hermes
session_id: 2af8a928-ef29-469b-927d-0a5a5963d25b
resource: hermes://session/2af8a928-ef29-469b-927d-0a5a5963d25b

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mspe06ol_aa9e7114246d
tags: ["okf", "okf-hermes", "hermes", "hermes://session/2af8a928-ef29-469b-927d-0a5a5963d25b"]
timestamp: 2026-08-12T01:04:53.160Z
source: agentmemory
strength: 7
---
# Content

# Specifying an Available Ollama Model

source: hermes
session_id: 2af8a928-ef29-469b-927d-0a5a5963d25b
resource: hermes://session/2af8a928-ef29-469b-927d-0a5a5963d25b

# Conversation

- **Session ID:** `2af8a928-ef29-469b-927d-0a5a5963d25b`
- **Source:** acp
- **Model:** llama3.2:3b
- **Started:** 2026-06-14T16:16:54Z
- **Messages:** 10
- **Tokens:** 54102 in / 254 out

---

### 👤 User — 2026-06-15T10:26:21Z

[Workspace: /Users/davec]

[File: davec/.config/ollama/config.yaml]

/model

### 🤖 Assistant — 2026-06-15T10:26:21Z

**Tool call: tool_describe**

```json
{
  "name": "browser_click"
}
```

### 🤖 Assistant — 2026-06-15T10:26:21Z

It seems like you're trying to use a tool that isn't available at this moment. The provided `Ollama` configuration is missing information about which specific model you want to utilize.

Could you please specify a valid Ollama model name (e.g., "qwen3:1.7b") by replacing `{model_name}` with your preferred choice in the following code snippet:


```python
hermes config set tools.browser_click {model_name}
```



Please replace `{model_name}` with your desired model name.

You can find available Ollama models by accessing tool_search, a more precise approach than browser navigation:

```
tool_search: qwen3:1.7b
```

### 👤 User — 2026-06-15T10:26:21Z

[Workspace: /Users/davec]

/new

### 🤖 Assistant — 2026-06-15T10:26:21Z

**Tool call: tool_search**

```json
{
  "limit": "5",
  "query": "\\n\\n\n\\n"
}
```

### 🤖 Assistant — 2026-06-15T10:26:21Z

Here's a new session:

 {"name": "mcp_mcp_router_get_more_search_results", "parameters": {"query": ""}}

### 👤 User — 2026-06-15T10:26:21Z

[Workspace: /Users/davec]

Look in /Users/davec/AI/Servers/MCP and create a README.md that describes what each project folder about and how it is used.

### 🤖 Assistant — 2026-06-15T10:26:21Z

{"name": "write_file", "parameters": {"content": "README.md", "path": "/Users/davec/AI/Servers/MCP/".}}
