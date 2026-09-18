---
type: CommandRun
title: Check BlueBubbles Full Disk Access permissions on macOS
description: Verified TCC.db accessibility and displayed app configuration
resource: agentmemory://observation/obs_mrqb52f9_b5cc00e79a67
tags: ["macOS TCC permissions", "Full Disk Access", "BlueBubbles configuration", "commandrun"]
timestamp: 2026-07-18T11:52:45.954536+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Executed diagnostic commands to verify BlueBubbles.app Full Disk Access permissions on macOS. The TCC database could not be read directly due to sandbox restrictions, indicating the app may need explicit FDA grant for filesystem access. Configuration shows private API access is enabled via dynamic library injection mode.

## Facts
- TCC.db not directly readable due to sandbox restrictions
- BlueBubbles server version is 1.9.9
- private_api_mode configured as process-dylib
- enable_private_api flag set to 1

## Concepts
- macOS TCC permissions
- Full Disk Access
- BlueBubbles configuration

## Files
- `~/Library/Application Support/com.apple.TCC/TCC.db`

_Importance: 4 · Confidence: 1_
