---
type: Error
title: Skill patch refused: read-before-write required
description: macos-integrations patch blocked until SKILL.md is loaded
resource: agentmemory://observation/obs_mrqcmaki_861a18ad5062
tags: ["skill_manage", "read-before-write", "macos-integrations", "BlueBubbles diagnostics", "Hermes Gateway", "error"]
timestamp: 2026-07-18T12:34:09.279482+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

A curator patch to macos-integrations was rejected because the skill body was not loaded this turn. Retry requires skill_view on macos-integrations, then re-applying the patch to add Hermes Gateway and bluebubbles-diag.sh guidance.

## Facts
- skill_manage patch on 'macos-integrations' failed with success: false
- Error: refusing background curator patch because SKILL.md content has not been loaded in this review turn
- _read_before_write_required: true
- Must call skill_view(name) for SKILL.md (or skill_view with file_path) then retry write using returned content
- Intended patch: add Hermes Gateway wiring + re-runnable health probe `scripts/bluebubbles-diag.sh` to existing BlueBubbles troubleshooting bullets
- old_string covered helper_connected:false, send timeout debugging, API endpoint testing

## Concepts
- skill_manage
- read-before-write
- macos-integrations
- BlueBubbles diagnostics
- Hermes Gateway

## Files
- `scripts/bluebubbles-diag.sh`

_Importance: 4 · Confidence: 1_
