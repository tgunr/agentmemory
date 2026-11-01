---
type: Observation
title: Session sidebar empty for one profile
description: Desktop sidebar shows no sessions for one profile.
resource: agentmemory://observation/obs_mvwxk6qc_efac75471a8a
tags: ["Python import issues", "Hermes CLI session management", "TestClient usage", "observation"]
timestamp: 2026-10-31T21:45:49.322458+00:00
source: agentmemory
session_id: local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435
importance: 8
confidence: 1
---
# Summary

The Desktop sidebar shows no sessions for the default profile, but other profiles and gateways show sessions. The issue is renderer-side.

## Facts
- Problem with Hermes Desktop sidebar.
- Profile sessions read failed.
- Missing profile session read line in gui.log.

## Concepts
- Python import issues
- Hermes CLI session management
- TestClient usage

## Files
- `/references/sidebar-sessions-empty.md`

_Importance: 8 · Confidence: 1_
