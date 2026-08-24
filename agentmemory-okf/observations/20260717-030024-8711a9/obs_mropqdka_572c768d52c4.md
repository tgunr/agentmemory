---
type: file_edit
title: Patched hermes-service-debugging skill checklist
description: Expanded verification checklist in SKILL.md
resource: agentmemory://observation/obs_mropqdka_572c768d52c4
tags: ["skill management", "verification scripts", "stale worker detection", "hook-type testing", "agent memory pipeline", "file_edit"]
timestamp: 2026-07-17T09:05:42.439828+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

The hermes-service-debugging skill checklist was expanded with two new verification steps: observe-hooktype script coverage after observe.ts changes, and ensuring no orphaned stale workers after rebuilds. This tightens the debugging playbook so post-build runtime and hook-type regressions are explicitly checked.

## Facts
- Skill patched: hermes-service-debugging (SKILL.md)
- action: patch; success: true; 1 replacement
- Added checklist item: bash scripts/verify-observe-hooktype.sh (after observe.ts hook-type changes)
- Added checklist item: only ONE node dist/index.mjs worker running, start time AFTER last pnpm run build
- Retained existing item: bash scripts/verify-agentmemory.sh end-to-end (start → observe → list → end → forget)
- Fixed trailing quote artifact on original verify-agentmemory checklist line

## Concepts
- skill management
- verification scripts
- stale worker detection
- hook-type testing
- agent memory pipeline

## Files
- `SKILL.md`
- `scripts/verify-agentmemory.sh`
- `scripts/verify-observe-hooktype.sh`
- `observe.ts`
- `dist/index.mjs`

_Importance: 5 · Confidence: 1_
