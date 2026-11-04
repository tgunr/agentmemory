---
type: FileRead
title: Blob logs
description: asterisk output
resource: agentmemory://observation/obs_mw0ml5dk_6fbec45907ab
tags: ["sip registration", "fileread"]
timestamp: 2026-11-03T11:49:43.147162+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 8
confidence: 1
---
# Summary

Asterisk command executed to register device. Received response from VoIP server.

## Facts
- Command executed: ssh root@192.168.88.230
- Command executed: asterisk -rx "pjsip set logger on"
- Command executed: asterisk -rx "pjsip send register voipms"
- Command executed: sleep 6
- Command executed: asterisk -rx "pjsip set logger off"
- Command parsed: awk "/REGISTER sip/{c++} c>=1" /var/log/asterisk/full
- Command parsed: grep -A 22 "REGISTER sip:dallas1"
- Command parsed: tail -30

## Concepts
- sip registration

## Files
- `/var/log/asterisk/full`

_Importance: 8 · Confidence: 1_
