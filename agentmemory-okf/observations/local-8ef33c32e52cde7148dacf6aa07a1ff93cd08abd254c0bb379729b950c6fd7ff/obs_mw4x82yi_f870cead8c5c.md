---
type: CommandRun
title: Service Debugging
description: Debug local daemons with selective endpoint failures.
resource: agentmemory://observation/obs_mw4x82yi_f870cead8c5c
tags: ["ABI (Application Binary Interface)", "commandrun"]
timestamp: 2026-11-06T11:58:33.972537+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 8
confidence: 0.9
---
# Summary

This skill covers finding root cause in code. A local service responds on its port but specific endpoints fail. Restarting or rebuilding a service and the old symptom is unchanged. A native-module / ABI error appears in the service's stderr. The service is launched by launchd (~/Library/LaunchAgents/*.plist) or systemd.

## Facts
- The `systematic-debugging` skill covers finding root cause in code.
- This skill covers a different class: a long-running local service (Node/Python daemon under launchd/systemd, or any always-on local server) that is "up" but misbehaving — one endpoint 500s, a rebuild "worked" but the symptom persists, auth "should" be right but calls fail.

## Concepts
- ABI (Application Binary Interface)

## Files
- `/tmp/probe.py`
- `/tmp/probe.json`
- `/path/to/worker/bin`

_Importance: 8 · Confidence: 0.9_
