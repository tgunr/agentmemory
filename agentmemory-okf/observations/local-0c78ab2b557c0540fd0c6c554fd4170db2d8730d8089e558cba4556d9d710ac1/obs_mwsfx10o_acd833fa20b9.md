---
type: file_edit
title: nmap failed to scan subnets within 30 seconds
description: nmap command timed out
resource: agentmemory://observation/obs_mwsfx10o_acd833fa20b9
tags: ["nmap timeout", "nmap subnet scanning", "file_edit"]
timestamp: 2026-11-22T23:00:32.996824+00:00
source: agentmemory
session_id: local-0c78ab2b557c0540fd0c6c554fd4170db2d8730d8089e558cba4556d9d710ac1
importance: 5
confidence: 0.9
---
# Summary

nmap took over 30 seconds to scan the provided subnets, resulting in a timeout error

## Facts
- Timeout error for nmap command with subnets 192.168.0.0/24 and 192.168.100.0/24

## Concepts
- nmap timeout
- nmap subnet scanning

## Files
- `/Users/davec/.hermes/tools/python-3.14.9+20261021-darwin-arm64/lib/python3.14/subprocess.py`

_Importance: 5 · Confidence: 0.9_
