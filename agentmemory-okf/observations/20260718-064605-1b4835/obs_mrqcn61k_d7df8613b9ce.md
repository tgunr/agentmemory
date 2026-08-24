---
type: Error
title: Failed patch on macos-integrations skill
description: old_string not found in skill file
resource: agentmemory://observation/obs_mrqcn61k_d7df8613b9ce
tags: ["skill_manage patch", "macos-integrations", "BlueBubbles Private API", "string match failure", "error"]
timestamp: 2026-07-18T12:34:50.069507+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

A patch to the macos-integrations skill failed because the exact old_string was not found. The edit aimed to clarify that a false Private API helper status does not block basic send/receive (AppleScript fallback) and to document scripts/bluebubbles-diag.sh. The skill content likely differs from the assumed text and needs a fresh read before retrying.

## Facts
- skill_manage patch on "macos-integrations" returned success: false
- Error: Could not find a match for old_string in the file
- old_string targeted: "If this returns `false`, the Private API helper is not running (or can't inject — see Tahoe section)."
- Intended addition: false is NOT a send blocker (AppleScript still works); re-runnable health probe at scripts/bluebubbles-diag.sh
- file_preview shows skill frontmatter: name macos-integrations, version 1.0.0, tags macOS/Apple/iMessage/Notes/Reminders/FindMy/launchd/automation

## Concepts
- skill_manage patch
- macos-integrations
- BlueBubbles Private API
- string match failure

## Files
- `scripts/bluebubbles-diag.sh`

_Importance: 4 · Confidence: 1_
