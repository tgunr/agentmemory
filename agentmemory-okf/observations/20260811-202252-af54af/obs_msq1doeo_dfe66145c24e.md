---
type: Error
title: mcp__mcp_router__start_process error: required argument timeout_ms missing
description: The tool call was not invoked due to a missing argument.
resource: agentmemory://observation/obs_msq1doeo_dfe66145c24e
tags: ["tool_call arguments", "mcp router", "error"]
timestamp: 2026-08-12T11:59:13.866879+00:00
source: agentmemory
session_id: 20260811_202252_af54af
importance: 8
confidence: 0.9
---
# Summary

The mcp__mcp_router__start_process tool call failed due to a missing required argument, timeout_ms. The tool was not invoked as expected.

## Facts
- tool_call is missing the timeout_ms parameter in its arguments.
- The parameters schema for the tool_call requires command, timeout_ms, shell, verbose_timing, and origin.

## Concepts
- tool_call arguments
- mcp router

_Importance: 8 · Confidence: 0.9_
