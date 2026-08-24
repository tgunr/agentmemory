---
type: file_edit
title: Symlink Target Mismatch Fix in SKILL.md
description: No sessions yet issue with cwd match miss
resource: agentmemory://observation/obs_mryzisvt_89a238a5af60
tags: ["Symlink Target Mismatch", "Profile Propagation in hermes desktop", "file_edit"]
timestamp: 2026-07-24T13:37:26.961770+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 7
confidence: 0.9
---
# Summary

The tool 'skill_manage' updated the 'SKILL.md' file to fix a Symlink Target Mismatch. This update ensures that the 'hermes-agent' symlink points to the correct venv location, preventing directory errors. Additionally, it addresses an issue with the 'No sessions yet' warning in the sidebar, ensuring proper session persistence.

## Facts
- The venv didn't exist at the symlink target on Linux installs.

## Concepts
- Symlink Target Mismatch
- Profile Propagation in hermes desktop

## Files
- `/home/davec/ai/hermes-agent`

_Importance: 7 · Confidence: 0.9_
