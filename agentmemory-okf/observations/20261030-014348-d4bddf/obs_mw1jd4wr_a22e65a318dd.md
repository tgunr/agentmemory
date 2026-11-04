---
type: CommandRun
title: Seeding offsite data
description: Retries on link drops, syncoid resumes from receive_resume_token
resource: agentmemory://observation/obs_mw1jd4wr_a22e65a318dd
tags: ["zfs send/receive", "syncoid", "resuming interrupted data seeding", "commandrun"]
timestamp: 2026-11-04T03:07:16.628354+00:00
source: agentmemory
session_id: 20261030_014348_d4bddf
importance: 5
confidence: 1
---
# Summary

Seeding offsite data using syncoid, resuming interrupted zfs send/receive from alpha/data to root@syncoid.polymicro.net:data1/data. The seeding process resumed after receiving a resume token.

## Facts
- Resuming interrupted zfs send/receive from alpha/data to root@syncoid.polymicro.net:data1/data
- Send/Receive from alpha/data@syncoid_pro.lan_2020-03-06:07:14:47 to root@syncoid.polymicro.net:data1/data
- Root@syncoid.polymicro.net:data1/data (~ 964.3 GB)

## Concepts
- zfs send/receive
- syncoid
- resuming interrupted data seeding

## Files
- `/root/offsite-data-seed.sh`

_Importance: 5 · Confidence: 1_
