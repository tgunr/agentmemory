---
type: CommandRun
title: Inspect BlueBubbles server support directory and config
description: Checking for config.json and listing application support files
resource: agentmemory://observation/obs_mrqazkch_34cb141f3339
tags: ["BlueBubbles server", "macOS Application Support", "Electron data directories", "SQLite configuration database", "commandrun"]
timestamp: 2026-07-18T11:48:29.246041+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The command inspected the BlueBubbles server application support directory to locate configuration files. It confirmed the presence of a SQLite database (config.db) and standard Electron app directories, but determined that config.json is not used or located in this path.

## Facts
- BlueBubbles server support directory exists at /Users/davec/Library/Application Support/bluebubbles-server/
- Directory contains Electron-like structure: Attachments, Cache, config.db, Cookies, Local Storage, Session Storage
- config.db (90KB) is present, but config.json does not exist in this directory
- Application uses SQLite database for configuration rather than a JSON file

## Concepts
- BlueBubbles server
- macOS Application Support
- Electron data directories
- SQLite configuration database

## Files
- `/Users/davec/Library/Application Support/bluebubbles-server/`
- `/Users/davec/Library/Application Support/bluebubbles-server/config.db`

_Importance: 4 · Confidence: 1_
