---
type: CommandRun
title: Delete probe reminder via AppleScript
description: Attempted to remove __tcc_probe__ from Hermes Unfinished list but failed
resource: agentmemory://observation/obs_mrs1nqxw_3ec8a22777a2
tags: ["AppleScript", "macOS Reminders automation", "osascript", "TCC probe", "commandrun"]
timestamp: 2026-07-19T17:02:53.728623+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

The agent attempted to clean up a previously created test probe reminder in the macOS Reminders app using AppleScript. The script failed with error -1728, indicating it could not iterate the reminders collection, likely because the "Hermes Unfinished" list is currently empty or the probe reminder does not exist.

## Facts
- Command used osascript to interact with the macOS Reminders application
- Target list: "Hermes Unfinished"
- Target reminder name to delete: "__tcc_probe__"
- Command failed with exit code 1
- AppleScript error -1728: "Can’t get item 1 of every reminder of list"

## Concepts
- AppleScript
- macOS Reminders automation
- osascript
- TCC probe

_Importance: 4 · Confidence: 1_
