---
type: file_edit
title: Increased echo detection window from 30s to 120s
description: BlueBubbles gateway self-loop prevention timing adjustment
resource: agentmemory://observation/obs_mrrq0zxo_5409bc75b583
tags: ["echo detection", "self-loop prevention", "message deduplication", "timing windows", "Cloudflare tunnel latency", "OrderedDict", "file_edit"]
timestamp: 2026-07-19T11:37:16.520160+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Updated the self-loop detection window in the BlueBubbles gateway from 30 seconds to 120 seconds. This change addresses a real-world issue where Cloudflare tunnel deployments caused message echoes to arrive with delays exceeding the original 30-second threshold, leading to false positives in echo detection.

## Facts
- Changed _sent_text_window from 30.0 to 120.0 seconds
- Reason: Cloudflare-tunnel deployment showed echoes arriving >30s later
- Affects _sent_texts OrderedDict tracking (chat, norm_text) -> timestamp
- File: references/bluebubbles-self-loop.md in skill bluebubbles-gateway

## Concepts
- echo detection
- self-loop prevention
- message deduplication
- timing windows
- Cloudflare tunnel latency
- OrderedDict

## Files
- `references/bluebubbles-self-loop.md`

_Importance: 5 · Confidence: 1_
