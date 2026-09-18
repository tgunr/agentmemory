---
type: Error
title: Skill patch rejected: read-before-write policy violation
description: agentmemory-hermes-integration update requires prior skill_view call
resource: agentmemory://observation/obs_mrtcnv0v_60a4a3fe294e
tags: ["skill_manage tool", "read-before-write enforcement", "AgentMemory troubleshooting", "skill_view dependency", "error"]
timestamp: 2026-07-20T14:58:40.972838+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 4
confidence: 1
---
# Summary

The agent attempted to patch the `agentmemory-hermes-integration` skill with new troubleshooting documentation, but the operation was blocked. The system enforces a read-before-write policy, requiring the current skill content to be loaded via `skill_view` before any modifications can be applied.

## Facts
- Tool `skill_manage` action `patch` failed on skill `agentmemory-hermes-integration`
- Attempted to append troubleshooting rows for AgentMemory wiring, liveness, consolidation, and curl probes
- System enforces read-before-write: current SKILL.md must be loaded via `skill_view` before patching
- Error message explicitly requires calling `skill_view(name)` or `skill_view(name, file_path=...)` first

## Concepts
- skill_manage tool
- read-before-write enforcement
- AgentMemory troubleshooting
- skill_view dependency

## Files
- `SKILL.md (agentmemory-hermes-integration)`

_Importance: 4 · Confidence: 1_
