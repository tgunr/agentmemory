---
type: FileRead
title: Reviewed macOS integrations skill guide
description: Catalog of Apple ecosystem tools, background services, and desktop automation
resource: agentmemory://observation/obs_mrqcmeb6_0f67ad01f35d
tags: ["macOS automation", "Apple integrations", "LaunchAgents", "BlueBubbles API", "rumps menu bar apps", "mode-based service manager", "fileread"]
timestamp: 2026-07-18T12:34:14.127674+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The macOS integrations skill was inspected to identify available local Apple automation capabilities and their supporting tools. It provides routing guidance to dedicated references for messaging, productivity apps, device tracking, LaunchAgents, desktop automation, and menu bar utilities.

## Facts
- The skill covers iMessage/SMS via imsg, BlueBubbles API troubleshooting, Apple Notes via memo, Reminders via remindctl, FindMy, Launchd, computer-use, and menu bar apps.
- BlueBubbles uses localhost:1234; its config.db is authoritative for authentication, while Hermes reads BLUEBUBBLES_* variables from ~/.hermes/.env.
- Launchd guidance notes volume-symlink write failures, background terminal SIGTERM behavior for GUI apps, invisible emoji menu titles, and bootstrap exit 78 troubleshooting.
- Menu bar guidance uses rumps and documents a YAML-driven mode-based service manager, including ModeSwitcher at /Volumes/alpha/sources/mode-switcher/.

## Concepts
- macOS automation
- Apple integrations
- LaunchAgents
- BlueBubbles API
- rumps menu bar apps
- mode-based service manager

## Files
- `/Users/davec/.hermes/skills/apple/macos-integrations/SKILL.md`
- `/Volumes/alpha/sources/mode-switcher/`

_Importance: 3 · Confidence: 1_
