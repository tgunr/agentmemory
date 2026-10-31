---
type: CommandRun
title: Shared slash command helpers for skills
description: CLI and gateway invoke /skill-name
resource: agentmemory://observation/obs_mvuimf9b_2d651f25cb41
tags: ["Skill update mechanism", "Cache population for skills invocation", "commandrun"]
timestamp: 2026-10-30T05:12:07.098880+00:00
source: agentmemory
session_id: 20261030_001120_f8c5f7
importance: 4
confidence: 0.9
---
# Summary

The skills config cache was being populated to improve skill invocation efficiency by reusing skill commands and signature hashes. 
    However, in this command run, no new skills were added, and the cache wasn't updated, which may impact future invocations.

## Facts
- Skill update mechanism
- Trying to implement skill update.

## Concepts
- Skill update mechanism
- Cache population for skills invocation

## Files
- `~/.hermes/hermes-agent/agent/skill_commands.py`

_Importance: 4 · Confidence: 0.9_
