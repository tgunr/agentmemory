---
type: FileRead
title: MCP OAuth handler log
description: No RFC 7591 DCR
resource: agentmemory://observation/obs_mvxmzb8z_cda3324f3bb3
tags: ["fileread"]
timestamp: 2026-11-01T09:37:25.423771+00:00
source: agentmemory
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
importance: 6
confidence: 0.75
---
# Summary

The MCP OAuth handler log revealed an issue with pre-registered client IDs not being persisted due to stale tokens.

## Facts
- Heremes-tool updated mcp_oauth.py with new logic for OAuth client registration
- Pre-registered client ID was not persisted due to stale tokens

## Files
- `/Users/davec/.hermes/hermes-agent/tools/mcp_oauth.py`

_Importance: 6 · Confidence: 0.75_
