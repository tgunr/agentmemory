---
type: file_edit
title: Maintenance task: Rebuilding better-sqlite3 on AgentMemory
description: Better-sqlite3 ABI mismatch bug fixed.
resource: agentmemory://observation/obs_msptjpj8_a70aea110d12
tags: ["Sql migration", "Better-sqlite3 migration error fix", "Node.js ABI issues", "file_edit"]
timestamp: 2026-08-12T08:19:58.337898+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 8
confidence: 0.9
---
# Summary

The error in the agent memory's prebuilt binary indicates that `mem::export` is not present; however, the `api::export` HTTP trigger can call `mem::export`. Further investigation revealed an auth issue with okf_mirror.sh fixed 2026-08. Additionally, there was a better-sqlite3 ABI mismatch bug. Rebuilding with WORKER node and restarting launchd resolves the problem.

## Facts
- Hardcoded auth issue in okf_mirror.sh fixed (2026-08)
- Rebuilding with WORKER node: `cd /Volumes/AI/agentmemory && /opt/homebrew/Cellar/node/26.5.0/bin/npm rebuild better-sqlite3

## Concepts
- Sql migration
- Better-sqlite3 migration error fix
- Node.js ABI issues

_Importance: 8 · Confidence: 0.9_
