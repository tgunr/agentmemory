---
type: file_edit
title: Git cherry-pick failed on desktop/src/lib/desktop-slash-commands.ts
description: No merge conflicts detected in desktop/src/i18n/{zh-hant,ts}
resource: agentmemory://observation/obs_ms683tkn_be3975e1dd95
tags: ["git cherry-pick merge conflict", "// desktop/slash command", "file_edit"]
timestamp: 2026-07-29T15:12:07.795979+00:00
source: agentmemory
session_id: 20260729_083331_2ab38b
importance: 8
confidence: 0.9
---
# Summary

A git cherry-pick operation failed on the project slash command and a related commit was generated due to merging untested and deprecated changes. The build process output potential merge conflicts.

## Facts
- Auto-merging multiple files with merge conflict in app/session/hooks/use-prompt-actions/slash.ts and app/desktop/src/lib/desktop-slash-commands.ts
- Git command cherry-pick failed with exit code 0 due to unexpected input in desktop/slash command + /model picker reveal

## Concepts
- git cherry-pick merge conflict
- // desktop/slash command

## Files
- `/project/Desktop/Slash Command`
- `/project/Desktop/Desktop Slash Commands`

_Importance: 8 · Confidence: 0.9_
