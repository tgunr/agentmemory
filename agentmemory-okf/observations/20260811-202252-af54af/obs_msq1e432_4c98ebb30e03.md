---
type: FileRead
title: mcp__mcp_router__start_process output
description: User sent invalid parameters, process started instead.
resource: agentmemory://observation/obs_msq1e432_4c98ebb30e03
tags: ["mcp_router", "fileread"]
timestamp: 2026-08-12T11:59:34.185642+00:00
source: agentmemory
session_id: 20260811_202252_af54af
importance: 7
confidence: 0.9
---
# Summary

The user attempted to run a custom command, but only the predefined parameters are supported. The tool started the process with PID 23732 and provided an output that includes information about the mcp_servers configuration.

## Facts
- PID: 23732 (shell: /bin/zsh)
- <![CDATA[agentmemory      /Volumes/AI/agentmemory-k...   all          ✓ enabled\n752:mcp_servers:\n753-  agentmemory:\n754-    command: /Volumes/AI/agentmemory-kilo-hooks/agentmemory-wrapper.sh\n755-    enabled: true\n756-    env:\n757-      AGENTMEMORY_URL: http://localhost:3111\n758-  comfyui:\n759-    command: comfyui-mcp\n760-    enabled: true\n761-  mcp-router:\n762-    args:]]>

## Concepts
- mcp_router

_Importance: 7 · Confidence: 0.9_
