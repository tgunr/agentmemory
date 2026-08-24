---
type: file_edit
title: Patch SKILL.md for hermes-workspace-context skill
description: No changes other than patching a broken shell hook fix for desktop GUI profile switching issues
resource: agentmemory://observation/obs_mrz0jqsr_9e70f50d551d
tags: ["file_edit"]
timestamp: 2026-07-24T14:06:10.534472+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 4
confidence: 0.75
---
# Summary

Patched SKILL.md to fix a bug in the shell hook that caused issue with profile switching on desktop GUI. Fixed by updating the shell init script to handle HERMES_HOME correctly, ensuring the process inherits the correct CWD when using a terminal bridge.

## Facts
- Patched SKILL.md in skill 'hermes-workspace-context' (1 replacement).
- SUCCESSFUL: Updated shell script for correct HERMES_HOME handling.

## Files
- `/Users/davec/.hermes/config.yaml`
- `/Users/davec/.hermes/scripts/profile_cwd_sync.sh`

_Importance: 4 · Confidence: 0.75_
