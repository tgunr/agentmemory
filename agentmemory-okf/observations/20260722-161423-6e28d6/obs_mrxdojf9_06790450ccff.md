---
type: Observation
title: Merciful deprecation of gateway\_only commands
description: No change
resource: agentmemory://observation/obs_mrxdojf9_06790450ccff
tags: ["api fallback", "observation"]
timestamp: 2026-07-23T10:38:16.914962+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 4
confidence: 0.9
---
# Summary

This patch introduces an explicit deprecation for gateway\_only commands in the api/commands command. The previous logic exposed all commands, including those which never have been gateway\_only. In particular there are still cases where a 'fallback' solution could be provided to still allow webui use even if the system's command registry changes.

## Facts
- Command <code '/api/commands'</code> has been modified to preserve functionality via aliasing for older versions.
- Exposing gateway\_only commands has no longer had a detrimental effect on functionality if those same functionality is offered by an API fallback from webui or another integration point (in case of webui being unavailable).

## Concepts
- api fallback

## Files
- `/Users/davec/hermes-webui/api/commands.py`

_Importance: 4 · Confidence: 0.9_
