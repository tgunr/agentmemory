---
type: CommandRun
title: Check mem::compress health metrics via API endpoint
description: Querying localhost:3111 health endpoint with auth header
resource: agentmemory://observation/obs_mroq7p2t_ea8fb6ab6eb4
tags: ["health monitoring", "API metrics", "shell scripting", "security scanning", "commandrun"]
timestamp: 2026-07-17T09:19:10.512792+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 5
confidence: 1
---
# Summary

Executed a diagnostic shell command to retrieve health metrics for the mem::compress function, which reveals high latency (18+ seconds average) but perfect quality scores on successful calls. The command triggered a security scan due to piping remote content to python3 interpreter, which was user-approved.

## Facts
- Command pipes curl output to python3 for JSON processing, triggering security warning
- Health endpoint http://localhost:3111/agentmemory/health returns function metrics
- mem::compress function shows 18309ms avg latency, 101 failures, 500 successes out of 601 total calls
- avgQualityScore is 100 (perfect), suggesting high-quality successful compressions

## Concepts
- health monitoring
- API metrics
- shell scripting
- security scanning

## Files
- `/tmp/check_metrics.sh`

_Importance: 5 · Confidence: 1_
