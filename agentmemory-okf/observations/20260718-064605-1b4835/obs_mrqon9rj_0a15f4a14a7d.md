---
type: file_edit
title: Patched skill documentation for bluebubbles-gateway
description: Added limitations for BlueBubbles webhook and .env file editing restrictions
resource: agentmemory://observation/obs_mrqon9rj_0a15f4a14a7d
tags: ["BlueBubbles webhook API", "file permission guards", "skill documentation management", "file_edit"]
timestamp: 2026-07-18T18:10:50.284209+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Updated skill documentation to reflect critical limitations in the BlueBubbles integration and environment file handling. The webhook unregister endpoint is unavailable (returns 405) and .env files cannot be edited from in-chat terminal due to security guards, requiring users to execute commands in Terminal.app instead.

## Facts
- Tool skill_manage used with action "patch" on skill "bluebubbles-gateway"
- BlueBubbles DELETE /api/v1/webhook and POST /api/v1/webhook/delete both return 405
- .env file reads blocked by provider read-guard under ~/.hermes/
- Automated write-guard blocks sed/file writes to .env even after clarify approval
- Clarify tool approval not wired to terminal write-guard causing timeout errors
- User must be given exact lines or one-liner commands for Terminal.app execution

## Concepts
- BlueBubbles webhook API
- file permission guards
- skill documentation management

## Files
- `SKILL.md (bluebubbles-gateway)`

_Importance: 6 · Confidence: 1_
