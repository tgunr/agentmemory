---
type: file_edit
title: skill_view
description: network-infrastructure
resource: agentmemory://observation/obs_mw7wg1pm_8d03d03a1b53
tags: ["hairpin NAT", "port filtering", "file_edit"]
timestamp: 2026-11-08T14:00:04.515114+00:00
source: agentmemory
session_id: local-2b8acb7ac3eb9a1b9644aeae4b77fcabb7b001f9c5c685ddae8a7e1b13417617
importance: 7
confidence: 0.9
---
# Summary

Edited skill_view skill for network infrastructure. Verified NAT rules using `ssh mikrotik` and `ip firewall nat print`. Hairpin NAT required for LAN→public-IP access.

## Facts
- Critical firewall configuration details

## Concepts
- hairpin NAT
- port filtering

## Files
- `/skillView.json`

_Importance: 7 · Confidence: 0.9_
