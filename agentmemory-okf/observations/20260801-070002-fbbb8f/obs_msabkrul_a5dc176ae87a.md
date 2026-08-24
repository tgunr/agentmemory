---
type: FileRead
title: Inspecting the live Hermes desktop DOM
description: Detailed information about CDP protocol
resource: agentmemory://observation/obs_msabkrul_a5dc176ae87a
tags: ["React hooks", "fileread"]
timestamp: 2026-08-01T12:00:22.262356+00:00
source: agentmemory
session_id: 20260801_070002_fbbb8f
importance: 7
confidence: 0.9
---
# Summary

This skill reads the live Hermes desktop DOM/CSS over CDP, allowing users to inspect computed styles and geometry, as well as console output.

## Facts
- Curl command to check for available port: curl -s --max-time 3 http://127.0.0.1:${HERMES_DESKTOP_CDP_PORT:-9222}/json/version

## Concepts
- React hooks

## Files
- `/apps/desktop/scripts/eval.mjs`

_Importance: 7 · Confidence: 0.9_
