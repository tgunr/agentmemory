---
type: CommandRun
title: Investigate process tree and port 3111 ownership
description: Checking parent PIDs and port bindings for Node.js workers
resource: agentmemory://observation/obs_mrowo9i4_56ddda2ac852
tags: ["Process tree mapping", "Port ownership debugging", "Orphaned processes", "Node.js workers", "commandrun"]
timestamp: 2026-07-17T12:20:01.174870+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

Investigated process hierarchy and port bindings to identify which Node.js worker owns port 3111. Found that PID 92564 owns the port and spawned PID 92568, while PID 17256 is orphaned and reparented to launchd (PID 1).

## Facts
- PID 17256 (node dist/index.mjs) has PPID 1 (launchd)
- PID 92568 (node dist/index.mjs) has PPID 92564
- PID 92564 is the process holding TCP port 3111

## Concepts
- Process tree mapping
- Port ownership debugging
- Orphaned processes
- Node.js workers

## Files
- `dist/index.mjs`

_Importance: 5 · Confidence: 1_
