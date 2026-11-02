---
type: file_edit
title: failed to set scsi target_id
description: terminal command failed on host
resource: agentmemory://observation/obs_mvxtcyzh_c0de60ef290c
tags: ["file_edit"]
timestamp: 2026-11-01T12:36:00.409009+00:00
source: agentmemory
session_id: local-a5f858b99df07dd6e818277c834ea26bdd3b907bd768b1cf3b5aff1a4ef291cd
importance: 7
confidence: 0.75
---
# Summary

The command to set the scsi target_id failed, despite the use of proper syntax. This could indicate an issue with the smp system, the target device, or the command execution

## Facts
- the command was run on host 'pve'
- the output was a series of failed commands from the mpt3sas_cm0 driver

## Files
- `/sys/devices/pci0000:80/0000:80:03.2/0000:82:00.0/host10/port-10:0/expander-10:0/port-10:0:11/end_device-10:0:11/scsi_target_id`
- `/sys/class/scsi_host/host10/scan`

_Importance: 7 · Confidence: 0.75_
