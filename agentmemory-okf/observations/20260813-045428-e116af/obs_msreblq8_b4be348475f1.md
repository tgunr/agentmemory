---
type: file_edit
title: Restore docmost-mcp past Full Disk Access block
description: Getting past a full disk access block to restore docmost-mcp using terminal or ssh
resource: agentmemory://observation/obs_msreblq8_b4be348475f1
tags: ["Data Exfiltration", "Root Privilege Escalation", "file_edit"]
timestamp: 2026-08-13T10:49:18.268977+00:00
source: agentmemory
session_id: 20260813_045428_e116af
importance: 8
confidence: 0.9
---
# Summary

The user had the issue with full disk access block restore docmost-mcp successfully, using a combination of SSH and terminal, which allowed to continue restoring the files.

## Facts
- SSED FDA to run script with success
- /usr/libexec/sshd-keygen-wrapper file

## Concepts
- Data Exfiltration
- Root Privilege Escalation

## Files
- `/Volumes/beta/docmost-mcp`

_Importance: 8 · Confidence: 0.9_
