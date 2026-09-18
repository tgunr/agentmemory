---
type: FileRead
title: Default profile memory provider
description: No relevant context provided
resource: agentmemory://observation/obs_ms0kshtt_24f92c982ad0
tags: ["agentmemory", "fileread"]
timestamp: 2026-07-25T16:20:37.310785+00:00
source: agentmemory
session_id: 20260725_111430_873a56
importance: 6
confidence: 1
---
# Summary

The terminal run a command to display information about the default profile memory provider, specifically agentmemory values.

## Facts
- The tool used was a Terminal instance.
- The command run was "echo \"=== default profile memory.provider ===\" ; grep -E 'memory:|provider' ~/.hermes/profiles/default/config.yaml 2>/dev/null | head ; echo ; echo \"=== global memory config ===\" ; grep -rE 'memory.provider|agentmemory' ~/.hermes/config.yaml 2>/dev/null | head ; echo ; echo \"=== mcp servers ===\" ; grep -A3 'agentmemory' ~/.hermes/config.yaml 2>/dev/null | head -20 "
- The exit code was 0.

## Concepts
- agentmemory

## Files
- `/Users/davec/.hermes/config.yaml`

_Importance: 6 · Confidence: 1_
