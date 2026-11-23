---
type: FileRead
title: Terminal output of "ip route print" command
description: Mikrotik router IP routing table
resource: agentmemory://observation/obs_mwsdt1wt_4fcd5c45d735
tags: ["IP routing table", "fileread"]
timestamp: 2026-11-22T22:01:28.297666+00:00
source: agentmemory
session_id: local-0c78ab2b557c0540fd0c6c554fd4170db2d8730d8089e558cba4556d9d710ac1
importance: 4
confidence: 0.9
---
# Summary

The command "ssh mikrotik \"ip route print\" 2>&1" was run on the terminal, resulting in the retrieval of the Mikrotik router's IP routing table.

## Facts
- ssh mikrotik "ip route print" 2>&1 returned the following output:
- Flags: D - DYNAMIC; A - ACTIVE; c - CONNECT, d - DHCP 
      Columns: DST-ADDRESS, GATEWAY, ROUTING-TABLE, DISTANCE

## Concepts
- IP routing table

## Files
- `./output.log`

_Importance: 4 · Confidence: 0.9_
