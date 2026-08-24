---
type: CommandRun
title: Debug log shows 401 errors resolved after restart
description: Observer plugin now successfully registering sessions and sending observations
resource: agentmemory://observation/obs_mrq77egk_bb768163d365
tags: ["HTTP authentication", "debug logging", "plugin registration", "session management", "error resolution", "commandrun"]
timestamp: 2026-07-18T10:02:36.400191+00:00
source: agentmemory
session_id: 20260717_190757_299949
importance: 6
confidence: 1
---
# Summary

After investigating persistent 401 authentication errors in the agentmemory observer debug log, a restart resolved the issue. The plugin now successfully registers sessions and sends observations with 201 status codes instead of failing with 401 Unauthorized errors. Over 1500 failed attempts occurred before the fix.

## Facts
- Log file: ~/.hermes/agentmemory_observer_debug.log
- 1527 HTTP 401 Unauthorized errors occurred before restart
- Plugin registered successfully at 2026-07-18T09:57:08
- Latest observation succeeded with HTTP 201 at 2026-07-18T10:02:35
- Session ID: 20260717_190757_299949
- Hook kwargs include: tool_name, args, result, task_id, session_id, tool_call_id, turn_id, api_request_id, duration_ms, status, error_type, error_message, middleware_trace, telemetry_schema_version

## Concepts
- HTTP authentication
- debug logging
- plugin registration
- session management
- error resolution

## Files
- `~/.hermes/agentmemory_observer_debug.log`

_Importance: 6 · Confidence: 1_
