---
type: CommandRun
title: Check running worker processes and bundle endpoint presence
description: Diagnostic command to verify worker status and bundled code contains required endpoints
resource: agentmemory://observation/obs_mroqkhoe_a9f6faf7cdf9
tags: ["process monitoring", "bundle verification", "endpoint presence check", "commandrun"]
timestamp: 2026-07-17T09:29:07.449028+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

Executed diagnostic shell command to verify that a worker process is running and the bundled output file contains the required helper endpoints for recompress and observations-delete functionality. The bundle includes all expected endpoints confirming successful compilation.

## Facts
- Found running worker process pid=97282 in /Volumes/AI/agentmemory started 2026-07-17 04:28:48
- Bundle contains 2 occurrences of 'api::recompress' endpoint
- Bundle contains 2 occurrences of 'api::observations-delete' endpoint
- Bundle contains 10 occurrences of 'vectorIndexRemove' import
- Bundle file modified at 2026-07-17 04:28:56

## Concepts
- process monitoring
- bundle verification
- endpoint presence check

## Files
- `/Volumes/AI/agentmemory/dist/index.mjs`

_Importance: 5 · Confidence: 1_
