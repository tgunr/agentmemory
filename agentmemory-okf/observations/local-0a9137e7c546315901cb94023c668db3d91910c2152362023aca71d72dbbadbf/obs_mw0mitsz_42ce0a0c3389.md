---
type: file_edit
title: Asterisk registration check
description: Error parsing expiration
resource: agentmemory://observation/obs_mw0mitsz_42ce0a0c3389
tags: ["pjsip_outbound_registration", "file_edit"]
timestamp: 2026-11-03T11:47:54.842873+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 7
confidence: 0.9
---
# Summary

The output of the `asterisk -rx` command contains error messages related to registration. The error occurs when parsing the `expiration= at line 20` of the configuration file.

## Facts
- Command: ssh root@192.168.88.230 'sleep 20; asterisk -rx "pjsip show registrations"; echo === log; grep -iE \"voip.ms|registration\" /var/log/asterisk(full)/ | tail -12"
- Output: WARNING: Permanently added '192.168.88.230' (ED25519) to...

## Concepts
- pjsip_outbound_registration

## Files
- `/var/log/asterisk/full`

_Importance: 7 · Confidence: 0.9_
