---
type: file_edit
title: Grep command on Hermes routes
description: Searching for project files in Hermes agent directory
resource: agentmemory://observation/obs_ms5z899f_bcc1b57a079c
tags: ["grep", "find command", "file_edit"]
timestamp: 2026-07-29T11:03:38.206986+00:00
source: agentmemory
session_id: 20260728_172854_00df48
importance: 5
confidence: 0.9
---
# Summary

The Hermes agent executed a grep command on files containing specific project names, and redirected its output.

## Facts
- Search command: grep -rn \"projects.tree\\|projects.list\" ~/.hermes/hermes-agent/src/routes/
- Redirect output: 2>/dev/null

## Concepts
- grep
- find command

## Files
- `/Users/davec/Projects/VoidBreath/.hermes/hermes-agent/src/routes/`

_Importance: 5 · Confidence: 0.9_
