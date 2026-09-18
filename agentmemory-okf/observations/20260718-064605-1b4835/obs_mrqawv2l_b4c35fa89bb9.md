---
type: FileRead
title: Viewed macOS integrations skill documentation
description: Covers iMessage, Notes, Reminders, FindMy, Launchd, and menu bar apps
resource: agentmemory://observation/obs_mrqawv2l_b4c35fa89bb9
tags: ["macOS automation", "Apple ecosystem CLI", "Launchd background services", "rumps Python library", "mode-based service manager", "desktop automation", "fileread"]
timestamp: 2026-07-18T11:46:23.159484+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

The agent retrieved the `macos-integrations` skill documentation to review capabilities for local macOS services and Apple ecosystem tools. This outlines specific CLI tools for messaging and notes, alongside critical pitfalls for Launchd background services and `rumps` menu bar app development.

## Facts
- Skill `macos-integrations` is located at `/Users/davec/.hermes/skills/apple/macos-integrations`
- Provides CLI tools: `imsg` (iMessage/SMS), `memo` (Notes), `remindctl` (Reminders)
- Launchd pitfalls noted: emoji menu bar titles may render invisible, `write_file` fails through volume symlinks, `terminal(background=true)` SIGTERMs GUI apps
- Menu bar apps use `rumps` Python library; `rumps.separator` is NOT `MenuItem.set_separator()`
- References a ModeSwitcher project implementing a YAML-defined mode-based service manager at `/Volumes/alpha/sources/mode-switcher/`
- Contains 9 linked reference files for specific integrations, troubleshooting, and workarounds

## Concepts
- macOS automation
- Apple ecosystem CLI
- Launchd background services
- rumps Python library
- mode-based service manager
- desktop automation

## Files
- `/Users/davec/.hermes/skills/apple/macos-integrations/SKILL.md`
- `/Volumes/alpha/sources/mode-switcher/`

_Importance: 6 · Confidence: 1_
