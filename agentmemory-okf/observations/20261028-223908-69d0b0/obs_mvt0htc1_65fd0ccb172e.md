---
type: file_edit
title: Failed to restart OctoPrint service
description: No octoprint user found
resource: agentmemory://observation/obs_mvt0htc1_65fd0ccb172e
tags: ["LCM (Longest Validity) principle", "file_edit"]
timestamp: 2026-10-29T03:56:52.793611+00:00
source: agentmemory
session_id: 20261028_223908_69d0b0
importance: 5
confidence: 1
---
# Summary

The OctoPrint service failed to restart due to insufficient permissions to log in as the 'octoprint' user.

## Facts
- Command: ssh pve.root 'bash -s'
- Command timeout: 120 seconds
- Output: [snipped]
- Exit code: 2

## Concepts
- LCM (Longest Validity) principle

_Importance: 5 · Confidence: 1_
