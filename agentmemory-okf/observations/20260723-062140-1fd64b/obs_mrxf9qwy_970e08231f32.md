---
type: file_edit
title: Curl command with authentication token
description: Contacting agent memory with curl
resource: agentmemory://observation/obs_mrxf9qwy_970e08231f32
tags: ["auth middleware", "file_edit"]
timestamp: 2026-07-23T11:22:46.015623+00:00
source: agentmemory
session_id: 20260723_062140_1fd64b
importance: 5
confidence: 0.9
---
# Summary

Executed custom command via curl that contacted agent memory service, but authentication failed.

## Facts
- Bearer token containing AGENTMEMORY_SECRET was used in the request
- The server returned a 401 Unauthorized response

## Concepts
- auth middleware

_Importance: 5 · Confidence: 0.9_
