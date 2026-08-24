---
type: CommandRun
title: Investigating plugin file structure - flat vs directory
description: Comparing old flat file plugin against newer directory-based plugin in Hermes
resource: agentmemory://observation/obs_mrqa7drz_293065e6c575
tags: ["plugin discovery", "file migration", "Hermes plugin system", "Python package structure (__init__.py)", "commandrun"]
timestamp: 2026-07-18T11:26:34.361181+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 4
confidence: 1
---
# Summary

Investigating whether the old flat-file plugin (agentmemory_observer.py) is still active or has been superseded by the newer directory-based version (agentmemory_observer/__init__.py). The directory version is newer and larger, suggesting it's the current implementation. The flat file appears only in historical session logs, not in active imports.

## Facts
- Flat file ./plugins/agentmemory_observer.py: mtime 2026-06-16 22:05, 3948 bytes
- Directory version ./plugins/agentmemory_observer/__init__.py: mtime 2026-07-17 19:21, 7785 bytes (newer, ~2x larger)
- Flat file only referenced in historical session JSON (webui/sessions/20260623_161004_1bf805.json), not in active code imports
- Command checks gateway.log for plugin discovery references to agentmemory_observer

## Concepts
- plugin discovery
- file migration
- Hermes plugin system
- Python package structure (__init__.py)

## Files
- `/Users/davec/.hermes/plugins/agentmemory_observer.py`
- `/Users/davec/.hermes/plugins/agentmemory_observer/__init__.py`
- `/Users/davec/.hermes/webui/sessions/20260623_161004_1bf805.json`
- `/Users/davec/.hermes/logs/gateway.log`

_Importance: 4 · Confidence: 1_
