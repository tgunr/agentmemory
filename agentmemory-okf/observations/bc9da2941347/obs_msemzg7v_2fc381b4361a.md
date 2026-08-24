---
type: file_edit
title: Debugging \"ping works, TCP is dead\" in Debian/PVE server
description: Samba and SSH issues resolved.
resource: agentmemory://observation/obs_msemzg7v_2fc381b4361a
tags: ["catch-all rule in NFTables", "nftables debugging", "file_edit"]
timestamp: 2026-08-04T12:30:47.511159+00:00
source: agentmemory
session_id: bc9da2941347
importance: 7
confidence: 0.9
---
# Summary

The author tested a hypothesis about network infrastructure without properly checking NFTables configuration, which caused issues with Samba and SSH. After checking the actual ruleset, they found an unconditional drop in the middle of the filter chain, leading to incorrect conclusions.

## Facts
- NFTables silent drop debugging mechanism used
- Iptables status mislead by default policy acceptance

## Concepts
- catch-all rule in NFTables
- nftables debugging

## Files
- `references/nftables-silent-drop-debug.md`

_Importance: 7 · Confidence: 0.9_
