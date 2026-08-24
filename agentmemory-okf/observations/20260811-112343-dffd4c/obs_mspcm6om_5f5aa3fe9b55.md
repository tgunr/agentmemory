---
type: Error
title: AgentMemory Reorg/Restart Recovery Issue
description: Noise after reorg or restart
resource: agentmemory://observation/obs_mspcm6om_5f5aa3fe9b55
tags: ["error"]
timestamp: 2026-08-12T00:26:00.403881+00:00
source: agentmemory
session_id: 20260811_112343_dffd4c
importance: 5
confidence: 0.75
---
# Summary

The viewer (:3113) renders but every `/agentmemory/*` endpoint 404s after a reorg, `brew upgrade`, or restart. The engine function-registry is poisoned. To recover, run the native-module wipe (better-sqlite3 ABI mismatch) Mode A fix block.

## Facts
- Engine function-registry is poisoned (§11.9). Go to the fix block.
- Pgrep -fl 'dist/index.mjs': worker absent ⇒ native-module wipe (better-sqlite3) — Mode A.

_Importance: 5 · Confidence: 0.75_
