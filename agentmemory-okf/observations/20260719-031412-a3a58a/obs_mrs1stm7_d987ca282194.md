---
type: FileRead
title: macOS Integrations Skill Documentation
description: Apple ecosystem local integrations: iMessage, Notes, Reminders, FindMy, launchd, automation
resource: agentmemory://observation/obs_mrs1stm7_d987ca282194
tags: ["macOS automation", "iMessage integration", "BlueBubbles gateway", "launchd services", "Apple Notes CLI", "menu bar apps", "rumps Python library", "fileread"]
timestamp: 2026-07-19T17:06:50.474276+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

This skill documents Apple/macOS local integrations including iMessage, Notes, Reminders, FindMy, and launchd services. It captures critical pitfalls like BlueBubbles webhook binding issues and Tahoe self-answering loops, plus launchd service management gotchas. The documentation serves as a reference for implementing macOS automation and background services.

## Facts
- iMessage/SMS via `imsg` CLI (brew install steipete/tap/imsg) requires Full Disk Access
- BlueBubbles gateway on localhost:1234 with webhook on :8645 for programmatic iMessage access
- Two documented BlueBubbles landmines: (1) IPv4/IPv6 webhook bind trap - set BLUEBUBBLES_WEBHOOK_HOST to LAN IPv4, (2) Tahoe self-answering loop when helper_connected=false - emergency launchctl stop + sent-GUID guard
- Apple Notes via `memo` CLI, Reminders via `remindctl` CLI
- launchd pitfalls: emoji menu bar titles may render invisible, write_file fails through volume symlinks, terminal(background=true) SIGTERMs GUI apps, launchctl bootstrap exit 78 needs proper domain + logging
- Menu bar apps use rumps Python library with mode-based service manager pattern
- ModeSwitcher project located at /Volumes/alpha/sources/mode-switcher/

## Concepts
- macOS automation
- iMessage integration
- BlueBubbles gateway
- launchd services
- Apple Notes CLI
- menu bar apps
- rumps Python library

## Files
- `references/imessage.md`
- `references/bluebubbles-troubleshooting.md`
- `references/bluebubbles-tahoe.md`
- `references/bluebubbles-gateway.md`
- `references/apple-notes.md`
- `references/apple-reminders.md`
- `references/findmy.md`
- `references/macos-launchd.md`
- `references/macos-menubar-apps.md`
- `/Volumes/alpha/sources/mode-switcher/`

_Importance: 5 · Confidence: 1_
