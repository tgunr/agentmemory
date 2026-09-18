---
type: file_edit
title: Curl command failing authorization
description: Fails when requesting agent memory information
resource: agentmemory://observation/obs_mrxf9rsa_46af18489240
tags: ["auth denial", "error handling", "file_edit"]
timestamp: 2026-07-23T11:22:47.143140+00:00
source: agentmemory
session_id: 20260723_062140_1fd64b
importance: 6
confidence: 0.9
---
# Summary

During a terminal command attempt to access agent memory, the request was denied due to insufficient authorization. The HTTP response indicates an 'unauthorized' error.

## Facts
- Agent memory request failed due to unauthorized authentication.
- The response from the server contains an 'unauthorized' error.

## Concepts
- auth denial
- error handling

## Files
- `./src agentmemory/index.md`

_Importance: 6 · Confidence: 0.9_
