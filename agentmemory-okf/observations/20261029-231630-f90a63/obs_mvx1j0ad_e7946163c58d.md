---
type: file_edit
title: Cd into hermes-agent apps directory and grep results
description: Grep results for showProjects using grep -rn
resource: agentmemory://observation/obs_mvx1j0ad_e7946163c58d
tags: ["grep", "shell scripting", "file_edit"]
timestamp: 2026-10-31T23:36:52.785743+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 0.9
---
# Summary

The tool executed a file edit operation in the hermes-agent apps directory, searching for the project showProjects in TypeScript files. The results were then piped to grep and filtered for matches, with the top 8 results displayed.

## Facts
- Terminal command executed: cd ~/.hermes/hermes-agent/apps/desktop/src && grep -rn "showProjects" --include=*.ts --include=*.tsx . | grep -v test | head -8
- Output file: ./app/chat/sidebar/index.tsx

## Concepts
- grep
- shell scripting

## Files
- `/home/user/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/index.tsx`

_Importance: 6 · Confidence: 0.9_
