---
type: file_edit
title: Retrieve AST logs
description: 
resource: agentmemory://observation/obs_mw0vsyrx_272ff59c0ceb
tags: ["SIP logs analysis", "file_edit"]
timestamp: 2026-11-03T16:07:44.392124+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 5
confidence: 0.9
---
# Summary

User executed SSH command to retrieve Asterisk logs, indicating potential authentication failure.

## Facts
- Command executed: ssh root@192.168.88.230 'grep -A14 "SIP/2.0 403 Forbidden" /var/log/asterisk/full | tail -16 | cut -c1-160'
- Output: "[2026-11-03 10:07:15] VERBOSE[245854] res_pjsip_logger.c: ... SIP request (422 bytes) to UDP:208.100.60.29:5060 --->

## Concepts
- SIP logs analysis

## Files
- `/var/log/asterisk/full`

_Importance: 5 · Confidence: 0.9_
