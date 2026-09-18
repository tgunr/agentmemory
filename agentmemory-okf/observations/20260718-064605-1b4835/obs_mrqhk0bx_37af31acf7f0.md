---
type: FileRead
title: BlueBubbles troubleshooting reference for iMessage gateway issues
description: Diagnoses send failures, helper connection, and Tahoe-specific SIP problems
resource: agentmemory://observation/obs_mrqhk0bx_37af31acf7f0
tags: ["BlueBubbles integration", "iMessage gateway", "macOS Tahoe compatibility", "SIP (System Integrity Protection)", "Private API helper", "dylib injection", "fileread"]
timestamp: 2026-07-18T14:52:20.775556+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Accessed troubleshooting documentation for BlueBubbles iMessage gateway integration, covering diagnosis of message delivery failures, authentication issues, and macOS Tahoe-specific compatibility problems. The guide provides specific curl commands for checking helper status, explains common failure patterns with log signatures, and documents the requirement for SIP disabling and dylib replacement on Tahoe.

## Facts
- Primary diagnosis command checks helper_connected: curl to localhost:1234/api/v1/server/info?password=$BLUEBUBBLES_PASSWORD | jq '.data.helper_connected'
- 30-second send timeout with empty error indicates helper_connected: false
- Authentication 401 errors distinguish between missing password parameter vs wrong password
- Authoritative password stored in sqlite config.db at ~/Library/Application Support/bluebubbles-server/config.db
- macOS Tahoe requires both SIP disabled AND community dylib swap (v0.0.22-tahoe) for Private API to work
- Helper location: /Applications/BlueBubbles.app/Contents/Resources/appResources/private-api/BlueBubblesHelper.dylib
- Environment variables required in ~/.hermes/.env: BLUEBUBBLES_SERVER_URL, BLUEBUBBLES_PASSWORD

## Concepts
- BlueBubbles integration
- iMessage gateway
- macOS Tahoe compatibility
- SIP (System Integrity Protection)
- Private API helper
- dylib injection

## Files
- `references/bluebubbles-troubleshooting.md`
- `references/bluebubbles-tahoe.md`
- `~/.hermes/.env`
- `~/Library/Application Support/bluebubbles-server/config.db`

_Importance: 5 · Confidence: 1_
