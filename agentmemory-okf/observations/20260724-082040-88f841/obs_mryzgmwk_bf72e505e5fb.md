---
type: file_edit
title: navigating workspace CWD in desktop app
description: detection of $currentCwd usage across multiple files
resource: agentmemory://observation/obs_mryzgmwk_bf72e505e5fb
tags: ["useStore, setCurrentCwd, React hooks", "file_edit"]
timestamp: 2026-07-24T13:35:45.885187+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 7
confidence: 0.9
---
# Summary

Monitoring the usage of $currentCwd in desktop app files revealed its consistent presence and multiple direct references across different functions.

## Facts
- $currentCwd used consistently across various functions
- direct references to current CWH function (e.g., setCurrentCwd)

## Concepts
- useStore, setCurrentCwd, React hooks

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat sidewar/index.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/composer/attachments.tsx`

_Importance: 7 · Confidence: 0.9_
