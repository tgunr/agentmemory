---
type: file_edit
title: Test failed in terminal
description: Terminal test failure
resource: agentmemory://observation/obs_mvxp13yt_ffb7d8d35986
tags: ["AssertionError", "file_edit"]
timestamp: 2026-11-01T10:34:48.530462+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 8
confidence: 0.9
---
# Summary

Test failed due to assertion error in tests/tui_gateway/test_projects_rpc.py. The last pipeline command returned an exit code of 0 but the output contains failure indicators.

## Facts
- Test case: test_record_repos_writes_to_the_requested_profiles_projects_db
- Test case: test_projects_without_a_profile_stay_on_the_launch_home

## Concepts
- AssertionError

## Files
- `/Users/davec/.hermes/hermes-agent/scripts/run_tests.sh`
- `/Users/davec/.hermes/hermes-agent/Tests/tui_gateway/test_projects_rpc.py`

_Importance: 8 · Confidence: 0.9_
