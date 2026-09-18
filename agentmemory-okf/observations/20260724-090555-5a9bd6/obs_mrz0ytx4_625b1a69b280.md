---
type: file_edit
title: Xcodegen build failure detection rule
description: Duplicate output detected in Xcodegen project.
resource: agentmemory://observation/obs_mrz0ytx4_625b1a69b280
tags: ["Invalid Xcodegen configuration", "Duplicate output detection", "file_edit"]
timestamp: 2026-07-24T14:17:54.418296+00:00
source: agentmemory
session_id: 20260724_090555_5a9bd6
importance: 7
confidence: 0.9
---
# Summary

The built-in code analysis by Xcodegen detected duplicates in its execution. The code reviewer needed to review this error on background.

## Facts
- Non-standard `info.path` usage leads to duplicate output build failure
- Multiple commands produce the same path, causing an invalid build

## Concepts
- Invalid Xcodegen configuration
- Duplicate output detection

## Files
- `/Users/davec/.hermes/skills/software-development/swift-ios-build/SKILL.md`

_Importance: 7 · Confidence: 0.9_
