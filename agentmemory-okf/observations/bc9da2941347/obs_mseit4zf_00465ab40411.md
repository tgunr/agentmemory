---
type: CommandRun
title: Solving a tricky firewall issue with the post-tool_call hook
description: Firing up nftables to uncover hidden drop rules
resource: agentmemory://observation/obs_mseit4zf_00465ab40411
tags: ["nftables", "commandrun"]
timestamp: 2026-08-04T10:33:54.546061+00:00
source: agentmemory
session_id: bc9da2941347
importance: 8
confidence: 0.9
---
# Summary

The system was experiencing issues, so we had to use the post-tool_call hook from Hermes. We ran some checks on the firewall but kept finding misleading outputs, leading us to check the nftables config instead.

## Facts
- The tool used was skill/manage and it performed a write_file action

## Concepts
- nftables

## Files
- `/Users/davec/.hermes/skills/productivity/network-infrastructure/references/nftables-silent-drop-debug.md`

_Importance: 8 · Confidence: 0.9_
