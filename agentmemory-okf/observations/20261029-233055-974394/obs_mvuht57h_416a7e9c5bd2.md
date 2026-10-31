---
type: file_edit
title: pytest fails tests/gateway/test_session_profile_move_authority.py::test_moves_the_lineage_and_archives_the_source
description: No test results were recorded after piping through tail
resource: agentmemory://observation/obs_mvuht57h_416a7e9c5bd2
tags: ["file I/O against real HerMES home", "use isolated HERMES_HOME or temporary fixture", "file_edit"]
timestamp: 2026-10-30T04:49:21.049693+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 7
confidence: 0.9
---
# Summary

The pytest test session failed when attempting to edit the lineage and archives of the source in tests/gateway/test_session_profile_move_authority.py. The process exited with code 0 due to piping the output through tail. The issue was related to the file I/O against the real HerMES home, and using an isolated HERMES_HOME or a temporary fixture is recommended.

## Facts
- Command used: cd /Users/davec/.hermes/hermes-agent && .venv/bin/python -m pytest tests/gateway/test_session_profile_move_authority.py -q 2>&1 | tail -25
- Process exited with code: 0

## Concepts
- file I/O against real HerMES home
- use isolated HERMES_HOME or temporary fixture

## Files
- `/Users/davec/.hermes/hermes-agent/../.git/modules/hermes-agent/hermes-update-pull`

_Importance: 7 · Confidence: 0.9_
