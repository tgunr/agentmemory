---
type: file_edit
title: Remove Hermes proccess
description: 
resource: agentmemory://observation/obs_mwi2ble3_4fa4a61c6b8a
tags: ["kill parent process", "Python interpreter", "file_edit"]
timestamp: 2026-11-15T16:42:16.198674+00:00
source: agentmemory
session_id: local-e1e6499998c2ef29d74e9457a59fa7878a3c72c854a9497ca9e7d3769fa21a57
importance: 7
confidence: 0.9
---
# Summary

The command kill command kill the parent Python process which runs the gateway causing blocked exception. The output contains error message with details of killed processes.

## Facts
- Python interpreter matches Hermes process
- Process hosting gateway killed

## Concepts
- kill parent process
- Python interpreter

_Importance: 7 · Confidence: 0.9_
