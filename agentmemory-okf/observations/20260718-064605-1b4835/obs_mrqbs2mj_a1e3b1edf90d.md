---
type: FileRead
title: Reviewed macOS integrations skill guide
description: Overview of Apple ecosystem CLIs, launchd, desktop automation, and menu bar apps
resource: agentmemory://observation/obs_mrqbs2mj_a1e3b1edf90d
tags: ["macOS integrations", "LaunchAgents", "desktop automation", "rumps menu bar apps", "mode-based service manager", "fileread"]
timestamp: 2026-07-18T12:10:39.304715+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The macos-integrations skill was inspected to identify available local Apple and macOS capabilities. It provides decision guidance and points to focused references for messaging, productivity apps, device tracking, persistent services, desktop control, and menu bar utilities.

## Facts
- The skill covers iMessage/SMS via imsg, Apple Notes via memo, Reminders via remindctl, FindMy tracking, launchd services, desktop automation, and rumps menu bar apps.
- Launchd guidance notes that GUI apps should use LaunchAgents, background terminal execution can SIGTERM GUI apps, and bootstrap exit 78 requires the proper domain and logging.
- The menu bar guidance documents a YAML-driven mode-based service manager and the existing ModeSwitcher project at /Volumes/alpha/sources/mode-switcher/.
- Detailed documentation is available in linked references such as references/macos-launchd.md, references/macos-computer-use.md, and references/macos-menubar-apps.md.

## Concepts
- macOS integrations
- LaunchAgents
- desktop automation
- rumps menu bar apps
- mode-based service manager

## Files
- `apple/macos-integrations/SKILL.md`
- `references/macos-launchd.md`
- `references/macos-computer-use.md`
- `references/macos-menubar-apps.md`

_Importance: 3 · Confidence: 1_
