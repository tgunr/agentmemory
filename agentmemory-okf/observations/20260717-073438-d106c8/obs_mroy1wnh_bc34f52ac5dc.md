---
type: CommandRun
title: Verification test for session-start hook
description: Validates hook POSTs session data correctly to agentmemory endpoint
resource: agentmemory://observation/obs_mroy1wnh_bc34f52ac5dc
tags: ["hook verification testing", "session management", "HTTP POST validation", "agentmemory integration", "mock server testing", "commandrun"]
timestamp: 2026-07-17T12:58:37.285831+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

A verification test was executed to validate that the session-start hook correctly POSTs session data to the agentmemory endpoint. The test confirmed that sessionId, title, project, and cwd are properly forwarded in the request body, with all 4 assertions passing successfully.

## Facts
- Hook script tested: /Volumes/AI/agentmemory/plugin/scripts/session-start.mjs
- Test verifies POST to /agentmemory/session/start endpoint
- Verifies forwarding of sessionId, title, project, and cwd fields
- All 4 test assertions passed with exit code 0
- Temporary verification script created in /var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/ and cleaned up
- Test uses mock HTTP server to capture and validate hook requests

## Concepts
- hook verification testing
- session management
- HTTP POST validation
- agentmemory integration
- mock server testing

## Files
- `/Volumes/AI/agentmemory/plugin/scripts/session-start.mjs`

_Importance: 5 · Confidence: 1_
