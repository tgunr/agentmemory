---
type: file_edit
title: Updated hermes-agent code snippet with new exports
description: Ran `cd ~/.hermes/hermes-agent/apps/desktop && sed -n '290,330p' src/store/session.ts` in terminal
resource: agentmemory://observation/obs_ms6p1mlm_206a431b9eaa
tags: ["React hooks", "file_edit"]
timestamp: 2026-07-29T23:06:18.917286+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 6
confidence: 0.9
---
# Summary

Updated the `src/store/session.ts` file with new exports for session management and introduction. These changes should improve the overall behavior of hermes-agent.

## Facts
- New file exports for session management added to $sessionStartedAt and $turnStartedAt atoms
- New export for personality selection and introduction made to $introPersonality and $introduction context suggestions

## Concepts
- React hooks

## Files
- `/home/user/.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 6 · Confidence: 0.9_
