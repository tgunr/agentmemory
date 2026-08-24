---
type: file_edit
title: Patched BlueBubbles Gateway documentation in macos-integrations skill
description: Updated skill documentation with additional reference and integration details
resource: agentmemory://observation/obs_mrqcog9o_a33f2bb84dd9
tags: ["BlueBubbles Gateway", "Hermes integration", "macOS iMessage API", "file_edit"]
timestamp: 2026-07-18T12:35:49.976145+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Updated SKILL.md documentation to include the bluebubbles-gateway.md reference and detailed integration information for wiring iMessages into Hermes. The patch adds specific commands for gateway setup and mentions a re-runnable health probe script.

## Facts
- Skill name: macos-integrations
- Added new reference file: references/bluebubbles-gateway.md
- Added Hermes integration commands: `hermes gateway run` and `hermes pairing approve bluebubbles`
- Added webhook port :8645 for BLUEBUBBLES_ALLOW_* auth variables
- Added diagnostic script: scripts/bluebubbles-diag.sh

## Concepts
- BlueBubbles Gateway
- Hermes integration
- macOS iMessage API

## Files
- `SKILL.md`
- `references/bluebubbles-gateway.md`
- `scripts/bluebubbles-diag.sh`

_Importance: 5 · Confidence: 1_
