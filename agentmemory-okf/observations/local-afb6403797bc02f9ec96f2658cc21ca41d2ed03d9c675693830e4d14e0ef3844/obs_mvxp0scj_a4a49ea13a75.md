---
type: file_edit
title: Execute Code: Test Project Results
description: Code execution completed with 2 failed tests
resource: agentmemory://observation/obs_mvxp0scj_a4a49ea13a75
tags: ["test project", "test result summary", "file_edit"]
timestamp: 2026-11-01T10:34:33.472860+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 6
confidence: 1
---
# Summary

Execute a code snippet using the execute_code tool, which executes a specific test project. The output contains a summary of the test results, including the number of failed and passed tests. The test project execution completed successfully, with a total duration of 7.84 seconds.

## Facts
- Tool usage observation timestamp: 2026-11-01T10:34:33.472860+00:00
- Input code: from hermes_tools import terminal\npprint(terminal("cd /Users/davec/.hermes/hermes-agent && scripts/run_tests.sh tests/tui_gateway/test_projects_rpc.py -q 2>&1 | grep -E 'Summary|FAILED|passed' | head -4", timeout=420)[["output"]])
- Output: ║ FAILED tests/tui_gateway/test_projects_rpc.py::test_record_repos_writes_to_the_requested_profiles_projects_db\n  ║ FAILED tests/tui_gateway/test_projects_rpc.py::test_projects_without_a_profile_stay_on_the_launch_home\n  ║ 2 failed, 26 passed in 7.84s\n=== Summary: 1 files, 26 tests passed, 2 failed; FAILED: 1 of 1 file (100% complete) in 33.7s (10 workers) ===

## Concepts
- test project
- test result summary

_Importance: 6 · Confidence: 1_
