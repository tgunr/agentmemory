---
type: file_edit
title: Cross-origin request to Agent Memory API failed
description: The user ran a cross-origin request to the `https://localhost:3111/agentmemory/sessions` endpoint.
resource: agentmemory://observation/obs_mrxf9q1l_0dc8c4fe0c2b
tags: ["curl", "file_edit"]
timestamp: 2026-07-23T11:22:44.885497+00:00
source: agentmemory
session_id: 20260723_062140_1fd64b
importance: 8
confidence: 0.9
---
# Summary

The user attempted to run a cross-origin request to the `https://localhost:3111/agentmemory/sessions` endpoint. The request was denied due to unauthorized access.
This request matters because it can lead to untrusted sources being able to access the agent's memory.

## Facts
- Authorization Bearer $AGENTMEMORY_SECRET was included in curl command.
- $AGENTMEMORY_SECRET value is not explicitly stated, however may indicate memory management issue.

## Concepts
- curl

_Importance: 8 · Confidence: 0.9_
