---
type: FileRead
title: AppleScript workaround for Apple Notes automation
description: Reference for using osascript when memo CLI fails
resource: agentmemory://observation/obs_mrs1sxpj_cdc321401d84
tags: ["AppleScript", "osascript", "macOS automation", "Apple Notes", "memo CLI", "non-interactive automation", "fileread"]
timestamp: 2026-07-19T17:06:55.778986+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

The agent accessed a reference document detailing how to use osascript (AppleScript) to create and manage Apple Notes. This serves as a reliable fallback when the memo CLI fails due to missing editor configurations or interactive requirements, enabling non-interactive automation on macOS.

## Facts
- File path: references/applescript-workaround.md
- Skill name: macos-integrations
- memo CLI fails when editor configuration is missing or requires interactive input
- osascript can create notes in default or specific folders via AppleScript
- AppleScript commands support verifying note existence, counting matches, and deleting duplicates
- AppleScript runs headlessly without terminal or editor dependencies

## Concepts
- AppleScript
- osascript
- macOS automation
- Apple Notes
- memo CLI
- non-interactive automation

## Files
- `references/applescript-workaround.md`

_Importance: 4 · Confidence: 1_
