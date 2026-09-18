---
type: FileRead
title: New TCC setting for memory tool
description: Updated local file details
resource: agentmemory://observation/obs_msud11zc_815fa4f38345
tags: ["file permissions", "TCC restrictions", "fileread"]
timestamp: 2026-08-15T12:36:25.021556+00:00
source: agentmemory
session_id: 20260815_063700_d8cc2d
importance: 6
confidence: 0.9
---
# Summary

The post_tool_call hook for the 'memory' tool has been applied with updated TCC settings, allowing writes while restricting certain actions. Blob storage remains blocked as well.

## Facts
- TCC settings allow writes, but with restrictions
- Blob storage is blocked

## Concepts
- file permissions
- TCC restrictions

## Files
- `/Volumes/AI`
- `/Volumes/work`

_Importance: 6 · Confidence: 0.9_
