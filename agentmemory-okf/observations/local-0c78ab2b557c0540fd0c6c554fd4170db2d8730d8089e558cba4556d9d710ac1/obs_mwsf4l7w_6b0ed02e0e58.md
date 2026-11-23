---
type: CommandRun
title: Run ssh ping command on Mikrotik
description: Test connection 192.168.0.100
resource: agentmemory://observation/obs_mwsf4l7w_6b0ed02e0e58
tags: ["packet loss", "commandrun"]
timestamp: 2026-11-22T22:38:26.153292+00:00
source: agentmemory
session_id: local-0c78ab2b557c0540fd0c6c554fd4170db2d8730d8089e558cba4556d9d710ac1
importance: 8
confidence: 0.9
---
# Summary

The agent ran an SSH command to ping 192.168.0.100 on Mikrotik, testing the connection and observing a packet loss of 100%.

## Facts
- Command executed: ssh mikrotik 'ping count=2 192.168.0.100' 2>&1
- Timeout set to 15 seconds

## Concepts
- packet loss

_Importance: 8 · Confidence: 0.9_
