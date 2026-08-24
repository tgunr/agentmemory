---
type: CommandRun
title: Inspecting agentmemory_observer secret handling
description: Comparing working vs broken implementations of secret retrieval
resource: agentmemory://observation/obs_mrqa6xsp_37d5ed387708
tags: ["environment variable fallback", "secret management", "authentication headers", "plugin configuration", "commandrun"]
timestamp: 2026-07-18T11:26:13.655025+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 6
confidence: 1
---
# Summary

Investigated two versions of agentmemory_observer plugin to understand authentication failures. The working personal profile version implements a fallback mechanism to read secrets from ~/.agentmemory/.env when the environment variable isn't set, while the broken flat version only checks environment variables. This explains why one version gets 401 errors and the other works.

## Facts
- Personal profile version at profiles/personal/plugins/agentmemory_observer/__init__.py has _get_secret() function (line 20) with fallback to ~/.agentmemory/.env
- Flat top-level version at ./plugins/agentmemory_observer.py only reads AGENTMEMORY_SECRET from environment (line 17) with no fallback mechanism
- Hermes agent process does NOT export AGENTMEMORY_SECRET, causing 401 errors without fallback
- Flat version "fails all checks" due to missing secret retrieval fallback

## Concepts
- environment variable fallback
- secret management
- authentication headers
- plugin configuration

## Files
- `profiles/personal/plugins/agentmemory_observer/__init__.py`
- `plugins/agentmemory_observer.py`

_Importance: 6 · Confidence: 1_
