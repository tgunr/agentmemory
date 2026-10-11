---
type: Observation
title: API Key Testing
description: No specific context
resource: agentmemory://observation/obs_mv0smzbs_916d84ce2ef4
tags: ["Bearer authorization", "observation"]
timestamp: 2026-10-09T09:59:23.988626+00:00
source: agentmemory
session_id: 20261009_030534_37b4eb
importance: 7
confidence: 0.9
---
# Summary

The system one api model uses Bearer authorization, with keys in $HOME/.hermes/.env. The hermes CLI and gateway load the file at startup, and editing it requires a restart.

## Facts
- System One API key model uses Bearer authorization

## Concepts
- Bearer authorization

## Files
- `references/typesafe-jev.md`

_Importance: 7 · Confidence: 0.9_
