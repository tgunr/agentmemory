---
type: file_edit
title: MikroTik RouterOS Port Forwarding Configuration
description: NAT rules and firewall setup for WAN-exposed services
resource: agentmemory://observation/obs_mwsf5738_6d49bb59a73a
tags: ["RouterOS port forwarding", "NAT and hairpin NAT", "file_edit"]
timestamp: 2026-11-22T22:38:54.493337+00:00
source: agentmemory
session_id: local-0c78ab2b557c0540fd0c6c554fd4170db2d8730d8089e558cba4556d9d710ac1
importance: 7
confidence: 0.9
---
# Summary

The MikroTik RouterOS configuration is used for setting up port forwarding and NAT rules for WAN-exposed services. This configuration includes destination NAT rule, forward filter accept rule, and hairpin NAT. These rules provide hairpin NAT and allow internal clients to reach the service using the public IP. The configuration also includes a forward filter for hairpin traffic.

## Facts
- Destination NAT rule redirects incoming WAN traffic to internal host
- Forward filter accept rule allows LAN-originating hairpin traffic

## Concepts
- RouterOS port forwarding
- NAT and hairpin NAT

## Files
- `/ip/nat/add`
- `/ip firewall/fILTER/add`

_Importance: 7 · Confidence: 0.9_
