---
type: CommandRun
title: TSC compilation error detection
description: Detecting TSC compilation errors with regex pattern recognition
resource: agentmemory://observation/obs_ms68gaha_3294b8bad151
tags: ["TSC, tsc compilation, pnpm, regex pattern", "commandrun"]
timestamp: 2026-07-29T15:21:49.578785+00:00
source: agentmemory
session_id: 20260729_083331_2ab38b
importance: 5
confidence: 0.9
---
# Summary

The tool detected TSC compilation errors and executed a regex pattern to recognize and filter relevant logs.

## Facts
- Executed command: pnpm exec tsc --noEmit 2>&1 | rg -i \"argumentMode|/project|/route|bluebubbles|showCost|terminal\\.cwd\" | head -20

## Concepts
- TSC, tsc compilation, pnpm, regex pattern

_Importance: 5 · Confidence: 0.9_
