---
type: file_edit
title: Samba mounts issue fixed
description: No scripted osascript writes permitted due to access restrictions.
resource: agentmemory://observation/obs_msud98s2_6fe92d4aa02a
tags: ["samba", "`do script`>", "MCP Router", "file_edit"]
timestamp: 2026-08-15T12:42:47.085214+00:00
source: agentmemory
session_id: 20260815_063700_d8cc2d
importance: 7
confidence: 0.9
---
# Summary

The tool memory was used to fix a Samba mounts issue. A rule was applied to ensure that scripted osascript writes are not permitted due to access restrictions. This fixes the issue, but it's a critical architectural decision. The Hermes gateway and macOS require a full disk access to write files.

## Facts
- Hermes desktop app vs AgentMemory are SEPARATE: user watches AM web viewer localhost:3113/#lessons (AM lessons = portable heuristics; POST /agentmemory/lessons on :3111, Bearer LAST AGENTMEMORY_SECRET= in ~/.agentmemory/.env).
- Target Terminal by BUNDLE ID `com.apple.Terminal` resolves to stray FLTK 'Fl_Terminal Test' under XQuartz lacking `do script`.

## Concepts
- samba
- `do script`>
- MCP Router

## Files
- `/Volumes/*`

_Importance: 7 · Confidence: 0.9_
