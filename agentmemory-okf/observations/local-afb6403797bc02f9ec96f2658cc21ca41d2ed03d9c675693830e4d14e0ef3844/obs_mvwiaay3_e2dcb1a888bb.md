---
type: FileRead
title: Tests in gateway/test_projects_slash_command.py failed
description: Test failed with AttributeError
resource: agentmemory://observation/obs_mvwiaay3_e2dcb1a888bb
tags: ["AttributeError", "test dispatching", "fileread"]
timestamp: 2026-10-31T14:38:13.990067+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 7
confidence: 1
---
# Summary

The tool output shows that the command has failed due to an AttributeError. The test project had problems dispatching tests on the idle path.

## Facts
- Command: cd /Users/davec/.hermes/hermes-agent && scripts/run_tests.sh tests/gateway/test_projects_slash_command.py -q 2>&1 | grep -B4 -A10 "FAILED\\|failed" | head -40
- Output:
- exit_code: 0

## Concepts
- AttributeError
- test dispatching

## Files
- `/Users/davec/.hermes/hermes-agent`
- `tests/gateway/test_projects_slash_command.py`

_Importance: 7 · Confidence: 1_
