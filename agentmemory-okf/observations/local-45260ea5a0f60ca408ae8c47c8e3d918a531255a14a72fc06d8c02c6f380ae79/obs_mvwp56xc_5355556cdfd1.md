---
type: CommandRun
title: Unit Test Failure
description: Failed to run a unit test
resource: agentmemory://observation/obs_mvwp56xc_5355556cdfd1
tags: ["test_framework", "unit_testing", "commandrun"]
timestamp: 2026-10-31T17:50:12.806604+00:00
source: agentmemory
session_id: local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79
importance: 8
confidence: 0.9
---
# Summary

The test session policy verbs test failed. Running the command without piping the output to tail revealed a successful exit code, but the failure indicators in the output confirm the test failure. This is a critical issue with the test suite.

## Facts
- Command executed: cd ~/.hermes/hermes-agent && scripts/run_tests.sh tests/gateway/test_session_policy_verbs.py 2>&1 | tail -6
- Received output: {\"output\": \"FAILED tests/gateway/test_session_policy_verbs.py::test_session_reasoning_mutation_is_the_next_turns_reasoning\\nFAILED tests/gateway/test_session_policy_verbs.py::test_move_to_project_rehomes_the_policy_and_row_and_refuses_mid_turn\\n============================== 2 failed in 0.37s ===============================\\n\\n=== 1 file with test failures ===\\n  tests/gateway/test_session_policy_verbs.py  (2 tests failed)\", \"exit_code\": 0, \"error\": null, \"hint\": \"exit_code 0 here is the status of the last pipeline command (tail/head/cat/...), NOT of the command before the pipe -- and the output contains failure indicators. Treat this run as FAILED until proven otherwise: re-run the command WITHOUT the pipe (output is auto-truncated and the full text is saved to a file, so piping through tail/head is never needed) to get the real exit code.\"}

## Concepts
- test_framework
- unit_testing

_Importance: 8 · Confidence: 0.9_
