---
type: file_edit
title: Export error when calling `mem::export`
description: Error with invocation-routing bug in iii-engine.
resource: agentmemory://observation/obs_msptpprm_7c29a5085779
tags: ["iii-engine Invocation Routing Bug", "file_edit"]
timestamp: 2026-08-12T08:24:38.573941+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 7
confidence: 0.9
---
# Summary

While calling `mem::export`, an error occurred due to an invocation-routing bug in the iii-engine version 0.11.2. The cause is attributed to a specific line of code, which wraps the invocation via sdk.trigger. Despite investigating various factors including timeouts/payloads and worker flapping, the problem persists.

## Facts
- The `mem::export` function has an invocation-routing bug in the iii-engine version 0.11.2.
- The issue is caused by an incorrect implementation of the sdk.trigger function.

## Concepts
- iii-engine Invocation Routing Bug

_Importance: 7 · Confidence: 0.9_
