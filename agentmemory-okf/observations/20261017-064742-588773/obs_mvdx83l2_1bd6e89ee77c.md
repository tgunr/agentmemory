---
type: CommandRun
title: Stop syncoid-runner.timer with SSH
description: Command timed out without user response.
resource: agentmemory://observation/obs_mvdx83l2_1bd6e89ee77c
tags: ["Syncoid runner", "commandrun"]
timestamp: 2026-10-18T14:28:48.009982+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 4
confidence: 1
---
# Summary

The syncoid-runner.timer command timed out without user response, resulting in a blocked workflow.

## Facts
- Command: ssh pve.root 'systemctl stop syncoid-runner.timer syncoid.timer 2>&1; echo "exit=$?"'
- Workdir: /Users/davec/.hermes/profiles/systems/workspace/pveroot
- Timeout: 30 seconds

## Concepts
- Syncoid runner

_Importance: 4 · Confidence: 1_
