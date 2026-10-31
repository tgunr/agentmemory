---
type: file_edit
title: Python test failed due to database vulnerability
description: Hermes database update warned about WAL-reset corruption bug
resource: agentmemory://observation/obs_mvuhtpgl_c5b67159a27d
tags: ["SQL vulnerabilities", "WAL reset bug", "Hermes database", "file_edit"]
timestamp: 2026-10-30T04:49:47.297391+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 7
confidence: 1
---
# Summary

The test failed due to a database vulnerability, but Hermes-managed installs can be repaired.

## Facts
- Hermes manages an embeded database with vulnerability.
- Upgrade to newer SQLite version is advised.
- Hermes-managed installs can repair the embedded runtime.

## Concepts
- SQL vulnerabilities
- WAL reset bug
- Hermes database

## Files
- `/Users/davec/.hermes/hermes-agent/.venv/bin/python`
- `/Users/davec/.hermes/hermes-agent/.venv/bin/python -m pytest`
- `/Users/davec/.hermes/hermes-agent/.venv/bin/python -m pytest tests/gateway/test_session_profile_move_authority.py`

_Importance: 7 · Confidence: 1_
