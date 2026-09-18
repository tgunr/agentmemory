---
type: file_write
title: Created skill 'bluebubbles-gateway' for iMessage/Hermes integration
description: Documentation for troubleshooting BlueBubbles gateway self-loop echo bug and webhook wiring
resource: agentmemory://observation/obs_mrqj1fqt_f9ea47218b2d
tags: ["BlueBubbles iMessage bridge", "Hermes gateway integration", "self-loop echo bug", "webhook IPv4 wiring", "Tahoe helper_connected limitation", "file_write"]
timestamp: 2026-07-18T15:33:53.520526+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Created comprehensive skill documentation for the BlueBubbles-Hermes gateway integration, covering critical configuration requirements (IPv4 webhook host, URL-encoded password) and the self-loop echo bug that occurs on Tahoe macOS where helper_connected=false prevents proper isFromMe flag detection.

## Facts
- Skill created in category 'integrations' with path '/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md'
- Covers Tahoe helper_connected=false limitation causing self-loop echo bug
- Documents webhook-host IPv4 requirement (must use LAN IP, not localhost)
- Password field has trailing '!' and must be URL-encoded in queries
- Self-loop echo arrives on both 'any;-' reserved channel and real chat GUID channels
- Fix implemented in gateway/platforms/bluebubbles.py (multi-layer deduplication)

## Concepts
- BlueBubbles iMessage bridge
- Hermes gateway integration
- self-loop echo bug
- webhook IPv4 wiring
- Tahoe helper_connected limitation

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md`

_Importance: 8 · Confidence: 1_
