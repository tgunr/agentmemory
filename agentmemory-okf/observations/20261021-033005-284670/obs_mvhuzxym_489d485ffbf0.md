---
type: file_edit
title: Supervisor wrapper pitfall
description: Skill edit pitfall
resource: agentmemory://observation/obs_mvhuzxym_489d485ffbf0
tags: ["launchd KeepAlive", "file_edit"]
timestamp: 2026-10-21T08:37:32.968968+00:00
source: agentmemory
session_id: 20261021_033005_284670
importance: 7
confidence: 0.9
---
# Summary

The skill edit pitfall involves a specific issue with launching the gateway and killing the wrong process.

## Facts
- launches a subprocess the gateway process and spawns the wrapper, not the gateway

## Concepts
- launchd KeepAlive

## Files
- `/Users/davec/.hermes/skills/configuration/hermes-gateway-control/references/supervisor-wrapper-pitfall.md`

_Importance: 7 · Confidence: 0.9_
