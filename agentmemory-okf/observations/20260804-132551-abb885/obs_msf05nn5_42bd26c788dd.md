---
type: FileRead
title: HERMES Agent Command Test
description: Evaluating pyenv and HERMES HOME preset impact on default shell
resource: agentmemory://observation/obs_msf05nn5_42bd26c788dd
tags: ["pyenv", "fileread"]
timestamp: 2026-08-04T18:39:32.077236+00:00
source: agentmemory
session_id: 20260804_132551_abb885
importance: 5
confidence: 0.9
---
# Summary

A test command was executed using the terminal tool to evaluate the effect of the HERMES HOME preset on pyenv's behavior in a default shell.

## Facts
- Command executed by terminal: echo "message"; env -i ...;

## Concepts
- pyenv

## Files
- `/usr/bin/hermes`
- `/Users/davec/.hermes profiles/cc/hermes-agent/`
- `/Users/davec/.pyenv/shims/hermes/hermes-agent/`
- `/opt/homebrew/opt/pyenv/bin/hermes Agent`

_Importance: 5 · Confidence: 0.9_
