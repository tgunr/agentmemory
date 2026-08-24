---
type: file_edit
title: Linux Network Debugging Guide
description: Systematic debugging of Linux network connectivity, VLANs, bridges, and MikroTik integration.
resource: agentmemory://observation/obs_msra1nbe_da9b8087aa52
tags: ["MikroTik switch", "L2 connectivity", "ARP tables", "Bridge forwarding database", "file_edit"]
timestamp: 2026-08-13T08:49:35.297061+00:00
source: agentmemory
session_id: 20260813_034821_7a6336
importance: 4
confidence: 0.9
---
# Summary

Tool skill_view was used to display information related to Linux network debugging, including network topology discovery, ARP tables, bridge forwarding database, switch MAC table, physical connections, L2 connectivity, and bridge/VLAN configuration check.

## Facts
- Mapped Interface IPs and Routes on each Linux machine using ip addr show and ip route show
- Finding which interface a MAC is visible on using cat /proc/net/arp | grep -E "10.1.\" and bridge fdb show | grep MAC_ADDRESS

## Concepts
- MikroTik switch
- L2 connectivity
- ARP tables
- Bridge forwarding database

## Files
- `/usr/lib skill_view/linux-network-debugging skill.json`

_Importance: 4 · Confidence: 0.9_
