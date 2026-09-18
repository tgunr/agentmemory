---
type: CommandRun
title: Check state.db sizes across Hermes profiles
description: Investigating session store database sizes per profile and top-level
resource: agentmemory://observation/obs_mrq7dtws_213db55292a9
tags: ["Hermes profiles", "SQLite database size", "Session store", "BSD stat command", "commandrun"]
timestamp: 2026-07-18T10:07:36.361921+00:00
source: agentmemory
session_id: 20260717_190757_299949
importance: 4
confidence: 1
---
# Summary

Executed a shell command to measure the size of state.db files across multiple Hermes profiles and the top-level directory. The ai profile has a massive 166MB database, and the top-level state.db is 168MB, indicating significant session or history accumulation.

## Facts
- Checked state.db sizes in $HOME/.hermes/profiles/ for 9 profiles using stat -f%z (macOS/BSD)
- Largest profile DBs: ai (166MB), cc (28MB), pveroot (12MB)
- Top-level $HOME/.hermes/state.db is 168MB
- default profile state.db is 0 bytes

## Concepts
- Hermes profiles
- SQLite database size
- Session store
- BSD stat command

## Files
- `$HOME/.hermes/state.db`
- `$HOME/.hermes/profiles/ai/state.db`
- `$HOME/.hermes/profiles/cc/state.db`
- `$HOME/.hermes/profiles/pveroot/state.db`

_Importance: 4 · Confidence: 1_
