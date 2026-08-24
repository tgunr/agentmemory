---
type: CommandRun
title: detailed command run for am_export_diag.sh
description: 
resource: agentmemory://observation/obs_mspt80b2_2e06fcc62e66
tags: ["SQL errors", "Worker death handling", "commandrun"]
timestamp: 2026-08-12T08:10:52.427525+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 5
confidence: 1
---
# Summary

The skill ran command am_export_diag.sh, which handled exports successfully after encountering service and worker issues. The outcome was: 500 valid-secret -> route registered but worker dies on invocation (§11.9 restart).

## Facts
- Auth token retrieved and used successfully.
- Export executed with no authentication errors.
- Bogus token prevented import issues.
- Log signatures matched.

## Concepts
- SQL errors
- Worker death handling

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/agentmemory-hermes-integration/scripts/am_export_diag.sh`

_Importance: 5 · Confidence: 1_
