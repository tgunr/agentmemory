---
type: file_edit
title: Update bluebubbles-gateway SKILL.md with diagnostics reference
description: Added reference to diagnostics guide for webhook storm troubleshooting
resource: agentmemory://observation/obs_mrrpzrxz_a4922be94d35
tags: ["BlueBubbles webhook", "Webhook storm", "Self-loop detection", "Log analysis", "Skill documentation", "file_edit"]
timestamp: 2026-07-19T11:36:19.508709+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The agent updated the bluebubbles-gateway skill documentation to reference a diagnostics guide. This addition provides instructions for analyzing main.log to identify webhook storms and self-loops, significantly improving troubleshooting capabilities for the gateway.

## Facts
- Patched SKILL.md in the 'bluebubbles-gateway' skill using skill_manage tool
- Added documentation pointing to references/bluebubbles-diagnostics.md
- Diagnostics guide covers BB main.log signatures for self-loops (any;- in SEND path) and webhook storms
- Preserved existing note about BLUEBUBBLES_WEBHOOK_HOST test environment bleed

## Concepts
- BlueBubbles webhook
- Webhook storm
- Self-loop detection
- Log analysis
- Skill documentation

## Files
- `skills/bluebubbles-gateway/SKILL.md`
- `references/bluebubbles-diagnostics.md`

_Importance: 4 · Confidence: 1_
