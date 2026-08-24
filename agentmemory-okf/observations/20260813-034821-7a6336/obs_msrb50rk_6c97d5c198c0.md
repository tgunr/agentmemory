---
type: CommandRun
title: NFT command execution on PVE root
description: Outputted nft chain inet filter input | grep -nE \"podman|veth|drop|policy|accept\"
resource: agentmemory://observation/obs_msrb50rk_6c97d5c198c0
tags: ["NFT rule filter", "SSH command execution", "commandrun"]
timestamp: 2026-08-13T09:20:12.317006+00:00
source: agentmemory
session_id: 20260813_034821_7a6336
importance: 5
confidence: 0.9
---
# Summary

The tool 'ssh' was used to execute an nft (Network File Table) command on the PVE root. The output showed a list of nft rules for filter hooks input, policy drop, state related accept, and other detailed filter configurations.

## Facts
- Pve.root: NFT filter output for a specific substring, drop action included
- Nighty: nft command executed successfully with no runtime errors

## Concepts
- NFT rule filter
- SSH command execution

## Files
- `/sys/fs/nfset/rule/pve root nftfilter.pvd`

_Importance: 5 · Confidence: 0.9_
