---
type: Fact
title: # Checking MCP Router Server Access

source: hermes
session_id: 20260611_144636_
description: # Checking MCP Router Server Access

source: hermes
session_id: 20260611_144636_0eb8ca
resource: hermes://session/20260611_144636_0eb8ca

# Conversation

- **Session ID:** `20260611_144636_0eb8ca`
- *
resource: agentmemory://memory/mem_mspdyuzq_6653d4d4c6c9
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:03:51.344Z
source: agentmemory
strength: 7
---
# Content

# Checking MCP Router Server Access

source: hermes
session_id: 20260611_144636_0eb8ca
resource: hermes://session/20260611_144636_0eb8ca

# Conversation

- **Session ID:** `20260611_144636_0eb8ca`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-06-11T19:46:36Z
- **Ended:** 2026-06-11T19:54:17Z
- **Messages:** 35
- **CWD:** `/Users/davec`
- **Tokens:** 2206247 in / 6693 out

---

### 👤 User — 2026-06-11T19:46:38Z

check if you have access to MCP servers via mcp-router

### 🤖 Assistant — 2026-06-11T19:47:33Z

**Tool call: skill_view**

```json
{
  "name": "native-mcp"
}
```

### 🤖 Assistant — 2026-06-11T19:47:33Z

**Tool call: skill_view**

```json
{
  "name": "mcp/native-mcp"
}
```

### 🤖 Assistant — 2026-06-11T19:47:33Z

<details><summary>Reasoning</summary>


I’ll check the live tool list/config for anything exposed through `mcp-router`, then verify whether any MCP tools are actually registered in this session.


</details>

**Tool call: terminal**

```json
{
  "command": "command -v mcp-router || true\ncommand -v mcp-router-cli || true\ncommand -v mcp || true\npython3 - <<'PY'\nimport importlib.util\nprint('mcp_sdk', bool(importlib.util.find_spec('mcp')))\nPY",
  "workdir": "/Users/davec",
  "timeout": 30
}
```

**Tool call: search_files**

```json
{
  "pattern": "mcp-router|mcp_servers|mcp_servers|native-mcp",
  "path": "/Users/davec/.hermes",
  "target": "content",
  "limit": 50,
  "output_mode": "content"
}
```

### 🤖 Assistant — 2026-06-11T19:47:33Z

<details><summary>Reasoning</summary>


I found an `mcp-router` entry in config and the Python MCP SDK, but no `mcp-router` executable on PATH. I’m going to read the config around that entry and check whether the router is actually listening.


</details>

**Tool call: read_file**

```json
{
  "limit": 40,
  "offset": 660,
  "path": "/Users/davec/.hermes/config.yaml"
}
```

**Tool call: terminal**

```json
{
  "command": "python3 - <<'PY'\nimport socket\nfor host in ('127.0.0.1','localhost','::1'):\n    s=socket.socket(socket.AF_INET6 if ':' in host else socket.AF_INET, socket.SOCK_STREAM)\n    s.settimeout(1)\n    try:\n        s.connect((host, 8080))\n        print(f'{host}:8080 open')\n    except OSError as e:\n        print(f'{host}:8080 closed: {e}')\n    finally:\n        s.close()\nPY\nps -axo pid,ppid,command | grep -i 'mcp.*router\\|router.*mcp' | grep -v grep || true",
  "timeout": 30,
  "workdir": "/Users/davec"
}
```

### 🤖 Assistant — 2026-06-11T19:47:33Z

<details><summary>Reasoning</summary>


The router is running and port 8080 is open. I’ll try to connect directly with the MCP Python client to list tools, then I’ll also check whether this Hermes session has discovered MCP tools.


</details>

**Tool call: terminal**

```json
{
  "command": "python3 - <<'PY'\nimport asyncio, json\nfrom mcp.client.streamable_http import streamablehttp_client\nfrom mcp import ClientSession\n\nasync def main():\n    async with streamablehttp_client('http://localhost:8080/mcp') as (read, write, _get_session_id):\n        async with ClientSession(read, write) as session:\n            await session.initialize()\n            tools = await session.list_tools()\n            print(json.dumps(tools.model_dump(), indent=2, default=str))\nasyncio.run(main())\nPY",
  "timeout": 60,
  "workdir": "/Users/davec"
}
```

### 🤖 Assistant — 2026-06-11T19:47:33Z

<details><summary>Reasoning</summary>


Direct MCP access works. I’ll call the router’s `list_mcps` tool to see which downstream MCP servers it can reach.


</details>

**Tool call: terminal**

```json
{
  "command": "python3 - <<'PY'\nimport asyncio, json\nfrom mcp.client.streamable_http import streamablehttp_client\nfrom mcp import ClientSession\n\nasync def main():\n    async with streamablehttp_client('http://localhost:8080/mcp') as (read, write, _sid):\n        async with ClientSession(read, write) as session:\n            await session.initialize()\n            res = await session.call_tool('list_mcps', {})\n            print(json.dumps(res.model_dump(), indent=2, default=str))\nasyncio.run(main())\nPY",
  "timeout": 60,
  "workdir": "/Users/davec"
}
