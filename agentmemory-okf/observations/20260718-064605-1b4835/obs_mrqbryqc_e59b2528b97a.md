---
type: Error
title: skill_manage patch failed: content not loaded before write
description: Attempted to patch macos-integrations skill without prior skill_view call
resource: agentmemory://observation/obs_mrqbryqc_e59b2528b97a
tags: ["skill management system", "read-before-write requirement", "iMessage integration", "BlueBubbles gateway", "error"]
timestamp: 2026-07-18T12:10:34.256181+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The skill management system rejected a patch attempt because it enforces a read-before-write policy. The patch intended to expand the macOS integrations skill with additional BlueBubbles Gateway documentation including Tahoe SIP+dylib fixes.

## Facts
- Tool: skill_manage with patch action
- Skill name: macos-integrations
- Error indicates _read_before_write_required flag
- New content adds BlueBubbles Gateway section with Tahoe troubleshooting details
- System requires skill_view(name) to load SKILL.md before patching

## Concepts
- skill management system
- read-before-write requirement
- iMessage integration
- BlueBubbles gateway

## Files
- `skills/macos-integrations.md`

_Importance: 5 · Confidence: 1_
