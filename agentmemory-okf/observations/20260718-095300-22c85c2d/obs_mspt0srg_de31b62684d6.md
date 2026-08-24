---
type: file_edit
title: AgentMemory: REST server update failed
description: No changes saved due to server update error
resource: agentmemory://observation/obs_mspt0srg_de31b62684d6
tags: ["file_edit"]
timestamp: 2026-08-12T08:05:16.052001+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 5
confidence: 0.75
---
# Summary

The AgentMemory REST server was updated with a new configuration, but an error prevented it from starting properly. A workaround is to rebuild the better-sqlite3 library and restart the server.

## Facts
- The tool updated the configuration file and attempted a server restart.
- The update encountered a Node-module ABI mismatch, which prevented the better-sqlite3 library from loading.

## Files
- `/Volumes/AI/agentmemory/iii-config.yaml`

_Importance: 5 · Confidence: 0.75_
