---
type: file_edit
title: Asterisk configuration modifications
description: No announcement required in Texas
resource: agentmemory://observation/obs_mw0vg1w1_4ce26ec1a2a2
tags: ["MixMonitor and Asterisk configuration", "file_edit"]
timestamp: 2026-11-03T15:57:41.899563+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 7
confidence: 0.9
---
# Summary

Asterisk configuration modifications were made to update the call recording policy for extensions 100 and 101, and ring group 600, in Texas. The changes include enabling Follow-Me off and removing the extension from the ring group. The modifications were confirmed to be working and also updated the file path and recording format.

## Facts
- A test call to ext 101 produced a confirmed working recording.
- Files previously stored in `/var/lib/asterisk/recordings/` now land in `/var/spool/asterisk/monitor/<Y>/<M>/<D>/` with the new file format.

## Concepts
- MixMonitor and Asterisk configuration

## Files
- `/Users/davec/Library/CloudStorage/Nextcloud-cloud.polymicro.net-Dave/CTC/VoIP-Phone-System.md`

_Importance: 7 · Confidence: 0.9_
