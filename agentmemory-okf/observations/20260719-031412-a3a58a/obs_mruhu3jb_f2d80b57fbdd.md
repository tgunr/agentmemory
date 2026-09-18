---
type: file_edit
title: Detailed error report from npm test results
description: No documented REST endpoint counts match registered API paths in the current MCP tool.
resource: agentmemory://observation/obs_mruhu3jb_f2d80b57fbdd
tags: ["npm test errors", "file_edit"]
timestamp: 2026-07-21T10:11:16.192183+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 8
confidence: 0.9
---
# Summary

The test failed to accurately report that expected and registered counts are different. It's a good reminder to verify the information obtained from tools.

## Facts
- Ashrita was incorrect about REST endpoints.
- There are 130 endpoints on port but not enough for documented API count.

## Concepts
- npm test errors

## Files
- `/Volumes/AI/agentmemory/test/consistency.test.ts`

_Importance: 8 · Confidence: 0.9_
