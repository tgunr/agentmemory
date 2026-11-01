---
type: file_edit
title: Hermes TUI Agent Update
description: Search results from `cd ~/.hermes/hermes-agent && grep -rn "UNAVAILABLE_METHOD_RE" ui-tui/src` and `grep -rn "cwd.set|workspace.move" ui-tui/src` outputs
resource: agentmemory://observation/obs_mvwoq2pe_a784e086c08a
tags: ["React hooks", "SQL migration", "auth middleware", "file_edit"]
timestamp: 2026-10-31T17:38:27.500679+00:00
source: agentmemory
session_id: local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79
importance: 8
confidence: 0.9
---
# Summary

The Hermes TUI agent update involved editing several files, including those related to user messages, projects, and sessions. Notably, the update addressed unavailable methods and session workspace moves. This update is important as it impacts the overall functionality and behavior of the agent.

## Facts
- UNAVAILABLE_METHOD_RE = /^unknown method: (\\S+) — not available on this Hermes backend$
- session.workspace.move re-homes the stored row AND a live agent (even mid-turn) by the

## Concepts
- React hooks
- SQL migration
- auth middleware

## Files
- `ui-tui/src/app/userMessages.ts`
- `ui-tui/src/components/projectsPicker.tsx`
- `ui-tui/__tests__/projectsSlashCommand.test.ts`
- `ui-tui/domain/projects.ts`
- `ui-tui/domain/projects.ts`
- `ui-tui/src/__tests__/projectsSlashCommand.test.ts`

_Importance: 8 · Confidence: 0.9_
