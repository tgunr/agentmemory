---
type: FileRead
title: Checking Hermes plugins
description: Cron job information and osascript
resource: agentmemory://observation/obs_mvy3nv64_fe8fe9e6e09f
tags: ["osascript", "fileread"]
timestamp: 2026-11-01T17:24:24.843041+00:00
source: agentmemory
session_id: 20260928_073419_a59040
importance: 5
confidence: 0.9
---
# Summary

Observing the output of 'which command' to identify Hermes plugins, including the 'fast-jev' and 'image_gen' cron jobs.

## Facts
- ls ~/.hermes/plugins 2>/dev/null | grep fast-jev
- ls ~/.hermes/cron/scripts 2>/dev/null | grep image_gen

## Concepts
- osascript

## Files
- `~/.hermesPlugins`
- `~/.hermes/cron/scripts`

_Importance: 5 · Confidence: 0.9_
