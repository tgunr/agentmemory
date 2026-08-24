---
type: file_edit
title: tsc command ran in terminal with error TS5112
description: $ cd /Users/davec/.hermes/hermes-agent/ui-tui && npx --yes tsc --noEmit ...
resource: agentmemory://observation/obs_mruk4qen_2b06ee9cfad3
tags: ["tsconfig.json", "file_edit"]
timestamp: 2026-07-21T11:15:31.626941+00:00
source: agentmemory
session_id: 20260721_060848_6cb7c8
importance: 8
confidence: 0.9
---
# Summary

The user ran the tsc command in the terminal and encountered an error due to a configuration issue. The task resulted in code edits.

## Facts
- TSconfig.json file present, but tsconfig will not be loaded due to specified files on commandline.

## Concepts
- tsconfig.json

## Files
- `/Users/davec/.hermes/hermes-agent/ui-tui/appChrome.tsx
    /Users/davec/.hermes/heremes-agent/ui-tui/appLayout.tsx
    /Users/davec/.hermes/hermes-agent/ui-tui/src/app/interfaces.ts
    /Users/davec/.hermes/hermes-agent/ui-tui/src/app/uiStore.ts`

_Importance: 8 · Confidence: 0.9_
