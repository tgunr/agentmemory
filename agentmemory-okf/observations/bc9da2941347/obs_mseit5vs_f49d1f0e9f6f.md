---
type: file_write
title: Mac SMB link failover analysis write
description: SMB file content related to Mac and private point-to-point link failures
resource: agentmemory://observation/obs_mseit5vs_f49d1f0e9f6f
tags: ["SMB and private point-to-point links", "Wi-Fi and LAN path redundancy", "`bridge` configuration issues", "file_write"]
timestamp: 2026-08-04T10:33:55.717177+00:00
source: agentmemory
session_id: bc9da2941347
importance: 8
confidence: 0.9
---
# Summary

Mac fails to connect to private point-to-point link leading to silent fallback via SMB. Investigating impact and potential fixes involved connecting Thunderbolt Ethernet adapter, verifying host identity, adding hosts entry for SMB mounts.

## Facts
- Dedicated-link failure detected, causing macOS to fall back to the LAN path
- Loss of NIC carrier on Thunderbolt Ethernet adapter leads to adapter physically being unplugged

## Concepts
- SMB and private point-to-point links
- Wi-Fi and LAN path redundancy
- `bridge` configuration issues

## Files
- `/Users/davec/.hermes/skills/productivity/network-infrastructure/references/mac-samba-link-failover.md`

_Importance: 8 · Confidence: 0.9_
