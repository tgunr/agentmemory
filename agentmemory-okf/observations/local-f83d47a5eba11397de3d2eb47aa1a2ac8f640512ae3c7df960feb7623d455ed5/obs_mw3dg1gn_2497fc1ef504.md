---
type: CommandRun
title: Failed to restart Hermes gateway: cannot restart from inside gateway
description: No restart available due to lifecycle guard
resource: agentmemory://observation/obs_mw3dg1gn_2497fc1ef504
tags: ["Reimplement launchd's conditional KeepAlive feature", "commandrun"]
timestamp: 2026-11-05T09:57:06.788137+00:00
source: agentmemory
session_id: local-f83d47a5eba11397de3d2eb47aa1a2ac8f640512ae3c7df960feb7623d455ed5
importance: 8
confidence: 0.9
---
# Summary

The tool failed to restart the Hermes gateway, as the gateway process refuses commands to restart from inside itself due to the lifecycle guard.

## Facts
- Gateway process refuses command to restart
- Gateway holding stale server list in memory

## Concepts
- Reimplement launchd's conditional KeepAlive feature

## Files
- `/tmp/ai.hermes.gateway.plist.bak`

_Importance: 8 · Confidence: 0.9_
