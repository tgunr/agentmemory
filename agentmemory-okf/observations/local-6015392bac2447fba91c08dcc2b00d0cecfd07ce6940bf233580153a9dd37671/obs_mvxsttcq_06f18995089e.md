---
type: FileRead
title: Network Infrastructure — MikroTik RouterOS
description: Configure MikroTik RouterOS for WAN service exposure and LAN–public IP connectivity
resource: agentmemory://observation/obs_mvxsttcq_06f18995089e
tags: ["hairpin NAT", "source NAT masquerade", "fileread"]
timestamp: 2026-11-01T12:21:06.643134+00:00
source: agentmemory
session_id: local-6015392bac2447fba91c08dcc2b00d0cecfd07ce6940bf233580153a9dd37671
importance: 9
confidence: 0.9
---
# Summary

This document provides guidance on configuring MikroTik RouterOS for WAN service exposure and LAN–public IP connectivity, including setting up destination NAT, forwarding filter, and hairpin NAT. These steps are necessary for the tester to reach the service using the public IP.

## Facts
- Redirects incoming WAN traffic to the internal host.
- Without masquerade, the internal server replies directly to the LAN client with source=<INTERNAL_IP>,

## Concepts
- hairpin NAT
- source NAT masquerade

_Importance: 9 · Confidence: 0.9_
