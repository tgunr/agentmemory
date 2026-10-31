---
type: file_edit
title: CROKI &lt;3.4.2&gt;
description: dbdiag</subagent> setup failures in Wiki.js
resource: agentmemory://observation/obs_mvufyjb5_05bb12ffa32f
tags: ["Croki", "Wiki.js", "dbdiag", "file_edit"]
timestamp: 2026-10-30T03:57:33.370206+00:00
source: agentmemory
session_id: 20261029_220539_dbece7
importance: 7
confidence: 0.9
---
# Summary

Post execution check: DB configuration empty. Setup wizard running. DB connection successful, but failed to determine database version. Command was flagged. Upon re-run, CROKI setup &quot;pass&quot;.

## Facts
- Databse driver pg for postgres successfully connected
- ENOENT: no such file or directory, stat &apos;/wiki/assets/favicon.ico&apos;

## Concepts
- Croki
- Wiki.js
- dbdiag

## Files
- `/wiki/config.yml`
- `/wiki/assets/favicon.ico`

_Importance: 7 · Confidence: 0.9_
