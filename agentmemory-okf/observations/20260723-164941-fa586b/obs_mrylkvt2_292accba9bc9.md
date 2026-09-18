---
type: file_edit
title: Desktop UI Profile Pulse Updates (v1.0.0)
description: Troubleshooting and behavior for the Hermes Desktop profile rail "finished session" pulse indicator.
resource: agentmemory://observation/obs_mrylkvt2_292accba9bc9
tags: ["Herpes Agent", "Use Message Stream", "file_edit"]
timestamp: 2026-07-24T07:07:09.440268+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 8
confidence: 0.9
---
# Summary

Troubleshooting and behavior for the Hermes Desktop profile rail "finished session" pulse indicator have been updated in version 1.0.0:

## Facts
- Session state flow: Gateway sends `session.info` with `running: false` when turn finishes, triggering `setSessionWorking(storedSessionId, busy)`, which updates `$finishedSessionIds` and shows the profile-finished-pulse animation.

## Concepts
- Herpes Agent
- Use Message Stream

_Importance: 8 · Confidence: 0.9_
