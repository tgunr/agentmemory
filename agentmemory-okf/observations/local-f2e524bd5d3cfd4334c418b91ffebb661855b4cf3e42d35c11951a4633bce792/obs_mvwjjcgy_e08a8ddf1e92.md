---
type: file_edit
title: db test
description: A vulnerability in projects.db has been detected
resource: agentmemory://observation/obs_mvwjjcgy_e08a8ddf1e92
tags: ["SQLite vulnerabilities", "Hermes database maintenance", "file_edit"]
timestamp: 2026-10-31T15:13:15.488513+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 8
confidence: 0.9
---
# Summary

A vulnerability in the embedded database has been discovered, prompting a potential upgrade to mitigate security risks.

## Facts
- SQLite 3.47.1 is vulnerable to the WAL-reset corruption bug
- The warning fires once per process per database

## Concepts
- SQLite vulnerabilities
- Hermes database maintenance

## Files
- `.hermes/state/gateway.heartbeat`

_Importance: 8 · Confidence: 0.9_
