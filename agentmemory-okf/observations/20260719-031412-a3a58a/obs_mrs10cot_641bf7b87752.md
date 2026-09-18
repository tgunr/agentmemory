---
type: FileRead
title: Reviewed macOS integrations skill
description: Catalog of Apple ecosystem automation, background services, and desktop control
resource: agentmemory://observation/obs_mrs10cot_641bf7b87752
tags: ["macOS automation", "BlueBubbles gateway", "iMessage integration", "launchd services", "Apple Notes", "Apple Reminders", "FindMy device tracking", "rumps menu bar apps", "fileread"]
timestamp: 2026-07-19T16:44:42.170281+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 3
confidence: 1
---
# Summary

The macos-integrations skill was inspected to identify available local Apple and macOS automation capabilities. It provides operational guidance and troubleshooting for messaging gateways, native Apple apps, launchd services, desktop automation, and mode-driven menu bar utilities.

## Facts
- The skill covers iMessage/SMS via imsg, BlueBubbles, Apple Notes via memo, Reminders via remindctl, FindMy, launchd, menu bar apps, and macOS desktop automation.
- BlueBubbles runs locally on port 1234; gateway setup uses hermes gateway run, pairing approval, BLUEBUBBLES_ALLOW_* variables, and a webhook on port 8645.
- BlueBubbles authentication should be diagnosed against the server config.db rather than .env, and helper_connected status should be checked.
- Documented BlueBubbles hazards include silent inbound failure from IPv4/IPv6 webhook binding and a Tahoe self-answering loop when helper_connected=false; mitigations include setting BLUEBUBBLES_WEBHOOK_HOST to the LAN IPv4, stopping via launchctl, and guarding sent GUIDs.
- Launchd guidance notes invisible emoji menu titles, write_file failures through volume symlinks, background terminal SIGTERM behavior for GUI apps, and launchctl bootstrap exit 78 troubleshooting.
- Menu bar utilities use rumps and a YAML mode-based service manager; the existing ModeSwitcher project is at /Volumes/alpha/sources/mode-switcher/.

## Concepts
- macOS automation
- BlueBubbles gateway
- iMessage integration
- launchd services
- Apple Notes
- Apple Reminders
- FindMy device tracking
- rumps menu bar apps
- desktop automation

## Files
- `references/imessage.md`
- `references/bluebubbles-troubleshooting.md`
- `references/bluebubbles-tahoe.md`
- `references/bluebubbles-gateway.md`
- `scripts/bluebubbles-diag.sh`
- `references/apple-notes.md`
- `references/apple-reminders.md`
- `references/findmy.md`
- `references/macos-launchd.md`
- `references/macos-menubar-apps.md`
- `/Volumes/alpha/sources/mode-switcher/`

_Importance: 3 · Confidence: 1_
