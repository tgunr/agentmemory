---
type: file_edit
title: AgentMemory REPORTING GOTCHA
description: This is a HARMLESS artifact, not a dead service.
resource: agentmemory://observation/obs_ms0kzqz9_a73fb1726511
tags: ["character limit", "memory provider", "LaunchAgent", "file_edit"]
timestamp: 2026-07-25T16:26:15.761828+00:00
source: agentmemory
session_id: 20260725_111430_873a56
importance: 4
confidence: 0.9
---
# Summary

The tool returned an error message due to character limit exceeded. The tool reported that the memory provider is missing but there are live services running.

## Facts
- The actual service IS up: /livez=ok, /sessions + /health return real data, LaunchAgent com.github.agentmemory loaded.

## Concepts
- character limit
- memory provider
- LaunchAgent

## Files
- `/livez=ok, /sessions + /health return real data, LaunchAgent com.github.agentmemory loaded.`

_Importance: 4 · Confidence: 0.9_
