---
type: file_edit
title: Failed Units and Services Report
description: Terminal terminal.
resource: agentmemory://observation/obs_mw4u81nc_f0c7c619557d
tags: ["systemctl", "file_edit"]
timestamp: 2026-11-06T10:34:33.427415+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 5
confidence: 0.9
---
# Summary

The tool output shows a list of failed units and services, including a total of 37 failed services, with only a few active services. Additionally, the grep command found a mention of \"zfs\" in the /etc/containers/storage.conf file.

## Facts
- systemctl list-units --failed --no-pager --no-legend 2>&1
- grep -n -A6 \"zfs\" /etc/containers/storage.conf 2>&1 | head -40

## Concepts
- systemctl

_Importance: 5 · Confidence: 0.9_
