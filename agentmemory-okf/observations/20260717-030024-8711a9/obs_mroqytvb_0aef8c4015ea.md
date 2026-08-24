---
type: CommandRun
title: Run audit script to check observation storage stats
description: Audits real vs empty observations across 12 sessions, finding 47 empty events
resource: agentmemory://observation/obs_mroqytvb_0aef8c4015ea
tags: ["data auditing", "observation storage", "telemetry validation", "post_tool_call hook", "commandrun"]
timestamp: 2026-07-17T09:40:16.436549+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

Executed an audit script to analyze observation storage metrics across multiple sessions. The audit revealed 47 'empty' observations that should ideally be zero, primarily concentrated in session 20260717_030024_8711a9. These empty entries are traced to post_tool_call events lacking actual tool call data, indicating a potential telemetry bug.

## Facts
- Command executed: python3 /tmp/audit_now.py
- Total observations: 437 (390 real, 47 empty) across 13 files
- 12 sessions contain observations
- Session 20260717_030024_8711a9 contains 44 empty and 82 real observations
- Empty samples are post_tool_call events with None tool data
- Real samples include file_read and other types with confidence scores

## Concepts
- data auditing
- observation storage
- telemetry validation
- post_tool_call hook

## Files
- `/tmp/audit_now.py`

_Importance: 5 · Confidence: 1_
