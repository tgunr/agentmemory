---
type: file_edit
title: This script fails test/api-livez-flags.test.ts due to vector size comparison
description: The function uses vector.size, which is expected to be zero but received as an integer
resource: agentmemory://observation/obs_mshj1u6e_db4bdb6ea192
tags: ["vector api", "file_edit"]
timestamp: 2026-08-06T13:03:58.978246+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 7
confidence: 0.9
---
# Summary

This script is attempting to test the LiveZ library for Vector API endpoint in order to verify that it returns size as expected. However, there was a mismatch of an expected value of zero for the vector size to what the provided endpoint returned.

## Facts
- The error was on line 10 of test/api-livez-flags.test.ts: "const body = (res as { body: Record<string, unknown> }).body;\n expect(body.status).toBe(\"ok\");\n\n expect(body.vector).toEqual({ size: 0 });
- The function also failed on lines 30, 42, and 66 with similar errors related to vector.size and embeddingsEnabled

## Concepts
- vector api

## Files
- `/Volumes/AI/agentmemory/`

_Importance: 7 · Confidence: 0.9_
