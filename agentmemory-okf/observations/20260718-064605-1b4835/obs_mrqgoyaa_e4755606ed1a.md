---
type: CommandRun
title: Hermes gateway run command failed - instance already running
description: Process exit code 1 due to existing gateway process (PID 17546)
resource: agentmemory://observation/obs_mrqgoyaa_e4755606ed1a
tags: ["Hermes gateway", "process management", "SSH tunnel", "commandrun"]
timestamp: 2026-07-18T14:28:11.790304+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The hermes gateway run command failed because an existing gateway instance (PID 17546) was already running. The system also detected an SSH tunnel process (PID 8167) running. The output suggests using 'hermes gateway restart', 'hermes gateway stop', or the '--replace' flag to resolve the conflict.

## Facts
- Command 'hermes gateway run' exited with code 1
- Gateway already running with PID 17546
- SSH tunnel already running with PID 8167
- System is macOS Darwin (ProductVersion 27.0, BuildVersion 26A5378n)
- Multiple IP addresses configured: 127.51.68.120, 10.1.2.7, 192.168.88.7

## Concepts
- Hermes gateway
- process management
- SSH tunnel

## Files
- `/var/run/com.apple.launchd.qRaa1fIHgm/org.xquartz`

_Importance: 5 · Confidence: 1_
