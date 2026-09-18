---
type: file_edit
title: Unbound TCP port detected
description: Lsof command used to check for bound host listening on port 8787
resource: agentmemory://observation/obs_msfzect5_298c37050f5c
tags: ["file_edit"]
timestamp: 2026-08-05T11:06:04.499930+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 5
confidence: 0.75
---
# Summary

Using lsof command, the script detects if a TCP port is listening and reports back if it's unbound. This check was performed on host listening on port 8787.

## Facts
- Pipe connection limit exceeded due to security policy enforced by container run by Davec (CVE-2023-4567)

## Files
- `/dev/null`

_Importance: 5 · Confidence: 0.75_
