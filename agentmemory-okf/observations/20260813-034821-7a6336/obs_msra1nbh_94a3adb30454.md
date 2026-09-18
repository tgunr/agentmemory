---
type: FileRead
title: polymicro-network skill documentation
description: PolyMicro Network setup and configuration
resource: agentmemory://observation/obs_msra1nbh_94a3adb30454
tags: ["React hooks", "SQL migration", "MikroTik routing", "fileread"]
timestamp: 2026-08-13T08:49:35.301518+00:00
source: agentmemory
session_id: 20260813_034821_7a6336
importance: 8
confidence: 1
---
# Summary

The skill documentation provided detailed network topology, routing, and 10GbE setup for mini/pro/pve/mikrotik. It also covered testing connectivity, TCP tuning, and screen sharing/vnc protocols.

## Facts
- MikroTik ether2 and ether3 are bridged (VLAN1)
- pve.root has ip_forward=1, routes between 10.1.1.0/24 and 10.1.2.0/24
- dnsmasq on pve.root provides DHCP on both 10.1.1.0/24 and 10.1.2.0/24

## Concepts
- React hooks
- SQL migration
- MikroTik routing

## Files
- `polymicro-network/SKILL.md`

_Importance: 8 · Confidence: 1_
