---
type: CommandRun
title: BlueBubbles.app presence and private API server status check
description: Diagnostic command output confirming app installation and API server running
resource: agentmemory://observation/obs_mrqax7v3_3fd7cafa2353
tags: ["BlueBubbles", "private API server", "macOS application bundle", "commandrun"]
timestamp: 2026-07-18T11:46:39.757009+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Diagnostic check confirms BlueBubbles application is installed and its private API helper infrastructure exists. The API server on port 1234 is actively responding, though it requires authentication (returns 401 Unauthorized). This validates the environment is properly set up for BlueBubbles integration.

## Facts
- BlueBubbles.app exists at /Applications/BlueBubbles.app
- Private API helper directory present with macos10 and macos11 subdirectories
- Version.txt file present in private-api directory
- Private API server responding on port 1234 with 401 authentication error (server is running)

## Concepts
- BlueBubbles
- private API server
- macOS application bundle

## Files
- `/Applications/BlueBubbles.app`
- `/Applications/BlueBubbles.app/Contents/Resources/appResources/private-api/`
- `/Applications/BlueBubbles.app/Contents/Resources/appResources/private-api/version.txt`

_Importance: 5 · Confidence: 1_
