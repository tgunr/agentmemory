---
type: file_edit
title: Proxmox VE host administration
description: Use when administering or upgrading a Proxmox VE host.
resource: agentmemory://observation/obs_mvtnkqkz_b98e3ecf62ec
tags: ["apt cache policy", "repository health", "file_edit"]
timestamp: 2026-10-29T14:43:00.365446+00:00
source: agentmemory
session_id: local-da010cd1ff0767b269c13670d8ec208cf7305685b59cd89aff152388bdfd0dbe
importance: 6
confidence: 0.9
---
# Summary

To diagnose and resolve issues with a PVE host, ensure that the apt cache policy is up-to-date and verify the health of the repository, as stale repositories can cause issues.

## Facts
- The host is frozen and no apt command will move PVE.
- A healthy no-subscription repo is https://download.proxmox.com/debian/pve <codename> pve-no-subscription

## Concepts
- apt cache policy
- repository health

_Importance: 6 · Confidence: 0.9_
