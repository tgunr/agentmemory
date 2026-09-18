---
type: Observation
title: CLI Dispatch Script Behavior
description: Limited functionality of /route CLI dispatch command in Hermes
resource: agentmemory://observation/obs_mrxe8p0m_1d81aeb778e7
tags: ["Shell metacharacters", "CLI handling", "Routing logic", "observation"]
timestamp: 2026-07-23T10:53:57.283371+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 7
confidence: 0.9
---
# Summary

The `/route` CLI dispatch command has limitations and quirks due to its use of shell execution. User input must be sanitized, otherwise, commands may not work as intended or result in errors.

## Facts
- The scripting language used is Python 3.
- The `exec_cmd` variable uses shell execution with capture_output enabled.

## Concepts
- Shell metacharacters
- CLI handling
- Routing logic

_Importance: 7 · Confidence: 0.9_
