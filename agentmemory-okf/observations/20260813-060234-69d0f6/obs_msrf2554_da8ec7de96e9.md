---
type: file_edit
title: Self-hosted Admin Password Reset Skill
description: Reset a self-hosted app admin/owner password via DB hash.
resource: agentmemory://observation/obs_msrf2554_da8ec7de96e9
tags: ["bcrypt", "Docmost", "file_edit"]
timestamp: 2026-08-13T11:09:56.483301+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 8
confidence: 0.9
---
# Summary

The skill manage tool executes a script to reset a self-hosted app admin/owner password via DB hash. The error message indicates that the skill description is too long, causing issues with routing signals.

## Facts
- Docmost uses bcrypt (NOT bcryptjs). Adapt if your target differs.
- Avoid lib/version mismatch and the `process.argv` off-by-one.

## Concepts
- bcrypt
- Docmost

## Files
- `/path/to/hermes/config.yaml`
- `~/.hermes/config.yaml`

_Importance: 8 · Confidence: 0.9_
