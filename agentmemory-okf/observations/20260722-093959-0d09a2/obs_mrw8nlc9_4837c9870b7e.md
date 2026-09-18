---
type: file_write
title: Verify exporter and session docs with OKF frontmatter
description: Run the script in a tmp dir to verify its behavior and output.
resource: agentmemory://observation/obs_mrw8nlc9_4837c9870b7e
tags: ["file_write"]
timestamp: 2026-07-22T15:29:48.485886+00:00
source: agentmemory
session_id: 20260722_093959_0d09a2
importance: 8
confidence: 0.75
---
# Summary

The script exercises the real exporter against real state.db, checking output stats shape matches design contract. It also checks tool output against raw tool result boundaries. The operation resulted in creating 5966 bytes being written.

## Facts
- Exported .md files have <untrusted_tool_result>, including tool commands and results
- Number of leaked tool results: 0

## Files
- `/private/tmp/hermes-verify-okf-export.py`

_Importance: 8 · Confidence: 0.75_
