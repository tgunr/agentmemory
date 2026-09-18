---
type: file_edit
title: Critical skill context update in SKILL.md
description: Noeline modification impact.
resource: agentmemory://observation/obs_msf373ac_dec9abb68e23
tags: ["Gateway `TERMINAL_CWD` leaks", "CV WD on profile switch", "Samba mount", "PR #49153", "file_edit"]
timestamp: 2026-08-04T20:04:37.855886+00:00
source: agentmemory
session_id: 20260804_142737_5ff3c4
importance: 7
confidence: 0.9
---
# Summary

Updated skill context with a single line change impacting terminal settings. This fix mitigates the identified error within one of our active projects.

## Facts
- Delta of 1 replacement made to skill 'hermes-workspace-context': Patch SKILL.md.
- Patched text includes warning about leaked cwd on profile switch PR #49153.

## Concepts
- Gateway `TERMINAL_CWD` leaks
- CV WD on profile switch
- Samba mount
- PR #49153

## Files
- `/project/skill/SKILL.md`

_Importance: 7 · Confidence: 0.9_
