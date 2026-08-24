---
type: Observation
title: terminal
description: {"command":"B=http://127.0.0.1:3111\nSECRET=\"$(grep '^AGENTMEMORY_SECRET=' ~/.agentmemory/.env 2>/dev/null | head -1 |…
resource: agentmemory://observation/obs_mrtd23o3_ec181549e07d
tags: ["observation"]
timestamp: 2026-07-20T15:09:45.358589+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"command":"B=http://127.0.0.1:3111\nSECRET=\"$(grep '^AGENTMEMORY_SECRET=' ~/.agentmemory/.env 2>/dev/null | head -1 | cut -d= -f2-)\"\nAUTH=\"Authorization: Bearer $SECRET\"\necho \"### flags: AUTO_COMPRESS now off? ###\"\ncurl -s -H \"$AUTH\" --max-time 10 \"$B/agentmemory/config/flags\" \\\n | python3 -c \"import sys,json; d=json.load(sys.stdin); \nfor f in d['flags']:\n    if f['key'] in ('A…

_Importance: 5 · Confidence: 0.3_
