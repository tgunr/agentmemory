---
type: Error
title: Memory addition failed: exceeded 2,200 char limit
description: 
resource: agentmemory://observation/obs_mrq8tzzy_1d05ff7a2338
tags: ["AgentMemory integration", "memory storage limit", "port configuration", "error"]
timestamp: 2026-07-18T10:48:10.363182+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Failed attempt to store AgentMemory configuration details due to character limit exceeded. The memory system has 326 chars remaining capacity. User needs to remove or shorten existing entries before adding this integration information about the separate AgentMemory instance on port 3111.

## Facts
- Operation would result in 2,268/2,200 chars - 68 chars over limit
- Content: AgentMemory service on :3111, verify via http://127.0.0.1:3111/agentmemory/livez
- Current usage: 1,874/2,200 chars
- AgentMemory is separate running instance user manages - do NOT strip wiring
- Only 'jo' profile had AgentMemory removed to avoid confusing main store

## Concepts
- AgentMemory integration
- memory storage limit
- port configuration

## Files
- `~/.agentmemory/.env`

_Importance: 5 · Confidence: 1_
