---
type: CommandRun
title: Delete TCC probe reminder and verify empty list
description: AppleScript automation to clean up test data in macOS Reminders
resource: agentmemory://observation/obs_mrs1oqkb_1efe523644bb
tags: ["AppleScript", "macOS Reminders", "TCC probe", "list enumeration optimization", "commandrun"]
timestamp: 2026-07-19T17:03:39.895857+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

Executed an AppleScript via terminal to delete a specific TCC test probe reminder from the macOS Reminders app. The operation successfully used a direct filter to avoid full list enumeration and confirmed the target list is now empty.

## Facts
- Used osascript to delete reminder named "__tcc_probe__" from "Hermes Unfinished" list
- Used "whose" clause in AppleScript to filter directly and avoid full list enumeration
- Verified the "Hermes Unfinished" list is now empty (count=0)

## Concepts
- AppleScript
- macOS Reminders
- TCC probe
- list enumeration optimization

_Importance: 4 · Confidence: 1_
