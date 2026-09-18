---
type: file_edit
title: Hermes project file search
description: Search for and list project files in hermes profiles.
resource: agentmemory://observation/obs_ms5z2yw8_6c78a3725bea
tags: ["file search", "hermes profiles", "file_edit"]
timestamp: 2026-07-29T10:59:31.493664+00:00
source: agentmemory
session_id: 20260728_172854_00df48
importance: 5
confidence: 0.9
---
# Summary

The user searched for the project file in hermes profiles and received a list of multiple matching files. This operation is important as it shows file search functionality within hermes.

## Facts
- Search command: find /Users/davec/.hermes -name "projects.py" 2>/dev/null; find /Users/davec/.hermes/profiles/develop/skills -name "projects*" 2>/dev/null | head -5
- Output files: /Users/davec/.hermes/profiles/personal/skills/productivity/projects/scripts/projects.py, ...

## Concepts
- file search
- hermes profiles

## Files
- `/Users/davec/.hermes/profiles/personal/skills/productivity/projects/scripts/projects.py`

_Importance: 5 · Confidence: 0.9_
