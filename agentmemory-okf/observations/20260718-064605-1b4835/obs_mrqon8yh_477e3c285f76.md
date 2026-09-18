---
type: file_edit
title: Patched SKILL.md for bluebubbles-gateway with allowlist documentation
description: Added RESTRICTING TO SPECIFIC NUMBERS section explaining authorization configuration
resource: agentmemory://observation/obs_mrqon8yh_477e3c285f76
tags: ["allowlist authorization", "BlueBubbles gateway configuration", "file_edit"]
timestamp: 2026-07-18T18:10:49.237184+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The skill_manage tool patched SKILL.md to add comprehensive documentation about the BlueBubbles gateway allowlist authorization system. The update explains how to configure environment variables to restrict messaging to specific phone numbers, including the E.164 format requirements and fallback digit-only formats.

## Facts
- Tool used: skill_manage with action 'patch' on skill 'bluebubbles-gateway'
- Added documentation for allowlist gate in gateway/authz_mixin.py::_is_user_authorized
- Environment variables documented: BLUEBUBBLES_ALLOWED_USERS, BLUEBUBBLES_ALLOW_ALL_USERS
- Code anchors referenced: authz_mixin.py:381 (platform_env_map), authz_mixin.py:408 (platform_allow_all_map)
- New reference file mentioned: references/bluebubbles-allowlist.md

## Concepts
- allowlist authorization
- BlueBubbles gateway configuration

## Files
- `SKILL.md`
- `gateway/authz_mixin.py`
- `references/bluebubbles-allowlist.md`
- `references/bluebubbles-self-loop.md`

_Importance: 5 · Confidence: 1_
