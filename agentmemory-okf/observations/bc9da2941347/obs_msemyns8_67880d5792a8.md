---
type: CommandRun
title: Post-Tool Call: skill_view - network-infrastructure
description: Networking tasks and MikroTik RouterOS configuration details.
resource: agentmemory://observation/obs_msemyns8_67880d5792a8
tags: ["Mikrotik RouterOS", "NAT (Network Address Translation)", "Firewall configuration", "commandrun"]
timestamp: 2026-08-04T12:30:10.658687+00:00
source: agentmemory
session_id: bc9da2941347
importance: 6
confidence: 1
---
# Summary

The skill_view tool provided detailed output about MikroTik RouterOS network configuration and tasks, including port forwarding, firewall rules, and hairpin NAT setup. These configurations are crucial for exposing WAN services on the public interface while maintaining internal client connectivity.

## Facts
- MikroTik RouterOS port forwarding, firewall rules, hairpin NAT, WAN service exposure, nftables host-firewall debugging.
- DST-NAT + forward accept for WAN-exposed services
- Hairpin NAT with src-nat masquerade for LAN access via public IP

## Concepts
- Mikrotik RouterOS
- NAT (Network Address Translation)
- Firewall configuration

_Importance: 6 · Confidence: 1_
