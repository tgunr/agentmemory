---
type: FileRead
title: BlueBubbles iMessage gateway troubleshooting guide
description: Documentation for debugging message delivery failures in BlueBubbles integration
resource: agentmemory://observation/obs_mrqfdkih_062a06cc6cb8
tags: ["iMessage gateway", "Private API helper", "API debugging", "macOS system permissions", "fileread"]
timestamp: 2026-07-18T13:51:21.109537+00:00
source: agentmemory
session_id: 20260718_084855_083384
importance: 5
confidence: 1
---
# Summary

Technical documentation covering debugging procedures for BlueBubbles iMessage gateway where messages echo but fail to deliver. Identifies the Private API helper connection as the primary failure point and provides curl commands for testing API authentication and server status.

## Facts
- Primary diagnostic command: curl API to check helper_connected status returns false when Private API helper not running
- Send hangs for exactly 30 seconds when helper_connected is false, with specific log signature showing fallback failure
- Environment variables required in ~/.hermes/.env: BLUEBUBBLES_SERVER_URL and BLUEBUBBLES_PASSWORD
- chatGuid format requires protocol identifier prefix: "iMessage;-;+15551234567"
- Private API Helper location: /Applications/BlueBubbles.app/Contents/Resources/appResources/private-api/ on macOS

## Concepts
- iMessage gateway
- Private API helper
- API debugging
- macOS system permissions

## Files
- `references/bluebubbles-troubleshooting.md`

_Importance: 5 · Confidence: 1_
