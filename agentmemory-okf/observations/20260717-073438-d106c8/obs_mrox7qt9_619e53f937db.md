---
type: FileRead
title: Session-start hook implementation
description: Claude Code integration hook for session registration and context injection
resource: agentmemory://observation/obs_mrox7qt9_619e53f937db
tags: ["Claude Code hooks", "session management", "telemetry registration", "context injection", "timeout configuration", "SDK child context detection", "fileread"]
timestamp: 2026-07-17T12:35:10.073809+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

Read the session-start hook implementation which handles Claude Code session initialization. The hook registers sessions for memory tracking and optionally injects project context. It includes safeguards against OOM issues under concurrent load through tight timeout caps and non-blocking fetch patterns.

## Facts
- Session-start hook registers sessions for observation tracking via POST to /agentmemory/session/start
- Only injects project context to stdout when AGENTMEMORY_INJECT_CONTEXT=true (default off as of 0.8.10)
- Skips execution in SDK child contexts (AGENTMEMORY_SDK_CHILD=1 or entrypoint=sdk-ts)
- Has tight timeout caps to prevent OOM under concurrent load: REGISTER_TIMEOUT_MS=800, INJECT_TIMEOUT_MS=1500
- Uses fire-and-forget fetch when context injection disabled to avoid blocking
- Resolves project context using resolveProject helper
- Auth via Bearer token from AGENTMEMORY_SECRET env var

## Concepts
- Claude Code hooks
- session management
- telemetry registration
- context injection
- timeout configuration
- SDK child context detection

## Files
- `/Volumes/AI/agentmemory/src/hooks/session-start.ts`

_Importance: 5 · Confidence: 1_
