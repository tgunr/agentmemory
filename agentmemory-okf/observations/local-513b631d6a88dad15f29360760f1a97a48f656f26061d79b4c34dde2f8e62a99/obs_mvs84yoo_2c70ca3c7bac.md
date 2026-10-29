---
type: FileRead
title: Proxmox VE host administration
description: Use when administering or upgrading a Proxmox VE host.
resource: agentmemory://observation/obs_mvs84yoo_2c70ca3c7bac
tags: ["PVEManagement", "fileread"]
timestamp: 2026-10-28T14:43:03.956726+00:00
source: agentmemory
session_id: local-513b631d6a88dad15f29360760f1a97a48f656f26061d79b4c34dde2f8e62a99
importance: 6
confidence: 0.9
---
# Summary

This command allows administering or upgrading a Proxmox VE host. It applies to fleet's hypervisor/storage hosts and uses the workspace/dossier for AGENTS.md. The user needs to confirm every claim against indextargets. Never trust the repo config; establish what apt actually fetches.

## Facts
- apt update / apt upgrade / apt dist-upgrade fails or user asks what an upgrade will do to a PVE host.
- Deciding between staying on current PVE major and crossing to the next one.

## Concepts
- PVEManagement

## Files
- `/root/apt-sources-archive-$(date +%F)`

_Importance: 6 · Confidence: 0.9_
