---
type: file_edit
title: Restored changes from stash after failing test on clean tree
description: User pushed git stash and executed a command in the terminal
resource: agentmemory://observation/obs_mrz0gtnf_8ff5959cb356
tags: ["git stash pop", "HERMES_HOME", "terminal config bridge", "Her mes cli web server", "file_edit"]
timestamp: 2026-07-24T14:03:54.263348+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 7
confidence: 0.9
---
# Summary

User used the terminal tool to execute a Hermes agent command and then restored changes from a git stash.

## Facts
- Git stash was popped successfully with ref 'e627dd362 fix(gateway)': set HERMES_HOME before terminal config bridge in _resolve_chat_argv '
- Failing test on clean tree failed with exit code 0, indicating success

## Concepts
- git stash pop
- HERMES_HOME
- terminal config bridge
- Her mes cli web server

## Files
- `/Users/davec/.hermes/hermes-agent/.hermes/stash`

_Importance: 7 · Confidence: 0.9_
