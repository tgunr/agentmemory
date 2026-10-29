---
type: file_edit
title: Tools not appearing in Hermes Agent
description: Fixing credentials for MCP servers
resource: agentmemory://observation/obs_mvqjc5m6_7feecc190572
tags: ["Credential management", "file_edit"]
timestamp: 2026-10-27T10:21:02.955233+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 0.9
---
# Summary

Due to incorrect server configurations and credentials, tool names were not appearing in the Hermes Agent. A tool manage patch operation was performed to add valid credentials, which required a restart of the live process to fully prove the fix.

## Facts
- Running tool manage with operation patch and changing server credentials
- A valid restart is required after config changes due to the Hermes Agent's limitations

## Concepts
- Credential management

## Files
- `/root/patches/native-mcp`

_Importance: 8 · Confidence: 0.9_
