---
type: file_edit
title: agentmemory-hermes-integration needs a new §11.13 covering the AgentMemory export-specific 500
description: Error handling for `GET /agentmemory/export` with HTTP 500
resource: agentmemory://observation/obs_msptldkw_7cd6f8e35705
tags: ["iii binary", "file_edit"]
timestamp: 2026-08-12T08:21:16.156221+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 7
confidence: 0.9
---
# Summary

Fix for `agentmemory-hermes-integration` involves launchingctl load and verifying that worker-registry is stable. Hardkill of the bad process can also be used, with recommended action being adoption by the hermes curator.

## Facts
- The worker node has a version of Node v26.5.0/ABI 147.
- The error string lives in the prebuilt ~/.local/bin/iii binary, not agentmemory code.

## Concepts
- iii binary

## Files
- `/tmp/agentmemory.stdout.log`

_Importance: 7 · Confidence: 0.9_
