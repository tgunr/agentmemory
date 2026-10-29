---
type: Observation
title: proxmox-host-administration
description: BMC and IPMI out-of-band access
resource: agentmemory://observation/obs_mvs751rr_b8ce9ffe67e4
tags: ["IPMI-over-LAN", "BMC out-of-band access", "observation"]
timestamp: 2026-10-28T14:15:08.339385+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 8
confidence: 0.9
---
# Summary

The output provides detailed instructions for establishing BMC out-of-band access using ipmitool, including network configuration and reachability checks.

## Facts
- Establishing BMC out-of-band access is crucial for major host upgrades.
- The host's BMC MAC must be compared to the host NIC MACs to determine reachability.

## Concepts
- IPMI-over-LAN
- BMC out-of-band access

## Files
- `references/bmc-out-of-band-access.md`

_Importance: 8 · Confidence: 0.9_
