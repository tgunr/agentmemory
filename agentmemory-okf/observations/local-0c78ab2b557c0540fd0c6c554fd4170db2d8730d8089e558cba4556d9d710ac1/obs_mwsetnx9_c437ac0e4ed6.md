---
type: FileRead
title: Retrieve IP Address from Mikrotik Router
description: Using SSH command to gather network configuration
resource: agentmemory://observation/obs_mwsetnx9_c437ac0e4ed6
tags: ["ssh commands, IP address configuration, Mikrotik router", "fileread"]
timestamp: 2026-11-22T22:29:56.439966+00:00
source: agentmemory
session_id: local-0c78ab2b557c0540fd0c6c554fd4170db2d8730d8089e558cba4556d9d710ac1
importance: 6
confidence: 0.9
---
# Summary

The tool call to retrieve IP address from Mikrotik router was successful, allowing me to gather essential network configuration information.

## Facts
- Command executed: ssh mikrotik "ip address print" 2>&1
- Output: Flags: D - DYNAMIC; S - SLAVE\r\nColumns: ADDRESS, NETWORK, INTERFACE, VRF\r\n #    ADDRESS             NETWORK        INTERFACE  VRF \r\n;;; defconf\r\n0    192.168.88.1/24     192.168.88.0   bridge     main\r\n;;; Server network\r\n1  S 10.1.1.254/24       10.1.1.0       ether2     main\r\n;;; Link to 10.1.2.1\r\n2    10.1.2.254/24       10.1.2.0       bridge     main\r\n3 D  98.96.55.218/23     98.96.54.0     ether1     main\r\n;;; 192.168.0 network\r\n4  S 192.168.0.254/24    192.168.0.0    ether2     main\r\n;;; 192.168.100 network\r\n5  S 192.168.100.254/24  192.168.100.0  ether2     main

## Concepts
- ssh commands, IP address configuration, Mikrotik router

## Files
- `/dev/null`

_Importance: 6 · Confidence: 0.9_
