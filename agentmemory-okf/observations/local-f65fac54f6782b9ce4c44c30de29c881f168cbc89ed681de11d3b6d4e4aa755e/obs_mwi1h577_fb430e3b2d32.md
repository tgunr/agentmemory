---
type: file_edit
title: Integrate Kilo Code with AgentMemory and external systems.
description: No hook subsystem, no automatic per-message capture.
resource: agentmemory://observation/obs_mwi1h577_fb430e3b2d32
tags: ["hook subsystem", "file_edit"]
timestamp: 2026-11-15T16:18:35.536724+00:00
source: agentmemory
session_id: local-f65fac54f6782b9ce4c44c30de29c881f168cbc89ed681de11d3b6d4e4aa755e
importance: 8
confidence: 0.9
---
# Summary

This Kilo build has no hook subsystem. No `kilocode.hooks` setting, no `SessionStart`/`PreToolUse`/`PostToolUse` events in the extension. JS, no hook config file. Any `/Volumes/AI/*-kilo-hooks/*.sh` scripts are ORPHANED.

## Facts
- Installed extension: `kilocode.kilo-code-7.4.21-darwin-arm64’ (also 7.4.20 present).
- GlobalStorage (conversation store): `~/Library/Application Support/Code/User/globalStorage/kilocode.kilo-code/tasks/<uuid>/`

## Concepts
- hook subsystem

## Files
- `/Users/davec/.vscode/extensions/kilocode.kilo-code-7.4.21-darwin-arm64`

_Importance: 8 · Confidence: 0.9_
