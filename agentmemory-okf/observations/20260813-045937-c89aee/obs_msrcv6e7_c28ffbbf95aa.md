---
type: FileRead
title: AM API health check failed
description: No authorization for AM API
resource: agentmemory://observation/obs_msrcv6e7_c28ffbbf95aa
tags: ["fileread"]
timestamp: 2026-08-13T10:08:32.282324+00:00
source: agentmemory
session_id: 20260813_045937_c89aee
importance: 5
confidence: 0.85
---
# Summary

The tool call to the AM API resulted in an HTTP error due to lack of authorization. The health check also failed with a status code of 404.

## Facts
- HTTP Error 404
- HTTP Error 401: Unauthorized
- Total of 128 file entries in ~/.agentmemory/.env

_Importance: 5 · Confidence: 0.85_
