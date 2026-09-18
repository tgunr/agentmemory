---
type: CommandRun
title: SSH command timeout via Netcat
description: Sent DNS query to 10.89.1.1:53
resource: agentmemory://observation/obs_msrb0r2k_f3ddd1c95e06
tags: ["dns_query", "commandrun"]
timestamp: 2026-08-13T09:16:53.124307+00:00
source: agentmemory
session_id: 20260813_034821_7a6336
importance: 4
confidence: 1
---
# Summary

The SSH command sent a DNS query to 10.89.1.1:53 timed out after 20 seconds.

## Facts
- Command: ssh pve.root 'timeout 10 podman exec docmost_docmost_1 node...
- Timeout: 20 seconds
- Exit Code: 1

## Concepts
- dns_query

_Importance: 4 · Confidence: 1_
