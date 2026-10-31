---
type: file_edit
title: Find connections.json and cat desktop-installed-apps.json
description: Running a command in the Hermes environment
resource: agentmemory://observation/obs_mvugoxiv_ffae875864f0
tags: ["Hermes desktop installed apps", "file_edit"]
timestamp: 2026-10-30T04:18:04.850075+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 0.9
---
# Summary

A desktop installed app was found and its connected info retrieved. This appears to be a Hermes setup.

## Facts
- Command: ssh pro.local 'find ~/.hermes ~/Library/Application Support/Hermes -maxdepth 3 -name "connections.json" 2>/dev/null; echo \"--- desktop-installed-apps:\"; cat ~/.hermes/desktop-installed-apps.json' 2>&1 | head
- Output and exit code: {"output": "/Users/davec/Library/Application Support/Hermes/connections.json\n--- desktop-installed-apps:\n{\n  \"apps\": [\n    \"/Applications/Hermes.app\"\n  ]\n}", "exit_code": 0, "error": null}

## Concepts
- Hermes desktop installed apps

## Files
- `/Users/davec/Library/Application Support/Hermes/connections.json`
- `/Users/davec/.hermes/desktop-installed-apps.json`

_Importance: 6 · Confidence: 0.9_
