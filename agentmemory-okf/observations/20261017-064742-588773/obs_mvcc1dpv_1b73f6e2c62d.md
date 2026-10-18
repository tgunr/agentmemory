---
type: file_edit
title: Syncoid monitoring service output
description: No errors found during syncoid runner service run.
resource: agentmemory://observation/obs_mvcc1dpv_1b73f6e2c62d
tags: ["Syncoid monitoring", "Sanoid pruning", "file_edit"]
timestamp: 2026-10-17T11:47:56.462553+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 6
confidence: 0.9
---
# Summary

The syncoid-runner.service was run successfully, with an exit code of 0 and no errors reported. The sanoid-syncoid-monitor.service is failed but other services like sanoid-prune.timer and sanoid.timer are active.

## Facts
- Sanoid and Syncoid Monitoring Service is failed.

## Concepts
- Syncoid monitoring
- Sanoid pruning

## Files
- `/Users/davec/.hermes/profiles/systems/workspace/pveroot/systemd/system/sanoid-syncoid-monitor.service`

_Importance: 6 · Confidence: 0.9_
