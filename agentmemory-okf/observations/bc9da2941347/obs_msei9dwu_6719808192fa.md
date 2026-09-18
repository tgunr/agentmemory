---
type: Observation
title: nft ruleset display
description: persistence mode configuration check
resource: agentmemory://observation/obs_msei9dwu_6719808192fa
tags: ["observation"]
timestamp: 2026-08-04T10:18:32.996888+00:00
source: agentmemory
session_id: bc9da2941347
importance: 5
confidence: 0.85
---
# Summary

A script executed to gather nft rules information, and then ran commands to display and persist nft rules for testing network setups. The goal is to utilize a consistent firewall setup on multiple instances.

## Facts
- Running the following nft ruleset command on a permissive PVE server:
- a list of firewall rules was generated
- The rp_filter flag settings were confirmed:
- rp_filter = 2 for all interfaces except eno1

_Importance: 5 · Confidence: 0.85_
