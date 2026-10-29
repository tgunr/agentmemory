---
type: file_edit
title: systemd-service-triage
description: Use when a systemd unit crash-loops or must be parked.
resource: agentmemory://observation/obs_mvqwzicu_24837c35d097
tags: ["symlink", "file_edit"]
timestamp: 2026-10-27T16:43:07.562166+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 7
confidence: 0.9
---
# Summary

Use when a systemd unit crash-loops or must be parked. Before repairing anything, confirm the service belongs on this machine. Decode startup failures: often the issue lies in the path the service user cannot access.

## Facts
- Use when a systemd unit crash-loops or must be parked.
- A unit failing at startup looks identical whether the install is broken or the service was never meant to be here.

## Concepts
- symlink

## Files
- `/home/svcuser/override.conf`

_Importance: 7 · Confidence: 0.9_
