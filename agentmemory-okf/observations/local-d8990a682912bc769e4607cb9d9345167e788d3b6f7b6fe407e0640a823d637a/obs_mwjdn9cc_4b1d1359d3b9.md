---
type: file_edit
title: Repack requirements and build scripts
description: Mandatory user approval for destructive swaps
resource: agentmemory://observation/obs_mwjdn9cc_4b1d1359d3b9
tags: ["pnpm", "file_edit"]
timestamp: 2026-11-16T14:47:02.408399+00:00
source: agentmemory
session_id: local-d8990a682912bc769e4607cb9d9345167e788d3b6f7b6fe407e0640a823d637a
importance: 4
confidence: 0.9
---
# Summary

The build script invokes **pnpm**, which on mini lives at `~/.hermes/tools/pnpm-12.15.0-darwin-arm64`. Pnpm is used in the build scripts.

## Facts
- ASAR repack requires user approval
- Pnpm used in the build scripts

## Concepts
- pnpm

## Files
- `/Applications/Hermes.app`

_Importance: 4 · Confidence: 0.9_
