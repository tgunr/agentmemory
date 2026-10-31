---
type: file_edit
title: Failed to load hermes profile projects
description: Command failed on host
resource: agentmemory://observation/obs_mvugoa6k_c727475a071e
tags: ["hermes", "ssh command", "file system search", "file_edit"]
timestamp: 2026-10-30T04:17:34.601260+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 8
confidence: 1
---
# Summary

The hermes profile projects database was not loaded correctly on the host. The output indicates that a file search was unsuccessful.

## Facts
- Timestamp: 2026-10-30T04:17:34.601260+00:00
- Command: ssh -o ConnectTimeout=6 -o BatchMode=yes pro.local 'hostname; ls ~/.hermes/profiles 2>/dev/null; echo ---; for p in ~/.hermes/projects.db ~/.hermes/profiles/*/projects.db; do echo \"== $p\"; sqlite3 \"$p\" \"select count(*) from projects;\" 2>/dev/null; done' 2>&1 | head -40
- Exit Code: 0
- Output:<br}/zsh:1: no matches found: /Users/davec/.hermes/profiles/*/projects.db<br>/

## Concepts
- hermes
- ssh command
- file system search

## Files
- `/Users/davec/.hermes/profiles/*/projects.db`
- `/Users/davec/.hermes/profiles`

_Importance: 8 · Confidence: 1_
