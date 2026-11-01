---
type: file_edit
title: Update Hermes skill management plugin
description: Fixes symptom in reply output and engine configuration
resource: agentmemory://observation/obs_mvw9xsuq_1982321efecb
tags: ["file_edit"]
timestamp: 2026-10-31T10:44:33.742742+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 8
confidence: 0.75
---
# Summary

The latest patch to the Hermes skill management plugin addresses issues with reply output and engine configuration, specifically a System One API request failure due to question excess and a pipeline compaction logic raise in flight.

## Facts
- System One API request fails with 422 status code due to question excess
- Pipeline compaction logic raises in flight

## Files
- `/home/user/.hermes/config.yaml`

_Importance: 8 · Confidence: 0.75_
