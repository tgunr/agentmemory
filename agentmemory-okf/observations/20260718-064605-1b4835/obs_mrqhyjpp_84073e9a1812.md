---
type: FileRead
title: Viewed macOS integrations skill documentation
description: Comprehensive reference for Apple ecosystem tools and local macOS services
resource: agentmemory://observation/obs_mrqhyjpp_84073e9a1812
tags: ["macOS integrations", "iMessage CLI automation", "Apple Notes management", "Apple Reminders CLI", "FindMy device tracking", "launchd background services", "computer-use desktop automation", "rumps menu bar apps", "fileread"]
timestamp: 2026-07-18T15:03:39.080596+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Viewed the macos-integrations skill which documents Apple ecosystem tools for local macOS automation. The skill provides CLI-based access to iMessage, Notes, Reminders, and FindMy, plus guidance on launchd background services and desktop automation without stealing user focus. Includes documented pitfalls and a mode-based service manager pattern for managing multiple work contexts.

## Facts
- Skill covers: iMessage/SMS (imsg CLI), Apple Notes (memo CLI), Reminders (remindctl), FindMy device tracking, launchd services, computer-use automation, menu bar apps (rumps)
- BlueBubbles gateway: localhost:1234 API, webhook on :8645, auth via BLUEBUBBLES_ALLOW_* vars, diagnostic script at scripts/bluebubbles-diag.sh
- Known launchd pitfalls: emoji menu bar titles render invisible, write_file fails through volume symlinks, terminal(background=true) SIGTERMs GUI apps, launchctl bootstrap exit 78 needs proper domain
- ModeSwitcher project exists at /Volumes/alpha/sources/mode-switcher/ using YAML-defined work modes (AI, Dev, Design, Comms, Minimal) to manage launch agents
- rumps API pitfall: rumps.separator is NOT MenuItem.set_separator()

## Concepts
- macOS integrations
- iMessage CLI automation
- Apple Notes management
- Apple Reminders CLI
- FindMy device tracking
- launchd background services
- computer-use desktop automation
- rumps menu bar apps
- BlueBubbles gateway
- mode-based service manager

## Files
- `/Volumes/alpha/sources/mode-switcher/`

_Importance: 4 · Confidence: 1_
