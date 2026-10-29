---
type: file_edit
title: Service Debugging
description: Debug local daemons with selective endpoint failures.
resource: agentmemory://observation/obs_mvt398qi_02c6baeee883
tags: ["systematic-debugging", "launchd-grounded-truth-probe", "file_edit"]
timestamp: 2026-10-29T05:14:11.701974+00:00
source: agentmemory
session_id: 20261029_001345_20e34b
importance: 4
confidence: 0.9
---
# Summary

Rebuilding native modules and validating the service's runtime were done to resolve the issue. This was done to ensure that the binary's mtime moves and that the `node -e "require('<mod>')"` succeeds under the worker's node.

## Facts
- Rebuilding native modules against the worker's bin successfully.
- The agent's own shell can lie about a service's runtime.

## Concepts
- systematic-debugging
- launchd-grounded-truth-probe

## Files
- `/path/to/worker/bin`

_Importance: 4 · Confidence: 0.9_
