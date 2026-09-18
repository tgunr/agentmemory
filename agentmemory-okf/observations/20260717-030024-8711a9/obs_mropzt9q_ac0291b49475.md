---
type: Error
title: skill_manage write_file failed - incorrect parameter name
description: Tool expected 'file_content' but received 'content' parameter
resource: agentmemory://observation/obs_mropzt9q_ac0291b49475
tags: ["tool_parameter_validation", "file_write_error", "error"]
timestamp: 2026-07-17T09:13:02.697579+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 0.9
---
# Summary

The skill_manage tool's write_file action failed due to incorrect parameter naming. The input provided 'content' but the tool expected 'file_content', resulting in a validation error and no file being written.

## Facts
- Tool: skill_manage with action 'write_file'</file>
    <fact>File path: scripts/observation-count-report.py</file>
    <fact>Error: "file_content is required for 'write_file'"

## Concepts
- tool_parameter_validation
- file_write_error

## Files
- `scripts/observation-count-report.py`

_Importance: 5 · Confidence: 0.9_
