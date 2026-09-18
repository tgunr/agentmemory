---
type: FileRead
title: Reading api::session::start endpoint registration
description: Session initialization API in agentmemory triggers module
resource: agentmemory://observation/obs_mroxv3xs_ed038fdeb156
tags: ["API endpoint registration", "session management", "parameter validation", "multi-agent runtime", "environment variables", "Hermes/Kilo integration", "fileread"]
timestamp: 2026-07-17T12:53:20.165641+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 3
confidence: 1
---
# Summary

Reading the API endpoint registration for session initialization in the agentmemory system. The endpoint validates required parameters (sessionId, project, cwd), resolves session titles preferring Hermes/Kilo client names, and supports multi-agent runtime configurations with AGENT_ID override.

## Facts
- File has 3234 total lines, reading lines 589-618
- Registers "api::session::start" function via sdk.registerFunction
- Request body requires sessionId, project, and cwd as non-empty strings
- Returns 400 status code if any required field is missing
- Uses resolveSessionTitle() to determine session name from HERMES_STATE_DB
- Supports explicit title override from request body
- Allows AGENT_ID override for multi-agent runtimes routing through one server

## Concepts
- API endpoint registration
- session management
- parameter validation
- multi-agent runtime
- environment variables
- Hermes/Kilo integration

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 3 · Confidence: 1_
