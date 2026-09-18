---
type: FileRead
title: skill_view: bluebubbles-gateway
description: This skill provides instruction on setting up and maintaining BlueBubbles as an iMessage bridge for the Hermes gateway.
resource: agentmemory://observation/obs_msq5zro1_486188fd36d9
tags: ["self-loop echo bug", "fileread"]
timestamp: 2026-08-12T14:08:22.986927+00:00
source: agentmemory
session_id: 20260812_083630_3f23b1
importance: 8
confidence: 0.9
---
# Summary

The self-loop echo bug occurs when Hermes replies, then immediately "receives" its own reply as a new message and answers again — forever. The root cause is on Tahoe with `helper_connected=false`, where BlueBubbles cannot flag outbound messages `isFromMe`. This skill provides troubleshooting tips to resolve the issue.

## Facts
- BlueBubbles is a macOS iMessage bridge. Hermes's gateway talks to it over its local HTTP API (`http://localhost:1234`) and receives inbound iMessages via a webhook that BlueBubbles POSTs to the gateway's listener.

## Concepts
- self-loop echo bug

_Importance: 8 · Confidence: 0.9_
