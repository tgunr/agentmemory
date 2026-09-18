---
type: CommandRun
title: MCP server fails loading an HuggingFace embedding model
description: Fails with RepositoryNotFoundError due to expired/invalid token
resource: agentmemory://observation/obs_msrg132c_cd23d77df125
tags: ["mcp SDK version skew", "HuggingFace embedding model", "User Access Token management", "commandrun"]
timestamp: 2026-08-13T11:37:06.748424+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 8
confidence: 0.9
---
# Summary

The server crashes with a 401 error due to an expired/invalid User Access Token. The token needs to be validated before trusting Notes/config, or replaced for public models.

## Facts
- The MCP server crashes on startup with 401 Client Error
- The error is caused by the server reading HF_TOKEN from its local .env and an invalid token making HuggingFace reject requests

## Concepts
- mcp SDK version skew
- HuggingFace embedding model
- User Access Token management

## Files
- `/Users/davec/.hermes/skills/mcp/mcp-troubleshooting/SKILL.md`

_Importance: 8 · Confidence: 0.9_
