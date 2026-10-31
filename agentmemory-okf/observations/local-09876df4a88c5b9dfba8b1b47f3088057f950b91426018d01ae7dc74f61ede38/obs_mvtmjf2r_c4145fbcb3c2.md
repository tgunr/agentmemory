---
type: CommandRun
title: Check ZFS quotas and used space
description: Verify quota settings and snapshots
resource: agentmemory://observation/obs_mvtmjf2r_c4145fbcb3c2
tags: ["ZFS", "Quotas", "Snapshots", "commandrun"]
timestamp: 2026-10-29T14:13:59.179957+00:00
source: agentmemory
session_id: local-09876df4a88c5b9dfba8b1b47f3088057f950b91426018d01ae7dc74f61ede38
importance: 5
confidence: 1
---
# Summary

The script checked ZFS quotas and used space for several data pools.

## Facts
- Tool: terminal
- Command: ssh pve.root 'bash -s'\n'EOF'\necho "=== is it a quota rather than a full pool? ==="\n'timeout 12 ssh -o BatchMode=yes root@syncoid.polymicro.net...\n'EOF
- Command duration: 300 seconds
- Output:
- === is it a quota rather than a full pool? ===\nquota\tnone\nrefquota\tnone\navailable\tnoneB
- Exit code: 0
- Error: null

## Concepts
- ZFS
- Quotas
- Snapshots

_Importance: 5 · Confidence: 1_
