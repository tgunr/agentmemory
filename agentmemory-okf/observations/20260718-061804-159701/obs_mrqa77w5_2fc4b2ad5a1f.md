---
type: FileRead
title: Read AgentMemory observer verification script
description: First 50 of 115 lines of an ad-hoc Hermes plugin audit and smoke test
resource: agentmemory://observation/obs_mrqa77w5_2fc4b2ad5a1f
tags: ["Hermes plugin verification", "environment variable fallback", "AgentMemory observer", "live API smoke testing", "dynamic Python module loading", "state database resolution", "fileread"]
timestamp: 2026-07-18T11:26:26.737895+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 3
confidence: 1
---
# Summary

This Python script audits two configuration failure modes that can make the AgentMemory UI on port 3113 appear frozen: secret resolution and state database selection. It also performs a live API smoke test, but does not reload the running Hermes plugin or constitute a full test suite.

## Facts
- The script verifies that the observer secret falls back to ~/.agentmemory/.env when AGENTMEMORY_SECRET is unset, avoiding HTTP 401 errors.
- It verifies HERMES_STATE_DB resolves to a real non-empty state.db rather than an empty profile database.
- The script registers a uniquely named session, posts one observation, and expects HTTP 200 or 201.
- It should be run as: env -u AGENTMEMORY_SECRET python3 scripts/verify-observer-secret.py
- Plugin edits require restarting the Hermes desktop app or gateway; the script only validates the on-disk module and live API.
- It recursively discovers agentmemory_observer/__init__.py copies under ~/.hermes and dynamically imports them for checking.
- The read was truncated at line 50 of 115.

## Concepts
- Hermes plugin verification
- environment variable fallback
- AgentMemory observer
- live API smoke testing
- dynamic Python module loading
- state database resolution

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/agentmemory-hermes-integration/scripts/verify-observer-secret.py`

_Importance: 3 · Confidence: 1_
