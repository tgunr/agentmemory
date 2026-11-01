---
type: file_edit
title: hermes-desktop
description: A patch operation on the Hermes Desktop
resource: agentmemory://observation/obs_mvx1xmq0_f32829bf8820
tags: ["description length constraint", "skill index", "file_edit"]
timestamp: 2026-10-31T23:48:15.044773+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 7
confidence: 0.9
---
# Summary

The patch operation on hermes-desktop failed because the new skill description exceeded the allowed 60 characters, resulting in the operation being aborted and all touched skills being rolled back.

## Facts
- Failed to update Hermes Desktop information due to a description length constraint
- The new description exceeded the 60-character limit, causing the operation to fail

## Concepts
- description length constraint
- skill index

## Files
- `---\nname: hermes-desktop\ndescription: \"Use when building or debugging the Hermes Desktop app: asar ship path, live-gateway probes, status-bar/sidebar symptoms, project & profile visibility.\"\nversion: 1.2.0\nauthor: Hermes Agent\nlicense: MIT\nplatforms: [macos, linux]\n---`
- `---\nname: hermes-desktop\ndescription: Build, repack, debug, and ship fixes to the Hermes Desktop Electron app (apps/desktop). Load when investigating desktop UI bugs (sidebar duplicates, zoom, project tree), building the renderer, or introspecting the live gateway the desktop talks to. Covers the asar repack ship path and the WebSocket gateway-probe technique.\n---`

_Importance: 7 · Confidence: 0.9_
