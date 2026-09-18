---
type: file_edit
title: Repair kilo-agent memory integration
description: Create Kilo hook wiring after reorg breakage.
resource: agentmemory://observation/obs_mspd2nsy_da25b85b249b
tags: ["file_edit"]
timestamp: 2026-08-12T00:38:49.089407+00:00
source: agentmemory
session_id: 20260811_193703_9f57d0
importance: 8
confidence: 0.75
---
# Summary

The bug was fixed by re-pointing hook scripts to the NEW path `/Volumes/AI/agentmemory-kilo-hooks/` and restoring the `agentmemory` MCP server entry in Kilo's `mcp_settings.json`. The fix also included restarting Kilo / reload VS Code window. Successful session capture depended on using `register`/`observe` calls from hook scripts.

## Facts
- Skill manage tool usage with `action=create` and `category=integrations` for kilo-agentmemory integration.
- Truncated description due to system-prompt budget, detailed explanations in the skill body.

_Importance: 8 · Confidence: 0.75_
