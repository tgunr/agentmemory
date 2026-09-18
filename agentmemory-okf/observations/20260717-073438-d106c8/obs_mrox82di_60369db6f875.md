---
type: Search
title: Session ID extraction patterns across hook files
description: Search found consistent session_id/sessionId handling in 13 hook implementations
resource: agentmemory://observation/obs_mrox82di_60369db6f875
tags: ["session ID extraction", "hook payload normalization", "fallback handling pattern", "search"]
timestamp: 2026-07-17T12:35:25.059214+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

Search revealed a standardized pattern for session ID handling across the agentmemory hooks system. Each hook extracts session identifiers using both camelCase and underscore variants as fallbacks, ensuring compatibility with different calling conventions. The notification hook uniquely processes title metadata in addition to session tracking.

## Facts
- All 13 hook files use fallback pattern: data.session_id || data.sessionId
- notification.ts additionally processes data.title field alongside session ID
- Most files default to "unknown" string when no session ID is present
- session-start.ts has unique multi-line extraction logic with project/cwd context
- post-commit.ts shows simpler session_id-only extraction without fallback

## Concepts
- session ID extraction
- hook payload normalization
- fallback handling pattern

## Files
- `/Volumes/AI/agentmemory/src/hooks/session-start.ts`
- `/Volumes/AI/agentmemory/src/hooks/task-completed.ts`
- `/Volumes/AI/agentmemory/src/hooks/pre-tool-use.ts`
- `/Volumes/AI/agentmemory/src/hooks/notification.ts`
- `/Volumes/AI/agentmemory/src/hooks/stop.ts`
- `/Volumes/AI/agentmemory/src/hooks/session-end.ts`
- `/Volumes/AI/agentmemory/src/hooks/subagent-start.ts`
- `/Volumes/AI/agentmemory/src/hooks/prompt-submit.ts`
- `/Volumes/AI/agentmemory/src/hooks/post-tool-failure.ts`
- `/Volumes/AI/agentmemory/src/hooks/subagent-stop.ts`
- `/Volumes/AI/agentmemory/src/hooks/post-tool-use.ts`
- `/Volumes/AI/agentmemory/src/hooks/post-commit.ts`
- `/Volumes/AI/agentmemory/src/hooks/pre-compact.ts`

_Importance: 5 · Confidence: 1_
