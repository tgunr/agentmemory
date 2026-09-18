---
type: Error
title: skill_manage patch failed: read-before-write requirement not met
description: Attempted to patch bluebubbles-gateway skill reference without loading content first
resource: agentmemory://observation/obs_mrrouknh_3e451f053cdf
tags: ["read-before-write pattern", "skill management workflow", "environment variable configuration", "gateway deployment ordering", "error"]
timestamp: 2026-07-19T11:04:17.162718+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The skill_manage patch operation was rejected because the target file content wasn't loaded in the current context. The system enforces a read-before-write pattern requiring skill_view() to be called first. The patch was attempting to add documentation about a deployment ordering pitfall where environment variables must be set before gateway restart to avoid lockout.

## Facts
- Tool: skill_manage with action "patch" on references/bluebubbles-allowlist.md
- Skill name: bluebubbles-gateway
- Error: "Refusing background curator patch... content has not been loaded in this review turn"
- Required workflow: call skill_view(name, file_path=...) first, then retry write
- Patch attempted to insert "DEPLOY-ORDERING LOCKOUT" section explaining BLUEBUBBLES_ALLOW_ALL_USERS and BLUEBUBBLES_ALLOWED_USERS environment variable timing issue

## Concepts
- read-before-write pattern
- skill management workflow
- environment variable configuration
- gateway deployment ordering

## Files
- `references/bluebubbles-allowlist.md`

_Importance: 4 · Confidence: 1_
