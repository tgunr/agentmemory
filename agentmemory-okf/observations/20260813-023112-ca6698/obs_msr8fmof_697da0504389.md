---
type: FileRead
title: Fix Hermes gateway BB crash-loop and any;-- echo.
description: 
resource: agentmemory://observation/obs_msr8fmof_697da0504389
tags: ["React hooks", "SyntaxError", "Sed", "Python AST", "fileread"]
timestamp: 2026-08-13T08:04:28.427973+00:00
source: agentmemory
session_id: 20260813_023112_ca6698
importance: 7
confidence: 0.9
---
# Summary

Two distinct failure modes present with the same symptom. The first involves the gateway crashing and CPU being pegged. This is caused by a corrupted platform adapter module having non-Python text prepended to line 1. After identifying the issue, a fix involves modifying the .py file specifically using `sed`, back up the original file, and execute Python with an AST parser.

## Facts
- Root cause: a platform adapter module under ~/.hermes/hermes-agent/gateway/platforms/ has been corrupted — non-Python text prepended to line 1 (seen: a .bashrc eval error trace).
- The supervisor reloads it, `import` hits SyntaxError, dies UNCLELY, relaunches.

## Concepts
- React hooks
- SyntaxError
- Sed
- Python AST

## Files
- `/~/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 7 · Confidence: 0.9_
