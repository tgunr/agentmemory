---
type: FileRead
title: Read agentmemory MCP wrapper script
description: Bash script managing iii-engine, agentmemory service, and session registration
resource: agentmemory://observation/obs_mrtcedxv_22b56a90faff
tags: ["MCP server wrapper", "Bash process management", "Session state persistence", "REST API proxy", "Service health checks", "fileread"]
timestamp: 2026-07-20T14:51:18.926076+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 4
confidence: 1
---
# Summary

The agent read the agentmemory wrapper script to understand the initialization flow for the MCP server, iii-engine, and session management. The script ensures required services are running on designated ports, handles session reuse via PID and TTL checks, and forces memory operations through a REST API proxy.

## Facts
- Script located at /Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh
- Forces proxy mode (AGENTMEMORY_FORCE_PROXY=1) to route memory ops to REST API (SQLite) instead of local KV
- Manages iii-engine on port 3111 and agentmemory service on port 3113 using lsof and PID files
- Implements session reuse with a 2-hour TTL (7200s) validated by parent PID (PPID) match
- Hardcodes IP 10.1.2.1 to bypass pve.local DNS resolution timeouts
- Loads AGENTMEMORY_SECRET from $HOME/.agentmemory/.env for session authentication

## Concepts
- MCP server wrapper
- Bash process management
- Session state persistence
- REST API proxy
- Service health checks

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/agentmemory-wrapper.sh`

_Importance: 4 · Confidence: 1_
