---
type: file_edit
title: Hermes Desktop UI Session Recovery Guidance
description: Post-Desktop restart session recovery instructions
resource: agentmemory://observation/obs_mrw4aatu_c7ea19f2a994
tags: ["session recovery", "file_edit"]
timestamp: 2026-07-22T13:27:29.870299+00:00
source: agentmemory
session_id: 20260722_082139_2ee6a2
importance: 6
confidence: 0.9
---
# Summary

The Hermes Desktop UI Session Recovery Guidance provides instructions to recover missing sessions. Check the root store and active profiles for a solution.

## Facts
- The canonical store is still `~/.hermes/state.db` even after a desktop restart/freeze/reboot.
- Profiles may split session history across multiple `state.db` files, so verify the active profile's store.

## Concepts
- session recovery

## Files
- `/Users/davec/.hermes/state.db`
- `/Users/davec/.hermes/profiles/<name>/state.db`

_Importance: 6 · Confidence: 0.9_
