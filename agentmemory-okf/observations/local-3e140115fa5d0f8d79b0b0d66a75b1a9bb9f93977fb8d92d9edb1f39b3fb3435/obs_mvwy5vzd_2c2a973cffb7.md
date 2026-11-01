---
type: file_write
title: Fixing project filter in Hermes app sidebar
description: Debugging and updating local storage
resource: agentmemory://observation/obs_mvwy5vzd_2c2a973cffb7
tags: ["project filter", "file_write"]
timestamp: 2026-10-31T22:02:41.830337+00:00
source: agentmemory
session_id: local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435
importance: 7
confidence: 0.9
---
# Summary

A bug was found in the Hermes app's sidebar, where a project filter was causing issues with session display. A fix was applied by launching the app with a debug port and updating the local storage.

## Facts
- The Hermes app's sidebar displays no sessions for a specific profile.
- Project filters were causing the issue.

## Concepts
- project filter

## Files
- `references/sidebar-empty-diagnosis.md`

_Importance: 7 · Confidence: 0.9_
