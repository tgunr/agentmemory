---
type: file_edit
title: npx tsc with grep and head filtering desktop app build output
description: No relevant errors detected after filtering gateway-event matches
resource: agentmemory://observation/obs_mry2y47e_51d4bc583da1
tags: ["tsc", "file_edit"]
timestamp: 2026-07-23T22:25:34.136613+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 5
confidence: 0.9
---
# Summary

HerMES agent executed a terminal command to manage desktop app build output, detecting no gateway-related errors.

## Facts
- User navigated to desktop app
- npm command used: npx tsc --noEmit 2>&1 | grep -E \"(gateway-event|use-session-list-actions)\" | head -10

## Concepts
- tsc

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/dist/bundle.prod.js`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/dist/bundle.dev.js`

_Importance: 5 · Confidence: 0.9_
