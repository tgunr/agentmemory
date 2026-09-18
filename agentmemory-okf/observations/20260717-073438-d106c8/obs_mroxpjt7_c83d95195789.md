---
type: CommandRun
title: Inspect kilo.jsonc for agentmemory hook configuration
description: Lists agentmemory tools and wrapper script path in Kilo config
resource: agentmemory://observation/obs_mroxpjt7_c83d95195789
tags: ["Kilo config", "agentmemory hooks", "wrapper script", "tool configuration", "commandrun"]
timestamp: 2026-07-17T12:49:00.805178+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

The command inspects the Kilo configuration file to identify agentmemory hook definitions. It reveals a comprehensive set of memory-related tools routed through a wrapper script located on the /Volumes/AI drive.

## Facts
- Kilo config located at ~/.config/kilo/kilo.jsonc
- Wrapper script path: /Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh
- Over 30 agentmemory_memory_* hooks/tools defined (e.g., save, recall, slot_*, signal_*, graph_query, crystallize, consolidate)
- Working directory context is /Volumes/AI

## Concepts
- Kilo config
- agentmemory hooks
- wrapper script
- tool configuration

## Files
- `~/.config/kilo/kilo.jsonc`
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`

_Importance: 5 · Confidence: 1_
