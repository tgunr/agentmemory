---
type: Observation
title: skill_manage tool failure
description: Failed to edit shell-command-patterns skill
resource: agentmemory://observation/obs_mvx1wjub_d520a52881cf
tags: ["batch abortion", "skill management", "failed operation", "observation"]
timestamp: 2026-10-31T23:47:24.655483+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 8
confidence: 0.9
---
# Summary

skill_manage operation failed to apply changes due to identical old and new strings. A batch abortion occurred, causing all updated skills to be rolled back.

## Facts
- Tool not successful
- Operation failed because old_string and new_string are identical

## Concepts
- batch abortion
- skill management
- failed operation

## Files
- `---\nname: shell-command-patterns\ndescription: Hardline blocklist? Write cmd to a file, run with bash.\n---\n\n# shell-command-patterns\n\nUse when any task needs to run bash/sh on the host: builds, installs, git, network probes, log inspection, diagnostics.\n\n## Trigger\nAbout to send a command to the `terminal` tool — particularly when it is multi-line, uses heredocs, loops, or is a large pipeline.\n\n## The terminal \"hardline\" blocklist and its recovery\nThe terminal tool rejects oversized or malformed ...`

_Importance: 8 · Confidence: 0.9_
