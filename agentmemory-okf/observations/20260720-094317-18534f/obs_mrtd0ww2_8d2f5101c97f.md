---
type: CommandRun
title: Check agentmemory session status and locate AUTO_COMPRESS setting
description: Post-tool call hook for session cleanup and configuration audit
resource: agentmemory://observation/obs_mrtd0ww2_8d2f5101c97f
tags: ["agentmemory sessions", "session management", "AUTO_COMPRESS configuration", "commandrun"]
timestamp: 2026-07-20T15:08:49.918918+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Audited agentmemory session status revealing 110 completed out of 111 total sessions, indicating successful session cleanup. Located AUTO_COMPRESS configuration at line 202 in .env file for potential modification to disable automatic compression while keeping synthetic compression indexing.

## Facts
- Total sessions: 111 (110 completed, 1 active)
- AGENTMEMORY_AUTO_COMPRESS=true found at line 202 in ~/.agentmemory/.env
- Command was security-approved for curl | python3 pipe to interpreter
- Session cleanup successful - 110 completed sessions out of 111 total

## Concepts
- agentmemory sessions
- session management
- AUTO_COMPRESS configuration

## Files
- `~/.agentmemory/.env`

_Importance: 5 · Confidence: 1_
