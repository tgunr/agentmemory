---
type: CommandRun
title: Placeholder observation audit found 3 problematic sessions
description: Post-tool-call hook detected incomplete observations in session tracking
resource: agentmemory://observation/obs_mrq7amyh_14b3fcea4786
tags: ["data quality audit", "placeholder detection", "session observation tracking", "commandrun"]
timestamp: 2026-07-18T10:05:07.381659+00:00
source: agentmemory
session_id: 20260717_190757_299949
importance: 5
confidence: 1
---
# Summary

A post-tool-call hook executed an audit script to identify placeholder or incomplete observations in the session tracking system. Three sessions were flagged with observations that have missing or unknown tool output data, indicating potential data integrity issues requiring cleanup.

## Facts
- 58 total sessions with 783 observations analyzed
- 3 sessions flagged for containing placeholder observations
- Session 20260716_122629_af7dd2 has 70 observations with 1 placeholder (obs_mrnszece_2c8d3a5f57ba)
- Session 20260716_135831_0178ff has 43 observations with 1 placeholder (obs_mrnvrjmy_fb107ef41754)
- Session 20260717_190757_299949 has 12 observations with 1 placeholder (obs_mrq7ai3k_1a235037d8f1)
- Placeholder issues include: missing tool output, unknown tool calls, no tool input provided

## Concepts
- data quality audit
- placeholder detection
- session observation tracking

## Files
- `/tmp/hermes-am-placeholder-audit.py`

_Importance: 5 · Confidence: 1_
