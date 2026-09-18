---
type: file_edit
title: Ambient sidebar list hooks extraction in Hermes Agent desktop app
description: No specific context noted
resource: agentmemory://observation/obs_ms6pyret_72bea8d91a09
tags: ["Mocking in testing", "file_edit"]
timestamp: 2026-07-29T23:32:04.801406+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 6
confidence: 0.9
---
# Summary

The hook "listSidebarSessions" extraction was performed using grep on a file test.tsx. The extracted results included the code of mock functions to set up expected behavior for both hooks, revealing that there's only one batched call instead of three separate reads.

## Facts
- Mock functions were used to emulate behavior of side-by-side sessions hook and list all profile sessions hook.

## Concepts
- Mocking in testing

## Files
- `src/app/session/hooks/use-session-list-actions.test.tsx`

_Importance: 6 · Confidence: 0.9_
