---
type: file_edit
title: Patched hermes-session-hygiene skill with unfinished session audit code
description: Added Python script for analyzing SQLite session databases across profiles
resource: agentmemory://observation/obs_mrs1ae63_1780c90a3e5f
tags: ["SQLite session auditing", "Python database scanning", "Cron automation", "Session hygiene", "file_edit"]
timestamp: 2026-07-19T16:52:30.646154+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

Added comprehensive documentation and code for auditing unfinished sessions where the last message is from a user and never received an assistant response. The Python script queries SQLite databases across all Hermes profiles to identify abandoned or hanging sessions, with careful filtering to exclude system-generated noise and stale conversations.

## Facts
- skill_manage action was 'patch' on skill 'hermes-session-hygiene'
- Added section 7: Find unfinished/hanging sessions using session_search tool
- Python script enumerates 8 profile DBs (ai, cc, develop, ollama, personal, pveroot, ranch, shop) plus default
- Uses sqlite3.connect(db) NOT URI form due to WAL-shm lock failures in sandbox
- Filters system messages starting with [System, [IMPORTANT, [Note: to avoid false positives
- Applies 30-day recency window to keep audit list actionable
- Production script at ~/.hermes/scripts/unfinished_session_audit.py runs via cron daily

## Concepts
- SQLite session auditing
- Python database scanning
- Cron automation
- Session hygiene

## Files
- `SKILL.md in skill 'hermes-session-hygiene'`

_Importance: 5 · Confidence: 1_
