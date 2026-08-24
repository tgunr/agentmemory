---
type: Search
title: Search for agentmemory_observer files in .hermes directory
description: File glob search returned 50 results across hermes workspace
resource: agentmemory://observation/obs_mrqa49p3_307b7bcebf91
tags: ["file glob search", "hermes workspace", "database state management", "auto-generated skills", "search"]
timestamp: 2026-07-18T11:24:09.108879+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 2
confidence: 1
---
# Summary

Performed file glob search targeting agentmemory_observer files within the hermes configuration directory, uncovering database transaction files across multiple profiles (shop, ranch, pveroot, personal, ollama, develop, cc, ai) and debugging logs, plus skill automation scripts for session hygiene and workspace context management.

## Facts
- Search path: /Users/davec/.hermes with file_glob "agentmemory_observer"
- Total 50 files found, results truncated
- 1 credential/secret file omitted from results
- Key files include: state.db-wal/shm across multiple profiles, agentmemory_observer_debug.log, skill-related Python scripts and markdown docs

## Concepts
- file glob search
- hermes workspace
- database state management
- auto-generated skills

## Files
- `/Users/davec/.hermes/state.db-wal`
- `/Users/davec/.hermes/agentmemory_observer_debug.log`
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/prune_stubs.py`
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/audit.py`
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/SKILL.md`

_Importance: 2 · Confidence: 1_
