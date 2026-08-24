---
type: FileRead
title: Read agentmemory session-start hook script
description: Bash hook for Kilo Code session initialization via agentmemory REST API
resource: agentmemory://observation/obs_mrq9x5q5_ac53b249d338
tags: ["bash hook script", "REST API client", "session initialization", "curl HTTP POST", "Bearer token authentication", "environment variable configuration", "agentmemory integration", "fileread"]
timestamp: 2026-07-18T11:18:37.371014+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 5
confidence: 1
---
# Summary

Read the session-start.sh bash hook script that initializes agentmemory sessions for Kilo Code. The script generates a unique session ID from timestamp and PID, constructs a JSON payload with project/cwd info, and POSTs it to the agentmemory REST API with optional Bearer token auth. It outputs the session ID for use by downstream hooks.

## Facts
- File path: /Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh
- Script is a bash hook called at the beginning of each Kilo Code session
- Uses REST_URL from AGENTMEMORY_URL env var, defaults to http://localhost:3111
- Uses AGENTMEMORY_SECRET env var for Bearer token authentication
- Generates SESSION_ID as "ses_$(date +%s)_$$" (timestamp + PID)
- PROJECT defaults to first argument or current working directory
- TITLE is optional second argument, used as fallback when no Hermes title is resolvable
- POSTs JSON body with sessionId, project, cwd, and optionally title to /agentmemory/session/start
- Uses curl with 5-second connect timeout, suppresses output to /dev/null
- Echoes the generated SESSION_ID to stdout
- File is 30 lines, 1035 bytes

## Concepts
- bash hook script
- REST API client
- session initialization
- curl HTTP POST
- Bearer token authentication
- environment variable configuration
- agentmemory integration

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh`

_Importance: 5 · Confidence: 1_
