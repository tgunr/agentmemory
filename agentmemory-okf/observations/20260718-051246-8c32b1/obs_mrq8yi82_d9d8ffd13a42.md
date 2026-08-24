---
type: FileRead
title: Session stub pruning technique for Hermes state.db cleanup
description: Database maintenance reference for removing empty/untitled sessions
resource: agentmemory://observation/obs_mrq8yi82_d9d8ffd13a42
tags: ["Database cleanup", "Session pruning", "Hermes state.db", "Dangling foreign references", "fileread"]
timestamp: 2026-07-18T10:51:40.606253+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 6
confidence: 1
---
# Summary

Technical reference documenting safe database pruning procedure for Hermes workspace sessions. Covers the critical workflow of identifying stub sessions (untitled 0-1 message sessions), preventing dangling parent references during cleanup, and verification steps to ensure data integrity. Emphasizes real work preservation even for untitled multi-message sessions.

## Facts
- Stub session definition: sessions with actual message_count <= 1 are candidates for deletion
- Deletion order critical: (1) NULL parent_session_id on non-stub sessions referencing stubs, (2) delete stub messages, (3) delete stub session rows
- Pre-flight backup required: cp state.db state.db.bak.prune.&lt;timestamp&gt;
- Verification queries: count checks on sessions/messages tables plus dangling parent reference check
- Key lesson: cached message_count column cannot be trusted, must count actual rows in messages table

## Concepts
- Database cleanup
- Session pruning
- Hermes state.db
- Dangling foreign references

## Files
- `references/session-pruning.md`

_Importance: 6 · Confidence: 1_
