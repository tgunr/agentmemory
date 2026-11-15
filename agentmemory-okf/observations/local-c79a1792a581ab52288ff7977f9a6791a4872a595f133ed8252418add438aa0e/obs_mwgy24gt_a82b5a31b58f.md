---
type: file_edit
title: Terminal: Running Tests in hermes-agent
description: No specific line context available
resource: agentmemory://observation/obs_mwgy24gt_a82b5a31b58f
tags: ["pytest session debugging", "file_edit"]
timestamp: 2026-11-14T21:55:09.722576+00:00
source: agentmemory
session_id: local-c79a1792a581ab52288ff7977f9a6791a4872a595f133ed8252418add438aa0e
importance: 6
confidence: 0.9
---
# Summary

A debug issue was identified in the TUI Gateway test, which triggered a test run in the hermes-agent. The test revealed a potential issue with the debug profile, which needed additional validation.

## Facts
- A pytest session is run to test a specific code patch
- The pytest session is a debug session to diagnose an issue

## Concepts
- pytest session debugging

## Files
- `/private/var/tmp/hermes-pytest-501/r-73ek93rz/pytest-of-davec/pytest-0/test_debug0/repos/launch-scan`

_Importance: 6 · Confidence: 0.9_
