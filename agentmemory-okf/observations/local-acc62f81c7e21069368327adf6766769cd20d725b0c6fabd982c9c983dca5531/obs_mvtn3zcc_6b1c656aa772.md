---
type: file_edit
title: Proxmox VE host administration
description: Use when administering or upgrading a Proxmox VE host
resource: agentmemory://observation/obs_mvtn3zcc_6b1c656aa772
tags: ["apt package management", "Proxmox VE", "repo configuration", "host administration", "file_edit"]
timestamp: 2026-10-29T14:29:58.562124+00:00
source: agentmemory
session_id: local-acc62f81c7e21069368327adf6766769cd20d725b0c6fabd982c9c983dca5531
importance: 7
confidence: 0.9
---
# Summary

During Proxmox VE host administration, never trust the repo config and establish what apt actually fetches. Archive stale repo files, and confirm every claim against `apt-cache policy pve-manager`.

## Facts
- A host can look fully configured and still receive nothing.

## Concepts
- apt package management
- Proxmox VE
- repo configuration
- host administration

## Files
- `https://download.proxmox.com/debian/pve <codename> pve-no-subscription`

_Importance: 7 · Confidence: 0.9_
