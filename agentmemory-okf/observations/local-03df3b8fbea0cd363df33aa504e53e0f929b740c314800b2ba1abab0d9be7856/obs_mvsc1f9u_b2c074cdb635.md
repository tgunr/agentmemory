---
type: file_edit
title: Install Python packages
description: Update Python packages via SSH
resource: agentmemory://observation/obs_mvsc1f9u_b2c074cdb635
tags: ["apt-get command", "file_edit"]
timestamp: 2026-10-28T16:32:17.276962+00:00
source: agentmemory
session_id: local-03df3b8fbea0cd363df33aa504e53e0f929b740c314800b2ba1abab0d9be7856
importance: 7
confidence: 0.9
---
# Summary

Tool 'terminal' executed command 'ssh pve.root...' to update Python packages.

## Facts
- Issued command: ssh pve.root 'DEBIAN_FRONTEND=noninteractive apt-get install -y --allow-downgrades python3-openssl=23.0.0-1 python3-cryptography=38.0.4-3+deb12u1 2>&1 | tail -6; echo; echo \"=== installed now ===\"; dpkg -l python3-openssl python3-cryptography python3-josepy 2>/dev/null | awk \"/^ii/{print \\$2, \\$3}\"; echo; echo \"=== certbot --version ===\"; certbot --version 2>&1 | tail -2'

## Concepts
- apt-get command

_Importance: 7 · Confidence: 0.9_
