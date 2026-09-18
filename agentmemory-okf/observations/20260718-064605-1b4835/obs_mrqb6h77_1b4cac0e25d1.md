---
type: CommandRun
title: Checked BlueBubbles AppleScript dictionary availability
description: Investigating macOS Tahoe compatibility and automation options
resource: agentmemory://observation/obs_mrqb6h77_1b4cac0e25d1
tags: ["AppleScript dictionary", "macOS automation", "BlueBubbles integration", "osadict", "sdef", "commandrun"]
timestamp: 2026-07-18T11:53:51.760971+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Executed commands to determine if BlueBubbles application supports AppleScript automation, but found no scriptable interface available. The investigation suggests BlueBubbles relies on GUI-based helper connection rather than scriptable automation for macOS Tahoe compatibility.

## Facts
- osadict -l command not available on system
- sdef /Applications/BlueBubbles.app returned no output indicating app is not scriptable
- BlueBubbles helper connect typically uses GUI button for pairing
- User referenced BB version release notes for Tahoe compatibility

## Concepts
- AppleScript dictionary
- macOS automation
- BlueBubbles integration
- osadict
- sdef

## Files
- `/Applications/BlueBubbles.app`

_Importance: 4 · Confidence: 1_
