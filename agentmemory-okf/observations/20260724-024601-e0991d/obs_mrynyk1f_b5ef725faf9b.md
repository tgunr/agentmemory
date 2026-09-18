---
type: file_edit
title: Patching skill 'macos-native-build'
description: Negative impact on build artifact writing on mounted volumes
resource: agentmemory://observation/obs_mrynyk1f_b5ef725faf9b
tags: ["SwiftPM issues", "file_edit"]
timestamp: 2026-07-24T08:13:46.606534+00:00
source: agentmemory
session_id: 20260724_024601_e0991d
importance: 7
confidence: 0.9
---
# Summary

SwiftPM's clang module-output and index-store writers fail to write intermediates on a mounted volume, causing `swift build`/`swift test` failures. A simple fix is to point these writes at local disk instead.

## Facts
- The issue only occurs when artifacts are written to a mounted volume.
- Dropping the build artifacts to local disk resolves the problem.

## Concepts
- SwiftPM issues

## Files
- `/tmp/<pkg>_build`

_Importance: 7 · Confidence: 0.9_
