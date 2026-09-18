---
type: file_edit
title: MCP Server Git Installation Issue
description: No mcp.server-git package found.
resource: agentmemory://observation/obs_msrfkcrh_790ec95114af
tags: ["mcp.server-git", "python package import error", "file_edit"]
timestamp: 2026-08-13T11:24:06.050883+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 8
confidence: 1
---
# Summary

The command to install mcp-server-git was executed, but the package could not be found due to an ImportError. The installation process failed, and instead of exiting with a non-zero status, it exited successfully.

## Facts
- Command executed: "cd /Users/davec\necho \"=== fresh uvx env with pinned mcp + git server ===\"\ntimeout 120 uvx --refresh --with 'mcp==1.4.1' --with 'mcp-server-git' python -c \"import mcp_server_git, mcp; print('mcp', mcp.__version__); print('git ok')\" 2>&1 | tail -8\necho \"DONE\"",
- Exit code: 0
- No error occurred

## Concepts
- mcp.server-git
- python package import error

_Importance: 8 · Confidence: 1_
