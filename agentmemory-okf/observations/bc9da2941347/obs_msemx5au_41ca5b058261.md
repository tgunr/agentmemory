---
type: file_edit
title: nftables-connectivity-debug tool usage
description: Diagnose and fix \"ping works but TCP hangs\" connectivity failures on Linux/Debian/Proxmox servers
resource: agentmemory://observation/obs_msemx5au_41ca5b058261
tags: ["Avahi/mDNS debugging", "file_edit"]
timestamp: 2026-08-04T12:29:00.045666+00:00
source: agentmemory
session_id: bc9da2941347
importance: 7
confidence: 0.9
---
# Summary

This observation documents the use of the nftables-connectivity-debug tool to diagnose and fix connectivity failures on Linux/Debian/Proxmox servers.

## Facts
- Nftables mid-chain catch-all drops, ruleset duplication from a missing flush, and Avahi/mDNS advertising unreachable container-bridge IPs.

## Concepts
- Avahi/mDNS debugging

## Files
- `/root/nftables.conf-bak-20260804T112900.454166`

_Importance: 7 · Confidence: 0.9_
