---
type: file_edit
title: Asterisk MySQL connection failed
description: RegISTRATION attempt to 'sip:fpbx@dallas1.voip.ms:5060' failed with 403
resource: agentmemory://observation/obs_mw0mlrqy_af4b349e3c2e
tags: ["asterisk registration", "Mysql connection failure", "file_edit"]
timestamp: 2026-11-03T11:50:12.150063+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 7
confidence: 0.9
---
# Summary

The tool execution resulted in a MySQL connection failure, preventing registration attempts to 'sip:fpbx@dallas1.voip.ms:5060'. The command was successful in performing a fwconsole reload and reload of the res_pjsip_outbound_registration module.

## Facts
- Total timeout exceeded for ssh root@192.168.88.230

## Concepts
- asterisk registration
- Mysql connection failure

## Files
- `/var/log/asterisk/full`

_Importance: 7 · Confidence: 0.9_
