---
type: file_edit
title: Hermes scheduled job operation & repair
description: Cover various cases
resource: agentmemory://observation/obs_msgf1nbx_6e1ca4781786
tags: ["inference config drifted", "scheduled tasks", "spend-guardrail", "SQl migration", "file_edit"]
timestamp: 2026-08-05T18:24:05.464117+00:00
source: agentmemory
session_id: 20260805_131611_e325ef
importance: 5
confidence: 0.9
---
# Summary

Hermes scheduled job diagnose and repair operations, especially fixes for silent failures caused by inference config drifts.

## Facts
- silent failure is almost always due to spend-guardrail issues
- The scheduler stores provider_snapshot and model_snapshot in jobs.json

## Concepts
- inference config drifted
- scheduled tasks
- spend-guardrail
- SQl migration

## Files
- `~/.hermes/cron/jobs.json`
- `/Users/your/file`

_Importance: 5 · Confidence: 0.9_
