---
type: CommandRun
title: Test webhook deletion endpoints with three different HTTP methods
description: Both DELETE with guid param and POST to /api/v1/webhook/delete return 405
resource: agentmemory://observation/obs_mrqhqbyw_e600251b6c9e
tags: ["HTTP webhook API", "REST API testing", "curl command", "commandrun"]
timestamp: 2026-07-18T14:57:15.796947+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 0.9
---
# Summary

Attempted multiple webhook deletion approaches via curl commands - both DELETE and POST methods to different endpoints returned Method Not Allowed (405), suggesting the API routes may not support these operations or require different parameters.

## Facts
- DELETE request to /api/v1/webhook with guid parameter returned HTTP 405
- POST request to /api/v1/webhook/delete returned HTTP 405

## Concepts
- HTTP webhook API
- REST API testing
- curl command

_Importance: 5 · Confidence: 0.9_
