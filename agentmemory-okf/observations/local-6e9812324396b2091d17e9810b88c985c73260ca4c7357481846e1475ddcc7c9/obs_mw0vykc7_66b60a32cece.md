---
type: Observation
title: Terminal command executed
description: Command to reload PJSIP and log SIP messages
resource: agentmemory://observation/obs_mw0vykc7_66b60a32cece
tags: ["PJSIP reload", "observation"]
timestamp: 2026-11-03T16:12:05.619144+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 4
confidence: 0.9
---
# Summary

The tool executed a custom shell script in the terminal, reloading PJSIP and processing SIP messages. It exited with an error code of 0 and produced an output containing the results of the reload process.

## Facts
- Command: ssh root@192.168.88.230 'cat > /etc/asterisk/pjsip.endpoint_custom_post.conf <<CFG\n[voipms](+)\nsend_pai=yes\nsend_rpid=yes\nCFG\nchown asterisk:asterisk /etc/asterisk/pjsip.endpoint_custom_post.conf\nasterisk -rx \"pjsip reload\" >/dev/null 2>&1; sleep 2\nasterisk -rx \"pjsip set logger on\" >/dev/null\nL=$(wc -l < /var/log/asterisk/full)\nasterisk -rx \"channel originate Local/19364420811@from-internal application Wait 10\" >/dev/null 2>&1\nsleep 16; asterisk -rx \"pjsip set logger off\" >/dev/null\ntail -n +$L /var/log/asterisk/full | grep -E \"P-Asserted-Identity|Remote-Party-ID|SIP/2.0 (100|180|183|200|403|503)\" | head -6 | cut -c1-130'
- Output:\nWarning: Permanently added '192.168.88.230' (ED25519) to the list of known hosts.\r\nSIP/2.0 403 Forbidden\r\nSIP/2.0 200 OK"

## Concepts
- PJSIP reload

## Files
- `/etc/asterisk/pjsip.endpoint_custom_post.conf`

_Importance: 4 · Confidence: 0.9_
