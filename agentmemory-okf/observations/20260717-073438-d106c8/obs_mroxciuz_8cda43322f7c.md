---
type: FileRead
title: Read Kilo Code session-start hook
description: Bash hook initializes an AgentMemory session through the REST API
resource: agentmemory://observation/obs_mroxciuz_8cda43322f7c
tags: ["Kilo Code hooks", "session initialization", "REST API", "optional bearer authentication", "Bash scripting", "fileread"]
timestamp: 2026-07-17T12:38:53.044032+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 3
confidence: 1
---
# Summary

The Kilo Code startup hook creates a unique session and registers it with the AgentMemory REST service. It supports optional bearer authentication while allowing local unauthenticated use and returns the session ID for subsequent hooks.

## Facts
- Uses AGENTMEMORY_URL with a default of http://localhost:3111 and optional AGENTMEMORY_SECRET authentication.
- Generates a session ID from the Unix timestamp and process ID, then sets the project from the first argument or current directory.
- POSTs sessionId, project, and cwd as JSON to /agentmemory/session/start with a five-second connection timeout.
- The curl response and errors are suppressed, and the generated session ID is printed to stdout.

## Concepts
- Kilo Code hooks
- session initialization
- REST API
- optional bearer authentication
- Bash scripting

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/session-start.sh`

_Importance: 3 · Confidence: 1_
