---
type: CommandRun
title: terminal command execution
description: Executing a command in the terminal
resource: agentmemory://observation/obs_mw0vok8a_b8844ff2d129
tags: ["asterisk", "commandrun"]
timestamp: 2026-11-03T16:04:18.909450+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 7
confidence: 1
---
# Summary

The tool <title>terminal</title> executed a series of <narrative>asterisk

## Facts
- Command: cd /tmp/voipboot && python3 vapi.py setSubAccount id=859050 callerid_number=7269991835 2>&1 | head -4
- Command: asterisk -rx \"pjsip set logger on\" >/dev/null; L=$(wc -l < /var/log/asterisk/full); asterisk -rx \"channel originate Local/19364420811@from-internal application Playback custom/ctc-test\" >/dev/null 2>&1;
- Command: asterisk -rx \"pjsip set logger off\" >/dev/null; tail -n +$L /var/log/asterisk/full | grep -E \"SIP/2.0|INVITE sip|From:|Reason\" | head -12 | cut -c1-180\"

## Concepts
- asterisk

_Importance: 7 · Confidence: 1_
