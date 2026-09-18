---
type: CommandRun
title: Error on memory export
description: Invocation stopped with HTTP 500 error
resource: agentmemory://observation/obs_msptltls_b698e871cc8a
tags: ["worker registry", "migration", "flapping worker", "function registration", "Node.js", "commandrun"]
timestamp: 2026-08-12T08:21:36.920499+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 7
confidence: 0.9
---
# Summary

The memory export failed due to a missing function from the engine runtime registry. The worker node and Node version were checked as not being related to the issue.

## Facts
- a worker was flapping due to an UNREGISTERED function in mem::export

## Concepts
- worker registry
- migration
- flapping worker
- function registration
- Node.js

_Importance: 7 · Confidence: 0.9_
