---
type: Observation
title: Patch failed with signal
description: Syncoid runner service failed with Result: signal
resource: agentmemory://observation/obs_mvdxwkao_691c5f6c0f91
tags: ["Systemd timer issue", "Syncoid runner service failure", "Systemd service status check", "observation"]
timestamp: 2026-10-18T14:47:49.434042+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 0.9
---
# Summary

Syncoid runner service failed with Result: signal. The timer stopped re-firing while the service stayed in failed state. Fix: systemctl reset-failed syncoid-runner.service, Truncate any runaway log, systemctl start syncoid-runner.timer, Watch one full run: systemctl status syncoid-runner.service. This issue caused local tank replication to stall.

## Facts
- Syncoid runner service failed with Result: signal

## Concepts
- Systemd timer issue
- Syncoid runner service failure
- Systemd service status check

## Files
- `/Users/davec/.hermes/profiles/systems/skills/devops/sanoid-syncoid-operations/SKILL.md`

_Importance: 7 · Confidence: 0.9_
