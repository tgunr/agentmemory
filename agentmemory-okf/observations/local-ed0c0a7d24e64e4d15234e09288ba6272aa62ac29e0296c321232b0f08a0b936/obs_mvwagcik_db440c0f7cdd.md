---
type: file_edit
title: matrix-ish traceback (last occurrence)
description: An error occurred while reading MATRIX_HOME_ROOM
resource: agentmemory://observation/obs_mvwagcik_db440c0f7cdd
tags: ["profile-scoping bug", "file_edit"]
timestamp: 2026-10-31T10:58:59.014614+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 7
confidence: 0.9
---
# Summary

The terminal output revealed an error while reading the MATRIX_HOME_ROOM. The error occurred due to an internal profile-scoping bug on the multiplexed gateway. A solution involves restarting the hermes gateway, and a report can be made using `hermes debug share` if the issue persists.

## Facts
- UnscopedSecretError: *** could not read this profile's MATRIX_HOME_ROOM (an internal profile-scoping bug on the multiplexed gateway, not your configuration). Run `hermes gateway restart`; if it keeps happening, report it with `hermes debug share`.

## Concepts
- profile-scoping bug

_Importance: 7 · Confidence: 0.9_
