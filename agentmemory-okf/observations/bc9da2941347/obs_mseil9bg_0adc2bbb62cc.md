---
type: file_edit
title: NFT command search with grep
description: SMB-TEST in nft chain filter input
resource: agentmemory://observation/obs_mseil9bg_0adc2bbb62cc
tags: ["NFT filtering", "SSH commands", "file_edit"]
timestamp: 2026-08-04T10:27:46.921222+00:00
source: agentmemory
session_id: bc9da2941347
importance: 8
confidence: 1
---
# Summary

User executed a command in the terminal to list SMB-TESTs in nft filter input, retrieved by SSH with BatchMode enabled.

## Facts
- Command: ssh -o BatchMode=yes pve.root 'nft -a list chain inet filter input 2>/dev/null | grep -c \"SMB-TEST\"' 2>&1 | grep -v xauth
- NFT output: 0
- Exit code: 0

## Concepts
- NFT filtering
- SSH commands

_Importance: 8 · Confidence: 1_
