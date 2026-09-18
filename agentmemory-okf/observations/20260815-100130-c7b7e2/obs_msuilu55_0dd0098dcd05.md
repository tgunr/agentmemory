---
type: file_edit
title: ACTION log inspection after recent MCP reinitialization check
description: The mcp servers showed 0 servers though the CLI shows 5.
resource: agentmemory://observation/obs_msuilu55_0dd0098dcd05
tags: ["a11y", "desktop-commander/desktop-commander", "Feature flags initialized (refresh every 1800s)", "mcp_tool", "reread of commands after reinitialization", "file_edit"]
timestamp: 2026-08-15T15:12:32.707694+00:00
source: agentmemory
session_id: 20260815_100130_c7b7e2
importance: 9
confidence: 0.9
---
# Summary

During a recent log inspection after reinitializing MCP, it was found that desktop-commander/desktop-commander's default command being executed after the late refresh is the 6th command. This discovery was made using grep -iE &quot;session.info|20260815_100130&quot;

## Facts
- The logs show the 6th command being executed by default, after the late refresh, for desktop-commander/desktop-commander feature flag initialized at 10:00:47
- The first appearance of session.info was pre-discovery on 2026-08-15 10:02:08 (log entry #1 in agent.log)

## Concepts
- a11y
- desktop-commander/desktop-commander
- Feature flags initialized (refresh every 1800s)
- mcp_tool
- reread of commands after reinitialization

## Files
- `/Users/davec/.hermes/logs/agent.log`

_Importance: 9 · Confidence: 0.9_
