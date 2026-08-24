---
type: file_edit
title: Patched SKILL.md to add runtime-diagnostics.sh documentation
description: Added health probe script details to agentmemory-hermes-integration skill
resource: agentmemory://observation/obs_mrtcoz86_c269ddd64e51
tags: ["Skill documentation", "Runtime diagnostics", "Health probing", "AgentMemory plugin", "file_edit"]
timestamp: 2026-07-20T14:59:33.075943+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 4
confidence: 1
---
# Summary

The agent updated the agentmemory-hermes-integration skill documentation to include instructions for a new runtime diagnostics script. This script provides comprehensive health probing for the AgentMemory instance, including liveness and /health endpoint parsing.

## Facts
- Tool skill_manage patched SKILL.md in the agentmemory-hermes-integration skill.
- Appended documentation for scripts/runtime-diagnostics.sh, a live-instance health probe.
- The diagnostics script checks liveness, session count, semantic search, and /health metrics (consolidation/heap/index-timeout).
- Retained existing documentation for scripts/verify-observer-secret.py.

## Concepts
- Skill documentation
- Runtime diagnostics
- Health probing
- AgentMemory plugin

## Files
- `SKILL.md`
- `scripts/runtime-diagnostics.sh`
- `scripts/verify-observer-secret.py`

_Importance: 4 · Confidence: 1_
