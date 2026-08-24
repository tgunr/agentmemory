---
type: file_edit
title: Patched macos-integrations Apple Reminders docs
description: Expanded remindctl/osascript guidance in SKILL.md
resource: agentmemory://observation/obs_mrs1vusd_b331d83cd219
tags: ["macos-integrations skill", "Apple Reminders", "remindctl", "osascript", "TCC permissions", "file_edit"]
timestamp: 2026-07-19T17:09:11.961917+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

Updated the macos-integrations skill SKILL.md Apple Reminders blurb to distinguish interactive remindctl usage from osascript automation, noting TCC robustness and the reminders_osascript.py helper. This steers agents toward the right tool depending on interactive vs scheduled context.

## Facts
- Patched SKILL.md in skill 'macos-integrations' (1 replacement)
- Apple Reminders section now documents remindctl for interactive Terminal use
- Also documents osascript for automation/cron as TCC-robust approach
- Points to VERIFIED Pitfalls section in references/apple-reminders.md
- References reusable helper scripts/reminders_osascript.py

## Concepts
- macos-integrations skill
- Apple Reminders
- remindctl
- osascript
- TCC permissions

## Files
- `macos-integrations/SKILL.md`
- `macos-integrations/references/apple-reminders.md`
- `macos-integrations/scripts/reminders_osascript.py`

_Importance: 4 · Confidence: 1_
