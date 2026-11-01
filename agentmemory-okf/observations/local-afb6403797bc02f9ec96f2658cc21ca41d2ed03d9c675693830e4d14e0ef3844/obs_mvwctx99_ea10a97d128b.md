---
type: file_edit
title: Running tests in hermes
description: No such test path tests/hermes_cli/test_commands_registry.py
resource: agentmemory://observation/obs_mvwctx99_ea10a97d128b
tags: ["cmd-line tool testing", "test automation", "file system commands", "file_edit"]
timestamp: 2026-10-31T12:05:31.673939+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 5
confidence: 1
---
# Summary

Running tests in hermes agent using command sequence. Output includes valid test path, error message.

## Facts
- cd to .hermes/hermes-agent
- ls tests/hermes_cli | grep -iE \"registry|slash\"
- run tests using run_tests.sh

## Concepts
- cmd-line tool testing
- test automation
- file system commands

## Files
- `/Users/davec/.hermes/hermes-agent`
- `/Users/davec/.hermes/hermes-agent/scripts/run_tests.sh`

_Importance: 5 · Confidence: 1_
