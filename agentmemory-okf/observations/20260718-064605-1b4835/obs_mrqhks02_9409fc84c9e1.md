---
type: Observation
title: macos-integrations skill documentation retrieved
description: 
resource: agentmemory://observation/obs_mrqhks02_9409fc84c9e1
tags: ["macOS Launchd services", "BlueBubbles gateway", "Apple ecosystem integration", "Menu bar apps with rumps", "Mode-based service management", "observation"]
timestamp: 2026-07-18T14:52:56.637316+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Viewed comprehensive macOS integrations skill documentation covering CLI tools (imsg, memo, remindctl), gateway configurations, and background service patterns. Contains troubleshooting guides and recent platform-specific discoveries.

## Facts
- Skill covers 8 macOS/Apple integration areas: iMessage/SMS, BlueBubbles, Notes, Reminders, FindMy, Launchd, Computer Use, Menu Bar Apps
- BlueBubbles Gateway uses localhost:1234 API with hermes gateway run and BLUEBUBBLES_ALLOW_* auth vars
- ModeSwitcher project exists at /Volumes/alpha/sources/mode-switcher/ for mode-based service management
- Recent launchd learnings: emoji menu bar titles invisible, write_file fails through volume symlinks, terminal(background=true) SIGTERMs GUI apps

## Concepts
- macOS Launchd services
- BlueBubbles gateway
- Apple ecosystem integration
- Menu bar apps with rumps
- Mode-based service management

## Files
- `/Volumes/alpha/sources/mode-switcher/`
- `references/imessage.md`
- `references/bluebubbles-troubleshooting.md`
- `references/bluebubbles-tahoe.md`
- `references/bluebubbles-gateway.md`
- `references/apple-notes.md`
- `references/apple-reminders.md`
- `references/findmy.md`
- `references/macos-launchd.md`
- `scripts/bluebubbles-diag.sh`

_Importance: 5 · Confidence: 1_
