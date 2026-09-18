---
type: file_write
title: Necessary patch for `okf-agentmemory-index` skill
description: CRITICAL: fixing the binary is NECESSARY but NOT SUFFICIENT, and the restart itself is where AM usually breaks.
resource: agentmemory://observation/obs_mspcc1oe_e3b1d66f3364
tags: ["§11.9 safe restart block design", "file_write"]
timestamp: 2026-08-12T00:18:07.355674+00:00
source: agentmemory
session_id: 20260811_112343_dffd4c
importance: 9
confidence: 0.9
---
# Summary

The patch fixed a critical binary issue in the `okf-agentmemory-index` skill, resolving an architecture decision with implications for future maintenance. The restart now happens safely, preventing §11.9 engine function-registry corruption.

## Facts
- a bare `launchctl unload` + `launchctl load` triggers §11.9 engine function-registry corruption
- the issue was purely the restart race — the safe restart block resolves it

## Concepts
- §11.9 safe restart block design

## Files
- `/Volumes/AI/agentmemory/index.mjs`
- `/opt/homebrew/bin/node`
- `/tmp/agentmemory.stdout.log`

_Importance: 9 · Confidence: 0.9_
