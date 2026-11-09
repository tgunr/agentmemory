---
type: file_edit
title: Mirror OKF session export process error
description: Error exporting OKF session to remote host
resource: agentmemory://observation/obs_mw7v6ecz_0f70a74f15ce
tags: ["remote export error", "file_edit"]
timestamp: 2026-11-08T13:24:34.736107+00:00
source: agentmemory
session_id: local-8068bbf493db449c2fa7c71191cec2cb9ed4e5099328024ca644cfef5b79f159
importance: 7
confidence: 1
---
# Summary

OkF session export failed due to disconnected pipe, indicating a bridge failure.

## Facts
- Read from remote host 10.1.2.1: Operation timed out
- client_loop: send disconnect: Broken pipe
- BRIDGE_FAILED: could not transfer export to davec@pve.local (/tmp/okf-export-merged-15683.json)

## Concepts
- remote export error

_Importance: 7 · Confidence: 1_
