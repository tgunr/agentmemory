---
type: file_edit
title: AgentMemory Reorg / Restart Recovery (update)
description: Please update AgentMemory's REST route health to allow searching agent memory.
resource: agentmemory://observation/obs_mspclsea_a0829b843661
tags: ["sql migration", "file_edit"]
timestamp: 2026-08-12T00:25:41.888464+00:00
source: agentmemory
session_id: 20260811_112343_dffd4c
importance: 7
confidence: 0.9
---
# Summary

The user tries to index Hermes + Kilo conversation history into AgentMemory, but they cannot access the /livez and /health endpoints via the viewer (:3113). They must use a non-web-based approach, such as running this query from the command line.

## Facts
- Use the command: `curl -s -o /dev/null \&quot;\n  http://127.0.0.1:3111/agentmemory/health\n&quot; | grep &#39;401&#39;|404&#39;&
- /cmd/kill

## Concepts
- sql migration

_Importance: 7 · Confidence: 0.9_
