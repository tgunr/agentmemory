---
type: file_edit
title: Apt sources configuration
description: Updating apt sources to include Debian, Proxmox, and more
resource: agentmemory://observation/obs_mvqwmbsa_ce2c421a1b8d
tags: ["apt sources configuration", "file_edit"]
timestamp: 2026-10-27T16:32:52.515991+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 5
confidence: 0.9
---
# Summary

Updated apt sources configuration to include various repositories, including Debian, Proxmox, and others. No changes detected in source files. Manager version: 8.2.7. Upgradable count by origin: 551.

## Facts
- Running command: ssh pve.root 'echo \"=== all apt sources (enabled) ===\"; grep -rhn \"^deb\" /etc/apt/sources.list /etc/apt/sources.list.d/ 2>/dev/null | sed \"s/\\[.*\\]//\"; echo; echo \"=== .sources files ===\"; ls /etc/apt/sources.list.d/*.sources 2>/dev/null || echo none; echo \"=== subscription ===\"; pveversion -v | grep -iE \"manager|subscription\"; echo \"=== upgradable count by origin ===\"; apt list --upgradable 2>/dev/null | tail -n +2 | wc -l'

## Concepts
- apt sources configuration

## Files
- `/etc/apt/sources.list`

_Importance: 5 · Confidence: 0.9_
