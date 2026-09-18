---
type: file_edit
title: tuning ESLint for Hermes agent app
description: 
resource: agentmemory://observation/obs_mry336fx_853797e10aae
tags: ["ESLint integration", "file_edit"]
timestamp: 2026-07-23T22:29:30.324414+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 4
confidence: 0.9
---
# Summary

Adjusted ESLint configuration to improve agent app performance by running npx eslint on specific source files, producing no errors or warnings.

## Facts
- Running ESLint with command: cd /Users/davec/.hermes/hermes-agent/apps/desktop && npx eslint src/app.sessions/hooks/use-message-stream/gateway-event.ts src/app.sessions/hooks/use-session-list-actions.ts 2>&1; echo "EXIT=$?"

## Concepts
- ESLint integration

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-session-list-actions.ts`

_Importance: 4 · Confidence: 0.9_
