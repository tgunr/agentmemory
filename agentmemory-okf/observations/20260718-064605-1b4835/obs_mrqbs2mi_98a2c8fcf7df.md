---
type: FileRead
title: BlueBubbles troubleshooting documentation retrieved
description: Reference file for macOS iMessage gateway debugging patterns
resource: agentmemory://observation/obs_mrqbs2mi_98a2c8fcf7df
tags: ["BlueBubbles integration", "macOS Private API helper", "iMessage troubleshooting", "curl API debugging", "fileread"]
timestamp: 2026-07-18T12:10:39.302774+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Retrieved troubleshooting reference for BlueBubbles iMessage gateway integration, documenting diagnosis of send failures when the Private API helper is disconnected and authentication patterns.

## Facts
- File path: references/bluebubbles-troubleshooting.md
- Tool used: skill_view with name "macos-integrations"
- Documents helper_connected check via curl to localhost:1234/api/v1/server/info
- Identifies 30-second timeout pattern when Private API helper is disconnected
- Requires BLUEBUBBLES_SERVER_URL and BLUEBUBBLES_PASSWORD env vars in ~/.hermes/.env
- Private API helper located at /Applications/BlueBubbles.app/Contents/Resources/appResources/private-api/
- chatGuid format includes "iMessage;-;" protocol prefix

## Concepts
- BlueBubbles integration
- macOS Private API helper
- iMessage troubleshooting
- curl API debugging

## Files
- `references/bluebubbles-troubleshooting.md`

_Importance: 5 · Confidence: 1_
