---
type: Error
title: skill_manage patch failed - old_string not found in macos-integrations
description: Attempted to update BlueBubbles send failure documentation but target string doesn't exist in index file
resource: agentmemory://observation/obs_mrqcnlif_55bbc98cb228
tags: ["skill management", "documentation patching", "file structure navigation", "BlueBubbles troubleshooting", "AppleScript send failures", "chatGuid format", "error"]
timestamp: 2026-07-18T12:35:10.116550+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The skill_manage patch operation failed because it tried to update detailed troubleshooting content in what is actually a high-level index file. The macos-integrations skill file contains section overviews with references to detailed documentation files, not the detailed troubleshooting patterns themselves. The patch needs to target the correct referenced file (likely references/bluebubbles-troubleshooting.md) instead of the index.

## Facts
- Tool: skill_manage with action "patch" on skill "macos-integrations"
- Attempted to replace documentation about "Send hangs for exactly 30 seconds then fails with empty error" pattern
- Operation failed: "Could not find a match for old_string in the file"
- The macos-integrations file is a high-level index/overview file, not detailed troubleshooting content</act>
    <fact>Detailed BlueBubbles content is in referenced files: references/bluebubbles-troubleshooting.md and references/bluebubbles-tahoe.md
- New content included updated root cause analysis: AppleScript send path failures and chatGuid format issues (iMessage;-;+1 vs any;-; forms)

## Concepts
- skill management
- documentation patching
- file structure navigation
- BlueBubbles troubleshooting
- AppleScript send failures
- chatGuid format

## Files
- `macos-integrations`
- `references/bluebubbles-troubleshooting.md`
- `references/bluebubbles-tahoe.md`

_Importance: 4 · Confidence: 1_
