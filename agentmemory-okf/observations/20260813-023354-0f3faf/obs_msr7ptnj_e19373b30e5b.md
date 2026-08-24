---
type: file_edit
title: Hermes Gateway Issue Diagnosis
description: Fix Hermes gateway BB crash-loop and any; - echo.
resource: agentmemory://observation/obs_msr7ptnj_e19373b30e5b
tags: ["React hooks", "SQL migration", "Python evaluation", "Syntactic error", "file_edit"]
timestamp: 2026-08-13T07:44:24.403387+00:00
source: agentmemory
session_id: 20260813_023354_0f3faf
importance: 6
confidence: 0.9
---
# Summary

Two distinct failure modes present with the same symptom (BB going crazy). Diagnose BOTH. Fix Hermes gateway BB crash-loop and any; - echo.
The CORRECT guards already in the running tree do NOT re-add a blanket any;- drop, it violates the AGENTS.md "don't destroy the feature you secure" rule.

## Facts
- Root cause: a platform adapter module under ~/.hermes/hermes-agent/gateway/platforms/ has been corrupted — non-Python text prepended to line 1 (seen: a .bashrc eval error trace).
- The supervisor reloads it, import hits SyntaxError, dies UNCLEANLY, relaunches.

## Concepts
- React hooks
- SQL migration
- Python evaluation
- Syntactic error

## Files
- `/Users/username/projects/bluebubbles-loop-diagnosis/adapters.py`

_Importance: 6 · Confidence: 0.9_
