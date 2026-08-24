---
type: file_edit
title: Xcode 27 Agent Integration (Kilo / Claude / Codex / Gemini)
description: Navigating Xcode 27's agent integration for Kilo/Claude/Codex/Gemini.
resource: agentmemory://observation/obs_mryy9j07_cbf896773a35
tags: ["file_edit"]
timestamp: 2026-07-24T13:02:14.639414+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 6
confidence: 0.75
---
# Summary

The process involves registering Kilo as an in-IDE ACP agent via Settings → Intelligence → Agents or as an external MCP client via xcrun mcpbridge. This includes understanding the differences between ACP and MCP, avoiding version mismatches, and correctly setting environment variables like KILO_API_KEY.

## Facts
- Connecting external AI coding agents to Xcode 27 using the ACP &quot;Add Agent&quot; flow or MCP client
- Kilo is NOT a built-in provider and must be registered manually (ACP) or wired via MCP

## Files
- `/opt/homebrew/bin/kilo`

_Importance: 6 · Confidence: 0.75_
