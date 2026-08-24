---
type: CommandRun
title: Audit of 19 unfinished Hermes sessions across profiles
description: Identified abandoned conversations spanning multiple profiles and topics
resource: agentmemory://observation/obs_mrs15ejx_ed26357eaf5e
tags: ["session management", "audit script", "Hermes profiles", "unfinished sessions", "commandrun"]
timestamp: 2026-07-19T16:48:37.867452+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

Ran an unfinished session audit script to identify incomplete conversations across multiple Hermes profiles. The output reveals 19 sessions with varying message counts and dates, providing a baseline for session cleanup, resumption, or archival.

## Facts
- Command executed: python3 unfinished_session_audit.py in ~/.hermes/scripts
- Found 19 unfinished sessions across profiles: default, ai, cc, ollama, pveroot
- Sessions date range: 2026-06-22 to 2026-07-17
- Message counts range from 1 to 317 per session
- Topics include image/video generation, Ollama model compatibility, remote gateway auth, and project management

## Concepts
- session management
- audit script
- Hermes profiles
- unfinished sessions

## Files
- `~/.hermes/scripts/unfinished_session_audit.py`

_Importance: 4 · Confidence: 1_
