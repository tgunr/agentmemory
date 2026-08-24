---
type: file_edit
title: "model-selection-routing"
description: Refactor router to consider full candidate set and score each model against current prompt's needs.
resource: agentmemory://observation/obs_mrwnl5hh_ec5fe9c19151
tags: ["session-aware stickiness", "file_edit"]
timestamp: 2026-07-22T22:27:48.865098+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 6
confidence: 0.9
---
# Summary

The router must consider the full candidate set and score each model to determine the best fit based on user preferences and task requirements. This refactor aims to address the issue where models were always picked first.

## Facts
- Plain list of model strings per route is not enough, `pick_model()` returns `models[0]`.
- User explicitly called out that same model appears at the top of all routes.

## Concepts
- session-aware stickiness

## Files
- `references/capability-scoring.md`

_Importance: 6 · Confidence: 0.9_
