---
type: Observation
title: ps command execution with grep filter
description: Parsing ps output to find relevant process info
resource: agentmemory://observation/obs_mrxgeteg_7a84def00dff
tags: ["shell scripting", "observation"]
timestamp: 2026-07-23T11:54:42.094307+00:00
source: agentmemory
session_id: 20260723_062742_cf43a2
importance: 8
confidence: 0.9
---
# Summary

The tools command execution details, including output and exit code, which are relevant to detecting and handling "fm serve" process.

## Facts
- Type of tool used (terminal)
- Command executed by the tool: ps aux | grep 'fm serve' | grep -v grep

## Concepts
- shell scripting

_Importance: 8 · Confidence: 0.9_
