---
type: file_write
title: Created session-start hook script for Kilo Code integration
description: Bash script to notify agentmemory REST API at session start
resource: agentmemory://observation/obs_mroxpykl_bfa19a6745e6
tags: ["bash shell script", "REST API client", "session management", "hook integration", "Bearer token authentication", "curl HTTP requests", "file_write"]
timestamp: 2026-07-17T12:49:19.931454+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 6
confidence: 1
---
# Summary

Created a bash hook script that Kilo Code calls at session start to register the session with the agentmemory service. The script constructs session metadata and POSTs it to the REST API, enabling session tracking and memory persistence across agent interactions.

## Facts
- File written to /Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh
- Script generates session ID using timestamp and process ID pattern: ses_$(date +%s)_$$
- Makes POST request to $REST_URL/agentmemory/session/start endpoint
- Sends JSON body with sessionId, project, cwd, and optional title fields
- Supports optional Bearer token authentication via AGENTMEMORY_SECRET environment variable
- Uses 5-second connect timeout for curl requests
- Defaults REST_URL to http://localhost:3111 if AGENTMEMORY_URL not set

## Concepts
- bash shell script
- REST API client
- session management
- hook integration
- Bearer token authentication
- curl HTTP requests

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh`

_Importance: 6 · Confidence: 1_
