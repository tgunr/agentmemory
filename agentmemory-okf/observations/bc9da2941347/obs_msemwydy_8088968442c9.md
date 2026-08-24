---
type: Observation
title: Nftables Connectivity Patch Update
description: Fully restart nftables fixes
resource: agentmemory://observation/obs_msemwydy_8088968442c9
tags: ["nftables patches", "observation"]
timestamp: 2026-08-04T12:28:51.086607+00:00
source: agentmemory
session_id: bc9da2941347
importance: 5
confidence: 0.9
---
# Summary

The background curator is refusing the patch update for 'nftables-connectivity-debug' as its SKILL.md content has not been loaded, and it requires calling `skill_view(name)` or `skill_view(name, file_path=...)` to retrieve the content. The current string before update is "## Roaming laptops: use mDNS, not /etc/hosts". A fix involves granting Full Disk Access to `sshd-keygen-wrapper` for System Settings → Privacy & Security.

## Facts
- patch for skill 'nftables-connectivity-debug'
- background curator refusing patch

## Concepts
- nftables patches

_Importance: 5 · Confidence: 0.9_
