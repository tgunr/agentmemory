---
type: Error
title: MCP OAuth setup failed
description: 
resource: agentmemory://observation/obs_mvw9v9rt_8ed4e18c9eed
tags: ["non-interactive environment", "MCP OAuth setup", "error"]
timestamp: 2026-10-31T10:42:35.702505+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 8
confidence: 0.9
---
# Summary

MCP OAuth setup failed for 'canva': non-interactive environment and no cached tokens found. MCP OAuth requires browser authorization but no interactive session is available (non-interactive/background context). Run `hermes mcp login canva` interactively first to complete initial authorization.

## Facts
- MCP OAuth requires browser authorization but no interactive session is available (non-interactive/background context)
- Run `hermes mcp login <server>` interactively to (re)authorize, then restart or reload the gateway

## Concepts
- non-interactive environment
- MCP OAuth setup

## Files
- `/Users/davec/.hermes/hermes-agent/tools/mcp_oauth.py`

_Importance: 8 · Confidence: 0.9_
