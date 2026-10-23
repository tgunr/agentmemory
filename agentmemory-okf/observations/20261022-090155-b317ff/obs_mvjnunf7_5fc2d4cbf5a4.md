---
type: FileRead
title: Hermes WebUI Configuration & Management
description: Troubleshooting the Hermes WebUI (server.py on port 8787)
resource: agentmemory://observation/obs_mvjnunf7_5fc2d4cbf5a4
tags: ["Python script execution", "Environment variable", "Settings configuration", "fileread"]
timestamp: 2026-10-22T14:53:01.060100+00:00
source: agentmemory
session_id: 20261022_090155_b317ff
importance: 6
confidence: 0.9
---
# Summary

The Hermes WebUI can be launched by the Hermes desktop app or manually, with password discovery and binding behavior differing between the two. The WebUI can run a Python script on port 8787, and its configuration and management can be accessed via a settings page.

## Facts
- Server Python run method varies depending on launch method
- env var takes priority over settings.json for password discovery

## Concepts
- Python script execution
- Environment variable
- Settings configuration

## Files
- `/home/user/hermes-webui/server.py`

_Importance: 6 · Confidence: 0.9_
