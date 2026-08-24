---
type: file_edit
title: Verify TERMINAL_CWD leak and gateway cwd after Hermes desktop/cli restart
description: Run this checklist whenever the gateway launch-time epoch differs from `~/.hermes/.last-hermes-start`
resource: agentmemory://observation/obs_mst0vxlj_6350087702be
tags: ["file_edit"]
timestamp: 2026-08-14T14:08:44.500014+00:00
source: agentmemory
session_id: 20260814_090139_699ae9
importance: 7
confidence: 0.5
---
# Summary

During a Hermes desktop/cli restart, verify that the TERMINAL_CWD leak and gateway cwd are correct.

## Files
- `SKILL.md`

_Importance: 7 · Confidence: 0.5_
