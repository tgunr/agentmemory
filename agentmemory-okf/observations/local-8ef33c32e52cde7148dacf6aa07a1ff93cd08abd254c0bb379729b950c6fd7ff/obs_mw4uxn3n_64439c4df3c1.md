---
type: CommandRun
title: Execute custom command on remote system
description: Test script with multiple systemd commands
resource: agentmemory://observation/obs_mw4uxn3n_64439c4df3c1
tags: ["apparmor profiling", "systemd audits", "commandrun"]
timestamp: 2026-11-06T10:54:27.627247+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 6
confidence: 1
---
# Summary

Executed a custom command on a remote system using SSH, which ran multiple systemd commands to access audit messages and profile information. This is an important step in monitoring system activity and understanding apparmor behavior.

## Facts
- Profile loaded: apparmor/unconfined (multiple times)
- Cause of apparmor unconfined profile is not available
- Running process list
- Pid: 5210, comm: apparmor_parser
- Pid: 5349, comm: apparmor_parser
- Pid: 5353, comm: apparmor_parser

## Concepts
- apparmor profiling
- systemd audits

## Files
- ``

_Importance: 6 · Confidence: 1_
