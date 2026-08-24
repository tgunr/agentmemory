---
type: file_edit
title: Increase echo-deduplication window to 120s for BlueBubbles
description: Cloudflare tunnel latency caused echoes to arrive after the previous 30s window
resource: agentmemory://observation/obs_mrrpzhmb_59e0f7034502
tags: ["message deduplication", "echo cancellation", "network latency", "Cloudflare tunnel", "BlueBubbles", "file_edit"]
timestamp: 2026-07-19T11:36:06.128043+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Updated the bluebubbles-gateway skill documentation to extend the echo-deduplication window from 30 seconds to 120 seconds. This resolves an issue where messages sent through a Cloudflare tunnel were being echoed back and processed as new messages because the network latency exceeded the original 30-second threshold.

## Facts
- Modified SKILL.md in the bluebubbles-gateway skill
- Increased message echo-deduplication window from 30s to 120s
- Change prompted by Cloudflare-tunnel deployment where echoes arrived >30s late
- Deduplication matches (chat, normalized_text) checking resolved guid, chat ID, and prefix-stripped form (iMessage;-;+1… → +1…)

## Concepts
- message deduplication
- echo cancellation
- network latency
- Cloudflare tunnel
- BlueBubbles

## Files
- `bluebubbles-gateway/SKILL.md`

_Importance: 6 · Confidence: 1_
