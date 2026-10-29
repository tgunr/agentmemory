---
type: file_edit
title: Reboot Timeline for Proxmox Host Administration
description: Systemd-analyze userspace figures are unreliable on long-uptime hosts
resource: agentmemory://observation/obs_mvt0zxpn_446c2b2c7c6f
tags: ["Systemd-analyze userspace figures", "Journal rotation", "Per-unit timestamps", "file_edit"]
timestamp: 2026-10-29T04:10:58.280258+00:00
source: agentmemory
session_id: 20261028_223908_69d0b0
importance: 6
confidence: 0.9
---
# Summary

Skills Manager alerted admin to potential flaw in using systemd-analyze to analyze reboot timelines; proposed patch to improve accuracy.

## Facts
- The journal rotates, causing &quot;systemd-analyze&quot; to report userspace times of weeks.
- The per-unit ActiveEnterTimestampMonotonic and dmesg -T wall clocks are journal-independent.

## Concepts
- Systemd-analyze userspace figures
- Journal rotation
- Per-unit timestamps

## Files
- `references/reboot-timeline.md`

_Importance: 6 · Confidence: 0.9_
