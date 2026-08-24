---
type: file_write
title: Podman container operations skill
description: Troubleshooting podman containers on pve.root
resource: agentmemory://observation/obs_msr9jp72_0458899bea9a
tags: ["file_write"]
timestamp: 2026-08-13T08:35:37.929781+00:00
source: agentmemory
session_id: 20260813_030817_e27e49
importance: 7
confidence: 0.75
---
# Summary

The document explains common pitfalls to troubleshoot podman containers on pve.root, including cgroupv2 errors, stale static-IP pins, and hardcoded service IPs in app env vars.

## Facts
- Podman 5.x has a different behavior than older versions.
- Composing stacks uses bridge networks and restart policies must be specified.

_Importance: 7 · Confidence: 0.75_
