---
type: FileRead
title: Network Infrastructure — MikroTik RouterOS
description: Exploring MikroTik RouterOS for networking tasks
resource: agentmemory://observation/obs_mw4tricd_3d68335ff714
tags: ["hairpin NAT", "fileread"]
timestamp: 2026-11-06T10:21:41.913892+00:00
source: agentmemory
session_id: local-17020a79dc39ed8c7b510be15fdf631f06bae1c7eb5f53a087637a499190e04a
importance: 4
confidence: 0.9
---
# Summary

Exploring MikroTik RouterOS for networking tasks, including port forwarding, firewall rules, and hairpin NAT, and verifying the presence of NAT rules via SSH.

## Facts
- SSH access: `ssh mikrotik` (alias in ~/.ssh/config)
- WAN-exposed services need **dst-nat + forward accept** at minimum, and optionally **hairpin NAT**

## Concepts
- hairpin NAT

_Importance: 4 · Confidence: 0.9_
