---
type: file_edit
title: Testing and compilation
description: Running tests in the Hermes CLI
resource: agentmemory://observation/obs_mwgy39lg_1273e11c78ef
tags: ["Testing frameworks", "file_edit"]
timestamp: 2026-11-14T21:56:03.026119+00:00
source: agentmemory
session_id: local-c79a1792a581ab52288ff7977f9a6791a4872a595f133ed8252418add438aa0e
importance: 8
confidence: 0.9
---
# Summary

Running tests in the Hermes CLI using the `run_tests.sh` script results in compilation of the `cua-driver` and `chromium` tools. The test run fails due to the non-existent test path `tests/hermes_cli/test_desktop_i18n_keys.py

## Facts
- Tool: terminal
- Command: cd /Users/davec/.hermes/hermes-agent && scripts/run_tests.sh tests/tui_gateway/contracts/test_generated.py tests/hermes_cli/test_desktop_i18n_keys.py tests/hermes_cli/test_aux_config.py -q 2>&1 | tail -8

## Concepts
- Testing frameworks

## Files
- `/Users/davec/.hermes/hermes-agent`

_Importance: 8 · Confidence: 0.9_
