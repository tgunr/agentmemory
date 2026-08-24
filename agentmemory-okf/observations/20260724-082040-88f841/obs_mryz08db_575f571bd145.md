---
type: FileRead
title: Lsof output
description: No context provided
resource: agentmemory://observation/obs_mryz08db_575f571bd145
tags: ["fileread"]
timestamp: 2026-07-24T13:23:00.567698+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 4
confidence: 0.75
---
# Summary

The tool 'lsof' was run to display information about open ports in process 42425.

## Facts
- lsof -nP -p 42425 -i -sTCP:LISTEN 2>/dev/null | grep LISTEN

## Files
- `/dev/null`
- `/Users/davec/.hermes/active-profile.json`

_Importance: 4 · Confidence: 0.75_
