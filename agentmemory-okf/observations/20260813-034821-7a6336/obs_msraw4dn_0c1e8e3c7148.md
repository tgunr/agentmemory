---
type: file_edit
title: NAT configuration
description: NAT rules updated on remote server.
resource: agentmemory://observation/obs_msraw4dn_0c1e8e3c7148
tags: ["NAT configuration", "file_edit"]
timestamp: 2026-08-13T09:13:17.094745+00:00
source: agentmemory
session_id: 20260813_034821_7a6336
importance: 6
confidence: 0.9
---
# Summary

The tool <highlight>terminal</highlight> ran the command <code>ssh pve.root 'echo "--- full NAT ---"; ... '</code> to update the NAT configuration on a remote server. This change has impacted the routing tables.

## Facts
- iptables -t nat -L
- -n/-v options used to print full routing and logging tables,
      as well as NAT policies in both table nat and the mangle table

## Concepts
- NAT configuration

## Files
- `/etc/iptables/rules.target`

_Importance: 6 · Confidence: 0.9_
