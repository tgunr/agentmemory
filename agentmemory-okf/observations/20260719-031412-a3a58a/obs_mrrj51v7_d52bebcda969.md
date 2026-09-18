---
type: Error
title: Skill patch rejected: read-before-write required
description: Attempted to update bluebubbles-gateway skill doc without loading current content
resource: agentmemory://observation/obs_mrrj51v7_d52bebcda969
tags: ["skill management", "read-before-write safety", "curator patch", "content verification", "error"]
timestamp: 2026-07-19T08:24:28.336778+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

The attempted patch to the bluebubbles-gateway skill documentation was rejected because the current SKILL.md content had not been loaded in the review turn. The system enforces a read-before-write policy to prevent stale or blind curator edits, requiring skill_view to be called before retrying.

## Facts
- skill_manage patch for 'bluebubbles-gateway' returned success: false
- Old string referenced `references/bluebubbles-allowlist.md`, `.env` one-liner, and authz code anchors
- New string would add post-lockdown verification playbook using synthetic blocked-sender probe
- Error message: "Refusing background curator patch ... current SKILL.md content has not been loaded in this review turn"
- System requires calling skill_view(name) first, then retrying the write with returned content
- Safety flag `_read_before_write_required` set to true

## Concepts
- skill management
- read-before-write safety
- curator patch
- content verification

## Files
- `bluebubbles-gateway/SKILL.md`
- `references/bluebubbles-allowlist.md`
- `.env`

_Importance: 5 · Confidence: 1_
