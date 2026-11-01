---
type: FileRead
title: Rebooting Hermes Gateway
description: Analysis of gateway restart command failures
resource: agentmemory://observation/obs_mvx1wuqx_06f52034d9d0
tags: ["Lifecycle guard mechanism", "String-shape matching", "fileread"]
timestamp: 2026-10-31T23:47:38.787572+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 8
confidence: 0.9
---
# Summary

When attempting to restart a Hermes gateway, it triggers a lifecycle guard that prevents the command from executing. This guard only allows killing the gateway by numeric PID, not by name. This requires manual intervention to reboot the gateway successfully.

## Facts
- Rebooting a gateway triggers a lifecycle guard with string-shape matching
- The guard refuses any command that would restart the gateway due to SIGTERM propagation

## Concepts
- Lifecycle guard mechanism
- String-shape matching

## Files
- `/Volumes/davec/.../ai.hermes.gateway.plist`

_Importance: 8 · Confidence: 0.9_
