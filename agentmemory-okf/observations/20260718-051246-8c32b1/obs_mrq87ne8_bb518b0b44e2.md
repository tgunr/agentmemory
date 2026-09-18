---
type: FileRead
title: Read Hermes Desktop Sidebar Debugging Reference
description: Architecture and introspection recipes for backend project tree RPCs
resource: agentmemory://observation/obs_mrq87ne8_bb518b0b44e2
tags: ["JSON-RPC over WebSocket", "Electron thin renderer architecture", "Backend authoritative data pattern", "Ephemeral port discovery", "RPC introspection", "fileread"]
timestamp: 2026-07-18T10:30:47.597723+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 6
confidence: 1
---
# Summary

The agent read a reference document detailing the architecture and debugging procedures for the Hermes Desktop sidebar. The document explains that the backend authoritatively builds the project tree and exposes it via JSON-RPC over WebSocket to the Electron frontend, providing Python scripts for live introspection and backend reproduction.

## Facts
- Sidebar tree is built authoritatively in backend tui_gateway/project_tree.py
- Electron app is a thin renderer; UI issues are usually backend data problems
- Gateway spawned as child process: hermes_cli.main serve --host 127.0.0.1 --port 0
- RPC transport is newline-delimited JSON-RPC over WebSocket, not HTTP POST
- Key RPC methods: projects.tree (overview) and projects.project_sessions (drill-in)
- Session token passed to child via HERMES_DASHBOARD_SESSION_TOKEN env var

## Concepts
- JSON-RPC over WebSocket
- Electron thin renderer architecture
- Backend authoritative data pattern
- Ephemeral port discovery
- RPC introspection

## Files
- `~/.hermes/skills/productivity/projects/references/sidebar-debugging.md`
- `tui_gateway/project_tree.py`

_Importance: 6 · Confidence: 1_
