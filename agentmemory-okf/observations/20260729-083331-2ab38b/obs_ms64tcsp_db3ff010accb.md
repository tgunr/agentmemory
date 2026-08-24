---
type: file_edit
title: Pin package manager to pnpm v10.13.1
description: Corepack-enabled installs fail fast on mismatched versions
resource: agentmemory://observation/obs_ms64tcsp_db3ff010accb
tags: ["pnpm", "corepack", "file_edit"]
timestamp: 2026-07-29T13:40:00.645823+00:00
source: agentmemory
session_id: 20260729_083331_2ab38b
importance: 4
confidence: 0.9
---
# Summary

A fix was applied to prevent silent use of different pnpm package versions, enabling Corepack enforcement and ensuring explicit version usage. This change affects how hermes-agent handles package manager updates.

## Facts
- The output commands included a commit message for the changes.

## Concepts
- pnpm
- corepack

## Files
- ``

_Importance: 4 · Confidence: 0.9_
