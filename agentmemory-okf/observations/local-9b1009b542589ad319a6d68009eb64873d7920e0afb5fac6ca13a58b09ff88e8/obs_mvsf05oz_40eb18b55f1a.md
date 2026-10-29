---
type: file_edit
title: Normalise package lists
description: No specific context provided
resource: agentmemory://observation/obs_mvsf05oz_40eb18b55f1a
tags: ["package normalisation", "dependency resolution", "file_edit"]
timestamp: 2026-10-28T17:55:17.070669+00:00
source: agentmemory
session_id: local-9b1009b542589ad319a6d68009eb64873d7920e0afb5fac6ca13a58b09ff88e8
importance: 8
confidence: 1
---
# Summary

During a terminal script, a dry run was performed and results showed breaking changes due to dependency issues

## Facts
- The following packages have unmet dependencies:
- libpve-rs-perl : Breaks: libpve-network-perl (< 1.4.0) but 0.11.3 is to be installed
- libpve-rs-perl : Breaks: pve-ha-manager (< 5.0.6~~) but 4.0.7 is to be installed
- python3-zstandard : Depends: libzstd1 (< 1.5.8~) but 100:1.5.7-1 is to be installed

## Concepts
- package normalisation
- dependency resolution

## Files
- `/root/normalise.sh`

_Importance: 8 · Confidence: 1_
