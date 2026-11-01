---
type: file_write
title: Fixed a bug in the Hermes Agent
description: No fix possible without modifying the scheduler
resource: agentmemory://observation/obs_mvwao7ju_52696c8c0c2d
tags: ["garbage collection", "scheduler bug", "file_write"]
timestamp: 2026-10-31T11:05:05.842804+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 8
confidence: 0.9
---
# Summary

This fix avoids an unbounded retry of a deterministic failure and modifies the environment variable on a multiplex gateway

## Facts
- The issue was triggered by a stuck receipt that evaded garbage collection
- The issue was resolved by moving the journal out of a specific directory

## Concepts
- garbage collection
- scheduler bug

## Files
- `/private/tmp/hermes-verify-jev/issue-146428-comment.md`

_Importance: 8 · Confidence: 0.9_
