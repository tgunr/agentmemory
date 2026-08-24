---
type: CommandRun
title: RDP access through Mikrotik router
description: No DNS lookup required for static IP configuration
resource: agentmemory://observation/obs_msfzb45q_6d2e65d926fc
tags: ["VPN tunneling with hairpin", "commandrun"]
timestamp: 2026-08-05T11:03:33.322679+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 7
confidence: 0.9
---
# Summary

The tool executed a successful command on the Mikrotik router, setting up an RDP access via the router. The DNS static configuration was not queried as no changes were made.

## Facts
- Mikrotik hairpin VPN setup
- PVE remote management enabled via SSH

## Concepts
- VPN tunneling with hairpin

## Files
- `/ip firewall nat print`
- `/ip dns static print`
- `/ip firewall rules find where chain = dstnat action = masquerade protocol = udp dst-address = 98.96.55.218 in-interface = ether1 dst-port = 41641 head`

_Importance: 7 · Confidence: 0.9_
