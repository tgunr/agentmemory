---
type: file_edit
title: Curled search query output
description: API call to VoIP.ms
resource: agentmemory://observation/obs_mvzsky83_f5a2a7ae99f8
tags: ["file_edit"]
timestamp: 2026-11-02T21:49:45.407196+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 8
confidence: 0.85
---
# Summary

Search query at VoIP.ms API returned invalid output for Type query. Expected valid Type response.

## Facts
- curl command used
- Search parameters used (state=TX, ratecenter=SANANTONIO, limit=10)
- Output: "{\"status\":\"invalid_type\",\"message\":\"This is not a valid Type\"}\"}
- Expected output from Type query: "<{\"status\":\"\"}

_Importance: 8 · Confidence: 0.85_
