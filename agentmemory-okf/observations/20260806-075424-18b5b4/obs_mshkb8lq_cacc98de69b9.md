---
type: CommandRun
title: Skill View Pattern for Writing Vitest Tests Against Agentmemory API Trigger Handlers
description: To test agentmemory's API trigger handlers without spinning up the full service.
resource: agentmemory://observation/obs_mshkb8lq_cacc98de69b9
tags: ["commandrun"]
timestamp: 2026-08-06T13:39:17.193353+00:00
source: agentmemory
session_id: 20260806_075424_18b5b4
importance: 5
confidence: 0.75
---
# Summary

The endpoints registered in `src/triggers/api.ts` are plain SDK functions, and testing them can be done using the mock SDK. The test includes assertions and common pitfalls to avoid.

## Facts
- agentmemory provides a pattern for writing vitest tests against API trigger handlers in src/triggers/api.ts.

_Importance: 5 · Confidence: 0.75_
