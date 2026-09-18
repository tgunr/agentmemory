---
type: file_write
title: Fix Pulse Logic for Profile Rails
description: No pulse for default profile when it has unfinished sessions
resource: agentmemory://observation/obs_mry04x6c_f072cc7854f9
tags: ["Pulse logic", "Render profile square and pill", "file_write"]
timestamp: 2026-07-23T21:06:52.781960+00:00
source: agentmemory
session_id: 20260723_062657_3335ae
importance: 7
confidence: 0.9
---
# Summary

Fixing the default profile pulse behavior so it highlights unfinished session. The issue arose from an incomplete pulse logic only wired to &#39;ProfileSquare&#39;. Ensuring that all profiles are represented with both icons fixed the display.

## Facts
- The issue occurred because the original pulse logic only wired &#39;ProfileSquare&#39;.
- Clearing finished sessions for profiles and pulses in attention sessions now fixes this.

## Concepts
- Pulse logic
- Render profile square and pill

## Files
- `/Users/davec/.hermes/skills/software-development/hermes-desktop/references/profile-rail-pulse.md`

_Importance: 7 · Confidence: 0.9_
