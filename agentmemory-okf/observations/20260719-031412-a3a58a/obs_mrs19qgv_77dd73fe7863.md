---
type: FileRead
title: Apple Reminders reference documentation retrieved
description: remindctl CLI usage guide for macOS Reminders integration
resource: agentmemory://observation/obs_mrs19qgv_77dd73fe7863
tags: ["Apple Reminders", "remindctl CLI", "macOS integration", "EventKit", "due vs alarm", "cronjob vs reminders", "iCloud sync", "fileread"]
timestamp: 2026-07-19T16:51:59.932847+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 3
confidence: 1
---
# Summary

Retrieved reference documentation for Apple Reminders integration using the remindctl CLI tool. The document distinguishes between --due and --alarm flags, establishes when to use Reminders vs cronjobs, and provides command syntax for managing reminders that sync across Apple devices via iCloud.

## Facts
- File: references/apple-reminders.md, skill: macos-integrations
- Tool: remindctl (install via brew install steipete/tap/remindctl)
- --due sets due date/time; --alarm sets EventKit notification trigger (different fields)
- Rule: when user says "remind me", clarify Apple Reminders (syncs to phone) vs agent cronjob alert
- Date formats: today/tomorrow/yesterday, YYYY-MM-DD, YYYY-MM-DD HH:mm, ISO 8601
- Output formats: --json (scripting), --plain (TSV), --quiet (counts only)
- Use --json to verify dueDate vs alarmDate since UI may group by alarm time
- Commands: remindctl add/complete/delete/edit/list/today/tomorrow/week/overdue/all

## Concepts
- Apple Reminders
- remindctl CLI
- macOS integration
- EventKit
- due vs alarm
- cronjob vs reminders
- iCloud sync

## Files
- `references/apple-reminders.md`

_Importance: 3 · Confidence: 1_
