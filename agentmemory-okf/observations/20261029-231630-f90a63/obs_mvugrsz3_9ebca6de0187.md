---
type: file_edit
title: Check for client upgrade required
description: Updating Hermes client version
resource: agentmemory://observation/obs_mvugrsz3_9ebca6de0187
tags: ["client_upgrade_required", "file_edit"]
timestamp: 2026-10-30T04:20:18.923928+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 7
confidence: 1
---
# Summary

The script searched for client upgrade requirements in Hermes agent and found them in multiple locations within hermes_cli and tests.

## Facts
- Running command to check Hermes client version
- Checking upgrade required in hermes_cli/web_server_sessions.py:37
- Checking upgrade required in tests/hermes_cli/test_session_mutation_legacy_client.py:5

## Concepts
- client_upgrade_required

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_cli/web_server_sessions.py`

_Importance: 7 · Confidence: 1_
