---
type: file_edit
title: SMLoginItem registrations
description: No running radar/processes found
resource: agentmemory://observation/obs_mwbc4gua_da826ae6f617
tags: ["login item", "file_edit"]
timestamp: 2026-11-10T23:42:16.638818+00:00
source: agentmemory
session_id: local-d9eecf8dc21f1eaa804b9b2b773b5f33949f86453b392c3dcb593dda672e9310
importance: 4
confidence: 0.9
---
# Summary

User ran terminal command to investigate and list active login items and process names, with output showing several preference files modified.

## Facts
- Ran command on terminal to list active login items and process names (ps aux | grep -i "radar|vinnov" | grep -v grep; ...)
- Found the following files modified: /Users/davec/Library/Preferences/com.apple.spotlightknowledge.plist, /Users/davec/Library/Preferences/com.corecode.MacUpdater.plist, /Users/davec/Library/Preferences/com.apple.corespotlightui.plist

## Concepts
- login item

## Files
- `/Users/davec/Library/Preferences/com.apple.spotlightknowledge.plist`
- `/Users/davec/Library/Preferences/com.corecode.MacUpdater.plist`
- `/Users/davec/Library/Preferences/com.apple.corespotlightui.plist`

_Importance: 4 · Confidence: 0.9_
