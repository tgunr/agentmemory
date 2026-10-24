---
type: file_edit
title: Hermes Gateway Error Check
description: No Discord bot token detected
resource: agentmemory://observation/obs_mvl3k3k6_b8a24daf88ef
tags: ["auth token error", "Discord bot token", "file_edit"]
timestamp: 2026-10-23T15:00:28.802080+00:00
source: agentmemory
session_id: local-809bba89dfe3ea9f5c18ac47fb5e98d8f387fdfa7d0a3842632c1eabc2f8e61f
importance: 6
confidence: 0.9
---
# Summary

The tool execution resulted in an error message due to the absence of the Discord bot token. The error message suggests that the token is invalid or revoked, and it is recommended to regenerate the token and update the DISCORD_BOT_TOKEN environment variable.

## Facts
- Discord bot token is required
- Error message: <replace>"Improper token has been passed. The token is invalid or was revoked — regenerate it in the Discord Developer Portal and update DISCORD_BOT_TOKEN."</replace>

## Concepts
- auth token error
- Discord bot token

## Files
- `/Users/davec/jo/config.yaml`

_Importance: 6 · Confidence: 0.9_
