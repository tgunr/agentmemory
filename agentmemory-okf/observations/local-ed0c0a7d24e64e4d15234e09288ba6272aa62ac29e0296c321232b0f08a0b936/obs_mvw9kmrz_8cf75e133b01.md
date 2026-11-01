---
type: CommandRun
title: skill_view hermes-session-recovery
description: Diagnose and recover missing Hermes sessions across Desktop, CLI, gateway, and multi-profile setups.
resource: agentmemory://observation/obs_mvw9kmrz_8cf75e133b01
tags: ["Python/CLI query to compare session counts across stores", "Identifying the profile that owns the missing sessions", "Resuming through the CLI directly", "commandrun"]
timestamp: 2026-10-31T10:34:19.340319+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 9
confidence: 0.9
---
# Summary

The skill, hermes-session-recovery, is used to diagnose and recover missing Hermes sessions across different Desktop, CLI, gateway, and multi-profile setups. The tool provides a recovery path and diagnostic script to aid in the process.

## Facts
- Certain user sessions appear to be missing after desktop restart or gateway failure
- Session history may be located in a profile-specific store, not the root state database

## Concepts
- Python/CLI query to compare session counts across stores
- Identifying the profile that owns the missing sessions
- Resuming through the CLI directly

_Importance: 9 · Confidence: 0.9_
