---
type: FileRead
title: read_file with tool mcp_oauth.py
description: The client SDK does discovery, client identification, PKCE, exchange and refresh.
resource: agentmemory://observation/obs_mvxmzb90_86b8c4f54f45
tags: ["Pkyce", "fileread"]
timestamp: 2026-11-01T09:37:25.424817+00:00
source: agentmemory
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
importance: 4
confidence: 1
---
# Summary

The tool read a Python script at path &quot;/Users/davec/.hermes/hermes-agent/tools/mcp_oauth.py&quot; which contains information about the client SDK's OAuth flow.

## Facts
- 1|#!/usr/bin/env python3
- "/Users/davec/.hermes/hermes-agent/tools/mcp_oauth.py" = a Python script
- MCP OAuth 2.1 client support: browser authorization-code flow with PKCE.
- This module supplies ``HermesTokenStorage`` (on-disk persistence), the localhost callback listener
- and ``build_oauth_auth()`` (legacy entry point).

## Concepts
- Pkyce

## Files
- `/Users/davec/.hermes/hermes-agent/tools/mcp_oauth.py`

_Importance: 4 · Confidence: 1_
