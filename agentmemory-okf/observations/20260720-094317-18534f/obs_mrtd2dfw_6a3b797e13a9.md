---
type: Observation
title: memory
description: {"operations":[{"action":"add","content":"AgentMemory restart procedure: `launchctl unload ~/Library/LaunchAgents/com.g…
resource: agentmemory://observation/obs_mrtd2dfw_6a3b797e13a9
tags: ["observation"]
timestamp: 2026-07-20T15:09:58.025563+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"operations":[{"action":"add","content":"AgentMemory restart procedure: `launchctl unload ~/Library/LaunchAgents/com.github.agentmemory.plist` then `load` it. The LaunchAgent (`com.github.agentmemory`) runs iii-engine foreground (PID from `ps aux | grep '/Users/davec/.local/bin/iii'`), which spawns the REST service (`dist/index.mjs`) + viewer. So restarting the LaunchAgent restarts BOTH. Flags a…

_Importance: 5 · Confidence: 0.3_
