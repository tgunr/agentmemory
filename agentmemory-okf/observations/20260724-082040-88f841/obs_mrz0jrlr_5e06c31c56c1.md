---
type: file_edit
title: Fixed SKILL.md in skill 'hermes-workspace-context'
description: No sessions yet: matching cwd to session state instead of global terminal CWD
resource: agentmemory://observation/obs_mrz0jrlr_5e06c31c56c1
tags: ["desktop-cwd-profile-leak", "file_edit"]
timestamp: 2026-07-24T14:06:11.580129+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 7
confidence: 0.9
---
# Summary

Patched SKILL.md in skill 'hermes-workspace-context' with one replacement to fix mismatch between workspace session and global terminal CWD. Validates against PR #49153 and related issues.

## Facts
- Updated string: "- **Sidebar \"No sessions yet\" is a `cwd` match miss, not data loss.** A session's `cwd` is persisted to its `state.db` row ONLY when the user explicitly picks a workspace for it (`session.explicit_cwd`) ; merely *viewing* a project in the sidebar does not associate the new session. Sessions then get `cwd=NULL`/`/Users/davec` and group under \"No workspace.\" . Fix per-session (backfill `cwd`, or pick the workspace when creating) — do NOT pin global `terminal.cwd`
    as the fix, it forces every new session into that folder. Live-check with
     scripts/verify_project_sessions.py; root cause in references/projects-sidebar-and-consolidation.md .
    And: 
    Gateway `TERMINAL_CWD` leaks the *launch* profile'scwd on profile switch (PR #49153)
    ; symptom: "new sessions land on the wrong directory / a Samba mount", or
   the gateway process env shows `TERMINAL_CWD` at a non-home volume.
    Diagnose live:
     `ps eww -o command= -p $(pgrep -f 'hermes_cli.main serve') | tr ' '
     '\\n' | grep TERMINAL_CWD`.

## Concepts
- desktop-cwd-profile-leak

## Files
- `/Users/davec/SKILL.md`

_Importance: 7 · Confidence: 0.9_
