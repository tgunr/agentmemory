---
type: file_edit
title: "Debugging TCP issues" in network-infrastructure documentation
description: Investigation of Samba and SSH issues on Debian/PVE server
resource: agentmemory://observation/obs_mvt39d9x_c47aa15d3ee0
tags: ["nftables policy drop rule", "Samba", "SSH", "TCPPing", "netfilter", "file_edit"]
timestamp: 2026-10-29T05:14:17.584768+00:00
source: agentmemory
session_id: 20261029_001345_20e34b
importance: 8
confidence: 0.9
---
# Summary

The network-infrastructure documentation investigated a Debian/PVE server withTCP connectivity issues. The server was pingable but had all TCP ports timing out. Investigating the firewall, it was found that nftables had a catch-all policy drop rule that was silently dropping TCP packets.

## Facts
- Debian/PVE server has pingable host, but all TCP ports timeout
- nftables silently drops TCP packets on the server

## Concepts
- nftables policy drop rule
- Samba
- SSH
- TCPPing
- netfilter

## Files
- `references/nftables-silent-drop-debug.md`

_Importance: 8 · Confidence: 0.9_
