---
type: Error
title: Skill patch failed - no match for old_string in macos-integrations
description: Attempted to add TCC/Reminders automation guidance to existing skill file
resource: agentmemory://observation/obs_mrs1uy2p_eefd7feb84d3
tags: ["TCC permissions", "macOS EventKit", "osascript AppleScript bridge", "skill_manage tool", "error"]
timestamp: 2026-07-19T17:08:29.565372+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 6
confidence: 1
---
# Summary

A skill_manage patch operation failed because the old_string content could not be found in the macos-integrations skill file. The user was attempting to add detailed documentation about TCC (Transparency, Consent, and Control) permissions for macOS automation, specifically around the EventKit/Reminders access pattern and the osascript workaround. The failure suggests either the target section doesn't exist or the old_string content doesn't match exactly what's in the file.

## Facts
- Tool: skill_manage with action "patch" failed on skill "macos-integrations"
- Error: "Could not find a match for old_string in the file"
- User was attempting to add TCC permission guidance for automation workflows
- File contains macOS integration sections including iMessage, Reminders, FindMy, Launchd
- Decision guide table shows entries for apple-reminders, findmy, macos-launchd, macos-computer-use

## Concepts
- TCC permissions
- macOS EventKit
- osascript AppleScript bridge
- skill_manage tool

## Files
- `skills/macos-integrations.md`

_Importance: 6 · Confidence: 1_
