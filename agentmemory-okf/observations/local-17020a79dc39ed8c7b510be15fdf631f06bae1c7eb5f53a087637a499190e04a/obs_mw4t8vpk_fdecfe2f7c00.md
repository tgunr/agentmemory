---
type: file_edit
title: auth failed
description: No authentication successful for Hermes
resource: agentmemory://observation/obs_mw4t8vpk_fdecfe2f7c00
tags: ["SSH_batch_mode", "file_edit"]
timestamp: 2026-11-06T10:07:12.773355+00:00
source: agentmemory
session_id: local-17020a79dc39ed8c7b510be15fdf631f06bae1c7eb5f53a087637a499190e04a
importance: 8
confidence: 0.9
---
# Summary

Tool: terminal, command: cd ~/.hermes/hermes-agent && grep -rn \"kind=auth-failed\\|connect to %s\\|BatchMode\" --include=*.py hermes_cli/ | head -20

## Facts
- BatchMode makes ssh fail instead of prompting
- SSH_ASKPASS and GIT_ASKPASS env vars are left alone

## Concepts
- SSH_batch_mode

## Files
- `/Users/davec/.hermes/hermes-agent/doctor_tools.py`

_Importance: 8 · Confidence: 0.9_
