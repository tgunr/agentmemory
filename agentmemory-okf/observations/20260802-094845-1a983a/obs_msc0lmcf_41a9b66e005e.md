---
type: CommandRun
title: Diagnose Hermes session-identity problems
description: Use when a user reports a mismatch between the profile they think they're on and what the session is doing
resource: agentmemory://observation/obs_msc0lmcf_41a9b66e005e
tags: ["Hermes profile debugging", "Session-identity problems in Hermes", "TUI windows and Hermes instances", "commandrun"]
timestamp: 2026-08-02T16:28:38.362869+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 8
confidence: 0.9
---
# Summary

When diagnosing session-identity problems in Hermes, it's crucial to establish ground truth by examining the running session's real profile, rather than relying on the user's claim, and to identify which instance the terminal window is bound to.

## Facts
- The user runs `hermes -p default` but the terminal window they're typing into is actually bound to a *different* instance.
- `~/.hermes/active_profile` holds the \"sticky\" default (e.g. `ai`) when no `-p` flag is given, and Hermes reads this for resolution order

## Concepts
- Hermes profile debugging
- Session-identity problems in Hermes
- TUI windows and Hermes instances

_Importance: 8 · Confidence: 0.9_
