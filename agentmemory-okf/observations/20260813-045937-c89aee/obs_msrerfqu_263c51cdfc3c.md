---
type: file_edit
title: macos-mcp-sandbox-troubleshooting Skill Creation
description: Createt tool 'macos-mcp-sandbox-troubleshooting' with fix for Connection closed failures.
resource: agentmemory://observation/obs_msrerfqu_263c51cdfc3c
tags: ["file_edit"]
timestamp: 2026-08-13T11:01:37.010919+00:00
source: agentmemory
session_id: 20260813_045937_c89aee
importance: 7
confidence: 0.75
---
# Summary

An MCP server failure causes Connection closed errors. Fix found in TCC sandbox permissions issue.

## Facts
- The TCC sandbox grants file access to the launchd-launched process tree but not the Hermes agent process tree, causing Connection closed failures.
- Fix: relocate server assets off the blocked volume.

## Files
- `/Users/davec/.hermes/hermes-agent/venv/bin/python -c \"import os;print(os.access(os.path.expanduser('~/mcp/macos-mcp-sandbox-troubleshooting/SKILL.md'),os.R_OK))\"`

_Importance: 7 · Confidence: 0.75_
