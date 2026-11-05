---
type: bug
title: agentmemory MCP connectivity on pve.local: the backend runs on the Mac mini at h
description: agentmemory MCP connectivity on pve.local: the backend runs on the Mac mini at http://10.1.2.7:3111 (viewer :3113). Hermes MCP env mcp_servers.agentmemory.env.AGENTMEMORY_URL had been left at http://l
resource: agentmemory://memory/mem_mw39xw14_47d75dbe6fc2
tags: ["agentmemory", "mcp", "hermes", "pve.local", "mac-mini", "10.1.2.7", "fallback", "localhost"]
timestamp: 2026-11-05T08:19:00.770Z
source: agentmemory
strength: 7
---
# Content

agentmemory MCP connectivity on pve.local: the backend runs on the Mac mini at http://10.1.2.7:3111 (viewer :3113). Hermes MCP env mcp_servers.agentmemory.env.AGENTMEMORY_URL had been left at http://localhost:3111, so the standalone shim could not reach the backend and silently fell back to a 7-of-53-tool InMemoryKV (empty recall, lost writes). Fix: `hermes config set mcp_servers.agentmemory.env.AGENTMEMORY_URL http://10.1.2.7:3111` (direct config.yaml edits are blocked). Do NOT start pve's own agentmemory.service/agentmemory-proxy.service — they are disabled leftovers that fail 203/EXEC and would create an empty local store. Verify with curl http://10.1.2.7:3111/agentmemory/livez (vector.size > 0) and expect 53 tools from tools/list.
