---
type: file_edit
title: Fix issue with /projects command in Hermes backend
description: Determining why /projects command is not working as expected in Hermes backend
resource: agentmemory://observation/obs_mvwosvlj_a74ee5ddf499
tags: ["Command-line argument parsing", "file_edit"]
timestamp: 2026-10-31T17:40:38.259781+00:00
source: agentmemory
session_id: local-45260ea5a0f60ca408ae8c47c8e3d918a531255a14a72fc06d8c02c6f380ae79
importance: 8
confidence: 0.9
---
# Summary

The /projects command is not working as expected in the Hermes backend, resulting in a hanging experience and lack of popover functionality. The command has been tested in various scenarios, including hitting enter and tab, but still lacks proper navigation to select a project.

## Facts
- The /projects command is still hanging in the Hermes backend after attempting to implement it
- The /projects command is not providing a popover, even when hitting enter

## Concepts
- Command-line argument parsing

## Files
- `/Users/davec/.hermes/logs/gateway.log`

_Importance: 8 · Confidence: 0.9_
