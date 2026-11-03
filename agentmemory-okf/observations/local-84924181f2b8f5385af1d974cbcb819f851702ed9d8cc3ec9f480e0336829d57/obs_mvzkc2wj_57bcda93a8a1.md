---
type: file_edit
title: Polymicro Network Setup
description: Network topology, routing, and 10GbE setup for mini/pro/pve/mikrotik
resource: agentmemory://observation/obs_mvzkc2wj_57bcda93a8a1
tags: ["file_edit"]
timestamp: 2026-11-02T17:58:54.634586+00:00
source: agentmemory
session_id: local-84924181f2b8f5385af1d974cbcb819f851702ed9d8cc3ec9f480e0336829d57
importance: 8
confidence: 0.85
---
# Summary

Polymicro Network Setup involves configuring network topology, routing, and 10GbE setup for mini/pro/pve/mikrotik. The setup includes bridged LAN/L2 domains and IP forwarding on pve.root. The setup also covers dnsmasq, VNC, and TCP tuning. Testing connectivity involves pinging each other via pve.root's forwarding.

## Facts
- MikroTik ether2 and ether3 are bridged (VLAN1), making 10.1.2.x and 192.168.88.x same L2 domain
- pve.root has `ip_forward=1`, routes between 10.1.1.0/24 and 10.1.2.0/24
- dnsmasq on pve.root provides DHCP on both 10.1.1.0/24 and 10.1.2.0/24

## Files
- `/Users/davec/.hermes/profiles/systems/skills/polymicro-network/POLYMICRO_NETWORK_Skill.md`

_Importance: 8 · Confidence: 0.85_
