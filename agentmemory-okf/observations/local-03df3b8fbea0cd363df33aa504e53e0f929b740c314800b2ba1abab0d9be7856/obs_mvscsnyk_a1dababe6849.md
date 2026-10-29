---
type: file_edit
title: Proxmox VE host administration
description: Use when administering or upgrading a Proxmox VE host.
resource: agentmemory://observation/obs_mvscsnyk_a1dababe6849
tags: ["Pve repository administration", "Proxmox VE command-line tools", "file_edit"]
timestamp: 2026-10-28T16:53:28.264306+00:00
source: agentmemory
session_id: local-03df3b8fbea0cd363df33aa504e53e0f929b740c314800b2ba1abab0d9be7856
importance: 7
confidence: 0.9
---
# Summary

This skill is used for administering or upgrading a Proxmox VE host. When to use this skill includes when `apt update` / `apt upgrade` / `apt dist-upgrade` fails, or the user asks what an upgrade will do to a PVE host, or when planning a reboot and needing the blast radius.

## Facts
- Apt update / Apt upgrade / Apt dist-upgrade fails.
- Deciding between staying on the current PVE major and crossing to the next one.

## Concepts
- Pve repository administration
- Proxmox VE command-line tools

## Files
- `https://download.proxmox.com/debian/pve <codename> pve-no-subscription`

_Importance: 7 · Confidence: 0.9_
