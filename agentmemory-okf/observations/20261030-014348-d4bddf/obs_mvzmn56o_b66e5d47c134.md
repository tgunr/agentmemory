---
type: CommandRun
title: Offsite anchor sync command
description: No specific context found.
resource: agentmemory://observation/obs_mvzmn56o_b66e5d47c134
tags: ["zfs destroy", "commandrun"]
timestamp: 2026-11-02T19:03:30.028595+00:00
source: agentmemory
session_id: 20261030_014348_d4bddf
importance: 7
confidence: 0.9
---
# Summary

The offsite anchor sync command ran successfully, syncing several data sets from the offsite server. Unfortunately, there were some issues with deleting snapshots due to them being held. The command output includes several warning messages and error details.

## Facts
- zfs destroy commands failed with return code 256
- zfs hold commands result: alpha/sources@syncoid_pve_2026-11-02_12:48:54-GMT-06:00 being held

## Concepts
- zfs destroy

## Files
- `/root/offsite-anchor-sync.log`

_Importance: 7 · Confidence: 0.9_
