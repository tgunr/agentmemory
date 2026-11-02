---
type: file_edit
title: Failed tests
description: No successful runs found, all tests failed due to assertion errors.
resource: agentmemory://observation/obs_mvxpr29v_b2cff279c85c
tags: ["test failures", "file_edit"]
timestamp: 2026-11-01T10:54:59.391706+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 7
confidence: 0.9
---
# Summary

Test failure reported after running tests/agent/test_tmp_numctx_probe.py in a terminal session. The failures occurred within the test_hosted_route_ignores_the_local_knob, test_local_route_still_honours_it, and test_unset_base_url_ignores_it tests.

## Facts
- 3 failed in 0.42s

## Concepts
- test failures

## Files
- `/Users/davec/.hermes/hermes-agent/scripts/run_tests.sh`
- `/Users/davec/.hermes/hermes-agent/tests/agent/test_tmp_numctx_probe.py`

_Importance: 7 · Confidence: 0.9_
