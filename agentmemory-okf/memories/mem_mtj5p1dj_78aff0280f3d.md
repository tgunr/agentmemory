---
type: Fact
title: # Ollama models with MCP servers

source: chatgpt
session_id: 689a31c8-d17c-832e
description: # Ollama models with MCP servers

source: chatgpt
session_id: 689a31c8-d17c-832e-aba6-9bd313fe2010
resource: chatgpt://conversation/689a31c8-d17c-832e-aba6-9bd313fe2010

# Conversation

- **Session ID
resource: agentmemory://memory/mem_mtj5p1dj_78aff0280f3d
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/689a31c8-d17c-832e-aba6-9bd313fe2010"]
timestamp: 2026-09-01T21:05:21.345Z
source: agentmemory
strength: 7
---
# Content

# Ollama models with MCP servers

source: chatgpt
session_id: 689a31c8-d17c-832e-aba6-9bd313fe2010
resource: chatgpt://conversation/689a31c8-d17c-832e-aba6-9bd313fe2010

# Conversation

- **Session ID:** `689a31c8-d17c-832e-aba6-9bd313fe2010`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-11T18:09:41.389829+00:00
- **Messages:** 2

---

### 👤 User

Show me ways to use ollama models with mcp servers in vscode.

---

### 🤖 Assistant

Got it—here are the cleanest ways to use **Ollama** models with **MCP servers** inside **VS Code**, from “works great today” to more DIY.

# 1) Continue.dev (VS Code extension) — best/easiest
**Why:** Continue has first-class **Ollama** support *and* can talk to **MCP servers** in its Agent mode. So your prompts run on your local Ollama model while MCP provides tools (DBs, browsers, filesystems, etc.). citeturn0search11turn0search15

**Steps**
1) Install the **Continue** VS Code extension.  
2) Create `.continue/config.json` (or `config.yaml`) in your repo or user folder.

**Minimal JSON config**
```json
{
  "models": [
    { "title": "Ollama (Qwen2.5 14B)", "provider": "ollama", "model": "qwen2.5-coder:14b" }
  ],
  "defaultModel": "Ollama (Qwen2.5 14B)",
  "hub": {
    "assistants": [
      {
        "name": "Dev Agent",
        "model": "Ollama (Qwen2.5 14B)",
        "agentMode": true,
        "mcpServers": {
          "filesystem": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-filesystem"] },
          "postgres":   { "command": "npx", "args": ["-y", "postgres-mcp-pro"], "env": { "DATABASE_URI": "postgres://..." } }
        }
      }
    ]
  }
}
```

**Same in YAML**
```yaml
models:
  - title: Ollama (Qwen2.5 14B)
    provider: ollama
    model: qwen2.5-coder:14b
defaultModel: Ollama (Qwen2.5 14B)
hub:
  assistants:
    - name: Dev Agent
      model: Ollama (Qwen2.5 14B)
      agentMode: true
      mcpServers:
        filesystem:
          command: npx
          args: ["-y", "@modelcontextprotocol/server-filesystem"]
        postgres:
          command: npx
          args: ["-y", "postgres-mcp-pro"]
          env:
            DATABASE_URI: postgres://...
```

Open Continue’s chat (“Dev Agent”), ask it to “use the filesystem tool to list my workspace,” etc. It will route tool calls through MCP and keep all reasoning on your **local Ollama**. citeturn0search11

# 2) VS Code’s native “Agent mode” + MCP (note: not Ollama)
VS Code’s built-in Copilot Agent supports **MCP servers** via `.vscode/mcp.json`, but the model is Copilot’s—**you can’t swap in Ollama there (yet)**. Useful if you just want MCP tools in VS Code’s native agent, but it won’t run on your local Ollama. Docs + server directory here: citeturn0search0turn0search5

**Example `.vscode/mcp.json`**
```json
{
  "mcpServers": {
    "filesystem": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-filesystem"] },
    "playwright": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-playwright"] }
  }
}
```

# 3) DIY bridge: run an MCP client that uses Ollama
If you want a lightweight “agent” that connects **Ollama ↔ MCP** and you drive it from a VS Code terminal/task, try a small client project (Python/Node) that calls Ollama and speaks MCP to your servers. Examples and starter repos:  
- **Python client for Ollama ↔ MCP** (plug in your servers, choose an Ollama model). citeturn0search4  
- Blog walk-throughs for wiring **Ollama + MCP** from scratch (good for custom setups). citeturn0search1turn0search8  
- A catalog of third-party MCP servers (browser automation, Postgres, Firecrawl, etc.) you can point the client at. citeturn0search5

---

## Quick tips
- Many MCP servers are Node or Python CLIs you launch via `command`/`args`. Keep them in your project `devDependencies` (Node) or a virtualenv (Python). citeturn0search5  
- If you want web scraping or browser control, check **Playwright MCP**; for SQL, try **Postgres MCP Pro**; for scraping, **Firecrawl MCP**. citeturn0search5  
- Some community servers explicitly wrap **Ollama** for MCP use if you prefer “one package” installs. citeturn0search7turn0search14

---

If you tell
