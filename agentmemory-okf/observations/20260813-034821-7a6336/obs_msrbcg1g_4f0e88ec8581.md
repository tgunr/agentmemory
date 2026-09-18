---
type: CommandRun
title: Patch SKILL.md for podman-container-operations skill
description: Patch pitfall related to podman in-network DNS (aardvark)
resource: agentmemory://observation/obs_msrbcg1g_4f0e88ec8581
tags: ["aardvark-dns", "commandrun"]
timestamp: 2026-08-13T09:25:58.705101+00:00
source: agentmemory
session_id: 20260813_034821_7a6336
importance: 4
confidence: 1
---
# Summary

The skill 'podman-container-operations' was patched to fix a pitfall related to podman's in-network DNS (aardvark). The patch resolves a situation where app containers hang due to silent drops by the host firewall. To fix this, it's essential to check if a container can reach the gateway IP at all and verify whether there are issues with the host's input chain.

## Facts
- Proxmox `nftables.conf` `inet filter` `input` chain has policy drop and a catch-all drop.
- Podman 5 runs aardvark-dns as a direct process.
- Added accept rules for podman bridge interfaces in `/etc/nftables.conf` input chain.
- Restarted `dnsmasq` and podman-dns

## Concepts
- aardvark-dns

_Importance: 4 · Confidence: 1_
