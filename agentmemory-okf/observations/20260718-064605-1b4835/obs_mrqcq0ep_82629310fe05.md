---
type: file_write
title: BlueBubbles ⇄ Hermes Gateway documentation written to macos-integrations skill
description: 
resource: agentmemory://observation/obs_mrqcq0ep_82629310fe05
tags: ["BlueBubbles integration", "Hermes gateway", "iMessage webhook", "Pairing authentication", "file_write"]
timestamp: 2026-07-18T12:37:02.732270+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Documentation was created explaining how to configure the Hermes Messaging Gateway to receive iMessage prompts via BlueBubbles Server webhook on port 8645. Covers authorization setup, gateway startup, pairing flow, and troubleshooting considerations for the inbound/outbound message pipeline.

## Facts
- skill_manage write_file action executed for references/bluebubbles-gateway.md
- File documents iMessage-to-Hermes prompt gateway setup with BlueBubbles Server
- Gateway listens on port 8645 with /bluebubbles-webhook endpoint for push events
- Configuration requires BLUEBUBBLES_ALLOW_ALL_USERS or BLUEBUBBLES_ALLOWED_USERS in ~/.hermes/.env
- Initial pairing requires approving codes via hermes pairing approve bluebubbles command
- References related files: bluebubbles-troubleshooting.md, macos-launchd.md, bluebubbles-diag.sh

## Concepts
- BlueBubbles integration
- Hermes gateway
- iMessage webhook
- Pairing authentication

## Files
- `/Users/davec/.hermes/skills/apple/macos-integrations/references/bluebubbles-gateway.md`

_Importance: 5 · Confidence: 1_
