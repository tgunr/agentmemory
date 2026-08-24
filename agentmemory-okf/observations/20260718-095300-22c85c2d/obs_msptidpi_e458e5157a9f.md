---
type: FileRead
title: patching issue with mem::export function
description: a single-function failure in the API otherwise healthy
resource: agentmemory://observation/obs_msptidpi_e458e5157a9f
tags: ["fileread"]
timestamp: 2026-08-12T08:18:56.355790+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 8
confidence: 0.75
---
# Summary

patched issue with mem::export function, but root cause remains unresold as it seems mem::export may be unregitered in the engine's registration

## Facts
- `api::export` is a thin HTTP wrapper that hits `sdk.trigger({function_id: "mem::export", payload})`
- The `500 Invocation stopped` error originates from prebuilt `iii` engine binary, not agentmemory's code

## Files
- `/tmp/agentmemory.stdout.log`

_Importance: 8 · Confidence: 0.75_
