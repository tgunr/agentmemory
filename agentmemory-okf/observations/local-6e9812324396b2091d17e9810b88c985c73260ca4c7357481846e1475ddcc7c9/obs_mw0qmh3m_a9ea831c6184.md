---
type: file_write
title: Asterisk channel originate test
description: Terminal output and commands
resource: agentmemory://observation/obs_mw0qmh3m_a9ea831c6184
tags: ["PJSIP channels", "file_write"]
timestamp: 2026-11-03T13:42:43.469195+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 6
confidence: 0.9
---
# Summary

The script establishes a connection to the asterisk server, runs a command to create a channel, filters the output to extract relevant information, and reports any errors that occurred.

## Facts
- Command: ssh root@192.168.88.230 'asterisk -rx "channel originate PJSIP/voipms/17269991835 application Wait 12" 2>&1; ...'
- Timeout: 180 seconds

## Concepts
- PJSIP channels

## Files
- `/var/log/asterisk/full`

_Importance: 6 · Confidence: 0.9_
