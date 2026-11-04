---
type: file_edit
title: Asterisk configuration tweak for voip-pbx
description: No changes applied
resource: agentmemory://observation/obs_mw143ily_cdd4f3e677f0
tags: ["PATCH command, APT packaging, VoIP PBX", "file_edit"]
timestamp: 2026-11-03T19:59:53.586662+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 7
confidence: 0.9
---
# Summary

A fail on the patch operation means we can't find the old_string in the file, we missed something important. Check the <a href="https://voip.ms/faq/subACCOUNT-001.html">sub-account documentation</a> for any details about the <a href="https://github.com/hermes-agent/debian-installer-v1.0.3">Hermes CLI</a>. Update the <code>from_user</code> as specified in <a href="https://github.com/hermes-agent/voipms-api/blob/main/api/sections/Trunk-Config.md#trunkconfig">section 6</a> of the <a href="https://github.com/hermes-agent/voipms-rest-api-1.1.0">VoIP MS API docs</a>.</code> See <a href="https://github.com/hermes-agent/debian-installer-v1.0.3">relevant installer logs</a> for troubleshooting step.

## Facts
- The old_string was the expected value in the file

## Concepts
- PATCH command, APT packaging, VoIP PBX

## Files
- `/usr/lib/shepherd/hermes-voip-pbx.service`

_Importance: 7 · Confidence: 0.9_
