---
type: CommandRun
title: Computer use failed due to unhandled errors in a TaskGroup
description: No available CUA driver session setup succeeded.
resource: agentmemory://observation/obs_mv2onpxg_e62d5d98a30e
tags: ["cua-driver", "commandrun"]
timestamp: 2026-10-10T17:43:32.351547+00:00
source: agentmemory
session_id: 20261010_123854_7d7598
importance: 8
confidence: 1
---
# Summary

The `computer-use` tool failed due to an issue with the CUA driver setup, which is a critical component of the `hermes` system.

## Facts
- the cua-driver binary is missing
- The error message is `cua-driver session setup failed: unhandled errors in a TaskGroup (1 sub-exception)`
- The error was not due to a missing Python dependency, but is instead related to a specific error in a task group
- We need to install the `hermes computer-use` package to resolve this issue.

## Concepts
- cua-driver

_Importance: 8 · Confidence: 1_
