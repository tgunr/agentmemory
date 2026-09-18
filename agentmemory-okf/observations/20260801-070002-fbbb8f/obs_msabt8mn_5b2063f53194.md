---
type: file_edit
title: grep and find currentCwd function call in index.tsx
description: 
resource: agentmemory://observation/obs_msabt8mn_5b2063f53194
tags: ["grep pattern matching", "useStore hermes-hermes store value", "desktop Agent", "file_edit"]
timestamp: 2026-08-01T12:06:57.260321+00:00
source: agentmemory
session_id: 20260801_070002_fbbb8f
importance: 8
confidence: 0.9
---
# Summary

Tool terminal was used with a command to find calls for currentCwd function in useStore within index.tsx file; grep and head results indicated precise matches at specific lines.

## Facts
- Taken the hermes-agent in desktop app with grep -n "currentCwd|setCurrentCwd|cwd\\b" and ran head on output of file /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/index.tsx
- The grep search yielded an exact phrase at 88: $currentCwd, the variable is being used as a store value by hermes-agent

## Concepts
- grep pattern matching
- useStore hermes-hermes store value
- desktop Agent

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/index.tsx`

_Importance: 8 · Confidence: 0.9_
