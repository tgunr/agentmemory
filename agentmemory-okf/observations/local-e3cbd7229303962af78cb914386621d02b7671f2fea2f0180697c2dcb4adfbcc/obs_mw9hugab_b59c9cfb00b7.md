---
type: file_edit
title: Updated factor-api-renames.md
description: Samba mount timeout workaround
resource: agentmemory://observation/obs_mw9hugab_b59c9cfb00b7
tags: ["SAMBA mount performance", "tool performance optimization", "file_edit"]
timestamp: 2026-11-09T16:46:54.703974+00:00
source: agentmemory
session_id: local-e3cbd7229303962af78cb914386621d02b7671f2fea2f0180697c2dcb4adfbcc
importance: 4
confidence: 0.9
---
# Summary

The `factor-build` tool was updated with a patch to scope the search to one vocabulary directory, improving performance on SAMBA mounts.

## Facts
- Total tool timeout exceeded due to entire working tree searching
- Scope limited to one vocabulary directory to improve performance

## Concepts
- SAMBA mount performance
- tool performance optimization

## Files
- `references/factor-api-renames.md`

_Importance: 4 · Confidence: 0.9_
