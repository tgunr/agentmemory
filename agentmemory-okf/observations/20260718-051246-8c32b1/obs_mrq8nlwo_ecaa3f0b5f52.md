---
type: CommandRun
title: SQLite session database analysis for pruning candidates
description: Identified zero-msg, one-msg, and untitled multi-msg sessions across profiles
resource: agentmemory://observation/obs_mrq8nlwo_ecaa3f0b5f52
tags: ["SQLite database querying", "session management", "data pruning", "commandrun"]
timestamp: 2026-07-18T10:43:12.161760+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Executed SQLite queries across ranch and shop profile databases and global state.db to categorize sessions by message count and identify candidates for pruning. Zero and one-message sessions are likely orphaned/empty sessions that can be safely removed, while multi-message untitled sessions contain valuable content but need titles for better organization.

## Facts
- Ranch profile: 1 session with 4 msgs titled "Preventing Livestock Access to Swales"
- Shop profile: 1 session with 2 msgs titled "Repairing Stripped 5mm Thread With Heli-Coil"
- Global state.db has 188 total sessions
- 17 zero-msg sessions identified as safe cruft candidates for deletion
- 14 one-msg sessions identified as likely cruft
- 26 multi-msg untitled sessions should be kept but titled

## Concepts
- SQLite database querying
- session management
- data pruning

## Files
- `~/.hermes/profiles/ranch/state.db`
- `~/.hermes/profiles/shop/state.db`
- `~/.hermes/state.db`

_Importance: 5 · Confidence: 1_
