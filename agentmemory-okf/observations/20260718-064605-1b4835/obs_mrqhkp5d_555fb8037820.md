---
type: Error
title: skill_manage patch failed for macos-integrations - read-before-write required
description: Patch to Gotchas section about IPv4/IPv6 webhook binding was rejected
resource: agentmemory://observation/obs_mrqhkp5d_555fb8037820
tags: ["skill_manage patch operation", "read-before-write requirement", "IPv4/IPv6 localhost resolution", "macOS webhook binding", "BlueBubbles server integration", "error"]
timestamp: 2026-07-18T14:52:52.941085+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

The skill_manage patch operation was rejected because the SKILL.md content must be loaded via skill_view() before making edits. The attempted patch contained critical networking documentation about IPv4/IPv6 localhost resolution issues where BlueBubbles fails to dispatch webhooks to Hermes when localhost resolves to IPv6 first.

## Facts
- Tool: skill_manage with action 'patch' on skill 'macos-integrations'
- New content focused on IPv4/IPv6 webhook binding issue for macOS localhost resolution
- Error: requires read-before-write pattern - SKILL.md content not loaded</fault>
    <fact>Error object indicates '_read_before_write_required: true'

## Concepts
- skill_manage patch operation
- read-before-write requirement
- IPv4/IPv6 localhost resolution
- macOS webhook binding
- BlueBubbles server integration

## Files
- `macos-integrations/SKILL.md`

_Importance: 6 · Confidence: 1_
