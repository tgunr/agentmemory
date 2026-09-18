---
type: FileRead
title: MCP server fails loading HuggingFace embedding model fix
description: Error fixing HuggingFace error with Token validation and model download
resource: agentmemory://observation/obs_msrg1awn_09f62521a65e
tags: ["version skew", "fileread"]
timestamp: 2026-08-13T11:37:16.915305+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 7
confidence: 0.9
---
# Summary

The fix for the MCP server fails loading HuggingFace embedding model involves pinning the SDK down, don't reinstall the server. The issue was caused by an expired/invalid token used in the server's local `.env` file.

## Facts
- The `mcp` SDK pulled transitively by `uvx`/`npx` is newer than the server package expects.
- Newer `mcp` removed `Server.list_tools()` and renamed `ToolAnnotations` -> `Annotations`. This is a version skew, NOT a config or volume bug — do not reinstall or relocate the server.

## Concepts
- version skew

_Importance: 7 · Confidence: 0.9_
