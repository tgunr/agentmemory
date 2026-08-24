---
type: Search
title: Search for function registration patterns in index.ts
description: Found registration patterns for 13 function modules
resource: agentmemory://observation/obs_mroq4zi5_06a44aaf3034
tags: ["function registration pattern", "module imports", "dependency injection", "search"]
timestamp: 2026-07-17T09:17:04.053767+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 5
confidence: 1
---
# Summary

Search revealed the main entry point registers 13 modular function handlers for the agent memory system, including the specifically queried patterns (governance, leases, signals, routines, sketches) plus additional functions like actions, frontier, and sentinels. Each module is imported and registered with appropriate context parameters.

## Facts
- Total 32 matches found across the file
- Imports from 13 different function modules in ./functions/ directory
- Function registrations at lines 305-319 include: Governance, Actions, Frontier, Leases, Routines, Signals, Checkpoints, Sentinels, Sketches
- Registrations use varying parameters: sdk, kv, secret, provider

## Concepts
- function registration pattern
- module imports
- dependency injection

## Files
- `/Volumes/AI/agentmemory/src/index.ts`

_Importance: 5 · Confidence: 1_
