---
type: file_write
title: Created Python script to audit AgentMemory placeholder observations
description: Read-only audit script querying local AgentMemory REST API
resource: agentmemory://observation/obs_mrq7ai3k_1a235037d8f1
tags: ["AgentMemory REST API", "Data quality audit", "Read-only API client", "Placeholder detection", "file_write"]
timestamp: 2026-07-18T10:05:01.086357+00:00
source: agentmemory
session_id: 20260717_190757_299949
importance: 4
confidence: 1
---
# Summary

A Python script was created to audit the local AgentMemory database for low-quality placeholder observations. The script enumerates sessions via the REST API and flags entries matching specific placeholder text patterns without modifying any data.

## Facts
- Script written to /tmp/hermes-am-placeholder-audit.py (resolved to /private/tmp/hermes-am-placeholder-audit.py)
- Queries local AgentMemory REST API on port 3111 for sessions and observations
- Reads authentication secret from ~/.agentmemory/.env
- Flags observations containing placeholder markers like "tool call - unknown" or "missing tool output"
- Script is strictly read-only and mutates no files or API data

## Concepts
- AgentMemory REST API
- Data quality audit
- Read-only API client
- Placeholder detection

## Files
- `/tmp/hermes-am-placeholder-audit.py`
- `/private/tmp/hermes-am-placeholder-audit.py`

_Importance: 4 · Confidence: 1_
