---
type: FileRead
title: Viewed agentmemory-hermes-integration skill script
description: Verification script for agentmemory_observer Hermes plugin secret resolution and API smoke test
resource: agentmemory://observation/obs_mrqa9fk5_c971dc106250
tags: ["Hermes plugin integration", "AgentMemory observer", "Secret resolution fallback", "API smoke testing", "Bearer token authentication", "Environment variable management", "Plugin hot-reload limitations", "fileread"]
timestamp: 2026-07-18T11:28:09.984476+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 5
confidence: 1
---
# Summary

Viewed the verify-observer-secret.py script which is an ad-hoc audit and smoke test tool for the agentmemory_observer Hermes plugin. It validates that the SECRET is properly resolved via the ~/.agentmemory/.env fallback mechanism and that HERMES_STATE_DB points to a real, non-empty database, then performs live API calls to confirm the plugin can authenticate and post observations successfully.

## Facts
- Script path: scripts/verify-observer-secret.py
- Skill name: agentmemory-hermes-integration
- Script audits all copies of agentmemory_observer plugin found under ~/.hermes/**/agentmemory_observer/__init__.py
- Checks two failure modes: SECRET resolution via ~/.agentmemory/.env fallback (not env-only which causes 401), and HERMES_STATE_DB resolving to real non-empty state.db
- Performs live smoke test: registers session via POST /agentmemory/session/start and posts observation via POST /agentmemory/observe, expects HTTP 200/201
- Uses Bearer token auth with resolved SECRET for API calls
- AgentMemory UI runs on port 3113
- Script must be run with AGENTMEMORY_SECRET env var UNSET to exercise fallback path
- Running agent must be reloaded for plugin edits to take effect

## Concepts
- Hermes plugin integration
- AgentMemory observer
- Secret resolution fallback
- API smoke testing
- Bearer token authentication
- Environment variable management
- Plugin hot-reload limitations

## Files
- `scripts/verify-observer-secret.py`

_Importance: 5 · Confidence: 1_
