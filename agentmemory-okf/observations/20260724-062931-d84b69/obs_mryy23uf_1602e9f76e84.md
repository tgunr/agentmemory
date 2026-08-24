---
type: FileRead
title: xcode-agents tool usage title
description: Data from Xcode 27 Agent Integration (Kilo / Claude / Codex / Gemini)
resource: agentmemory://observation/obs_mryy23uf_1602e9f76e84
tags: ["ACP mode", "fileread"]
timestamp: 2026-07-24T12:56:28.313730+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 5
confidence: 1
---
# Summary

Xcode 27 provides two integration methods for external coding agents: ACP and MCP. The agent runs inside Xcode's chat panel or in your Terminal.

## Facts
- Xcode 27 ships two ways to bring an external coding agent into your workflow: In-IDE ACP agent and External MCP client
- Register Kilo as an in-IDE ACP agent using Settings → Intelligence → Agents → Add an Agent…
- The `kilo acp` server does NOT reuse the interactive CLI's OAuth session stored in `~/.local/share/kilo/auth.json`

## Concepts
- ACP mode

_Importance: 5 · Confidence: 1_
