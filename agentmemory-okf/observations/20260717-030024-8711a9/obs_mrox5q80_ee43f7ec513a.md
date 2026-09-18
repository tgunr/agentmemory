---
type: Error
title: Skill patch rejected: read-before-write requirement not met
description: skill_manage patch for hermes-service-debugging failed due to missing prior skill_view call
resource: agentmemory://observation/obs_mrox5q80_ee43f7ec513a
tags: ["skill management", "read-before-write pattern", "knowledge curation", "skill patching workflow", "error"]
timestamp: 2026-07-17T12:33:35.996710+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 4
confidence: 1
---
# Summary

The skill_manage tool rejected a patch operation to add debugging knowledge about test isolation and HTTP route table issues because the skill content hadn't been loaded in the current review turn. This enforces a read-before-write workflow to ensure edits are made with full context of existing content. The fix is straightforward: call skill_view() on the skill first, then retry the patch operation.

## Facts
- Tool: skill_manage with action "patch" on skill "hermes-service-debugging"
- Patch attempted to add items 39-40 covering pre-existing test isolation (git stash) and wedged HTTP route table recovery (zombie worker cleanup)
- Error: "Refusing background curator patch... current SKILL.md content has not been loaded in this review turn"
- Recovery requires calling skill_view(name) first to load content, then retrying the patch
- System enforces read-before-write pattern to prevent blind edits to skill knowledge bases

## Concepts
- skill management
- read-before-write pattern
- knowledge curation
- skill patching workflow

## Files
- `skill:hermes-service-debugging`

_Importance: 4 · Confidence: 1_
