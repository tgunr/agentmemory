---
type: file_edit
title: Failed to parse JSONRPC message from server
description: No specific context provided
resource: agentmemory://observation/obs_msuiczj8_bafaf8a983dd
tags: ["Python encoding settings", "file_edit"]
timestamp: 2026-08-15T15:05:39.797103+00:00
source: agentmemory
session_id: 20260815_100130_c7b7e2
importance: 5
confidence: 0.9
---
# Summary

The SDK's JSONRPC message parser encountered an exception. An error occurred while capturing the terminal output, potentially related to encoding issues with the Python process.

## Facts
- Python process stdout pipe capture fails due to incorrect encoding settings
- Certain C shell commands behave incorrectly when using non-standard Python encoding

## Concepts
- Python encoding settings

_Importance: 5 · Confidence: 0.9_
