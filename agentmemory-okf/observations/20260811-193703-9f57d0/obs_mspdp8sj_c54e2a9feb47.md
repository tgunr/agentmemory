---
type: file_edit
title: Kilo Code Integration
description: 
resource: agentmemory://observation/obs_mspdp8sj_c54e2a9feb47
tags: ["no-hook-subsystem", "file_edit"]
timestamp: 2026-08-12T00:56:22.720893+00:00
source: agentmemory
session_id: 20260811_193703_9f57d0
importance: 5
confidence: 0.9
---
# Summary

This Kilo build lacks hook subsystem. No `kilocode.hooks` setting, no hook events in the extension JS. Do not build hook-based capture; it will silently do nothing.

## Facts
- Installed Kilo extension: kilo-code.kilo-code-7.4.21-darwin-arm64
- Kilo globalStorage conversation store path: ~/Library/Application Support/Code/User/globalStorage/kilocode.kilo-code/tasks/<uuid>/

## Concepts
- no-hook-subsystem

## Files
- `/Users/davec/.vscode/extensions/kilocode.kilo-code-7.4.21-darwin-arm64/`
- `/Volumes/AI/*-kilo-hooks/*.sh`

_Importance: 5 · Confidence: 0.9_
