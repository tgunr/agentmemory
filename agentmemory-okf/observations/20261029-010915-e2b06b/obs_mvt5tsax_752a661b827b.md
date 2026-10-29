---
type: file_edit
title: nftables silent drop debug
description: Samba is broken/SSH is broken issue
resource: agentmemory://observation/obs_mvt5tsax_752a661b827b
tags: ["nftables configuration", "PV server configuration", "file_edit"]
timestamp: 2026-10-29T06:26:09.412999+00:00
source: agentmemory
session_id: 20261029_010915_e2b06b
importance: 7
confidence: 0.9
---
# Summary

Client reported Samba / SSH issues on Debian/PVE server; debugging revealed a catch-all drop rule in nftables causing the issue.

## Facts
- nftables rules may not indicate the actual firewall status
- Always check nftables before concluding there is no firewall

## Concepts
- nftables configuration
- PV server configuration

## Files
- `references/nftables-silent-drop-debug.md`

_Importance: 7 · Confidence: 0.9_
