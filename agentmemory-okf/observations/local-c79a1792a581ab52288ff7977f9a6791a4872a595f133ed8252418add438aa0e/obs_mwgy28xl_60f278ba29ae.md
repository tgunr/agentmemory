---
type: file_edit
title: Grep command in Hermes cli
description: Search for def get_active_profile_name in hermes_cli/profiles.py
resource: agentmemory://observation/obs_mwgy28xl_60f278ba29ae
tags: ["Hermes cli", "file_edit"]
timestamp: 2026-11-14T21:55:15.510725+00:00
source: agentmemory
session_id: local-c79a1792a581ab52288ff7977f9a6791a4872a595f133ed8252418add438aa0e
importance: 7
confidence: 1
---
# Summary

The hook post_tool_call executed a grep command in the Hermes cli tool. The output contained the definition of the get_active_profile_name function.

## Facts
- Command: `cd /Users/davec/.hermes/hermes-agent && grep -n 'def get_active_profile_name' -A30 hermes_cli/profiles.py`
- Output: `1977:def get_active_profile_name() -> str:\n1978-    ...`
- Exit code: 0

## Concepts
- Hermes cli

## Files
- `/Users/davec/.hermes/hermes-agent/hermes_cli/profiles.py`

_Importance: 7 · Confidence: 1_
