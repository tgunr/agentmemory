---
type: file_write
title: Error occurred during skill manage tool call
description: Worker loaded /opt/homebrew/Cellar/node/26.5.0/bin/node (module 147); agent shell node = ~/.local/bin/node (v22, module 127)
resource: agentmemory://observation/obs_mspt3t2h_dd143c775fb8
tags: ["Node ABI mismatch", "file_write"]
timestamp: 2026-08-12T08:07:36.417749+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 7
confidence: 0.9
---
# Summary

The native better-sqlite3 .node binary was compiled for a different Node ABI than the worker runs, causing require to throw at call time. We observed that the LIVE worker uses node /opt/homebrew/Cellar/node/26.5.0/bin/node (module 147), but the agent shell typically runs ~/.local/bin/node (v22) with module 127, leading to ABI mismatch.

## Facts
- Native better-sqlite3 .node binary was compiled for a different Node ABI than the worker runs
- Require threw at call time under mismatched ABI and did not find caller for invocation

## Concepts
- Node ABI mismatch

_Importance: 7 · Confidence: 0.9_
