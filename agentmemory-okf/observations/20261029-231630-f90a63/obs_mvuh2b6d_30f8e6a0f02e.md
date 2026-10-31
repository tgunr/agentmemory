---
type: file_edit
title: Error with SSH token
description: 
resource: agentmemory://observation/obs_mvuh2b6d_30f8e6a0f02e
tags: ["SSH token management", "file_edit"]
timestamp: 2026-10-30T04:28:29.074569+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 0.9
---
# Summary

During execution of the python3 command, hermes failed due to an invalid SSH token, as the token was not found under the desktop-ssh directory.

## Facts
- Command to create token and serve hermes
- Command to run hermes

## Concepts
- SSH token management

## Files
- `/tmp/hprobe.tok`
- `/tmp/hprobe.log`

_Importance: 6 · Confidence: 0.9_
