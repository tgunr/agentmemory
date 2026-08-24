---
type: CommandRun
title: API endpoint probing reveals session lifecycle structure
description: Testing session management endpoints and route discovery for agentmemory service
resource: agentmemory://observation/obs_mrtcnwds_d6cfc2113822
tags: ["API endpoint discovery", "session lifecycle management", "HTTP status code analysis", "commandrun"]
timestamp: 2026-07-20T14:58:42.733888+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Probed the agentmemory HTTP API to understand session lifecycle endpoints and discovered that only start/end endpoints exist for sessions (update/close/stop return 404). Route discovery revealed a comprehensive API with 40+ endpoints spanning actions, diagnostics, governance, and consolidation features.

## Facts
- /agentmemory/session/start accepts POST (400 without body) but rejects GET (405)
- /agentmemory/session/end accepts POST (400 without body) but rejects GET (405)
- /agentmemory/session/update, /close, /stop all return 404 (not implemented)
- Service exposes 40+ routes via path registrations in dist/index.mjs
- Available routes include: actions, audit, checkpoints, crystals, diagnostics, governance, consolidate, facets, branch operations

## Concepts
- API endpoint discovery
- session lifecycle management
- HTTP status code analysis

## Files
- `/Volumes/AI/agentmemory/dist/index.mjs`

_Importance: 5 · Confidence: 1_
