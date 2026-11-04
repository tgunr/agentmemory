---
type: Error
title: No existence of 'ivr-1' context
description: No context found for 'ivr-1' in the database.
resource: agentmemory://observation/obs_mw0q6qwn_ae20f92dee88
tags: ["dialplan", "error"]
timestamp: 2026-11-03T13:30:29.677597+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 8
confidence: 0.9
---
# Summary

The tool was used to remotely execute a SQL query, but it led to an error. The error was due to the column 'rvolume' being null in the INSERT INTO ivr_details query. Additionally, the tool was not able to find a context for 'ivr-1', which is required for the dailplan commands.

## Facts
- Permanently added '192.168.88.230' (ED25519) to the list of known hosts.
- Column 'rvolume' cannot be null in the INSERT INTO ivr_details query.

## Concepts
- dialplan

_Importance: 8 · Confidence: 0.9_
