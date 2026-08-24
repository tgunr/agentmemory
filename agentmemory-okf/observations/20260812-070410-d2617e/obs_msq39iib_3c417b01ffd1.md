---
type: Observation
title: mcp__mcp_router__start_process error
description: This was not deferred and is considered a non-essential error.
resource: agentmemory://observation/obs_msq39iib_3c417b01ffd1
tags: ["tool_call_deferral", "observation"]
timestamp: 2026-08-12T12:51:58.830348+00:00
source: agentmemory
session_id: 20260812_070410_d2617e
importance: 4
confidence: 0.9
---
# Summary

This was an unexpected call to mcp__mcp_router__start_process, which should be deferred if it appears in the model-facing tools list. This action may still impact the tooling infrastructure.

## Facts
- Tool definition does not support tool_call deferral
- Error message: 'mcp__mcp_router__start_process' is not a deferrable tool

## Concepts
- tool_call_deferral

_Importance: 4 · Confidence: 0.9_
