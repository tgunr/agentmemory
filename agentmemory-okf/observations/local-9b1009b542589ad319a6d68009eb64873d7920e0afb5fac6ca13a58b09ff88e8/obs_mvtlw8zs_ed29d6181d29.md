---
type: file_edit
title: Prusa XL failed unit and logs analysis
description: Detailed analysis of Prusa XL failures and cleanup of Docker leftovers
resource: agentmemory://observation/obs_mvtlw8zs_ed29d6181d29
tags: ["Prusa XL failures", "file_edit"]
timestamp: 2026-10-29T13:55:58.210271+00:00
source: agentmemory
session_id: local-9b1009b542589ad319a6d68009eb64873d7920e0afb5fac6ca13a58b09ff88e8
importance: 7
confidence: 0.9
---
# Summary

Results of detailed analysis of Prusa XL failed units and cleaned up Docker leftovers, including updates to virtual environments.

## Facts
- Prusa-XL failed unit: <code>prusa-XL.service: Failed to send unit change signal for prusa-XL.service: Connection reset by peer</code>
- venvs pinned to 3.11: <code>/home/davec/OctoPrint/pyvenv.cfg /home/davec/venv/pyvenv.cfg /root/uvx_env/pyvenv.cfg /root/venv/pyvenv.cfg /opt/confluence-cli/pyvenv.cfg </code>

## Concepts
- Prusa XL failures

## Files
- `/var/log/syncoid*.log`

_Importance: 7 · Confidence: 0.9_
