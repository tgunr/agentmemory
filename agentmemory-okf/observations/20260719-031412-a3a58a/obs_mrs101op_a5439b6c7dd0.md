---
type: CommandRun
title: Inspect remindctl CLI installation and permissions
description: Tool is installed but lacks macOS Reminders privacy access
resource: agentmemory://observation/obs_mrs101op_a5439b6c7dd0
tags: ["macOS Reminders CLI", "Homebrew", "macOS Privacy and Security", "remindctl", "commandrun"]
timestamp: 2026-07-19T16:44:27.909879+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

The agent executed terminal commands to inspect the remindctl CLI tool for Apple Reminders. It confirmed the tool is installed via Homebrew but identified that it currently lacks the required macOS privacy permissions to access Reminders data. The agent noted that running the authorize command and updating System Settings is required to proceed.

## Facts
- remindctl binary located at /opt/homebrew/bin/remindctl
- remindctl version is 0.1.1
- remindctl list command fails with "Reminders access denied"
- Fix requires running `remindctl authorize` and granting access in System Settings &gt; Privacy &amp; Security &gt; Reminders
- Supported commands: show, list, add, edit, complete, delete, status, authorize

## Concepts
- macOS Reminders CLI
- Homebrew
- macOS Privacy and Security
- remindctl

## Files
- `/opt/homebrew/bin/remindctl`

_Importance: 4 · Confidence: 1_
